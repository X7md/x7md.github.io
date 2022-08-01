
const breadcrumb = (item) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement":
    [
        {
            "@type": "ListItem",
            "position": 1,
            "item":
            {
             "@id": "https://example.com/dresses",
             "name": "Dresses"
             }
           },
           {
            "@type": "ListItem",
           "position": 2,
           "item":
            {
              "@id": "https://example.com/dresses/real",
              "name": "Real Dresses"
            }
           }
    ]
})