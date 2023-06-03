---
title: 'نصائح لمطور رياكت'
image: /images/react-tips.jpg
pubDate: '2023/03/13'
draft: false
description: 'مجموعة نصائح لمطوري رياكت جي أس الجدد'
keyword: ["JavaScript", "React JS"]
about: {
    "@type": ["Thing", "SoftwareApplication"],
    "applicationSubCategory": "https://www.wikidata.org/wiki/Q783866",
    "applicationCategory": "DeveloperApplication",
    "name": "React JS",
    alternateName: ["React.JS", "رياكت", "رياكت جي اس"], 
    description: "إطار عمل جافاسكربت، لبناء واجهات مستخدم تفاعلية",
    url: "https://ar.reactjs.org/",
    "offers": {
        "@type": "Offer",
        "price": "0"
    }
}
tags: ["React", "JavaScript"]
---

حظيتُ مؤخرًا بفرصة عمل كمطور واجهات أمامية في مشروع ناشئ، كان العمل عن بعد، أكملت
حوالي نصف عام، وأظن الآن أني أستطيع أعطاء بعض النصائح لمبرمجي `ReactJS` الجدد الذين يودون استخدام رياكت.

## أفهم أساسيات رياكت
أفهم أساسيات رياكت بشكل جيد، فهمك لأساسيات رياكت يجعل حياتك أسهل بكثير، من المفترض عند تعلمك لرياكت فأنت تتعلم مفاهيم جديدة مختلفة عن تلك التي في تطوير صفحات الويب العادية.

### الفكرة الأساسية من رياكت
يكمُل جوهر رياكت، بالسماح للمبرمجين بوصف واجهة المستخدم على شكل دالة (function) تلك الدالة تُمثل السناريو الحالي لواجهة المستخدم، <br />
ومن ثم يأتي العبء على المبرمج أن عليه وصف مايجب أن يحدث من تغيرات بإستخدام القيم العادية التي توفرها جافاسكربت، أمور مثل: الأرقام `numbers`، النصوص `strings`، المصفوفات `arrays`، الكائنات `objects`، وأيضًا استخدام تعابير جافاسكربت المتعارف عليها مثل العبارات الشرطية `if/else`، جمل التكرار `for` وما إلى ذلك.

<div lang="en">

>The core idea of React is that developers define their UI as a function of the current state. You work with plain JavaScript values — numbers, strings, arrays, objects — and use standard JavaScript idioms — if/else, for, etc — to describe your component logic.
> <br /> — [React blog](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023)

</div>

### طبيعة رياكت
رياكت تركز على مفهوم يسمى **"التصيير من جهة العميل" (Client Side Rendering)**
فهمك لهذا الأمر يجعلك تفكر بشكل جيد أنك تتعامل مع مكونات تعمل يتم إنشائها بينما يتم تحميل الصفحة على متصفح المستخدم، لذلك وجب عليك أخذ هذا في الحسبان

غالبًا في رياكت أن تبرمج نوعًا من تطبيقات الويب يدعى **"تطبيقات الصفحة الواحدة" (SPA)**
تذكر أنك لست تتعامل مع عدة صفحات، 
فعند رفع مشروعك إلى أي استضافة عليك ضبط إعدادات السيرفر بنفسك لهذا النوع من المواقع، او التوجه لإستضافات تقوم بضبط هذه الإعدادات بشكل مسبق مثل `Netlify`، `Vercel`، `Cloudflare Pages` حيث ستحصل على الإعدادات المناسبة لـ SPA بضغطة زر فحسب.

يتسرع العديد من الأشخاص في عدم 
أخذ هذا الأمر على محمل الجد، مما يؤدي إلى تأخير في إطلاق الموقع حين إدراك هذه المشكلة.

ومؤخرًا أصبح فريق رياكت لا يُفضل بناء الموقع بشكل كامل على أساس **"التصيير من جهة العميل" (Client Side Rendering)**[^0]، بل يحبذ البدأ بحلول أخرى لتصيير صفحة الويب 
**من جانب الخادم (Server Side Rendering)** وذلك لتقديم تجربة مستخدم أفضل.

