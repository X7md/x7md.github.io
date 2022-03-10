function JSONid(data){
    let JSONid = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://google.com/article"
        },
        "headline": data.title,
        "image": data.imageName,
        "datePublished": data.datePublished,
        "dateModified": data.dateModified,
        "author": {
            "@type": "Person",
            "name": "حمد بنقالي",
            "url": "https://ar.wikipedia.org/wiki/user:X7md"
        },
        "publisher": {
            "@type": "Person",
            "name": "x7md"
            }
        }
    return JSON.stringify(JSONid);
}
export default JSONid;