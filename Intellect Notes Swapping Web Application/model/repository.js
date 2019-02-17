var exports = module.exports = {};

exports.item = [
    {
        itemCode: 1,
        itemName: "Advanced Database Systems",
        catalogCategory: "Data Science",
        author: "Nabil Adam",
        note: "These are class notes for computer science students for Advanced Database Systems concepts by Nabil Adam",
        description: "A database is an organized collection of data, stored and accessed electronically. Database designers typically organize the data to model aspects of reality in a way that supports processes requiring information, such as (for example) modelling the availability of rooms in hotels in a way that supports finding a hotel with vacancies.",
        rating: 4,
        imgUrl: "/images/dbSystems.jpg"
    },
    {
        itemCode: 2,
        itemName: "Visual Analytics",
        catalogCategory: "Data Science",
        author: "Florian Mansmann",
        note: "These are class notes for computer science students for Visual Analytics concepts by Florian Mansmann",
        description: "This book is one of the outcomes of a two-year project called VisMaster CA, a coordination action funded by the European Commission from August 2008\n" +
            "to September 2010. The goal of VisMaster was to join European academic and industrial R&D excellence from several individual disciplines, forming a\n" +
            "strong visual analytics research community. An array of thematic working groups was set up by the consortium, which focused on advancing the state\n" +
            "of the art in visual analytics. These working groups joined research excellence in the fields of data management, data analysis, spatial-temporal data,\n" +
            "and human visual perception research with the wider visualisation research community",
        rating: 1,
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHU-KwLjSLViptjWFGp_Qzt5BAO3APOD2Z4AwbP_5NZ6gXB6W"
    },
    {
        itemCode: 3,
        itemName: "Business Intelligence and Analytics",
        catalogCategory: "Data Science",
        author: "Jay Liebowitz",
        note: "These are class notes for computer science students for Business Intelligence and Analytics concepts by Jay Liebowitz",
        description: "Together, Big Data, high-performance computing, and complex environments create unprecedented opportunities for organizations to generate game-changing insights that are based on hard data. Business Analytics: An Introduction explains how to use business analytics to sort through an ever-increasing amount of data and improve the decision-making capabilities of an organization.",
        rating: 3,
        imgUrl: "https://images.tandf.co.uk/common/jackets/amazon/978146659/9781466596092.jpg"
    },
    {
        itemCode: 4,
        itemName: "Network Security",
        catalogCategory: "Information Security and Privacy",
        author: "Jie Wang",
        note: "These are class notes for computer science students for Network Security concepts by Jie Wang",
        description: "Comprehensively covers fundamental concepts with newer topics such as electronic cash, bit-coin, P2P, SHA-3, E-voting, and Zigbee security Fully updated to reflect new developments in network security Introduces a chapter on Cloud security, a very popular and essential topic Uses everyday examples that most computer users experience to illustrate important principles and mechanisms Features a companion website with Powerpoint slides for lectures and solution manuals to selected exercise problems",
        rating: 2,
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/513cJJDY7qL.jpg"
    },
    {
        itemCode: 5,
        itemName: "Applied Cryptography",
        catalogCategory: "Information Security and Privacy",
        author: "Bruce Schneier",
        note: "These are class notes for computer science students for Applied Cryptography concepts by Bruce Schneier",
        description: "This new edition of the cryptography classic provides you with a comprehensive survey of modern cryptography. The book details how programmers and electronic communications professionals can use cryptography-the technique of enciphering and deciphering messages-to maintain the privacy of computer data. It describes dozens of cryptography algorithms, gives practical advice on how to implement them into cryptographic software, and shows how they can be used to solve security problems.",
        rating: 3,
        imgUrl: "https://www.wileyindia.com/pub/media/catalog/product/cache/1/image/700x560/e9c3970ab036de70892d86c6d221abfe/9/7/9788126513680_applied-cryptography-protocols-algorithms-and-source-code-in-c-2nd-edition.jpg"
    },
    {
        itemCode: 6,
        itemName: "Access Control and Security Architecture",
        catalogCategory: "Information Security and Privacy",
        author: "Michael Solomon",
        note: "These are class notes for computer science students for Access Control and Security Architecture concepts by Michael Solomon",
        description: "undamentals of Information System Security, Second Edition provides a comprehensive overview of the essential concepts readers must know as they pursue careers in information systems security. The text opens with a discussion of the new risks, threats, and vulnerabilities associated with the transformation to a digital world, including a look at how business, government, and individuals operate today.",
        rating: 3,
        imgUrl: "http://www.jblearning.com/covers/large/1284031624.jpg"
    }
];

exports.category = ["Data Science", "Information Security and Privacy"];


exports.users = [
    {
        userId:1,
        firstName:"Prashant",
        lastName:"Desai",
        email:"pdesai27@uncc.edu",
        address1:"9539, University Terrace Drive",
        address2:"Apt G",
        city:"Charlotte",
        state:"NC",
        postcode:"28262",
        country:"United States",
        userItems:[2,3]
    }
];


exports.userItem = [
    {
        userItem: "item[1]",
        rating: "1",
        status: "available",
        swapItem: undefined,
        swapItemRating: undefined,
        swapperRating: undefined

    },
    {
        userItem: "item[2]",
        rating: "3",
        status: "available",
        swapItem: undefined,
        swapItemRating: undefined,
        swapperRating: undefined
    }
]
