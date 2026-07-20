# Server configuration

The common TOML controls global numbers and switches. JSON files handle entity lists, per-entity Dust chances, item inclusion/exclusion, and armor sets.

Version 1.56 removed obsolete anvil-cost, fallback Dust-chance, and relic-lock settings. Aster Core leveling is handled entirely by the Aster Table, and the only Relic System keybind is the Stat Summary key.

## General

| Key | Default | Meaning |
|---|---:|---|
| `general.enabled` | true | Master switch for relic behavior |
| `general.showRelicTooltip` | true | Local client option: show relic stat tooltip section |
| `general.showLevelInName` | true | Prefix item name with `+level` |
| `general.showSetBonusesTooltip` | true | Local client option: show set section on armor tooltips |

## Critical hits

| Key | Default | Range / effect |
|---|---:|---|
| `crit.critSystemEnabled` | true | Enable Sol's custom crit rolls |
| `crit.disableVanillaCrit` | true | Remove vanilla jump-hit multiplier |
| `crit.baseCritRate` | 5.0 | 0–100% |
| `crit.baseCritDamage` | 50.0 | 0–1000%; only excess above 50 raises multiplier |
| `crit.maxCritRate` | 100.0 | 1–100% cap |

## Aster Cores

| Key | Default | Meaning |
|---|---:|---|
| `asterCores.dropEnabled` | true | Enable Aster Core tier roll |
| `tier1DropChance` | 1.0 | Tier I chance per eligible mob; chest base before multiplier |
| `tier2DropChance` | 3.0 | Tier II chance per eligible mob; chest base before multiplier |
| `tier3DropChance` | 8.0 | Tier III chance per eligible mob; chest base before multiplier |
| `tier1XP` | 500 | Relic EXP per Tier I |
| `tier2XP` | 200 | Relic EXP per Tier II |
| `tier3XP` | 80 | Relic EXP per Tier III / recycle conversion unit |

The three tier chances add together for the total chance of receiving any Aster Core. At defaults, that is **12%** per eligible mob. The Aster Table does not charge vanilla player levels.

## Leveling

| Key | Default | Range / meaning |
|---|---:|---:|
| `leveling.baseXPPerLevel` | 50 | Base value used by the curve; the default first level costs 135 EXP |
| `leveling.xpScalingFactor` | 0.25 | Quadratic growth factor; 0 disables quadratic growth |
| `leveling.subStatUpgradeInterval` | 4 | 1–10 levels |

Changing the interval changes both milestone detection and the UI's crossed-milestone count. Rarity caps remain hardcoded at 4/4/9/12/16/20/24.

## Dust

| Key | Default | Meaning |
|---|---:|---|
| `dustOfEnlightenment.dropEnabled` | true | Enable configured mob and chest drops; when false, only commands/Creative remain |
| `dustOfEnlightenment.pityThreshold` | 5 | Every Nth reroll; 0 disables pity |

Mob-specific chances are configured only in `dust_of_enlightenment_mobs.json`. Chest categories use the direct `chestLoot.dust*Chance` values below.

## Chest loot

| Key | Default |
|---|---:|
| `chestLoot.enabled` | true |
| `commonMultiplier` | 1.0 |
| `rareMultiplier` | 1.5 |
| `ancientCityMultiplier` | 2.0 |
| `endCityMultiplier` | 3.0 |
| `moddedMultiplier` | 1.25 |
| `dustCommonChance` | 1.0% |
| `dustRareChance` | 3.0% |
| `dustAncientCityChance` | 5.0% |
| `dustEndCityChance` | 7.0% |
| `dustModdedChance` | 3.0% |

Aster values are multipliers over the tier chances. Higher multipliers can also allow multi-core stacks. Dust values are direct final percentages.

## Balance

| Key | Default | Meaning |
|---|---:|---|
| `balance.maxSubStats` | 4 | Maximum generated sub-stats; lowering it does not delete saved stats |
| `balance.critSubStatWeightMultiplier` | 0.5 | Crit type selection weight multiplier |
| `balance.offhandStatEfficiency` | 0.5 | Offhand and offhand-phantom effectiveness |
| `balance.maxAtkSpeedBonus` | 25.0 | Total relic ATK Speed cap |
| `balance.maxMovementSpeedBonus` | 20.0 | Total relic Move Speed cap |

Raising `maxSubStats` beyond four is mechanically supported, but current tooltip layouts and rarity starting counts are designed around four; test UI width and milestone pacing.

## Stat scaling

| Key | Default |
|---|---:|
| `statScaling.hpFlatScaling` | 0.70 |
| `statScaling.hpPercentScaling` | 0.70 |
| `statScaling.defFlatScaling` | 0.70 |
| `statScaling.defPercentScaling` | 0.70 |
| `statScaling.atkFlatScaling` | 0.50 |
| `statScaling.atkPercentScaling` | 0.70 |

All accept 0.1–2.0. They affect displayed effective values and applied stats.

## Features and cross-mod

| Key | Default | Meaning |
|---|---:|---|
| `setBonuses.enabled` | true | Enable material/custom 2-piece and 4-piece bonuses |
| `recycling.enabled` | true | Let `/srs recycle` convert an upgraded held relic into Tier III Aster Cores |
| `recycling.refundPercent` | 60.0 | Invested EXP refunded as the Tier III core equivalent |
| `crossMod.disableRarityStatBonuses` | true | Prevent Item Rarity attribute stacking |

## Phantom slots

| Key | Default |
|---|---:|
| `phantomSlots.enabled` | true |
| `phantomSlots.combatLockSeconds` | 30 |
| `phantomSlots.opsBypassCombatLock` | false |
| `phantomSlots.combatHudAnchor` | `HOTBAR_LEFT` |
| `phantomSlots.combatHudXOffset` | 0 |
| `phantomSlots.combatHudYOffset` | 0 |

Valid anchors: `HOTBAR_LEFT`, `HOTBAR_RIGHT`, `TOP_LEFT`, `TOP_RIGHT`, `BOTTOM_LEFT`, `BOTTOM_RIGHT`, `CENTER`.

## Universal ATK

| Key | Default |
|---|---:|
| `universalDamage.enabled` | true |
| `universalDamage.flatEfficiency` | 0.75 |
| `universalDamage.percentEfficiency` | 0.75 |

When enabled, ATK and ATK% contribute to supported non-melee damage when the owning player can be resolved, including direct player damage, projectiles, and supported tameable summons. The efficiency values scale the flat and percentage contributions for those non-melee sources.

## Reload strategy

Use `/srs reload` for the generated JSON files. A server restart is the least ambiguous way to apply broad TOML changes.

The server synchronizes the XP curve, milestone interval, maximum sub-stats, offhand efficiency, and stat-scaling values to connected players. Aster Table previews, relic tooltips, and Stat Summary therefore use the server's balance rather than stale client defaults.

!!! danger "Back up before changing live progression"
    XP costs, core XP, max sub-stats, and refund values affect existing items and future operations. Test changes on copies of real relics before deploying them to a production server.
