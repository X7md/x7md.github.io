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
    name: "دينو"
})
tags.set("android", {
    name: "أندرويد"
})
tags.set("termux", {
    name: "ترمكس"
})
tags.set("blogging", {
    name: "التدوين",
})
tags.set("react", {
    name: "رياكت",
    image: imageLink("React-icon.svg"),
})
tags.set("webassembly", {
    name: "ويب أسمبلي",
    image: imageLink("WebAssembly_logo.svg"),
})

tags.set("ai", {
    name: "الذكاء الاصطناعي",
})
tags.set("data", {
    name: "البيانات",
})

export default tags;