### نمط البرمجة التصريحي
![رسمة تعبر عن كيف هي البرمجة الأمرية (Imperative Programming)، للفنانة Rachel Lee Nabors](https://react.dev/images/docs/illustrations/i_imperative-ui-programming.png)

البرمجة التصريحية (Declarative Programming)، هو المفهوم الأساسي الذي تركز عليه رياكت على خلاف البرمجة الأمرية (Imperative Programming) المعتادة حينما تبرمج عبر جافاسكربت بطريقة عادية.

**البرمجة الأمرية في جافاسكربت العادية:**
```js
function makeBox(){
    const box = document.createElement("div")
    const button = document.createElement("button")
    const changeBackground = () => box.style.background = "red"
    button.onclick = ()=> changeBackground()
    box.appendChild(button)
    button.innerText = "Change the backround of box"
    return box
}
```

**البرمجة التصريحية في رياكت عبر JSX:**
```jsx
const Box = () => {
    const boxRef = useRef(null);
    const changeBackground = ()=> boxRef.current.style.background = "red";
    return (
        <div ref={boxRef}>
            <button onClick={changeBackground}>
                Change the backround of box
            </button>
        </div>
    );
}

```

![رسمة تعبر عن كيف هي البرمجة التصريحية (Declarative Programming)، للفنانة Rachel Lee Nabors](https://react.dev/images/docs/illustrations/i_declarative-ui-programming.png)

تذكر أن البرمجة التصرحية لا تعني أنك ستكتب عدد سطور أقل دومًا... ولكنها تعني أن الكود
سيكون واضح بشكل مباشر دون التعمق في قراءته، كما هو موضح في المثال أعلاه تقريبًا كل من
رياكت وجافاسكربت العادية تحمل نفس عدد الأسطر، الفرق أن كود رياكت أسهل من ناحية القراءة والفهم.


للأسف الكثير من **(الكورسات)** في الأنترنت تقول لك أن رياكت وغيرها تجعلك تكتب كود أقل
حسنًا هذا الأمر **ليس حقًا صحيح 100%** فالفكرة من إطر العمل خاصة أطر عمل الواجهات (UI Frameworks) 
هو جعل الكود أكثر وضوحًا وسهولة وقابل للصيانة (Maintainable)،
وبالإمكان إعادة استخدامه (Reusable)،
وليس تقليل حجم الكود المكتوب بالضرورة.

### خطط جيدًا لإدارة الحالة
إدارة الحالة (State Management) في رياكت، تعد أكثر المفاهيم الصعبة والمعقدة نوعًا ما...
تظهر هذه المشكلة جليًا حينما تقوم بفصل المكونات (components) حيث ستحتاج إلى 
حل لتبادل البيانات بين عدة مكونات أو أكثر.

![رسم توضيحي لشجرة المكونات في رياكت](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpreserving_state_dom_tree.png&w=1920&q=75)

![مخطط بياني لتدفق البيانات في React Flux، الطريقة المستحسنة من قبل فريق رياكت لإدارة تدفق البيانات](https://legacy.reactjs.org/static/b4643456a3de61c8352415a6fc171876/78612/flux-diagram.png)

وأقتبس ما قاله "هادي حريري" وهو مهندس برمجيات في شركة JetBrains في نقاش عن مسألة التعقيد في هندسة البرمجيات:

**وحينها جاءت رياكت جي أس، مع هيكلة فلسك (Flux[^1]) تلك في رياكت، معها ذلك الرسم البياني المتداخل، وأنت تتسأل 
"لماذا؟ حقًا، لماذا علي فهم كل هذا، حقًا؟ لماذا؟"، أعني ما كان أسهل علي أن أستوعب لغة الآلة. حقًا
لقد كان كود آلة `68000 Motorola` أسهل من البرمجة باستخدام رياكت. لازلت لا أفهم. حقًا لست أفهم، أظن أننا فقط نحب التعقيدات.**
<div lang="en">

> And then React JS came about, and then there was this flux architecture of React JS, which is this massive diagram of all of these parts. <br/> And you're like, "Why? Like, why do I need to understand all of this, right? Why?" I mean, it was easier to understand machine code. Seriously, the 68000 Motorola... easier than programming with the React JS. I don't get it. I really don't. I think we just...like we enjoy complexity. 
> <br/> — [Hadi Hariri](https://youtu.be/P7CfWtR-ECk?t=2117)

</div>

![رسم توضيحي لألية إدارة الحالة الافتراضية في رياكت، عبر تمرير Props بين المكونات](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpassing_data_prop_drilling.png&w=1920&q=75)

![رسم توضيحي لآلية عمل useContext Hook لإدارة تدفق البيانات، دون الحاجة لتمرير Props بين المكونات](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpassing_data_context_far.png&w=1920&q=75)

في حال كنت تبي تطبيقًا معقدًا، كلوحة تحكم (Dashbord) مثلًا، عليك أن تخطط جيدًا لتدفق البيانات...
خاصةً فيما يتعلق بأمور صلاحيات المستخدمين وبيانات تسجيل الدخول وحتى نظام الإشعارات إن وجد.

## أبني مكونات، وليس قوالب!
يصعب على الشخص المبتدئ في رياكت أستيعاب وفهم هذه النصيحة،
وقد ذكرها **pete hunt** في مؤتمر JSConf ES 2013 في بداية لقاء: 
إعادة التفكير في الممارسات الحسنة (Rethinking best practices).


<div lang="en">

> Building components not templates
> <br/> — [Pete Hunt](https://youtu.be/x7cQ3mrcKaY?t=128)

</div>

حيث وضح وجهة نظره قائلًا: **لو مر عليك "مبدأ المهمة الواحدة" (Single Responsibility Principle)[^2]،
هذا المبدأ ببساطة يجعلك تقوم بوضع كل الوظائف ذت العلاقة في وحدات منفصلة دون وضع أي شيء إضافي غير مرغوب.
<br>
سوف تستشعر هذا الأمر حينما تقوم بتجربة النظر إلى صنف (Class) أو دالة (Function) وتبدو
منطقية، أو أنها تفعل العديد من المهام وبمقدورك أن تقوم بإعادة كتابتها وفصلها إلى أجزاء أخرى.**

<div lang="en">

> If you've heard of the single responsibility principle, basically grouping related functionality into modules and not putting extra crap in there.<br/>
You know the kind of the witness' test is like does this class make sense or does this function make sense or is it doing a lot of stuff and can you refactor it into other pieces.
> <br/> — [Pete Hunt](https://youtu.be/x7cQ3mrcKaY?t=163)

</div>

البناء على أساس مكونات، هو قرار تصميمي "Design Decision[^3]" أي أنه يجب أن تخطط على هذا 
الأساس منذ بدايتك في كتابة الكود، حسنًا ليس حقًا أن تخطط بكل معنى الكلمة ولكن أن تضع في الحسبان
أن ما تبنيه أنت وفريقكك سوف يعاد كاتبته في الغالب لأجزاء يُمكن إعادة استخدامها عند الحاجة.


لتستوعب هذا المفهوم، 
أنصحك بالرجوع والإطلاع على بعض المفاهيم في تصميم وبرمجة واجهات المستخدم، وكذلك كيف يقوم مهندسوا واجهات المستخدم الأمامية في الشركات الكبرى ببناء مكوناتهم وتقسيمها:

1. [كتاب Atomic Design](https://atomicdesign.bradfrost.com/table-of-contents/) - الفصل الأول، وخصوصًا قسم UI frameworks in theory and in  practice و الفصل الثاني، قسم The atomic design methodology

2. عرض Dan Abramov -أحد المبرمجين في فريق رياكت- بعنوان [The wet codebase](https://youtu.be/17KCHwOwgms).

3. [Adobe React Spectrum](https://react-spectrum.adobe.com/)

4. [Base Web React UI](https://baseweb.design/)


تقسيم المكونات الجيد يحتاج بعض الممارسة وفهم أكثر عمقًا لكل من متطلبات المشروع نفسه (تختلف متطلبات كل مشروع لذلك لا توجد طريقة واحدة محددة لفصل المكونات)، ويحتاج إلى فهم جيد لآلية عمل رياكت والمفاهيم التي تكمن ورائها.

### الخلاصة
برمجة واجهات المستخدم ليست عملية سهلة، توجد بعض التحديات والصعوبات، تحاول رياكت حل هذه المشاكل
بالإستعانة بمفاهيم البرمجة الوظيفية، وبطريقة تصريحية... وكلما أستوعبت رياكت وفهمتها ستظهر لك
الفلسفة التي تتمحور فيها رياكت وستتحسن في استخدامها بشكل جيد وفعال.

## ملحوظات
[^0]: [توصيات توثيق رياكت](https://react.dev/learn/start-a-new-react-project#production-grade-react-frameworks) للبدأ بمفهوم التصيير على الخادم
[^1]: هيكلة فلسك [(Flux Architecture)](https://reactjs.org/blog/2014/05/06/flux.html) هي الحل الذي أتت به رياكت لحل مشكلة تدفق البيانات (Data Flow).

[^2]: [مبدأ المهمة الواحدة](https://ar.wikipedia.org/wiki/%D9%85%D8%A8%D8%AF%D8%A3_%D8%A7%D9%84%D9%85%D9%87%D9%85%D8%A9_%D8%A7%D9%84%D9%88%D8%A7%D8%AD%D8%AF%D8%A9) (Single Responsibility Principle) على ويكيبيديا.

[^3]: القرار التصميمي (Design Decision)، في هندسة 
البرمجيات هو قرار يتخذ قبل الشروع ببناء الشيء بمثابة معيار تتبعه وتلتزم به خلال عملك