function JSONid(data){
    let JSONid = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://google.com/article",
            "url":data.link
        },
        "headline": data.title,
        "image": data.imageName,
        "datePublished": data.datePublished,
        "dateModified": data.dateModified,
        "author": {
            "@type": "Person",
            "givenName": "Hamad",
            "familyName":"Binqali",
            "url": "https://git.x7md.net/about-me",
            "sameAs": "https://www.wikidata.org/wiki/Q111890205"
        },
        "publisher": {
            "@type": "Person",
            "name": "x7md"
        }
        }
    if (data["sameAs"]){
        JSONid["sameAs"] = data["sameAs"];
    }
    return JSON.stringify(JSONid);
}
export default JSONid;