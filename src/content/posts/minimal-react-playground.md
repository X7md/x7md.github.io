---
title: 'تجهيز بيئة رياكت بأقل المتطلبات'
image: /images/minimal-react-playground.jpg
pubDate: '2023/11/22'
draft: false
description: 'أسهل طريقة لتجهيز بيئة رياكت مبسطة، للتجارب'
keyword: ["JavaScript", "React JS"]
tags: ["React", "JavaScript"]
---
> هذه التدوينة مستلهمة من تدوينة للدكتور (Axel Rauschmayer) **أكسل راوشماير** 
 [2ality - minimal-react](https://2ality.com/2020/08/minimal-react.html)

أحد الأمور التي تجعل تعلم رياكت مرهقًا هو تجهيز بيئة عملها، المشكلة أن العديد من الكورسات على الأنترنت تقوم مباشرة بالعمل على بيئة عمل مجهزة مسبقًا 
"starter template"، عبر استخدام أمور مثل 
```sh
npx create-react-app
```
أو 

```sh
npm create vite@latest react-app -- --template react
```

وهذا الأمر قد يجعل المبتدئين مرتبكين بعض الشيء، لماذا أحتاج كل هذا العناء
لتجهيز بيئة رياكت، أليست سوى مكتبة للواجهات الأمامية؟

## تجهيز البيئة بأقل المتطلبات
لفهم رياكت بشكل أفضل، عليك أن تفهم ماذا يحدث خلف ستار البيئات المجهزة مسبقًا...
مثل `create-react-app` و `npm create vite@latest`
### المكتبة react
مكتبة رياكت هي التي تقوم بإنشاء
شجرة العناصر الإفتراضية في رياكت، والمسؤولة عن المفاهيم الأساسية في رياكت كالـHooks مثلًا... 
وإعادة التصيير "re-render".

### المكتبة react-dom
هي المكتبة المسؤولة عن تحويل شجرة العناصر التي تقوم رياكت بتوليدها إلى
عناصر DOM يستطيع المتصفح فهمها وعرضها على الصفحة.

### محول أكواد JSX

زيادةً على تلك المكتبتين ستجد ما يسمى بـ "transcompiler" وهي طريقة في ترجمة بعض الأكواد الخاصة مثل JSX إلى JavaScript عادية، لأن JSX لا يفهمه المتصفح.


تخفي عنك البيئات المجهزة مسبقًا هذا الشيء، حيث ستجد أن
كل من `react` و `react-dom` موجودة مسبقًا بالإضافة إلى محول للأكواد.
## رياكت على المتصفح مباشرة!
الكود أدناه سيقوم بتشغيل تطبيق رياكت بسيط مباشرة على المتصفح دون الحاجة لبيئة عمل.
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module">
      import React, {useState} from "https://esm.sh/react@18.2.0"
      import ReactDOM from "https://esm.sh/react-dom@18.2.0"
      import htm from "https://esm.sh/htm"

      const html = htm.bind(React.createElement);
      const ButtonCounter = ()=> {
        const [count, setCount] = useState(0);
        return html`<button 
        onClick=${()=> {setCount(state => state +1)}}>
          Click: ${count}
        </button>`
      }
      ReactDOM.render(html`<${ButtonCounter}/>`, document.getElementById("root"));
    </script>
  </body>
</html>
```
## ماهو `htm`؟
في الكود أعلاه ستجد 
```js "htm"1
import htm from "https://esm.sh/htm"
```
و
```js "htm"2
const html = htm.bind(React.createElement);
```

حسنًا هذه مكتبة من تطوير
[جايسون ميلر](https://github.com/developit)
وهو مبرمج عمل سابقًا في شركة قوقل... وصاحب مكتبة تحمل اسم `preact`.

هدف `htm` هو توفير طريقة لكتابة أكواد مشابهة لـ JSX دون الحاجة إلى transcompiler
حيث ستقوم `htm` بهذه العملية في المتصفح.

عبر تحويل ما تكتبه في 
[template string literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) 
إلى 
[`React.createElement`](https://legacy.reactjs.org/docs/react-without-jsx.html)

## الخلاصة 
من خلال هذه المعلومة ستعرف أنك لست بحاجة حقًا إلى بيئة عمل معقدة وأنت في بداية مشوارك بتعلم رياكت، أو في حال أردت اللعب على عجل (playaround) على رياكت لتجربة فكرة معينة.
