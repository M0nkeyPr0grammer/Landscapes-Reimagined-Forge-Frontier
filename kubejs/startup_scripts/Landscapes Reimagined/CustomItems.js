
StartupEvents.registry('block', event => {
    event.create('trophy_block')
        .displayName('Landscapes Reimagined Trophy')
        .soundType('metal') // Example, replace 'wood' with the appropriate sound type
        .mapColor('DIAMOND') // Example, replace 'color' with the appropriate map color
        .hardness(2.0)
        .model('kubejs:block/trophy_block')
        .requiresTool(true)
        .resistance(1200)
        .waterlogged()
        .renderType('solid')
        .box(1, 0, 1, 15, 14, 15)
        .tagItem('tooltiprareness:epic_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true); 
});

// New Items
StartupEvents.registry('item', event => {
    event.create('crushed_bismuth')
        .displayName('Crushed Bismuth')
        .texture('kubejs:item/crushed_bismuth');

    event.create('crushed_irradium')
        .displayName('Crushed Irradium')
        .texture('kubejs:item/crushed_irradium');

    event.create('crushed_malachite')
        .displayName('Crushed Malachite')
        .texture('kubejs:item/crushed_malachite');
});

