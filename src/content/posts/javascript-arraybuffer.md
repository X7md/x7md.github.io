---
title: "نظرة على Memory inspector في كروم و ArrayBuffer في جافاسكربت."
pubDate: '2023/06/03'
description: 'نظرة سريعة على نوع البيانات ArrayBuffer في جافاسكربت.'
draft: false
---

> هذه التدوينة دسمة، تحوي مفاهيم منخفضة المستوى لا يسهل فهمها أو رؤية الفائدة منها على المبدئين.

كمبرمج ويب، أنت لا تتعامل مع مفاهيم منخفضة المستوى يشمل ذلك التعامل مع البيانات في الذاكرة.

لكن أحيانًا قد تحتاج وتضطر في حالات نادرة لفعل ذلك... جافاسكربت توفر لك طريقة لتتعامل مع هذه الحالات وذلك عبر `ArrayBuffer`.

## ماذا يعني `ArrayBuffer`؟

ببساطة هي مصفوفة، مثل أي مصفوفة جافاسكربت عادية، بإستثناء أنك لن تستطيع أن تضع
داخلها قيم جافاسكربت عادية، مثل النصوص `strings`، والكائنات `objects`، وغير ذلك...
بل ستضع بيانات على هيئة بايت **"bytes"** أي ببساطة مجرد أرقام.

