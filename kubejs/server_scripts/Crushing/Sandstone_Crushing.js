ServerEvents.recipes(event => {

    // This file creates Crushing Recipes for all labeled blocks
    // The recipe will be labeles with a // before the event label


    // Chisled Sandstone

    event.custom({
        type: "create:crushing",
        ingredients: [
           { item: 'minecraft:chiseled_sandstone' }
    ],
    processingTime: 9, // Takes ~3 Seconds
    results: [
        {
            item: 'minecraft:sand',
            count: 3 // 100% Chance for this
        },
        {
            item: 'minecraft:sand',
            chance: 0.80 // 80% Chance for this
        },
    ] // The reason I have chosen this is due to having some sand come off in the process of making this type
    }).id('kubejs:crushing/CHSS');


    // Smooth Sandstone

    event.custom({
        type: "create:crushing",
        ingredients: [
           { item: 'minecraft:smooth_sandstone' }
        ],
    processingTime: 9, // Takes ~3 Seconds
    results: [
        {
            item: 'minecraft:sand',
            count: 3 // 100% Chance for this
        },
        {
            item: 'minecraft:sand',
            chance: 0.80 // 80% Chance for this
        },
    ] 
    }).id('kubejs:crushing/SSS');   

    // Cut Sandstone

    event.custom({
        type: "create:crushing",
        ingredients: [
           { item: 'minecraft:cut_sandstone' }
        ],
    processingTime: 9, // Takes ~3 Seconds
    results: [
        {
            item: 'minecraft:sand',
            count: 3 // 100% Chance for this
        },
        {
            item: 'minecraft:sand',
            chance: 0.80 // 80% Chance for this
        },
    ]
    }).id('kubejs:crushing/CSS');
    
    // Sandstone Bricks

    event.custom({
        type: "create:crushing",
        ingredients: [
           { item: 'quark:sandstone_bricks' }
        ],
    processingTime: 9, // Takes ~3 Seconds
    results: [
        {
            item: 'minecraft:sand',
            count: 3 // 100% Chance for this
        },
        {
            item: 'minecraft:sand',
            chance: 0.70 // 70% Chance for this
        },
    ]
    }).id('kubejs:crushing/SBS');

    // This Recipe adds in a recipe for any Chipped sandstone variant for a crushing recipe

        event.custom({
        type: "create:crushing",
        ingredients: [
           { tag: 'chipped:sandstone' }
        ],
    processingTime: 9, // Takes ~3 Seconds
    results: [
        {
            item: 'minecraft:sand',
            count: 3 // 100% Chance for this
        },
        {
            item: 'minecraft:sand',
            chance: 0.80 // 70% Chance for this
        },
    ]
    }).id('kubejs:crushing/chippedSandstoneS');

    //from here on it will be red sandstone variants

        // Red Chisled Sandstone

        event.custom({
            type: "create:crushing",
            ingredients: [
               { item: 'minecraft:chiseled_red_sandstone' }
        ],
        processingTime: 9, // Takes ~3 Seconds
        results: [
            {
                item: 'minecraft:red_sand',
                count: 3 // 100% Chance for this
            },
            {
                item: 'minecraft:red_sand',
                chance: 0.80 // 80% Chance for this
            },
        ] // The reason I have chosen this is due to having some sand come off in the process of making this type
        }).id('kubejs:crushing/CHRSS');
    
    
        // Smooth Red Sandstone
    
        event.custom({
            type: "create:crushing",
            ingredients: [
               { item: 'minecraft:smooth_red_sandstone' }
            ],
        processingTime: 9, // Takes ~3 Seconds
        results: [
            {
                item: 'minecraft:red_sand',
                count: 3 // 100% Chance for this
            },
            {
                item: 'minecraft:red_sand',
                chance: 0.80 // 80% Chance for this
            },
        ] 
        }).id('kubejs:crushing/SRSS');   
    
        // Cut Red Sandstone
    
        event.custom({
            type: "create:crushing",
            ingredients: [
               { item: 'minecraft:cut_red_sandstone' }
            ],
        processingTime: 9, // Takes ~3 Seconds
        results: [
            {
                item: 'minecraft:red_sand',
                count: 3 // 100% Chance for this
            },
            {
                item: 'minecraft:red_sand',
                chance: 0.80 // 80% Chance for this
            },
        ]
        }).id('kubejs:crushing/CRSS');
        
        // Red Sandstone Bricks
    
        event.custom({
            type: "create:crushing",
            ingredients: [
               { item: 'quark:red_sandstone_bricks' }
            ],
        processingTime: 9, // Takes ~3 Seconds
        results: [
            {
                item: 'minecraft:red_sand',
                count: 3 // 100% Chance for this
            },
            {
                item: 'minecraft:red_sand',
                chance: 0.70 // 70% Chance for this
            },
        ]
        }).id('kubejs:crushing/SRBS');
    
        // This Recipe adds in a recipe for any Chipped red_sandstone variant for a crushing recipe
    
            event.custom({
            type: "create:crushing",
            ingredients: [
               { tag: 'chipped:red_sandstone' }
            ],
        processingTime: 9, // Takes ~3 Seconds
        results: [
            {
                item: 'minecraft:red_sand',
                count: 3 // 100% Chance for this
            },
            {
                item: 'minecraft:red_sand',
                chance: 0.80 // 70% Chance for this
            },
        ]
        }).id('kubejs:crushing/chippedRedSandstoneS');



})