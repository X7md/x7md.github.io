export function profilePage(){
    return JSON.stringify(
        {
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "mainEntity": {
              "@id": "https://blog.x7md.net/about#me",
              "url": "",
              "@type": "Person",
              "name":[
                {
                    "@value": "Hamad Binqali",
                    "@language": "en"
                },
                {
                    "@value": "حمد بنقالي",
                    "@language": "ar"
                },
                ],
              "alternateName": [
                "Hamad Binqali",
                "X7md",
                "X7mdNet"
               ],
                "sameAs": [
                "https://www.credly.com/users/x7md",
                "https://github.com/x7md",
                "https://twitter.com/x7mdNet",
                "https://linkedin.com/in/x7md",
                "https://instagram.com/x7mdNet",
                "https://meta.wikimedia.org/wiki/User:X7md"
               ],
               "nationality": {
                    "@id": "https://blog.x7md.net/about#saudi",
                    "@type": "Country",
                    "name": "السعودية",
                    "alternateName": "المملكة العربية السعودية",
                    "sameAs":  "https://www.wikidata.org/wiki/Q851",
               },
               "knowsAbout": [
                {
                    "@type": "Thing",
                    "name": "برمجة الحاسوب",
                    "alternateName": ["البرمجة", "Computer Programming"],
                    "sameAs":  "https://www.wikidata.org/wiki/Q80006",
                },
                {
                    "@type": "Thing",
                    "name": "هندسة الويب",
                    "alternateName": ["تقنيات الويب", "Web Engineering"],
                    "sameAs":  "https://www.wikidata.org/wiki/Q1196135",
                },
                {
                    "@type": "ComputerLanguage",
                    "name": "جافا سكربت",
                    "alternateName": ["جافاسكربت", "JavaScript"],
                    "sameAs":  "https://www.wikidata.org/wiki/Q2005",
                },
                {
                    "@type": "ComputerLanguage",
                    "name": "اتش تي ام إل",
                    "alternateName": ["لغة توصيف النص الفائق", "HTML"],
                    "sameAs":  "https://www.wikidata.org/wiki/Q8811",
                },
                {
                    "@type": "ComputerLanguage",
                    "name": "سي اس اس",
                    "alternateName": ["أوراق الأنماط المتتالية", "CSS"],
                    "sameAs":  "https://www.wikidata.org/wiki/Q46441",
                },
                {
                    "@type": ["SoftwareApplication", "Thing"],
                    "applicationCategory": "DeveloperApplication",
                    "name": "رياكت",
                    "offers": {
                        "@type": "Offer",
                        "price": "0"
                    },
                    "alternateName": ["React", "ReactJS", "رياكت جي اس"],
                    "url": "https://react.dev/",
                    "operatingSystem": "cross-platform",
                    "sameAs":  "https://www.wikidata.org/wiki/Q19399674",
                },
                {
                    "@type": ["SoftwareApplication", "Thing"],
                    "additionalType": "https://www.wikidata.org/entity/Q9135",
                    "applicationCategory": "DeveloperApplication",
                    "name": "لينكس",
                    "offers": {
                        "@type": "Offer",
                        "price": "0"
                    },
                    "alternateName": ["Linux", "Gnu/Linux"],
                    "url": "https://kernel.org/",
                    "operatingSystem": "linux",
                    "sameAs":  "https://www.wikidata.org/wiki/Q388",
                },
               ],
            //    "hasOccupation": [
            //     {
            //       "@type": "Role",
            //       "hasOccupation": {
            //       "@type": "Occupation",
            //       "name": "فني مواقع إلكترونية",
            //       "alternateName": "Web Technician",
            //       },
            //       "startDate": "2022-09",
            //       "endDate": "2023-09"
            //     },
            //   ]
            },
            "isPartOf": JSON.parse(blog())
          }
    )
}
export function blog(blogpost) 
{ 
    return JSON.stringify({
    "@context": "https://schema.org/",
    "@type": "Blog",
    "@id": "https://blog.x7md.net/",
    "mainEntityOfPage": "https://blog.x7md.net/",
    "name": "مدونة حمد بنقالي",
    "description": "مساحة شخصية، لتدويناتي الشخصية وأمور تقنية...",
    "creator": {
        "@type": "Person",
        "@id": "https://blog.x7md.net/about#me",
        "name": "حمد بنقالي",
        "url": "https://blog.x7md.net/about"
    },
    ...(Array.isArray(blogpost) ? {} : {"blogPost": blogpost}),
    "audience": [{
        "@type": "PeopleAudience",
        "name": "مصمم ويب",
        // "additionalType" : "https://www.wikidata.org/entity/Q113499206",
        "audienceType": "مصمم ويب",
        "alternateName": "مصممو الويب",
        "sameAs":  "https://www.wikidata.org/wiki/Q113499206",
    },
    {
        "@type": "PeopleAudience",
        "name": "مطور ويب",
        // "additionalType" : "https://www.wikidata.org/entity/Q6859454",
        "audienceType": "مطور ويب",
        "alternateName": "مطورو الويب",
        "sameAs":  "https://www.wikidata.org/wiki/Q6859454",
    },
    {
        "@type": "PeopleAudience",
        "name": "مطور برمجيات",
        // "additionalType" : "https://www.wikidata.org/entity/Q183888",
        "audienceType": "مطور برمجيات",
        "alternateName": "مطورو الويب",
        "sameAs":  "https://www.wikidata.org/wiki/Q183888",
    },
    {
        "@type": "PeopleAudience",
        "name": "طالب جامعي",
        // "additionalType" : "https://www.wikidata.org/entity/Q315247",
        "audienceType": "طالب جامعي",
        "alternateName": "طلاب جامعيون",
        "sameAs":  "https://www.wikidata.org/wiki/Q315247",
    },
    {
        "@type": "PeopleAudience",
        "name": "تقني",
        // "additionalType" : "https://www.wikidata.org/entity/Q5352191",
        "audienceType": "تقني",
        "alternateName": "تقنيون",
        "sameAs":  "https://www.wikidata.org/wiki/Q5352191",
    },
    ]
})
}