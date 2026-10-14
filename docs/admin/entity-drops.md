# Mob and chest drops

## Aster allow-list

`aster_core_mobs.json` v6 is an allow-list. A matching entity can make the low Resonance Core roll and, when enabled, the combined Aster tier roll.

```json
{
  "_config_version": 6,
  "allowed_entities": [
    "minecraft:zombie",
    "minecraft:wither",
    "mineminenomi:marine",
    "uuid:12345678-1234-1234-1234-123456789abc"
  ]
}
```

Accepted key styles:

- exact entity: `minecraft:zombie`;
- whole namespace: `examplemod`;
- exact UUID: `uuid:...`.

The resolver checks UUID, exact registry ID, then namespace. Entries are normalized to lower case.

## Dust chance map

`dust_of_enlightenment_mobs.json` v4 assigns direct percentages.

```json
{
  "_config_version": 4,
  "entity_drop_chances": {
    "minecraft:ender_dragon": 8.0,
    "minecraft:wither": 3.0,
    "minecraft:warden": 5.0,
    "examplebosses": 0.75,
    "uuid:12345678-1234-1234-1234-123456789abc": 100.0
  }
}
```

Set an entry to 0 to disable that matching key. Values clamp to 0–100.

## Player-credit rule

Both mob handlers require `damageSource.getEntity()` to be a Player. This is stricter than merely being nearby or causing an indirect automation kill. Test modded projectiles/summons: if their source entity is not exposed as the player, material drops will not occur even though universal ATK may resolve some owner relationships separately.

## Luck and Looting

The configured percentages are **base chances at 0% Luck**. In v1.5.8, direct Aster Core, Resonance Core, and Dust rolls use:

```text
bonus = min(max(effective Luck, 0), 100) × 0.005
final direct chance = min(base chance × (1 + bonus), 100%)
```

Use effective equipped Relic and set-bonus Luck from the Stat Summary. Other effects that change Minecraft's Luck attribute also contribute to this bonus. At 20% Luck, a configured 8% Dust rate becomes 8.8%; at 50% Luck it becomes 10%. The default 12% combined Aster chance becomes 13.2% or 15%, respectively. The cap is a 50% relative increase at 100% Luck.

Looting is not read by the direct material handlers. It still affects normal vanilla or modded loot tables where their own rules use it. Those tables get a chance of one extra roll instead of having every condition's percentage rewritten; see [Luck and loot drops](../systems/combat-stats.md#luck-and-loot-drops).

## Chance design example

For a server that wants ordinary mobs to feed leveling but reserve Dust for bosses:

```json
// aster_core_mobs.json
{
  "_config_version": 6,
  "allowed_entities": ["minecraft", "yourmobmod"]
}
```

```json
// dust_of_enlightenment_mobs.json
{
  "_config_version": 4,
  "entity_drop_chances": {
    "minecraft:ender_dragon": 10.0,
    "minecraft:wither": 4.0,
    "yourmobmod:raid_boss": 2.0
  }
}
```

Because the Aster file is an allow-list, adding the entire `minecraft` namespace permits passive entities too. Their actual drops still require a player kill. Prefer a curated list if that is undesirable.

## Chest categories

Only loot-table paths beginning with `chests/` qualify. Resolution order is:

1. End City treasure;
2. Ancient City / ice box;
3. non-`minecraft` namespace;
4. named rare vanilla list;
5. common vanilla fallback.

The named rare list includes bastion treasure, nether bridge, woodland mansion, stronghold library, buried treasure, and several Trial Chamber reward tables.

In v1.5.8, Dust injection into non-`minecraft` chest tables is separately controlled by `chestLoot.enableDustInModdedChests` and is **off by default**. This prevents common barrels or chests in modded structures from using the configured `dustModdedChance`. Aster Core chest injection continues to use `moddedMultiplier` independently.

Chest rates and multipliers are baseline settings. With Luck, qualifying chest loot tables can receive one additional roll, including eligible injected Relic rewards. A bonus roll does not bypass `chestLoot.enabled` or the modded-Dust gate. It applies when loot is generated; reopening an already-generated chest does not create another roll.

## Migrations

The config loader normalizes older whitelist/blacklist/entity-map schemas into the current formats and upgrades known older Dust defaults. Treat the rewritten current file as the new source of truth after starting v1.5.8.
