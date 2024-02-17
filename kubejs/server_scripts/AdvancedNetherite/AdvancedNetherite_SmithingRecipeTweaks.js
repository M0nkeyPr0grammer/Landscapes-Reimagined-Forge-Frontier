ServerEvents.recipes(event => {

// Removes Old Recipes
event.remove('advancednetherite:netherite_iron_sword_smithing')
event.remove('advancednetherite:netherite_iron_shovel_smithing')
event.remove('advancednetherite:netherite_iron_pickaxe_smithing')
event.remove('advancednetherite:netherite_iron_axe_smithing')
event.remove('advancednetherite:netherite_iron_hoe_smithing')
event.remove('advancednetherite:netherite_iron_helmet_smithing')
event.remove('advancednetherite:netherite_iron_chestplate_smithing')
event.remove('advancednetherite:netherite_iron_leggings_smithing')
event.remove('advancednetherite:netherite_iron_boots_smithing')
event.remove('advancednetherite:netherite_gold_sword_smithing')
event.remove('advancednetherite:netherite_gold_shovel_smithing')
event.remove('advancednetherite:netherite_gold_pickaxe_smithing')
event.remove('advancednetherite:netherite_gold_axe_smithing')
event.remove('advancednetherite:netherite_gold_hoe_smithing')
event.remove('advancednetherite:netherite_gold_helmet_smithing')
event.remove('advancednetherite:netherite_gold_chestplate_smithing')
event.remove('advancednetherite:netherite_gold_leggings_smithing')
event.remove('advancednetherite:netherite_gold_boots_smithing')
event.remove('advancednetherite:netherite_emerald_sword_smithing')
event.remove('advancednetherite:netherite_emerald_shovel_smithing')
event.remove('advancednetherite:netherite_emerald_pickaxe_smithing')
event.remove('advancednetherite:netherite_emerald_axe_smithing')
event.remove('advancednetherite:netherite_emerald_hoe_smithing')
event.remove('advancednetherite:netherite_emerald_helmet_smithing')
event.remove('advancednetherite:netherite_emerald_chestplate_smithing')
event.remove('advancednetherite:netherite_emerald_leggings_smithing')
event.remove('advancednetherite:netherite_emerald_boots_smithing')
event.remove('advancednetherite:netherite_diamond_sword_smithing')
event.remove('advancednetherite:netherite_diamond_shovel_smithing')
event.remove('advancednetherite:netherite_diamond_pickaxe_smithing')
event.remove('advancednetherite:netherite_diamond_axe_smithing')
event.remove('advancednetherite:netherite_diamond_hoe_smithing')
event.remove('advancednetherite:netherite_diamond_helmet_smithing')
event.remove('advancednetherite:netherite_diamond_chestplate_smithing')
event.remove('advancednetherite:netherite_diamond_leggings_smithing')
event.remove('advancednetherite:netherite_diamond_boots_smithing')

// Smithing Template Crafting Recipes

// Netherite Iron Upgrade
event.custom({
    type: "create:mixing",
    ingredients: [
        {
            item: 'minecraft:netherite_upgrade_smithing_template',
            amount: 1
        },
        {
            fluid: 'kubejs:molten_netherite_iron',
            amount: 100
        }
    ],
    results: [
        {
            item: 'kubejs:netherite_iron_upgrade',
            amount: 1
        }
    ],
    heatRequirement: "superheated"
}).id('kubejs:mixing/netherite_iron_upgrade');

// Netherite Gold Upgrade
event.custom({
    type: "create:mixing",
    ingredients: [
        {
            item: 'kubejs:netherite_iron_upgrade',
            amount: 1
        },
        {
            fluid: 'kubejs:molten_netherite_gold',
            amount: 100
        }
    ],
    results: [
        {
            item: 'kubejs:netherite_gold_upgrade',
            amount: 1
        }
    ],
    heatRequirement: "superheated"
}).id('kubejs:mixing/netherite_gold_upgrade');

// Netherite Emerald Upgrade
event.custom({
    type: "create:mixing",
    ingredients: [
        {
            item: 'kubejs:netherite_gold_upgrade',
            amount: 1
        },
        {
            fluid: 'kubejs:molten_netherite_emerald',
            amount: 100
        }
    ],
    results: [
        {
            item: 'kubejs:netherite_emerald_upgrade',
            amount: 1
        }
    ],
    heatRequirement: "superheated"
}).id('kubejs:mixing/netherite_emerald_upgrade');

// Netherite Diamond Upgrade
event.custom({
    type: "create:mixing",
    ingredients: [
        {
            item: 'kubejs:netherite_emerald_upgrade',
            amount: 1
        },
        {
            fluid: 'kubejs:molten_netherite_diamond',
            amount: 100
        }
    ],
    results: [
        {
            item: 'kubejs:netherite_diamond_upgrade',
            amount: 1
        }
    ],
    heatRequirement: "superheated"
}).id('kubejs:mixing/netherite_diamond_upgrade');


// New Smithing Recipes

    // Netherite Iron Sword
    event.smithing('advancednetherite:netherite_iron_sword',
        'kubejs:netherite_iron_upgrade',
        'minecraft:netherite_sword',
        'advancednetherite:netherite_iron_ingot'
    );

    // Netherite Iron Shovel
    event.smithing('advancednetherite:netherite_iron_shovel',
        'kubejs:netherite_iron_upgrade',
        'minecraft:netherite_shovel',
        'advancednetherite:netherite_iron_ingot'
    );

    // Netherite Iron Pickaxe
    event.smithing('advancednetherite:netherite_iron_pickaxe',
        'kubejs:netherite_iron_upgrade',
        'minecraft:netherite_pickaxe',
        'advancednetherite:netherite_iron_ingot'
    );

    // Netherite Iron Hoe
    event.smithing('advancednetherite:netherite_iron_hoe',
        'kubejs:netherite_iron_upgrade',
        'minecraft:netherite_hoe',
        'advancednetherite:netherite_iron_ingot'
    );

    // Netherite Iron Axe
    event.smithing('advancednetherite:netherite_iron_axe',
        'kubejs:netherite_iron_upgrade',
        'minecraft:netherite_axe',
        'advancednetherite:netherite_iron_ingot'
    );

    // Netherite Iron Helmet
    event.smithing('advancednetherite:netherite_iron_helmet',
        'kubejs:netherite_iron_upgrade',
        'minecraft:netherite_helmet',
        'advancednetherite:netherite_iron_ingot'
    );

    // Netherite Iron Chestplate
    event.smithing('advancednetherite:netherite_iron_chestplate',
        'kubejs:netherite_iron_upgrade',
        'minecraft:netherite_chestplate',
        'advancednetherite:netherite_iron_ingot'
    );

    // Netherite Iron Leggings
    event.smithing('advancednetherite:netherite_iron_leggings',
        'kubejs:netherite_iron_upgrade',
        'minecraft:netherite_leggings',
        'advancednetherite:netherite_iron_ingot'
    );

    // Netherite Iron Boots
    event.smithing('advancednetherite:netherite_iron_boots',
        'kubejs:netherite_iron_upgrade',
        'minecraft:netherite_boots',
        'advancednetherite:netherite_iron_ingot'
    );


    // Netherite Gold Sword
    event.smithing('advancednetherite:netherite_gold_sword',
        'kubejs:netherite_gold_upgrade',
        'advancednetherite:netherite_iron_sword',
        'advancednetherite:netherite_gold_ingot'
    );

    // Netherite Gold Shovel
    event.smithing('advancednetherite:netherite_gold_shovel',
        'kubejs:netherite_gold_upgrade',
        'advancednetherite:netherite_iron_shovel',
        'advancednetherite:netherite_gold_ingot'
    );

    // Netherite Gold Pickaxe
    event.smithing('advancednetherite:netherite_gold_pickaxe',
        'kubejs:netherite_gold_upgrade',
        'advancednetherite:netherite_iron_pickaxe',
        'advancednetherite:netherite_gold_ingot'
    );

    // Netherite Gold Hoe
    event.smithing('advancednetherite:netherite_gold_hoe',
        'kubejs:netherite_gold_upgrade',
        'advancednetherite:netherite_iron_hoe',
        'advancednetherite:netherite_gold_ingot'
    );

    // Netherite Gold Axe
    event.smithing('advancednetherite:netherite_gold_axe',
        'kubejs:netherite_gold_upgrade',
        'advancednetherite:netherite_iron_axe',
        'advancednetherite:netherite_gold_ingot'
    );

    // Netherite Gold Helmet
    event.smithing('advancednetherite:netherite_gold_helmet',
        'kubejs:netherite_gold_upgrade',
        'advancednetherite:netherite_iron_helmet',
        'advancednetherite:netherite_gold_ingot'
    );

    // Netherite Gold Chestplate
    event.smithing('advancednetherite:netherite_gold_chestplate',
        'kubejs:netherite_gold_upgrade',
        'advancednetherite:netherite_iron_chestplate',
        'advancednetherite:netherite_gold_ingot'
    );

    // Netherite Gold Leggings
    event.smithing('advancednetherite:netherite_gold_leggings',
        'kubejs:netherite_gold_upgrade',
        'advancednetherite:netherite_iron_leggings',
        'advancednetherite:netherite_gold_ingot'
    );

    // Netherite Gold Boots
    event.smithing('advancednetherite:netherite_gold_boots',
        'kubejs:netherite_gold_upgrade',
        'advancednetherite:netherite_iron_boots',
        'advancednetherite:netherite_gold_ingot'
    );

    // Netherite Emerald Sword
    event.smithing('advancednetherite:netherite_emerald_sword',
        'kubejs:netherite_emerald_upgrade',
        'advancednetherite:netherite_gold_sword',
        'advancednetherite:netherite_emerald_ingot'
    );

    // Netherite Emerald Shovel
    event.smithing('advancednetherite:netherite_emerald_shovel',
        'kubejs:netherite_emerald_upgrade',
        'advancednetherite:netherite_gold_shovel',
        'advancednetherite:netherite_emerald_ingot'
    );

    // Netherite Emerald Pickaxe
    event.smithing('advancednetherite:netherite_emerald_pickaxe',
        'kubejs:netherite_emerald_upgrade',
        'advancednetherite:netherite_gold_pickaxe',
        'advancednetherite:netherite_emerald_ingot'
    );

    // Netherite Emerald Hoe
    event.smithing('advancednetherite:netherite_emerald_hoe',
        'kubejs:netherite_emerald_upgrade',
        'advancednetherite:netherite_gold_hoe',
        'advancednetherite:netherite_emerald_ingot'
    );

    // Netherite Emerald Axe
    event.smithing('advancednetherite:netherite_emerald_axe',
        'kubejs:netherite_emerald_upgrade',
        'advancednetherite:netherite_gold_axe',
        'advancednetherite:netherite_emerald_ingot'
    );

    // Netherite Emerald Helmet
    event.smithing('advancednetherite:netherite_emerald_helmet',
        'kubejs:netherite_emerald_upgrade',
        'advancednetherite:netherite_gold_helmet',
        'advancednetherite:netherite_emerald_ingot'
    );

    // Netherite Emerald Chestplate
    event.smithing('advancednetherite:netherite_emerald_chestplate',
        'kubejs:netherite_emerald_upgrade',
        'advancednetherite:netherite_gold_chestplate',
        'advancednetherite:netherite_emerald_ingot'
    );

    // Netherite Emerald Leggings
    event.smithing('advancednetherite:netherite_emerald_leggings',
        'kubejs:netherite_emerald_upgrade',
        'advancednetherite:netherite_gold_leggings',
        'advancednetherite:netherite_emerald_ingot'
    );

    // Netherite Emerald Boots
    event.smithing('advancednetherite:netherite_emerald_boots',
        'kubejs:netherite_emerald_upgrade',
        'advancednetherite:netherite_gold_boots',
        'advancednetherite:netherite_emerald_ingot'
    );

        // Netherite Diamond Sword
        event.smithing('advancednetherite:netherite_diamond_sword',
        'kubejs:netherite_diamond_upgrade',
        'advancednetherite:netherite_emerald_sword',
        'advancednetherite:netherite_diamond_ingot'
    );

    // Netherite Diamond Shovel
    event.smithing('advancednetherite:netherite_diamond_shovel',
        'kubejs:netherite_diamond_upgrade',
        'advancednetherite:netherite_emerald_shovel',
        'advancednetherite:netherite_diamond_ingot'
    );

    // Netherite Diamond Pickaxe
    event.smithing('advancednetherite:netherite_diamond_pickaxe',
        'kubejs:netherite_diamond_upgrade',
        'advancednetherite:netherite_emerald_pickaxe',
        'advancednetherite:netherite_diamond_ingot'
    );

    // Netherite Diamond Hoe
    event.smithing('advancednetherite:netherite_diamond_hoe',
        'kubejs:netherite_diamond_upgrade',
        'advancednetherite:netherite_emerald_hoe',
        'advancednetherite:netherite_diamond_ingot'
    );

    // Netherite Diamond Axe
    event.smithing('advancednetherite:netherite_diamond_axe',
        'kubejs:netherite_diamond_upgrade',
        'advancednetherite:netherite_emerald_axe',
        'advancednetherite:netherite_diamond_ingot'
    );

    // Netherite Diamond Helmet
    event.smithing('advancednetherite:netherite_diamond_helmet',
        'kubejs:netherite_diamond_upgrade',
        'advancednetherite:netherite_emerald_helmet',
        'advancednetherite:netherite_diamond_ingot'
    );

    // Netherite Diamond Chestplate
    event.smithing('advancednetherite:netherite_diamond_chestplate',
        'kubejs:netherite_diamond_upgrade',
        'advancednetherite:netherite_emerald_chestplate',
        'advancednetherite:netherite_diamond_ingot'
    );

    // Netherite Diamond Leggings
    event.smithing('advancednetherite:netherite_diamond_leggings',
        'kubejs:netherite_diamond_upgrade',
        'advancednetherite:netherite_emerald_leggings',
        'advancednetherite:netherite_diamond_ingot'
    );

    // Netherite Diamond Boots
    event.smithing('advancednetherite:netherite_diamond_boots',
        'kubejs:netherite_diamond_upgrade',
        'advancednetherite:netherite_emerald_boots',
        'advancednetherite:netherite_diamond_ingot'
    );

} )