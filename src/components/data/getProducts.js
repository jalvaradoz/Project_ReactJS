const products = [
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Artemis Ear Ring",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 0,
        category: ['topSellers', 'ear ring','thea'],
        image1: "../../img/products/artemisEarring/artemis-earring-220914_1200x.webp",
        image2: "../../img/products/artemisEarring/artemis-earring-745518_1200x.webp",
        price: 3100,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Olive Branch Ear Ring",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 50,
        category: ['topSellers', 'ear ring','thea'],
        image1: "../../img/products/oliveBranch/olive-branch-earring-630412_1200x.webp",
        image2: "../../img/products/oliveBranch/olive-branch-earring-578402_1200x.webp",
        price: 2189,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Portal Ring",
        description: "Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 100,
        category: ['topSellers','ring','ghost'],
        image1: "../../img/products/portalRing/portal-ring-853169_1200x.webp",
        image2: "../../img/products/portalRing/portal-ring-786573_1200x.webp",
        price: 11853,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Zeus Ring",
        description: "Zeus ring is a part of antiquity inspired line THEA by Macabre Gadgets. Uniting modernity and antiquity it is inspired by outstanding Hellenistic, its sensuality, innocence and half mythical eternity. Executed in a unique technique, combining the cutting edge and traditional materials, the ring becomes an ancient artefact achieved an effect of an antique marble statue. Entirely hand crafted in bonded white marble and inlayer with 24K gold plated sterling silver detail. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 5,
        category: ['topSellers','ring','thea'],
        image1: "../../img/products/zeusRing/zeus-ring-662420_1200x.webp",
        image2: "../../img/products/zeusRing/zeus-ring-977030_1200x.webp",
        price: 4286,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Black Corvus Ring",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 15,
        category: ['topSellers','ring','ghost'],
        image1: "../../img/products/blackCorvusRing/black-corvus-ring-786131_1200x.webp",
        image2: "../../img/products/blackCorvusRing/black-corvus-ring-538454_1200x.jpg",
        price: 2645,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Apollo Ring",
        description: "Apollo ring is a part of antiquity inspired line THEA by Macabre Gadgets. Uniting modernity and antiquity it is inspired by outstanding Hellenistic, its sensuality, innocence and half mythical eternity. Executed in a unique technique, combining the cutting edge and traditional materials, the ring becomes an ancient artefact achieved an effect of an antique marble statue. Entirely hand crafted in bonded white marble and inlayer with 24K gold plated sterling silver detail. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 6,
        category: ['topSellers','ring','thea'],
        image1: "../../img/products/apolloRing/apollo-ring-final-sale-720953_1200x.webp",
        image2: "../../img/products/apolloRing/apollo-ring-final-sale-471898_1200x.webp",
        price: 1915,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Capere Sidus Pendant",
        description: "Latin for 'to catch the star' , Uniting modernity and antiquity it is driven by outstanding Hellenistic, its sensuality, innocence and half mythical eternity. Executed in a unique technique, combining the cutting edge and traditional materials, the pendant becomes an ancient artefact achieved an effect of an antique marble statue. Entirely hand crafted in bonded white marble and combined with sterling silver details. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 10,
        category: ['topFaun','faun','pendant'],
        image1: "../../img/products/capereSidusPendant/capere-sidus-pendant-i-425825_1200x.webp",
        image2: "../../img/products/capereSidusPendant/capere-sidus-pendant-i-545882_1200x.webp",
        price: 4286,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Coral Crown Ring",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 50,
        category: ['topFaun','faun','ring'],
        image1: "../../img/products/coralCrown/coral-crown-ring-784374_1200x.webp",
        image2: "../../img/products/coralCrown/coral-crown-ring-170700_1200x.webp",
        price: 4103,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Crystal Crown Ring",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 8,
        category: ['topFaun','faun','ring'],
        image1: "../../img/products/cristalCrown/crystal-crown-ring-986645_1200x.webp",
        image2: "../../img/products/cristalCrown/crystal-crown-ring-290739_1200x.webp",
        price: 2645,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Doe Ring",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 2,
        category: ['topFaun','faun','ring'],
        image1: "../../img/products/doeRing/doe-ring-918083_1200x.webp",
        image2: "../../img/products/doeRing/doe-ring-531134_1200x.webp",
        price: 8206,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Crescent Oracle Ear Ring",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 7,
        category: ['topFaun','faun','ear ring'],
        image1: "../../img/faun/cresentOracle/crescent-oracle-earring-Main.webp",
        image2: "../../img/faun/cresentOracle/crescent-oracle-earring-644434_1200x.webp",
        price: 3100,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Roots Necklace",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 7,
        category: ['topFaun','faun','necklace'],
        image1: "../../img/faun/rootsNecklace/roots-necklace-Main.webp",
        image2: "../../img/faun/rootsNecklace/roots-necklace-780566_1200x.webp",
        price: 7021,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Ionic Ear Ring",
        description: "Uniting modernity and antiquity it is inspired by outstanding Hellenistic, its sensuality, innocence and half mythical eternity. Executed in a unique technique, combining the cutting edge and traditional materials, the ring becomes an ancient artefact achieved an effect of an antique marble statue. Entirely hand crafted in bonded white marble and inlayer with oxidized sterling silver detail. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 80,
        category: ['topSiren','siren','ear ring'],
        image1: "../../img/products/eonic/doric-earring-387803_1600x.webp",
        image2: "../../img/products/eonic/doric-earring-948154_1600x.webp",
        price: 2918,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Flow Ring",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 200,
        category: ['topSiren','siren','ring'],
        image1: "../../img/products/flowRing/flow-ring-695851_1600x.webp",
        image2: "../../img/products/flowRing/flow-ring-874385_1600x.webp",
        price: 4559,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Medea Ring",
        description: "Inspired by the glorious greek tragedy, Medea ring embodies the mystique and power associated with her name. Medea, a figure of Greek mythology, the granddaughter of the sun god Helios and a niece of sorceress Circe, a powerful witch herself and a mad hero of Euripides’ play. This ring is a symbol of duality and incredible strength. Much like the character of Medea, it embodies both glorious strength and a hint of the macabre, the allure of the unknown and eerie. It's a reminder that even in complexity and darkness, there is beauty and strength to be celebrated.",
        stock: 60,
        category: ['topSiren','siren','ring'],
        image1: "../../img/products/meda/medea-ring-305638_1600x.webp",
        image2: "../../img/products/meda/medea-ring-134661_1600x.webp",
        price: 11853,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Pearl Snake Necklace",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 42,
        category: ['topSiren','siren','necklace'],
        image1: "../../img/products/pearlSnakeNecklace/pearl-snake-necklace-364581_800x.webp",
        image2: "../../img/products/pearlSnakeNecklace/pearl-snake-necklace-904676_800x.webp",
        price: 5836,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Medusa Pendant",
        description: "Uniting modernity and antiquity it is inspired by outstanding Hellenistic, its sensuality, innocence and half mythical eternity. Executed in a unique technique, combining the cutting edge and traditional materials, the pendant becomes an ancient artefact achieved an effect of an antique marble statue. Entirely hand crafted in bonded white marble and inlayed with 24K gold plated sterling silver detail. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 80,
        category: ['topSiren','siren','pendant'],
        image1: "../../img/products/medusaPending/medusa-shield-pendant-black-148033_1600x.webp",
        image2: "../../img/products/medusaPending/medusa-shield-pendant-black-776527_1600x.webp",
        price: 6656,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Fan Coral Hairpin",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 180,
        category: ['topSiren','siren','hairpin'],
        image1: "../../img/products/fanCoralHairpin/fan-coral-hairpin-972637_800x.webp",
        image2: "../../img/products/fanCoralHairpin/fan-coral-hairpin-743156_800x.webp",
        price: 3647,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Nara Ring",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 68,
        category: ['topGhost','ghost','ring'],
        image1: "../../img/products/naraRing/nara-ring-887420_1200x.webp",
        image2: "../../img/products/naraRing/nara-ring-691688_1200x.webp",
        price: 3832,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Panther Ring",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 72,
        category: ['topGhost','ghost','ring'],
        image1: "../../img/products/pantherRing/panther-ring-743268_1200x.webp",
        image2: "../../img/products/pantherRing/panther-ring-488771_1200x.webp",
        price: 4471.80,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Pearl Crown Ring",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 72,
        category: ['topGhost','ghost','ring'],
        image1: "../../img/products/pearlCrownRing/pearl-crown-ring-white-757542_1200x.webp",
        image2: "../../img/products/pearlCrownRing/pearl-crown-ring-white-397515_1200x.webp",
        price: 3741.60,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Black Lyre Choker",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 72,
        category: ['topGhost','ghost','choker'],
        image1: "../../img/products/blackLyreChoker/black-lyre-choker-435371_1200x.webp",
        image2: "../../img/products/blackLyreChoker/black-lyre-choker-778390_1200x.webp",
        price: 5109,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Arrow & Bow Pendant",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 10,
        category: ['topGhost','ghost','pendant'],
        image1: "../../img/products/arrowBowPendant/arrowbow-pendant-856735_1200x.webp",
        image2: "../../img/products/arrowBowPendant/arrowbow-pendant-587296_1200x.webp",
        price: 3285,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Cameo Ring",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 10,
        category: ['topGhost','ghost','ring'],
        image1: "../../img/products/cameoRing/cameo-ring-997828_1200x.webp",
        image2: "../../img/products/cameoRing/cameo-ring-444141_1200x.webp",
        price: 7025,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Mars Ring",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 14,
        category: ['topVampire','vampire','ring'],
        image1: "../../img/products/marsRing/mars-ring-860766_1200x.webp",
        image2: "../../img/products/marsRing/mars-ring-108497_1200x.webp",
        price: 11039,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Rose Skull Pendant",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 14,
        category: ['topVampire','vampire','pendant'],
        image1: "../../img/products/roseSkullPendant/rose-skull-pendant-771410_1200x.webp",
        image2: "../../img/products/roseSkullPendant/rose-skull-pendant-278885_1200x.webp",
        price: 2920,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Antler Pendant",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 50,
        category: ['topVampire','vampire','pendant'],
        image1: "../../img/products/antlerPendant/antler-pendant-587980_1200x.webp",
        image2: "../../img/products/antlerPendant/antler-pendant-984839_1200x.webp",
        price: 3558,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Ulmer Ring",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 2,
        category: ['topVampire','vampire','ring'],
        image1: "../../img/products/ulmerRing/ulmer-ring-red-695760_1200x.webp",
        image2: "../../img/products/ulmerRing/ulmer-ring-red-949098_1200x.webp",
        price: 2646,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Crowned hare Ring",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 7,
        category: ['topVampire','vampire','ring'],
        image1: "../../img/products/crownedHare/crowned-hare-ring-black-final-sale-214444_1200x.webp",
        image2: "../../img/products/crownedHare/crowned-hare-ring-black-final-sale-905025_1200x.webp",
        price: 3376,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Spire Pearl Ear Ring",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 1,
        category: ['topVampire','vampire','ear ring'],
        image1: "../../img/products/spirePearl/spire-pearl-earring-193451_1200x.webp",
        image2: "../../img/products/spirePearl/spire-pearl-earring-878589_1200x.webp",
        price: 1550,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Corinth Pendant",
        description: "Corinth pendant is a part of antiquity inspired line THEA by Macabre Gadgets. Uniting modernity and antiquity it is inspired by outstanding Hellenistic, its sensuality, innocence and half mythical eternity.",
        stock: 5,
        category: ['topThea','thea','pendant'],
        image1: "../../img/products/CorinthPendant/corinth-pendant-893987_1200x.webp",
        image2: "../../img/products/CorinthPendant/corinth-pendant-402501_1200x.webp",
        price: 5011,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Torso Pendant",
        description: "Torso pendant is a part of antiquity inspired line THEA by Macabre Gadgets. Uniting modernity and antiquity it is inspired by outstanding Hellenistic, its sensuality, innocence and half mythical eternity.",
        stock: 108,
        category: ['topThea','thea','pendant'],
        image1: "../../img/products/torsoPendant/torso-pendant-853435_1200x.webp",
        image2: "../../img/products/torsoPendant/torso-pendant-227381_1200x.webp",
        price: 5011,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Fascinus Pendant",
        description: "Fascinus - is the embodiment of the divine phallus - vital amulet and symbol of strength, protection and fertility used in Ancient Greece and Rome.  Crafted with meticulous attention to details, this pendant embodies enigmatic power of winged phallus. Translucent gold and silver wings are in contrast with marble's smooth texture.  Let it be a symbol of empowerment and freedom of self-expression, jewel that honors our ancient roots we are yet to rediscover.",
        stock: 200,
        category: ['topThea','thea','pendant'],
        image1: "../../img/products/fascinusPendant/fascinus-pendant-641622_1200x.webp",
        image2: "../../img/products/fascinusPendant/fascinus-pendant-533684_1200x.webp",
        price: 3645,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Twin Moon Crown",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 50,
        category: ['topThea','thea','crown'],
        image1: "../../img/products/twinMoon/twin-moon-crown-gold-357860_1200x.webp",
        image2: "../../img/products/twinMoon/twin-moon-crown-gold-877557_1200x.webp",
        price: 9100,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Lion Ear Ring",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 58,
        category: ['topThea','thea','ear ring'],
        image1: "../../img/products/lionEarring/lion-earring-144906_1200x.webp",
        image2: "../../img/products/lionEarring/lion-earring-512209_1200x.webp",
        price: 3000,
    },
    {
        id: Math.floor(Math.random() * 9000) + 1000,
        name: "Pyramid Pearl Choker",
        description: "This item is fully handcrafted using natural materials; it is not printed or automatically produced. Executed in a unique technique, combining the cutting edge and traditional materials. Any step of production process is environmentally friendly and all kinds of raw and supporting materials are vegan.",
        stock: 58,
        category: ['topThea','thea','choker'],
        image1: "../../img/products/pyramidChoker/pyramids-pearl-choker-269225_1200x.webp",
        image2: "../../img/products/pyramidChoker/pyramids-pearl-choker-619158_1200x.webp",
        price: 7289.60,
    },
]

export default products