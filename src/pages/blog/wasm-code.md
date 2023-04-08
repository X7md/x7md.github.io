---
title: "كيف تعمل ويب أسمبلي؟"
layout: "@layouts/blog.astro"
image: /images/webassembly.jpg
link: /blog/in-deep-webassembly-(simplify)
draft: true
date: '2023/04/08'
about: {
    "@type": ["Thing", "SoftwareApplication"],
    "applicationSubCategory": "https://www.wikidata.org/wiki/Q837330",
    "applicationCategory": "DeveloperApplication",
    "name": "WebAssembly",
    alternateName: ["ويب أسمبلي", "تجميع الويب"], 
    description: "شفرة بايت مفتوحة المصدر، تعمل على المتصفحات أو على بيئة تشغيل ويب اسمبلي",
    url: "https://webassembly.org/",
    "offers": {
        "@type": "Offer",
        "price": "0"
    },
    review: {
        {
      "@type": "Review",
      "author": {
        "@id": "https://x7md.net/about-me/#identity"
      },
      "reviewRating": {
        "@type": "Rating",
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
        }
      }
    },
    }
}
# dateModified: '2022/05/02'
desc: 'مثال لبرنامج "Hello World" باستخدام ويب اسمبلي.'
keyword: ["wasm", "WebAssembly"]
tags: ["WebAssembly"]
---

في [تدوينة سابقة](/blog/webassmbly) سبق وأن قمت بشرح مبسط لويب أسمبلي... وفي هذه التدوينة القصيرة سأشرح كيف تعمل ويب بأسمبلي بشكل مبسط.

