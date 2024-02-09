ServerEvents.chestLootTables((event) => {
    event.modify(`idas:wizardtower/wizardtower_library`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [1, 2];

            pool.addItem('farmersdelight:hot_cocoa', 75, [1, 3]);
            pool.addItem(Item.of('minecraft:potion', '{Potion:"minecraft:poison"}'), 75, 1);
            pool.addItem(Item.of('minecraft:potion', '{Potion:"minecraft:weakness"}'), 75, 1);
            pool.addItem(Item.of('minecraft:splash_potion', '{Potion:"minecraft:weakness"}'), 75, 1);
            pool.addItem(Item.of('minecraft:potion', '{Potion:"minecraft:strong_regeneration"}'), 75, 1);
            pool.addItem(Item.of('minecraft:potion', '{Potion:"minecraft:strong_healing"}'), 75, 1);
            pool.addItem(Item.of('minecraft:potion', '{Potion:"minecraft:strong_swiftness"}'), 75, 1);

            pool.addItem('minecraft:crossbow', 25, 1).enchantWithLevels(10, true);
            pool.addItem('minecraft:experience_bottle', 25, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.randomChance(0.75);
            pool.addEntry({ type: 'loot_table', weight: 25, name: 'enigmatica:ars_nouveau_glyph_cache/tier_3' });
        });
        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.randomChance(0.75);
            pool.addEntry({ type: 'loot_table', weight: 25, name: 'enigmatica:ars_nouveau_glyph_cache/tier_2' });
        });
    });
});
