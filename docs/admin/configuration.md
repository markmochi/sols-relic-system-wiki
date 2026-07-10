# Server configuration

<span class="source-stamp">Source: RelicConfig v1.55</span>

The common TOML controls global numbers and switches. JSON files handle entity lists, per-entity Dust chances, item inclusion/exclusion, and armor sets.

## General

| Key | Default | Meaning |
|---|---:|---|
| `general.enabled` | true | Master switch for relic behavior |
| `general.showRelicTooltip` | true | Show relic stat tooltip section |
| `general.showLevelInName` | true | Prefix item name with `+level` |
| `general.showSetBonusesTooltip` | true | Show set section on armor tooltips |

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
| `tier1DropChance` | 1.0 | Tier I interval in combined roll |
| `tier2DropChance` | 3.0 | Tier II interval |
| `tier3DropChance` | 8.0 | Tier III interval |
| `tier1XP` | 500 | Relic EXP per Tier I |
| `tier2XP` | 200 | Relic EXP per Tier II |
| `tier3XP` | 80 | Relic EXP per Tier III / recycle conversion unit |
| `tier1AnvilCost` | 5 | Compatibility/legacy anvil-level setting |
| `tier2AnvilCost` | 3 | Compatibility/legacy anvil-level setting |
| `tier3AnvilCost` | 1 | Compatibility/legacy anvil-level setting |

The current supported leveling UI is the Aster Table and its handler does not charge vanilla player levels.

## Leveling

| Key | Default | Range |
|---|---:|---:|
| `leveling.baseXPPerLevel` | 50 | 1–10,000 |
| `leveling.xpScalingFactor` | 0.25 | 0–5 |
| `leveling.subStatUpgradeInterval` | 4 | 1–10 levels |

Changing the interval changes both milestone detection and the UI's crossed-milestone count. Rarity caps remain hardcoded at 4/4/9/12/16/20/24.

## Dust

| Key | Default | Meaning |
|---|---:|---|
| `dustOfEnlightenment.dropEnabled` | true | Enable Dust mob/chest injection |
| `dustOfEnlightenment.dropChance` | 3.0 | Fallback/legacy chest chance—not mob rate |
| `dustOfEnlightenment.pityThreshold` | 5 | Every Nth reroll; 0 disables pity |

Mob chances are only in `dust_of_enlightenment_mobs.json`. Primary chest categories use the direct values below.

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

Aster values are multipliers over the tier chances; Dust values are direct final percentages.

## Balance

| Key | Default | Meaning |
|---|---:|---|
| `balance.maxSubStats` | 4 | 1–8; affects assignment, ascension, milestones |
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
| `setBonuses.enabled` | true | Calculate material/custom set bonuses |
| `relicLock.enabled` | true | Compatibility setting; see interface note |
| `recycling.enabled` | true | Allow `/srs recycle` |
| `recycling.refundPercent` | 60.0 | Invested EXP returned before Tier III conversion |
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

## Reload strategy

Use `/srs reload` for the generated JSON files. Common TOML values are synchronized to clients during login/config sync; a server restart is the least ambiguous way to apply broad TOML changes.

!!! danger "Back up before changing live progression"
    XP costs, core XP, max sub-stats, and refund values affect existing items and future operations. Test changes on copies of real relics before deploying them to a production server.

