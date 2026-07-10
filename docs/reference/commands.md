# Commands

Every command is available under `/solsrelic` and the shorter `/srs` alias.

## Player commands

| Command | Purpose |
|---|---|
| `/srs help` | Lists player commands and admin commands when permitted |
| `/srs info` | Shows held relic rarity, level, next EXP, main stat, sub-stats, and upgrade counts |
| `/srs stats` | Aggregates equipped and active phantom stats plus active set bonuses |
| `/srs recycle` | Opens confirmation to destroy the held leveled relic for Tier III cores |

## Game Master commands

These use the loader's Game Master permission level.

| Command | Purpose |
|---|---|
| `/srs setlevel <0..24>` | Sets held relic level, respecting its rarity cap |
| `/srs resetrelic` | Removes the held stack's relic data |
| `/srs reload` | Reloads generated JSON configs and regenerates instructions |

## `setlevel` behavior

Raising a level processes every crossed milestone normally using the relic's deterministic seed, recalculates main stat, and clears stored XP. Lowering a level recalculates the main stat and clears XP but does **not** reverse previously added sub-stats or milestone upgrades. Use `resetrelic` when a clean reroll is the actual admin intent.

## `resetrelic` behavior

The command removes only `SolsRelicData`, not Item Rarity data. If the item remains eligible, later server processing can assign new relic data again.

## Command versus screen totals

`/srs stats` is useful for logs and chat, while ++i++ opens the richer Stat Summary interface. Both account for active phantom overrides and material/offhand multipliers; speed caps and the final live attributes remain the ultimate gameplay state.

