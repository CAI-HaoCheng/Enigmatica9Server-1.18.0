ServerEvents.blockLootTables((event) => {
    event.addBlock(`hexerei:willow_leaves`, (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.bonusRolls = 0.0;
            pool.addEntry({
                type: 'minecraft:alternatives',
                children: [
                    {
                        type: 'minecraft:item',
                        conditions: [
                            {
                                condition: 'minecraft:alternative',
                                terms: [
                                    { condition: 'forge:can_tool_perform_action', action: 'shears_dig' },
                                    {
                                        condition: 'minecraft:match_tool',
                                        predicate: {
                                            enchantments: [{ enchantment: 'minecraft:silk_touch', levels: { min: 1 } }]
                                        }
                                    }
                                ]
                            }
                        ],
                        name: 'hexerei:willow_leaves'
                    },
                    {
                        type: 'minecraft:item',
                        conditions: [
                            { condition: 'minecraft:survives_explosion' },
                            {
                                condition: 'minecraft:table_bonus',
                                enchantment: 'minecraft:fortune',
                                chances: [0.05, 0.0625, 0.083333336, 0.1]
                            }
                        ],
                        name: 'hexerei:willow_sapling'
                    }
                ]
            });
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.bonusRolls = 0.0;
            pool.addEntry({
                type: 'minecraft:item',
                conditions: [
                    {
                        condition: 'minecraft:table_bonus',
                        enchantment: 'minecraft:fortune',
                        chances: [0.02, 0.022222223, 0.025, 0.033333335, 0.1]
                    }
                ],
                functions: [
                    {
                        function: 'minecraft:set_count',
                        count: { type: 'minecraft:uniform', min: 1.0, max: 2.0 },
                        add: false
                    },
                    {
                        function: 'minecraft:explosion_decay'
                    }
                ],
                name: 'minecraft:stick'
            });
            pool.addCondition({
                condition: 'minecraft:inverted',
                term: {
                    condition: 'minecraft:alternative',
                    terms: [
                        {
                            condition: 'forge:can_tool_perform_action',
                            action: 'shears_dig'
                        },
                        {
                            condition: 'minecraft:match_tool',
                            predicate: { enchantments: [{ enchantment: 'minecraft:silk_touch', levels: { min: 1 } }] }
                        }
                    ]
                }
            });
        });
    });
});