![رسمة توضيحية تبين الفرق بين Array عادية وArrayBuffer, من رسم الفنانة Lin Clark](https://hacks.mozilla.org/wp-content/uploads/2017/06/02_03-768x580.png)

<div lang="en">

> It’s basically like working with any other JavaScript array. Except, when using an ArrayBuffer, you can’t put any JavaScript types into it, like objects or strings. The only thing that you can put into it are bytes (which you can represent using numbers).<br />
—  [hacks mozilla](https://hacks.mozilla.org/2017/06/a-cartoon-intro-to-arraybuffers-and-sharedarraybuffers/)
</div>

### TypedArray في جافاسكربت
بما أن التعامل مع البيانات في هيئة باينري `(0,1)` صعب، توفر جافاسكربت عدة طرق للتعامل معها وعرضها... 
يشار إليها باسم `TypedArray`، ليس هناك كائن يسمى `TypedArray` في جافاسكربت، لكن 
يوجد عدد من الكائنات الأخرى التي تمثل بحد ذاتها نوعًا للـ `TypedArray` 
من أجل عنصر معين.

![رسم بياني، يوضح المغزى من TypedArray، الصورة من كتاب exploringjs](https://2ality.com/2015/09/typed-arrays/typed_arrays_class_diagram.jpg)

![رسم يوضح كيف يمكن لـ TypedArray تغير طريقة عرض ArrayBuffer، مصدر الصورة (javascript.info)](https://javascript.info/article/arraybuffer-binary-arrays/arraybuffer-views.svg)

<div lang="en">

> A TypedArray object describes an array-like view of an underlying binary data buffer. There is no global property named TypedArray, nor is there a directly visible TypedArray constructor. Instead, there are a number of different global properties, whose values are typed array constructors for specific element types <br />
—  [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)

</div>

## النوع Uint8Array

> 8-بت (`8-bits`) هو حجم شائع في الحوسبة، حتى أنه يحمل اسمًا خاصًا وهو **"بايت"** (`byte`). <br/>
— [Carrie Anne](https://youtu.be/1GSjbWt0c9M?t=226)

يمثل النوع `Uint8Array` ما يسمى في علوم الحاسوب بـ `8-bit unsigned integer`
أي عددٌ صحيح من 8-بت دون إشارة (لا موجبة ولا سالبة).

لا يزال `Uint8Array` في جوهره مجرد `ArrayBuffer`.

> جميع الكائنات التي تمثل `TypedArray` تحمل خاصية `BYTES_PER_ELEMENT` 
والتي ترجع عدد "البايت" التي يستطيع النوع أن يحتويها لكل عنصر بالمصفوفة.

كبداية لنجرب `Uint8Array constructor` 
ونرى ماذا ترجع لنا الخاصية `BYTES_PER_ELEMENT`؟

```js:JS
new Uint8Array().BYTES_PER_ELEMENT 
// 1
```


كل عنصر في `Uint8Array`  يمكنه أن يحمل رقمًا لا يتعدى حجمه **`1 Byte`**، 
أي أن الرقم لن يعدى 256، وفي علوم الحاسوب بما أننا نبدأ 
العد من 0 غالبًا، هذا يعني أن العدد لن يتعدى 255.

لأن أقصى قيمة يمكن للـ `8-bit unsigned integer` تخزينها عبارة عن عدد قيمته تبدأ من 0 ولا تتعدى 255.

### تجربة عملية
كثرة الكلام النظري يُضيع ويشتت، لذلك دعونا نجري تجربة!
سنقوم بكتابة ملف بشكل يدوي، بايت بـ بايت!

سنقوم بكتابة ملف صورة بصيغة `gif87` من الصفر.

![رسم توضيحي، لهيكل ملف GIF في الذاكرة](https://raw.githubusercontent.com/corkami/pics/master/binary/GIF.png)


```js:JS
/*magic number (GIF), and version (87a)*/
const GIFHeader =
    ["G".charCodeAt(), "I".charCodeAt(), "F".charCodeAt(), 
    "8".charCodeAt(), "7".charCodeAt(), "a".charCodeAt()];

/* width (1), height (1), flags (), color table*/
const GIFLocalScreenDescriptor =
        [0x1, 0x0, 0x1, 0x0,
        0x80, 0x1, 0x0, 0x00,
        0x00, 0xff, 0x0, 0x0,
        0x0];

/*separator, width (1), height (1),
min bits per LZW code, block size,
block data, block end.
*/
const GIFImageDescriptor = 
    [0x2c, 0x0, 0x0, 0x0,
    0x0, 0x1, 0x0, 0x1, 
    0x0, 0x0, 0x2, 0x2, 
    0x44, 0x1, 0x0]

/* teailer */
const GIFTeailer = 
    [0x3b]

const GIF_File = 
    new File(
        [new Uint8Array(
            [...GIFHeader,
            ...GIFLocalScreenDescriptor,
            ...GIFImageDescriptor,
            ...GIFTeailer
            ])
        ], "file.gif", 
        {type: "image/gif"}
        )
```
في الكود أعلاه  قمنا بإنشاء ملف صورة `gif`
بالإعتماد على كتابة كل بايت يدويًا:

صورة بحجم 1 بكسل
ذات لون أزرق `#0000ff`

حيث قمنا بإنشاء مصفوفة أرقام عادية تحوي على بيانات الملف
بحسب هيكلة صيغة `gif`، بعد ذلك جمعناها في `Uint8Array`.

```js:JS
new Uint8Array(
            [...GIFHeader,
            ...GIFLocalScreenDescriptor,
            ...GIFImageDescriptor,
            ...GIFTeailer
            ])
```
وبعد ذلك مررناها دخل `File constructor`:

```js:js
const GIF_File =
new File([/* Bytes */], "file.gif", {type: "image/gif"})
```

الآن نستطيع تحويل هذا الملف الذي حصلنا عليه إلى رابط عبر استخدام `URL.createObjectURL()`.

```js:JS
const url_of_file = URL.createObjectURL(GIF_File);
```

الآن لديك رابط الصورة وتستطيع استخدامها.

![تجربة عملية، عبر استخدام ملف GIF لتغيير خلفية الصفحة](/images/gif-bytes-to-css-background.png)

## تحليل بيانات ArrayBuffer عبر Memory inspector
في متصفح قوقل كروم تستطيع تحليل `Arraybuffer` في حال قمت بطباعتها في الطرفية
ستظهر أيقونة ذاكرة رمادية... وبمجرد الضغط عليها يستم نقلك إلى Memory inspector


![Memory inspector لبيانات ملف الصورة gif](/images/memory_inspector_gif.png)

## الخلاصة
`ArrayBuffer` هو نوع بيانات يتيح لك التعامل مع البيانات في مستوى منخفض، تستطيع من خلاله التعامل مع أي نوع بيانات تقريبًا والتعامل معه بشكل مرن للإستخدامات المتقدمة والمعقدة.

يوفر Chrome تجربة جيدة لفحص وتحليل الأشكالية عند التعامل مع `ArrayBuffer` عبر خاصية Memory inspector.

### طالع أكثر

- [exploringjs book, Typed Arrays](https://exploringjs.com/es6/ch_typed-arrays.html)
- [1x1 black and white images - Github](https://github.com/make-github-pseudonymous-again/pixels)
- [A cartoon intro to ArrayBuffers and SharedArrayBuffers - MDN](https://hacks.mozilla.org/2017/06/a-cartoon-intro-to-arraybuffers-and-sharedarraybuffers/)
- [Representing Numbers and Letters with Binary: Crash Course Computer Science - YouTube](https://youtu.be/1GSjbWt0c9M)
- [PNG File Structure - Mustafa Alesayi](https://www.youtube.com/watch?v=sUiOy0iI9G8)
- [W3C spec-gif87](https://www.w3.org/Graphics/GIF/spec-gif87.txt)
- [Why wrap Uint8Array through an Array, in (File/ Blob) constructor](https://stackoverflow.com/a/49554626)