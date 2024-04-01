const products = [
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Artemis Ear Ring",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 10,
        category: ['topSellers', 'ear ring'],
        image1: "img/products/artemisEarring/artemis-earring-220914_1200x.webp",
        image2: "img/products/artemisEarring/artemis-earring-745518_1200x.webp",
        price: 550,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Olive Branch Ear Ring",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 50,
        category: ['topSellers', 'ear ring'],
        image1: "img/products/oliveBranch/olive-branch-earring-630412_1200x.webp",
        image2: "img/products/oliveBranch/olive-branch-earring-578402_1200x.webp",
        price: 899,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Portal Ring",
        description: "Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 100,
        category: ['topSellers','ring'],
        image1: "img/products/portalRing/portal-ring-853169_1200x.webp",
        image2: "img/products/portalRing/portal-ring-786573_1200x.webp",
        price: 200,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Zeus Ring",
        description: "Zeus ring is a part of antiquity inspired line THEA by Macabre Gadgets. Uniting modernity and antiquity it is inspired by outstanding Hellenistic, its sensuality, innocence and half mythical eternity. Executed in a unique technique, combining the cutting edge and traditional materials, the ring becomes an ancient artefact achieved an effect of an antique marble statue. Entirely hand crafted in bonded white marble and inlayer with 24K gold plated sterling silver detail. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 5,
        category: ['topSellers','ring'],
        image1: "img/products/zeusRing/zeus-ring-662420_1200x.webp",
        image2: "img/products/zeusRing/zeus-ring-977030_1200x.webp",
        price: 200,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Black Corvus Ring",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 15,
        category: ['topSellers','ring'],
        image1: "img/products/blackCorvusRing/black-corvus-ring-786131_1200x.webp",
        image2: "img/products/blackCorvusRing/black-corvus-ring-538454_1200x.jpg",
        price: 899.99,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Apollo Ring",
        description: "Apollo ring is a part of antiquity inspired line THEA by Macabre Gadgets. Uniting modernity and antiquity it is inspired by outstanding Hellenistic, its sensuality, innocence and half mythical eternity. Executed in a unique technique, combining the cutting edge and traditional materials, the ring becomes an ancient artefact achieved an effect of an antique marble statue. Entirely hand crafted in bonded white marble and inlayer with 24K gold plated sterling silver detail. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 6,
        category: ['topSellers','ring'],
        image1: "img/products/apolloRing/apollo-ring-final-sale-720953_1200x.webp",
        image2: "img/products/apolloRing/apollo-ring-final-sale-471898_1200x.webp",
        price: 699,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Capere Sidus Pendant",
        description: "Latin for 'to catch the star' , Uniting modernity and antiquity it is driven by outstanding Hellenistic, its sensuality, innocence and half mythical eternity. Executed in a unique technique, combining the cutting edge and traditional materials, the pendant becomes an ancient artefact achieved an effect of an antique marble statue. Entirely hand crafted in bonded white marble and combined with sterling silver details. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 10,
        category: ['topFaun','faun','pendant'],
        image1: "img/products/capereSidusPendant/capere-sidus-pendant-i-425825_1200x.webp",
        image2: "img/products/capereSidusPendant/capere-sidus-pendant-i-545882_1200x.webp",
        price: 1599.50,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Coral Crown Ring",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 50,
        category: ['topFaun','faun','ring'],
        image1: "img/products/coralCrown/coral-crown-ring-784374_1200x.webp",
        image2: "img/products/coralCrown/coral-crown-ring-170700_1200x.webp",
        price: 459.20,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Crystal Crown Ring",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 8,
        category: ['topFaun','faun','ring'],
        image1: "img/products/cristalCrown/crystal-crown-ring-986645_1200x.webp",
        image2: "img/products/cristalCrown/crystal-crown-ring-290739_1200x.webp",
        price: 200,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Doe Ring",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 2,
        category: ['topFaun','faun','ring'],
        image1: "img/products/doeRing/doe-ring-918083_1200x.webp",
        image2: "img/products/doeRing/doe-ring-531134_1200x.webp",
        price: 1500,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Crescent Oracle Ear Ring",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 7,
        category: ['topFaun','faun','ear ring'],
        image1: "img/faun/cresentOracle/crescent-oracle-earring-Main.webp",
        image2: "img/faun/cresentOracle/crescent-oracle-earring-644434_1200x.webp",
        price: 789,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Roots Necklace",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 7,
        category: ['topFaun','faun','necklace'],
        image1: "img/faun/rootsNecklace/roots-necklace-Main.webp",
        image2: "img/faun/rootsNecklace/roots-necklace-780566_1200x.webp",
        price: 789,
    },
]

export default products