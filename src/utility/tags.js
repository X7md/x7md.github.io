const tags = new Map();
const imageLink = (path)=> new URL("images/1x1/" + path, "https://x7md.net/")

tags.set("javascript", {
    name: "جافاسكربت",
    image: imageLink("JavaScript_logo.svg"),
    description: "لغة برمجة"
})
tags.set("javascript framework", {
    name: "إطار عمل جافاسكربت",
})
tags.set("cloud function", {
    name: "دوال سحابية"
})
tags.set("cloud", {
    name: "السحابة"
})
tags.set("deno", {
    name: "دينو",
    about: {
        "@type": "SoftwareApplication",
        "name": "Deno",
        alternateName: ["دينو", "Deno", "Deno JS"],
        "operatingSystem": 
        ["Linux", "macOS", "Windows"],
        description: "بيئة تشغيل جافاسكربت",
        sameAs: "https://www.wikidata.org/wiki/Q65070939"
    },
})
tags.set("android", {
    name: "أندرويد"
})
tags.set("termux", {
    name: "ترمكس",
    about: {
        "@type": "SoftwareApplication",
        "name": "Termux",
        alternateName: "ترمكس",
        "operatingSystem": "Android",
    }
})
tags.set("blogging", {
    name: "التدوين",
})
tags.set("react", {
    name: "رياكت",
    about: {
        "@type": "SoftwareApplication",
        "name": "React",
        alternateName: ["رياكت", "React.JS"],
        "operatingSystem": "Web",
        description: "مكتبة برمجية",
        sameAs: "https://www.wikidata.org/wiki/Q19399674"
    },
    image: imageLink("React-icon.svg"),
})
tags.set("webassembly", {
    name: "ويب أسمبلي",
    image: imageLink("WebAssembly_logo.svg"),
    about: {
        "@type": "Thing",
        additionalType: "SoftwareApplication",
        "name": "WebAssembly",
        alternateName: ["تجميع الويب", "wasm", "ويب أسمبلي"],
        "operatingSystem": "Web",
        description: "لغة برمجية، عبارة عن بايت كود يتم تنفيذها في بيئة معزولة على جهاز افتراضي",
        sameAs: "https://www.wikidata.org/wiki/Q20155677"
    },
})

tags.set("ai", {
    name: "الذكاء الاصطناعي",
})
tags.set("data", {
    name: "البيانات",
    about: {
        "@type": "Thing",
        "name": "Data",
        alternateName: ["البيانات", "البيانات الرقمية"],
        description: "البيانات الحوسبية، هي طريقة لوضع البيانات على الحاسوب",
        sameAs: "https://www.wikidata.org/wiki/Q494756"
    },
})

export default tags;