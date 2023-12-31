// Modded Flower Crushin/Milling Recipe Addition

ServerEvents.recipes(event => {

	// Hibiscus
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:hibiscus' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:orange_dye", count: 2 },
			{ item: "minecraft:red_dye", chance: 0.05 }
		]
	}).id('kubejs:milling/hibiscus');

	// Mallow
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:mallow' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:orange_dye", count: 2 }
		]
	}).id('kubejs:milling/mallow');

	// Salmon Poppy Bush
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:salmon_poppy_bush' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:pink_dye", count: 2 }
		]
	}).id('kubejs:milling/salmon_poppy_bush');

	// White Trillium
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:white_trillium' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:white_dye", count: 2 },
			{ item: "minecraft:yellow_dye", chance: 0.05 }
		]
	}).id('kubejs:milling/white_trillium');

	// Wilting Trillium
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:wilting_trillium' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:brown_dye", count: 2 }
		]
	}).id('kubejs:milling/wilting_trillium');

	// Orange Coneflower
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:orange_coneflower' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:orange_dye", count: 2 },
			{ item: "minecraft:yellow_dye", chance: 0.05 }
		]
	}).id('kubejs:milling/orange_coneflower');

	// Puruple Coneflower
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:purple_coneflower' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:purple_dye", count: 2 },
			{ item: "minecraft:light_blue_dye", chance: 0.05 }
		]
	}).id('kubejs:milling/purple_coneflower');

	// Blue Magnolia Flowers
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:blue_magnolia_flowers' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:light_blue_dye", count: 2 }
		]
	}).id('kubejs:milling/blue_magnolia_flowers');

	// Pink Magnolia Flowers
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:pink_magnolia_flowers' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:pink_dye", count: 2 }
		]
	}).id('kubejs:milling/pink_magnolia_flowers');

	// White Magnolia Flowers
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:white_magnolia_flowers' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:white_dye", count: 2 }
		]
	}).id('kubejs:milling/white_magnolia_flowers');

	// Day Lily
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:day_lily' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:orange_dye", count: 2 },
			{ item: "minecraft:red_dye", chance: 0.05 }
		]
	}).id('kubejs:milling/day_lily');

	// Hyancinth
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:hyacinth_flowers' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:light_blue_dye", count: 2 },
			{ item: "minecraft:white_dye", chance: 0.05 }
		]
	}).id('kubejs:milling/hyacinth_flowers');

	// Glistering Bloom
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:glistering_bloom' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:pink_dye", count: 2 },
			{ item: "minecraft:light_blue_dye", chance: 0.1 },
			{ item: "minecraft:magenta_dye", chance: 0.05}
		]
	}).id('kubejs:milling/glistering_bloom');

	// Meadow Sage
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:meadow_sage' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:cyan_dye", count: 2 },
			{ item: "minecraft:green_dye", chance: 0.05 }
		]
	}).id('kubejs:milling/meadow_sage');

	// Pink Petals
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'minecraft:pink_petals' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:pink_dye", count: 2 }
		]
	}).id('kubejs:milling/pink_petals');

	// Torchflower
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'minecraft:torchflower' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:orange_dye", count: 2 }
		]
	}).id('kubejs:milling/torchflower');

	// Pitcher Plant
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'minecraft:pitcher_plant' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:cyan_dye", count: 3 },
			{ item: "minecraft:purple_dye", chance: 0.05 }
		]
	}).id('kubejs:milling/pitcher_plant');

	// Red Snowbelle
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:red_snowbelle' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:red_dye", count: 3 }
		]
	}).id('kubejs:milling/red_snowbelle');

	// Orange Snowbelle
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:orange_snowbelle' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:orange_dye", count: 3 }
		]
	}).id('kubejs:milling/orange_snowbelle');

	// Yellow Snowbelle
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:yellow_snowbelle' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:yellow_dye", count: 3 }
		]
	}).id('kubejs:milling/yellow_snowbelle');


	// Lime Snowbelle
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:lime_snowbelle' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:lime_dye", count: 3 }
		]
	}).id('kubejs:milling/lime_snowbelle');

	// Green Snowbelle
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:green_snowbelle' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:green_dye", count: 3 }
		]
	}).id('kubejs:milling/green_snowbelle');

	// Cyan Snowbelle
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:cyan_snowbelle' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:cyan_dye", count: 3 }
		]
	}).id('kubejs:milling/cyan_snowbelle');

	// Light Blue Snowbelle
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:light_blue_snowbelle' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:light_blue_dye", count: 3 }
		]
	}).id('kubejs:milling/light_blue_snowbelle');

	// Blue Snowbelle
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:blue_snowbelle' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:blue_dye", count: 3 }
		]
	}).id('kubejs:milling/blue_snowbelle');

	// Purple Snowbelle
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:purple_snowbelle' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:purple_dye", count: 3 }
		]
	}).id('kubejs:milling/purple_snowbelle');

	// Magenta Snowbelle
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:magenta_snowbelle' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:magenta_dye", count: 3 }
		]
	}).id('kubejs:milling/magenta_snowbelle');

	// Pink Snowbelle
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:pink_snowbelle' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:pink_dye", count: 3 }
		]
	}).id('kubejs:milling/pink_snowbelle');

	// Brown Snowbelle
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:brown_snowbelle' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:brown_dye", count: 3 }
		]
	}).id('kubejs:milling/brown_snowbelle');

	// White Snowbelle
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:white_snowbelle' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:white_dye", count: 3 }
		]
	}).id('kubejs:milling/white_snowbelle');

	// Light Gray Snowbelle
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:light_gray_snowbelle' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:light_gray_dye", count: 3 }
		]
	}).id('kubejs:milling/light_gray_snowbelle');

	// Gray Snowbelle
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:gray_snowbelle' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:gray_dye", count: 3 }
		]
	}).id('kubejs:milling/gray_snowbelle');

	// Black Snowbelle
	event.custom({
		type: "create:milling",
		ingredients: [
			{ item: 'regions_unexplored:black_snowbelle' }
		],
		processingTime: 50,
		results: [
			{ item: "minecraft:black_dye", count: 3 }
		]
	}).id('kubejs:milling/black_snowbelle');

})