## كيف يتم تنفيذ ويب أسمبلي؟
> سنقوم بهندسة عكسية بسيطة، لكود ويب اسمبلي مُترجم من c.
> وسنقوم بمحاولة فهمه عبر استخدام أدوات [WebAssembly Binary Toolkit (WABT)](https://github.com/WebAssembly/wabt/releases).
> <br /> تستطيع تحميلها لتقوم بتجربة الأمر بنفسك، وأيضًا سوف نستخدم أداة [hexyl](https://github.com/sharkdp/hexyl) لإستعراض ملفات الباينري.

حينما نحول كود `c`:
```c
int main() { 
  return "Hello World";
}
```

كما نعرف، ملفات `wasm` عبارة عن ملف باينري `binary file`
فيه شفرة التعليمات التي سوف يتم تنفيذها...

دعونا نستكشف أكود ملف `demo.wasm`:
```asm
asm``wasi_unstablefd_writememory_start
AA6AA6AAAAAhello world
```

جميل جدًا، لا يوجد شيء مفهوم لأنك تستعرض صيغة باينري على شكل نصوص، لذلك هذا الناتج المتوقع من ملف باينري إذًا دعونا نجرب 
عرض البيانات على شكل صيغة hexadecimal رقمية عبر أداة `hexyl`:

```powershell
PS C:\Users\x7md\Downloads> C:\hexyl\hexyl.exe .\demo.wasm
┌────────┬─────────────────────────┬─────────────────────────┬────────┬────────┐
│00000000│ 00 61 73 6d 01 00 00 00 ┊ 01 0c 02 60 04 7f 7f 7f │⋄asm•⋄⋄⋄┊•_•`••••│
│00000010│ 7f 01 7f 60 00 00 02 1a ┊ 01 0d 77 61 73 69 5f 75 │•••`⋄⋄••┊•_wasi_u│
│00000020│ 6e 73 74 61 62 6c 65 08 ┊ 66 64 5f 77 72 69 74 65 │nstable•┊fd_write│
│00000030│ 00 00 03 02 01 01 05 03 ┊ 01 00 01 07 13 02 06 6d │⋄⋄••••••┊•⋄•••••m│
│00000040│ 65 6d 6f 72 79 02 00 06 ┊ 5f 73 74 61 72 74 00 01 │emory•⋄•┊_start⋄•│
│00000050│ 0a 1d 01 1b 00 41 00 41 ┊ 08 36 02 00 41 04 41 0c │_•••⋄A⋄A┊•6•⋄A•A_│
│00000060│ 36 02 00 41 01 41 00 41 ┊ 01 41 14 10 00 1a 0b 0b │6•⋄A•A⋄A┊•A••⋄•••│
│00000070│ 12 01 00 41 08 0b 0c 68 ┊ 65 6c 6c 6f 20 77 6f 72 │••⋄A••_h┊ello wor│
│00000080│ 6c 64 0a                ┊                         │ld_     ┊        │
└────────┴─────────────────────────┴─────────────────────────┴────────┴────────┘
```
جميل، دعونا نركز على القيم الست عشرية ونضعها في مصفوفة...

> ملحوظة: في جافاسكربت نستطيع استخدام البادئة `0x` لكتابة الأرقام بنظام العد الست عشري.

```js
const wasmByteCodeAsHex = [0x00, 0x61, 0x73, 0x6d, 0x01, 0x00,
    0x00, 0x00, 0x7f, 0x01, 0x7f, 0x60,
    0x00, 0x00, 0x02, 0x1a, 0x6e, 0x73,
    0x74, 0x61, 0x62, 0x6c, 0x65, 0x08,
    0x00, 0x00, 0x03, 0x02, 0x01, 0x01,
    0x05, 0x03, 0x65, 0x6d, 0x6f, 0x72,
    0x79, 0x02, 0x00, 0x06, 0x0a, 0x1d,
    0x01, 0x1b, 0x00, 0x41, 0x00, 0x41,
    0x36, 0x02, 0x00, 0x41, 0x01, 0x41,
    0x00, 0x41, 0x12, 0x01, 0x00, 0x41,
    0x08, 0x0b, 0x0c, 0x68, 0x6c, 0x64,
    0x0a, 0x01, 0x0c, 0x02, 0x60, 0x04,
    0x7f, 0x7f, 0x7f, 0x01, 0x0d, 0x77,
    0x61, 0x73, 0x69, 0x5f, 0x75, 0x66,
    0x64, 0x5f, 0x77, 0x72, 0x69, 0x74,
    0x65, 0x01, 0x00, 0x01, 0x07, 0x13,
    0x02, 0x06, 0x6d, 0x5f, 0x73, 0x74,
    0x61, 0x72, 0x74, 0x00, 0x01, 0x08,
    0x36, 0x02, 0x00, 0x41, 0x04, 0x41,
    0x0c, 0x01, 0x41, 0x14, 0x10, 0x00,
    0x1a, 0x0b, 0x0b, 0x65, 0x6c, 0x6c,
    0x6f, 0x20, 0x77, 0x6f, 0x72]
```

حسنًا دعونا نبدأ بأول أربع خانات في مصفوفتنا من الأرقام الست عشرية...
بحسب معايير ويب أسمبلي تعبر أول أربع خانات من ملف باينري ويب أسمبلي عن
الرقم السحري [(The magic number)](https://webassembly.github.io/spec/core/binary/modules.html#binary-module)، عبارة عن `null-terminated string` تليه ثلاث أحرف `asm`.

نستطيع التأكد من ذلك بتحويل الأرقام الست عشرية إلى نص عبر جافاسكربت من خلال `TextDecoder`:
```js
> new TextDecoder().decode(new Uint8Array([0x00, 0x61, 0x73, 0x6d]))
'\x00asm'
```
وتليها أربع خانات أخرى وهي معلومات إصدار ويب اسمبلي مكتوبة على هيئة `little-endian 32-bit int`
دعونا نستعرضها:

```js
> // Converting 32-bit unsigned little endian to integer in javascript
> // https://stackoverflow.com/a/38594231
> const hexToBuffer = new Uint8Array([0x01, 0x00, 0x00, 0x00]).buffer
> //(Webassmbly Version) as little-endian 32-bit int
> new Uint32Array(hexToBuffer)[0]
1
```

ويمكن استخدام هذه البيانات الموجودة في بداية الملف لتهيئة البيئة المناسبة لتشغيله أو للتأكد من أن الملف هو وحدة ويب أسمبلي.

ويلي هذه الثمان خانات في مصفوفة أقسام تمثل وحدة ويب أسمبلي:

![وحدات ويب أسمبلي، من صفحة المواصفات والمعايير (Webassembly Spec)](/images/wasm-sections.png)

دعونا نستخدام أحد أدوات `WABT`
لنحول صيغة الباينري إلى صيغة نصية `wat`.
ونستعرض الأقسام:

```powershell
PS C:\Users\x7md\Downloads> .\wabt-1.0.32-windows\wabt-1.0.32\bin\wasm2wat.exe .\demo.wasm
```
```
(module
  (type (;0;) (func (param i32 i32 i32 i32) (result i32)))
  (type (;1;) (func))
  (import "wasi_unstable" "fd_write" (func (;0;) (type 0)))
  (func (;1;) (type 1)
    i32.const 0
    i32.const 8
    i32.store
    i32.const 4
    i32.const 12
    i32.store
    i32.const 1
    i32.const 0
    i32.const 1
    i32.const 20
    call 0
    drop)
  (memory (;0;) 1)
  (export "memory" (memory 0))
  (export "_start" (func 1))
  (data (;0;) (i32.const 8) "hello world\0a"))
```