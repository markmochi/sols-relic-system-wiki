# Commands

All commands use `/sol relicsystem`. The old `/srs` and `/solsrelic` roots have been removed in v1.5.8; use the new commands in chat, scripts, and server documentation.

## Player commands

| Command | Purpose |
|---|---|
| `/sol relicsystem help` | Lists player commands and admin commands when permitted |
| `/sol relicsystem info` | Shows held relic rarity, level, next EXP, main stat, sub-stats, and upgrade counts |
| `/sol relicsystem stats` | Aggregates equipped and active phantom stats plus active set bonuses |
| `/sol relicsystem recycle` | Opens confirmation to destroy the held leveled relic for Tier III cores |

## Game Master commands

These require operator/Game Master permission. The `<player>` target must be online.

| Command | Purpose |
|---|---|
| `/sol relicsystem setlevel <0..24>` | Sets held relic level, respecting its rarity cap |
| `/sol relicsystem resetrelic` | Removes the held stack's relic data |
| `/sol relicsystem stats <player>` | Shows the combined Relic stats of another online player |
| `/sol relicsystem reload` | Validates and reloads the common TOML and all Relic JSON configs, regenerates instructions, refreshes online inventories/attributes/set bonuses, and syncs server settings |

## `setlevel` behavior

Raising a level processes every crossed milestone normally using the relic's deterministic seed, recalculates main stat, and clears stored XP. Lowering a level recalculates the main stat and clears XP but does **not** reverse previously added sub-stats or milestone upgrades. Use `resetrelic` when a clean reroll is the actual admin intent.

## `resetrelic` behavior

The command removes only `SolsRelicData`, not Item Rarity data. If the item remains eligible, later server processing can assign new relic data again.

## Command versus screen totals

`/sol relicsystem stats` is useful for logs and chat, while ++i++ opens the richer Stat Summary interface. Both account for active phantom overrides and material/offhand multipliers; speed caps and the final live attributes remain the ultimate gameplay state.

