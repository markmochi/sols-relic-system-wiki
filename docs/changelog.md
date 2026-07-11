---
title: Changelog Timeline
description: Release history for Sol's Relic System from v1.5 onward.
---

# Changelog timeline

Follow the major additions, compatibility improvements, and fixes introduced in Sol's Relic System from v1.5 onward. Releases are listed newest first.

<div class="release-timeline" markdown>

<article class="release-entry release-entry--latest" markdown>

<div class="release-entry__meta"><span class="release-entry__version">v1.55</span><time datetime="2026-07-11">July 11, 2026</time><span class="release-entry__badge">Latest</span></div>

## Relic compatibility whitelist

- Added `relic_whitelist.json` for forcing otherwise-unrecognized modded items to receive random relic stat rolls.
- Use a mod ID such as `"someweaponmod"` to make every item from that mod relic-eligible.
- Use a full item ID such as `"someweaponmod:custom_blade"` to make only that item relic-eligible.
- Whitelisted entries bypass the normal weapon and armor detection checks.
- Blacklist entries take priority over whitelist entries, allowing individual items from a whitelisted mod to remain excluded.
- Specific item IDs are recommended because a whole-mod entry also includes blocks, crafting materials, food, and other non-equipment items.
- The whitelist is loaded on startup and by `/srs reload`. Equip affected items or relog after reloading to trigger relic assignment.

### Configuration example

```json
{
  "whitelist": [
    "someweaponmod",
    "anothermod:custom_blade"
  ]
}
```

</article>

<article class="release-entry" markdown>

<div class="release-entry__meta"><span class="release-entry__version">v1.52</span><time datetime="2026-07-04">July 4, 2026</time></div>

## Translation support, fixes, and NeoForge 1.21.11

### Downloads

- [Forge 1.16.5](https://www.curseforge.com/minecraft/mc-mods/sols-relic-system/files/8365973)
- [Forge 1.20.1](https://www.curseforge.com/minecraft/mc-mods/sols-relic-system/files/8365980)
- [NeoForge 1.21.1](https://www.curseforge.com/minecraft/mc-mods/sols-relic-system/files/8365983)
- [NeoForge 1.21.11](https://www.curseforge.com/minecraft/mc-mods/sols-relic-system/files/8365985)

### Full language and translation support

- The mod's built-in player-facing text now uses translation keys throughout.
- Translation support now covers item names and descriptions, relic tooltips, stat and rarity names, Aster Table screens, upgrade and reroll windows, ascension, recycling, milestone notices, phantom-slot messages, set bonuses, commands, help text, errors, and action-bar notices.

### Compatibility notes

- Sol's relic Crit Rate and Crit Damage bonuses are now exposed as real player attributes for cross-mod compatibility:
  - `solsrelicsystem:crit_rate`
  - `solsrelicsystem:crit_damage`
- These attributes use Sol's native percent-point scale. For example, `12.0` Crit Rate means `+12%` Sol crit chance bonus, not `0.12`.

### Fixes

- Relic stat tooltips and preview screens now show effective applied values instead of raw generated rolls.
  - Material tier multipliers, offhand efficiency, and stat-scaling config values are included in displayed relic stat values.
  - Example: a raw `+38.7% ATK` roll may display as `+13.0% ATK` if that is the value Sol actually applies after scaling.
  - Saved relic NBT, stat generation, reroll behavior, and gameplay formulas are unchanged.
- The default `atkPercentScaling` value has been increased from `0.30` to `0.70` so ATK% relic rolls feel more rewarding by default.
- Existing configs with a different `atkPercentScaling` value are migrated to `0.70` once during update. After that migration marker is written, future manual changes to this config value are respected.

### NeoForge 1.21.11 port

Minecraft 1.21.11 is newly supported in this release. If you encounter bugs, crashes, or unexpected behavior, please [submit a detailed report](reference/reporting-issues.md) with logs, reproduction steps, and environment information.

</article>

<article class="release-entry" markdown>

<div class="release-entry__meta"><span class="release-entry__version">v1.5</span><time datetime="2026-06-24">June 24, 2026</time></div>

## Utility and compatibility improvements

### Downloads

- [Forge 1.16.5](https://www.curseforge.com/minecraft/mc-mods/sols-relic-system/files/8311384)
- [Forge 1.20.1](https://www.curseforge.com/minecraft/mc-mods/sols-relic-system/files/8311391)
- [NeoForge 1.21.1](https://www.curseforge.com/minecraft/mc-mods/sols-relic-system/files/8311398)

### What's new

- Aster Core Tier I-III textures were changed and improved.
- A max-level relic can now be ascended by one rarity at the Aster Table:
  - **Resonance Core I:** Common to Uncommon
  - **Resonance Core II:** Uncommon to Rare
  - **Resonance Core III:** Rare to Epic
  - **Resonance Core IV:** Epic to Legendary
  - **Resonance Core V:** Legendary to Mythical
  - **Resonance Core VI:** Mythical to Supreme
- All Resonance Cores can be crafted through their progression chain in a Crafting Table. Lower cores and Aster Cores are used to create the higher tiers.
- Resonance Core I and II can also drop from eligible hostile mobs when killed by a player:
  - **Resonance Core I:** 0.8%
  - **Resonance Core II:** 0.5%
- By default, eligible enemies include:
  - Zombies, Husks, and Drowned
  - Skeletons and Strays
  - Creepers
  - Spiders and Cave Spiders
  - Endermen and Endermites
  - Witches
  - Pillagers, Vindicators, Evokers, and Ravagers
  - Blazes, Ghasts, and Magma Cubes
  - Silverfish
  - Guardians and Elder Guardians
  - Phantoms
  - Shulkers
  - Piglin Brutes
  - Withers
  - Ender Dragons
  - Wardens on Minecraft versions where Wardens exist

The same configurable mob list used by Aster Core drops determines which enemies are eligible. Server owners can add supported modded enemies or remove default enemies through `aster_core_mobs.json`.

- Dust of Enlightenment can now be crafted in a Crafting Table.

### Fixes

- Relic stats are now restricted more reliably to weapons, armor, and supported relic equipment.
- Modded battle axes and other combat-focused tool-class weapons can receive Relic stats.
- Pickarangs, paxels, drills, excavators, super tools, and similar utilities remain part of ItemRarity's Utility Perk system instead.
- Existing relics remain compatible with the new ascension system.
- Aster Core leveling and Dust of Enlightenment rerolling continue to work alongside ascension.

</article>

</div>
