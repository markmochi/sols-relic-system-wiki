# Compatibility

## Required integration: Sol's Item Rarity

Relic System calls Item Rarity for display rarity, rarity pools, fixed-rarity rules, set-ID rules, and stored rarity changes during ascension. Version 1.7.2 or newer is declared as mandatory. v1.5.8 corrects the old version-range check that rejected `1.7.2` as lower than `1.71`; install matching Minecraft/loader builds on both client and server.

By default, `disableRarityStatBonuses = true` tells the companion rarity mod not to stack its own rarity attribute bonuses on top of relic stats. Disable this safeguard only when intentionally balancing both systems together.

### Protected modded tools

Relic System also follows Item Rarity's `toolCompatibilityBlacklist` from `utility_buffs.json`. For a matching tool:

- Durability% is removed from the main-stat roll pool;
- the Relic durability handler does not rewrite durability loss;
- other eligible Relic stats continue to work normally.

Item Rarity includes `tconstruct` by default. Server owners can add a whole mod with `modid` or `modid:*`, or protect one tool with `modid:item_id`.

## SimplyTooltips

On Minecraft versions supported by SimplyTooltips, v1.5.8 keeps relic-bearing items on the native styled tooltip renderer. This prevents SimplyTooltips from flattening the individually colored Relic System and Item Rarity text components into broken-looking formatting.

SimplyTooltips can still render ordinary items normally. Relic items may use the standard tooltip frame so their rarity colors, stat sections, separators, and progress display remain intact.

## Weapon compatibility

The current detector supports native classes, loader tags, item abilities, attack attributes, class-name heuristics, and registry-name tokens. This covers many conventional modded weapons without a hard dependency.

When detection fails:

1. identify the registry ID with advanced tooltips;
2. whitelist that exact ID;
3. `/sol relicsystem reload`;
4. inspect the existing stack and a new copy after the reload refreshes online inventories.

Avoid whole-mod whitelists unless every item in the namespace should act as main-hand relic gear.

## Armor compatibility

Any item exposing a recognized head/chest/legs/feet equipment slot can be a relic. Material names are derived from armor identity/registry path for multipliers and sets. Custom sets can override exact items.

In v1.5.8, Forge 1.16.5 and 1.20.1 and NeoForge 1.21.1 safely handle incomplete modded armor defense data. This covers the reported Knight Quest tooltip crash on NeoForge 1.21.1. That version now uses only the four player armor slots for material scaling, so animal armor defense cannot inflate the player tier. Unreadable player defense data falls back to the existing Special material multiplier (1.00×). NeoForge 1.21.11 uses material-name/item-path detection instead.

## Loot compatibility

Luck now rerolls supported queried loot tables from vanilla and mods. Direct Aster Core, Resonance Core, and Dust mob drops use a relative chance increase instead. Loot-table conditions, player-credit requirements, disabled drop settings, and allow-lists still apply. See [Luck and loot drops](../systems/combat-stats.md#luck-and-loot-drops). Other mods that change Luck or loot modifiers can affect combined results.

## Damage compatibility

The universal ATK handler resolves direct player ownership, common arrow/throwable/hurting projectile ownership, and tamed-animal owners. A deeply custom damage source that exposes none of those relationships may not receive universal ATK. The native attack-attribute path still applies where the other mod uses player melee attributes.

## Data packs

The mod provides ordinary recipes, item tags, block tags, block loot, loot modifier resources on relevant loaders, and advancements. A datapack can replace those resources, but Java validation still controls operations such as material classes and eligibility.

## Companion damage display

The crit handler exposes recent crit information—multiplier, rate, Crit DMG, original damage, final damage—so Sol's Damage Indicator or another integration can identify custom crits.

## Special relic API

`SpecialRelicItem` allows an integrated item to supply custom max level, relic initialization, XP behavior, preview lines, material-tier behavior, Dust permission, and related display rules. Standard guide values apply unless that item's integration deliberately overrides them.
