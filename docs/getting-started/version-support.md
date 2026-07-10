# Version support

<span class="source-stamp">Verified against v1.55 source trees</span>

The guide covers four maintained code lines. They contain the same 75 gameplay/client Java classes and synchronized v1.55 mechanics; differences are chiefly loader APIs, registry formats, data-component persistence, and resource directory naming.

| Minecraft | Loader | Documentation status | Notable platform difference |
|---|---|---|---|
| 1.16.5 | Forge | Full guide applies | Forge capabilities and legacy NBT/API forms |
| 1.20.1 | Forge | Full guide applies | Forge 47 APIs |
| 1.21.1 | NeoForge | Full guide applies | Player attachment and component-backed persistence |
| 1.21.11 | NeoForge | Full guide applies | NeoForge 21.11 registry/resource formats |

## Shared player-facing behavior

Across the four v1.55 lines, the code defines the same:

- rarity level caps and random starting sub-stat counts;
- main-stat pools, weights, base values, and growth;
- sub-stat types, selection weights, and four roll tiers;
- revised XP formula and default Aster Core values;
- milestone seed behavior;
- Aster Table operations;
- Resonance Core chain and ascension validation;
- Dust reroll redistribution and pity rules;
- material multipliers, offhand penalty, speed caps, and stat scaling;
- set-bonus definitions, phantom slots, recycling, commands, and configuration keys.

## Important terminology

**Minecraft version** is not the same as **mod version**. This guide describes **Sol's Relic System 1.55** running on any of the four Minecraft versions above.

When reporting a problem, include all four identifiers:

```text
Minecraft: 1.21.1
Loader: NeoForge 21.1.x
Sol's Relic System: 1.55
Sol's Item Rarity: 1.7 or newer
```

## How version badges are used

Pages omit a version badge when a mechanic applies to every supported v1.55 build. A loader-specific callout appears only when file names, installation details, or server APIs actually differ.

