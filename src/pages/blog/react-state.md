---
title: 'ما هي الحالة "state" في رياكت؟'
layout: "@layouts/blog.astro"
image: /images/structured-data.jpg
link: /blog/structure-data/
date: '2023/01/01'
draft: true
desc: 'ماهي البيانات المنظّمة، وكيف تستفيد منها لمساعدة موقعك'
keyword: ["Content"]
tags: ["React", "JavaScript"]
---

الحالة (state)[^1]،
من الفاهيم الأساسية في رياكت...

في ظاهر يبدو أن مفهوم state 
في رياكت سهلًا، لكن ليس تمامًا، في هذه التدوينة سوف أوضح
فلسفة رياكت في التعامل مع الحالة


## الحالة في رياكت
يصف توثيق رياكت `beta.reactjs.org` الرسمي
الحالة على أنها 
**ذاكرة المكون في رياكت**:


<div lang="ar" dir="rtl">

>   **الحالة: ذاكرة المكون**<br/>
> المكون عادةً مايحتاج إلى تغير ما يعرض على الشاشة حينما يتفاعل المستخدم معه.<br/>
> فمثلًا، حينما يكتب المستخدم هذا يسبب تغير
> في حقل الإدخال، وحينما يضغط على زر "التالي" في 
> مجموعة صور معروضة (image carousel)،
> يجب أن تتغير الصورة المعروضة إلى الصورة الأخرى، 
> وحين الضغط على "أشتري" يُضاف المنتج إلى العربة.
> المكونات بحاجة إلى أن "تتذكر" الأشياء، مثل المدخل الحالي في حقل الإدخال، والصورة الحالية، وما هو في عربة التسوق.<br/>
> وفي رياكت، نطلق اسم "الحالة" على هذه الذاكرة المخصصة للعنصر .
><br/> — [توثيق رياكت](https://beta.reactjs.org/learn/state-a-components-memory)

</div>

النص الأصلي:

<div lang="en">

> **State: A Component's Memory**<br/>
> Components often need to change what’s on the screen as a result of an interaction.
> Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” should put a product in the shopping cart.<br/>
> Components need to “remember” things: the current input value, the current image, the shopping cart.<br/> In React, this kind of component-specific memory is called state.
><br/> — [React Docs](https://beta.reactjs.org/learn/state-a-components-memory)

</div>

## ملحوظات

[^1]: على الأرجع، أن مصطلح "الحالة"، مأخؤذ من [Machine State](https://swr.vercel.app/docs/advanced/understanding#state-machine).
