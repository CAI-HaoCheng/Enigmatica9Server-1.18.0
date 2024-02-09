ServerEvents.tags('item', (event) => {
    event
        .get('forge:armors')
        .add([
            /_boots/,
            'immersiveengineering:armor_faraday_feet',
            'immersiveengineering:armor_steel_feet',
            'mekanism:free_runners',
            'naturesaura:infused_iron_shoes',
            'naturesaura:sky_shoes',
            'naturesaura:depth_shoes'
        ])
        .remove([/pneumaticcraft:jet_boots_upgrade_/]);
    event
        .get('forge:armors/boots')
        .add([
            /_boots/,
            'immersiveengineering:armor_faraday_feet',
            'immersiveengineering:armor_steel_feet',
            'mekanism:free_runners',
            'naturesaura:infused_iron_shoes',
            'naturesaura:sky_shoes',
            'naturesaura:depth_shoes'
        ])
        .remove([/pneumaticcraft:jet_boots_upgrade_/]);
});