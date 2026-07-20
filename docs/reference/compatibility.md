# Compatibility

## Required integration: Sol's Item Rarity

Relic System calls Item Rarity for display rarity, rarity pools, fixed-rarity rules, set-ID rules, and stored rarity changes during ascension. Version 1.71 or newer is declared as mandatory.

By default, `disableRarityStatBonuses = true` tells the companion rarity mod not to stack its own rarity attribute bonuses on top of relic stats. Disable this safeguard only when intentionally balancing both systems together.

### Protected modded tools

Relic System also follows Item Rarity's `toolCompatibilityBlacklist` from `utility_buffs.json`. For a matching tool:

- Durability% is removed from the main-stat roll pool;
- the Relic durability handler does not rewrite durability loss;
- other eligible Relic stats continue to work normally.

Item Rarity includes `tconstruct` by default. Server owners can add a whole mod with `modid` or `modid:*`, or protect one tool with `modid:item_id`.

## Weapon compatibility

The current detector supports native classes, loader tags, item abilities, attack attributes, class-name heuristics, and registry-name tokens. This covers many conventional modded weapons without a hard dependency.

When detection fails:

1. identify the registry ID with advanced tooltips;
2. whitelist that exact ID;
3. `/srs reload`;
4. test a newly processed copy.

Avoid whole-mod whitelists unless every item in the namespace should act as main-hand relic gear.

## Armor compatibility

Any item exposing a recognized head/chest/legs/feet equipment slot can be a relic. Material names are derived from armor identity/registry path for multipliers and sets. Custom sets can override exact items.

## Damage compatibility

The universal ATK handler resolves direct player ownership, common arrow/throwable/hurting projectile ownership, and tamed-animal owners. A deeply custom damage source that exposes none of those relationships may not receive universal ATK. The native attack-attribute path still applies where the other mod uses player melee attributes.

## Data packs

The mod provides ordinary recipes, item tags, block tags, block loot, loot modifier resources on relevant loaders, and advancements. A datapack can replace those resources, but Java validation still controls operations such as material classes and eligibility.

## Companion damage display

The crit handler exposes recent crit information—multiplier, rate, Crit DMG, original damage, final damage—so Sol's Damage Indicator or another integration can identify custom crits.

## Special relic API

`SpecialRelicItem` allows an integrated item to supply custom max level, relic initialization, XP behavior, preview lines, material-tier behavior, Dust permission, and related display rules. Standard guide values apply unless that item's integration deliberately overrides them.
