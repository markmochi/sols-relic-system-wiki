# Armor set bonuses

Sets count equipped armor by material or by a configured explicit item list. Two-piece and four-piece bonuses are **cumulative** in the stat calculation: a full four-piece set receives both entries.

## Default material sets

| Set | 2-piece entry | 4-piece entry | Total at 4 pieces |
|---|---|---|---|
| Leather | +5% HP | +10% HP, +5% DEF | +15% HP, +5% DEF |
| Iron | +10% DEF | +15% DEF, +5% ATK | +25% DEF, +5% ATK |
| Gold | +15% Luck | +20% Luck, +10% Crit DMG | +35% Luck, +10% Crit DMG |
| Diamond | +8% ATK | +12% ATK, +8% Crit Rate | +20% ATK, +8% Crit Rate |
| Netherite | +10% ATK | +15% ATK, +5% Crit Rate, +10% Crit DMG | +25% ATK, +5% Crit Rate, +10% Crit DMG |
| Chainmail | +8% DEF | +12% DEF, +3% Move Speed | +20% DEF, +3% Move Speed |
| Turtle | +10% HP | +15% HP, +5% DEF | +25% HP, +5% DEF |

The generated `set_bonuses.json` is authoritative after loading and can change these entries.

## Mixed sets

Two 2-piece sets can activate together, such as two Diamond plus two Iron pieces. The manager sums every active material/custom bonus, so hybrid builds can trade a four-piece peak for broader stats.

## Custom and modded armor

Custom sets list exact item IDs and take priority when identifying an item. Unknown armor materials that have no explicit JSON entry fall back to one of six deterministic archetypes based on the material string hash:

| Archetype | 2-piece | 4-piece entry |
|---|---|---|
| Crit Slayer | +8% Crit Rate | +12% Crit Rate, +20% Crit DMG |
| Berserker | +10% ATK | +15% ATK, +8% Crit Rate |
| Guardian | +8% DEF, +5% HP | +12% DEF, +10% HP |
| Swift Striker | +8% ATK, +2% Move | +12% ATK, +4% Move, +10% Crit DMG |
| Vitality | +10% HP | +15% HP, +5% DEF, +5% Crit Rate |
| Balanced | +5% ATK, +5% DEF | +8% ATK, +8% DEF, +12% Crit DMG |

These are also cumulative at four pieces.

## Tooltip behavior

When enabled, hovering a relic armor piece shows:

- set name and currently worn piece count;
- configured lore;
- 2-piece line with active/inactive mark;
- 4-piece line when the set defines one.

The Stat Summary screen lists all sets with at least two equipped pieces.

## Balance note

Set percentage modifiers are applied globally at full configured values; they do not use individual gear material multipliers. This makes set configuration one of the strongest server balance controls.

