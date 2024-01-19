ServerEvents.recipes(event => {

// Standard Hopper Botany Pots
    // List of all botany pots
    const botanyPots = [
        'black_concrete',
        'black_glazed_terracotta',
        'black_terracotta',
        
        'blue_concrete',
        'blue_glazed_terracotta',
        'blue_terracotta',

        'brown_concrete',
        'brown_glazed_terracotta',
        'brown_terracotta',

        'cyan_concrete',
        'cyan_glazed_terracotta',
        'cyan_terracotta',

        'gray_concrete',
        'gray_glazed_terracotta',
        'gray_terracotta',

        'green_concrete',
        'green_glazed_terracotta',
        'green_terracotta',

        'light_blue_concrete',
        'light_blue_glazed_terracotta',
        'light_blue_terracotta',

        'light_gray_concrete',
        'light_gray_glazed_terracotta',
        'light_gray_terracotta',

        'lime_concrete',
        'lime_glazed_terracotta',
        'lime_terracotta',

        'magenta_concrete',
        'magenta_glazed_terracotta',
        'magenta_terracotta',

        'orange_concrete',
        'orange_glazed_terracotta',
        'orange_terracotta',

        'pink_concrete',
        'pink_glazed_terracotta',
        'pink_terracotta',

        'purple_concrete',
        'purple_glazed_terracotta',
        'purple_terracotta',

        'red_concrete',
        'red_glazed_terracotta',
        'red_terracotta',

        'terracotta',

        'white_concrete',
        'white_glazed_terracotta',
        'white_terracotta',

        'yellow_concrete',
        'yellow_glazed_terracotta',
        'yellow_terracotta',
    ];

    // Loop through the array and change the recipe for each botany pot
    botanyPots.forEach(potType => {
        event.replaceInput({
            id: `botanypots:botanypots/crafting/${potType}_hopper_botany_pot`,
        }, 'minecraft:hopper', 'create:chute');
    });


// Tiered Hopper Botany Pots

    // Elite Pots
    // List of all botany pots
    const botanyPotsElite = [
        'black_concrete',
        'black_glazed_terracotta',
        'black_terracotta',
        
        'blue_concrete',
        'blue_glazed_terracotta',
        'blue_terracotta',

        'brown_concrete',
        'brown_glazed_terracotta',
        'brown_terracotta',

        'cyan_concrete',
        'cyan_glazed_terracotta',
        'cyan_terracotta',

        'gray_concrete',
        'gray_glazed_terracotta',
        'gray_terracotta',

        'green_concrete',
        'green_glazed_terracotta',
        'green_terracotta',

        'light_blue_concrete',
        'light_blue_glazed_terracotta',
        'light_blue_terracotta',

        'light_gray_concrete',
        'light_gray_glazed_terracotta',
        'light_gray_terracotta',

        'lime_concrete',
        'lime_glazed_terracotta',
        'lime_terracotta',

        'magenta_concrete',
        'magenta_glazed_terracotta',
        'magenta_terracotta',

        'orange_concrete',
        'orange_glazed_terracotta',
        'orange_terracotta',

        'pink_concrete',
        'pink_glazed_terracotta',
        'pink_terracotta',

        'purple_concrete',
        'purple_glazed_terracotta',
        'purple_terracotta',

        'red_concrete',
        'red_glazed_terracotta',
        'red_terracotta',

        'terracotta',

        'white_concrete',
        'white_glazed_terracotta',
        'white_terracotta',

        'yellow_concrete',
        'yellow_glazed_terracotta',
        'yellow_terracotta',
    ];

    // Loop through the array and change the recipe for each botany pot
    botanyPotsElite.forEach(potType => {
        event.replaceInput({
            id: `botanypotstiers:crafting/elite_${potType}_hopper_botany_pot`,
        }, 'minecraft:hopper', 'create:chute');
    });


    // Ultra Pots
    // List of all botany pots
    const botanyPotsUltra = [
        'black_concrete',
        'black_glazed_terracotta',
        'black_terracotta',
        
        'blue_concrete',
        'blue_glazed_terracotta',
        'blue_terracotta',

        'brown_concrete',
        'brown_glazed_terracotta',
        'brown_terracotta',

        'cyan_concrete',
        'cyan_glazed_terracotta',
        'cyan_terracotta',

        'gray_concrete',
        'gray_glazed_terracotta',
        'gray_terracotta',

        'green_concrete',
        'green_glazed_terracotta',
        'green_terracotta',

        'light_blue_concrete',
        'light_blue_glazed_terracotta',
        'light_blue_terracotta',

        'light_gray_concrete',
        'light_gray_glazed_terracotta',
        'light_gray_terracotta',

        'lime_concrete',
        'lime_glazed_terracotta',
        'lime_terracotta',

        'magenta_concrete',
        'magenta_glazed_terracotta',
        'magenta_terracotta',

        'orange_concrete',
        'orange_glazed_terracotta',
        'orange_terracotta',

        'pink_concrete',
        'pink_glazed_terracotta',
        'pink_terracotta',

        'purple_concrete',
        'purple_glazed_terracotta',
        'purple_terracotta',

        'red_concrete',
        'red_glazed_terracotta',
        'red_terracotta',

        'terracotta',

        'white_concrete',
        'white_glazed_terracotta',
        'white_terracotta',

        'yellow_concrete',
        'yellow_glazed_terracotta',
        'yellow_terracotta',
    ];

    // Loop through the array and change the recipe for each botany pot
    botanyPotsUltra.forEach(potType => {
        event.replaceInput({
            id: `botanypotstiers:crafting/ultra_${potType}_hopper_botany_pot`,
        }, 'minecraft:hopper', 'create:chute');
    });
    
    
    // Creative Pots
    // List of all botany pots
    const botanyPotsCreative = [
        'black_concrete',
        'black_glazed_terracotta',
        'black_terracotta',
        
        'blue_concrete',
        'blue_glazed_terracotta',
        'blue_terracotta',

        'brown_concrete',
        'brown_glazed_terracotta',
        'brown_terracotta',

        'cyan_concrete',
        'cyan_glazed_terracotta',
        'cyan_terracotta',

        'gray_concrete',
        'gray_glazed_terracotta',
        'gray_terracotta',

        'green_concrete',
        'green_glazed_terracotta',
        'green_terracotta',

        'light_blue_concrete',
        'light_blue_glazed_terracotta',
        'light_blue_terracotta',

        'light_gray_concrete',
        'light_gray_glazed_terracotta',
        'light_gray_terracotta',

        'lime_concrete',
        'lime_glazed_terracotta',
        'lime_terracotta',

        'magenta_concrete',
        'magenta_glazed_terracotta',
        'magenta_terracotta',

        'orange_concrete',
        'orange_glazed_terracotta',
        'orange_terracotta',

        'pink_concrete',
        'pink_glazed_terracotta',
        'pink_terracotta',

        'purple_concrete',
        'purple_glazed_terracotta',
        'purple_terracotta',

        'red_concrete',
        'red_glazed_terracotta',
        'red_terracotta',

        'terracotta',

        'white_concrete',
        'white_glazed_terracotta',
        'white_terracotta',

        'yellow_concrete',
        'yellow_glazed_terracotta',
        'yellow_terracotta',
    ];

    // Loop through the array and change the recipe for each botany pot
    botanyPotsCreative.forEach(potType => {
        event.replaceInput({
            id: `botanypotstiers:crafting/creative_${potType}_hopper_botany_pot`,
        }, 'minecraft:hopper', 'create:chute');
    });    

});