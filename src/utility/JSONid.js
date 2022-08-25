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
            "givenName": "Hamad",
            "familyName":"Binqali",
            "url": "https://git.x7md.net/about-me",
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