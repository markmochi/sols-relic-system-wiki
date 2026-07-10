# How to roll better relics

There is no single “reroll everything” button. Strong buildcrafting comes from knowing which parts can change at each stage.

## Permanence map

| Relic property | Normal leveling | Dust | Ascension |
|---|---|---|---|
| Main-stat type | Preserved | Preserved | Preserved |
| Main-stat value | Grows with level | Preserved | Resets to target relic level +0 |
| Sub-stat types | Adds types until full | Preserved | Existing types preserved; may add types |
| Base sub-stat values | Preserved | Preserved unless upgrade count changes proportionally | Rerolled from the four normal tiers |
| Upgrade-point distribution | Seeded milestones add points | Redistributed | Cleared; target rarity starts over |
| Relic level/EXP | Increases | Preserved | Reset to +0 / 0 EXP |
| Rarity | Preserved | Preserved | Raised exactly one step |

## The selection funnel

### 1. Lock in the main stat

The mod provides no standard operation that changes a main-stat type. Start with a main stat that supports the build:

- Crit builds: Crit Rate or Crit DMG helmet/weapon.
- Consistent damage: ATK% chest/weapon and the fixed flat-ATK leggings.
- Tank: HP% or DEF% chest, fixed flat-HP boots.
- Speed/utility: helmet or weapon speed main, while respecting the +20% move and +25% attack-speed caps.
- Durability build: weapon-only Durability main.

### 2. Judge sub-stat types before values

Dust cannot replace types. If an Epic relic starts with poor types, leveling may add more, but those early types occupy permanent slots. A Supreme relic always begins with four, so its starting type set is especially important.

Crit types are rarer by default: their effective selection weight is 38 versus 80–150 for most stats. Treat a relevant double-Crit start as scarce.

### 3. Prefer a strong material when stats are equal

Material multiplier affects the actual contribution:

| Material tier | Multiplier |
|---|---:|
| Wood / Leather | 0.45× |
| Stone / Chainmail | 0.60× |
| Gold | 0.70× |
| Iron | 0.85× |
| Diamond / Special | 1.00× |
| Netherite | 1.12× |

An ascended wooden weapon remains a wooden-tier stat platform. Rarity raises the level ceiling; it does not replace the material hierarchy.

### 4. Preview the milestone path

The path is deterministic, so a preview is information, not a reroll. Decide whether the fixed path is worth the remaining cores. Early relics with empty slots use milestones to add types; full relics use every milestone as an upgrade point.

### 5. Use Dust only on the right base

A Dust candidate must be Epic+, max-level, and have sub-stats. Spend Dust when:

- the stat **types** are already correct;
- the relic has several upgrade points to redistribute;
- too many points landed on secondary stats;
- the fifth-attempt pity can focus two valuable stats.

Do not spend Dust expecting new types, a new main stat, or independently rerolled values.

### 6. Exploit pity intelligently

At every fifth completed reroll by default, choose two target sub-stats. The reroll allocates guaranteed points between them before distributing the remainder:

- Epic: up to 2 pity points;
- Legendary, Mythical, Supreme: up to 3 pity points.

The guarantee is limited by the total number of upgrade points the relic actually owns. Choose two stats that are both valuable; each guaranteed point chooses between them randomly.

### 7. Compare, then keep deliberately

After the animation, compare old and new. Keep Old is safe for the item but not free: one Dust is consumed and the reroll count still rises, advancing pity tracking.

## Example: Crit damage weapon

Suppose a Legendary weapon has Crit Rate main and these four sub-stats:

```text
Crit DMG (+0) · ATK% (+2) · flat ATK (+1) · Luck (+1)
```

It has four total upgrade points. Dust preserves all four types and redistributes four points. On a pity attempt, selecting Crit DMG and ATK% guarantees up to three of the four points go to those two, while the fourth is random across all four stats. This improves the distribution odds without promising which selected stat receives more.

## Ascend now or reroll first?

Usually **ascend first** if you definitely plan to raise rarity. Ascension resets the relic to +0, clears upgrade counts, and rerolls sub-stat starting values. Dust spent before that cannot preserve its distribution through ascension.

Reroll first only when the current rarity is the permanent endpoint for that item or when you are intentionally evaluating it before committing scarce ascension materials.

