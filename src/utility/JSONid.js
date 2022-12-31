function JSONid(data){
    let JSONid = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "url": data.link
        },
        "headline": data.title,
        "image": data.imageName,
        "datePublished": data.datePublished,
        "dateModified": data.dateModified,
        "author": {
            "@type": "Person",
            "name": "حمد",
            "familyName":"بنقالي",
            "url": "https://git.x7md.net/about-me",
        },
        keywords: [],
        "publisher": {
            "@type": "Person",
            "name": "x7md"
        }
    }
    if (data["about"]){
        JSONid["about"] = data["about"];
    }
    if (data["keywords"]){
        JSONid["keywords"] = data["keywords"];
    }
    return JSON.stringify(JSONid);
}
export default JSONid;