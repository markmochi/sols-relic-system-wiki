# Leveling and milestones

Relics gain only **Relic EXP**, not player experience. Aster Cores are the supported leveling material and the Aster Table is the supported upgrade station.

## Default XP curve

The current v1.55 code uses:

```text
XP for target level L = round(100 + 30L + 5L²)
```

That is the simplified form of the configurable formula at defaults (`baseXPPerLevel = 50`, `xpScalingFactor = 0.25`). Costs increase quickly enough that late Supreme levels remain an investment.

| Rarity | Cap | Total EXP from +0 | Equivalent perfect-use Tier I cores* |
|---|---:|---:|---:|
| Common | +4 | 850 | 2 |
| Uncommon | +4 | 850 | 2 |
| Rare | +9 | 3,675 | 8 |
| Epic | +12 | 6,790 | 14 |
| Legendary | +16 | 13,160 | 27 |
| Mythical | +20 | 22,650 | 46 |
| Supreme | +24 | 35,900 | 72 |

\*Core count rounds up. Surplus EXP carries through intermediate levels during the operation but stored XP is cleared at the maximum level.

## How the Aster Table chooses core count

When you insert a core stack, the server searches from one core upward:

1. It tries to consume the smallest count that reaches an upcoming milestone.
2. If no milestone can be reached with the available stack, it targets the maximum reachable step—normally the rarity cap.
3. The preview uses only the displayed number, never the whole stack blindly.
4. It calculates whether leftover cores could fund another level and exposes Upgrade Again when appropriate.

## Milestones

The default interval is every four levels:

```text
+4 → +8 → +12 → +16 → +20 → +24
```

At each milestone:

- **Under four sub-stats:** add a new weighted, non-duplicate type with a 25%-each quality roll.
- **At four sub-stats:** choose one existing sub-stat uniformly, add one 25%-each value roll of that stat, and increment its upgrade count.

The main stat also grows at every level, including milestones.

## Deterministic milestone seed

Each relic receives its own seed when created. Milestones combine that seed with the milestone level to choose the target stat and roll value. Therefore:

- reloading does not change an outcome;
- moving the relic to another player does not change it;
- previewing and canceling does not change it;
- inserting a different number or tier of cores does not change a crossed milestone.

This prevents save-scumming. The only supported way to redistribute finished milestone upgrades is Dust.

## Relic EXP calculator

Enter the relic's current stored EXP shown in its tooltip. This calculator uses the v1.55 defaults.

<div class="calculator" data-relic-xp-calculator>
  <div class="calculator__grid">
    <label>Current level<input name="current_level" type="number" value="0" min="0" max="24"></label>
    <label>Stored EXP<input name="current_xp" type="number" value="0" min="0"></label>
    <label>Target level<input name="target_level" type="number" value="12" min="0" max="24"></label>
    <label>Core type<select name="core_xp"><option value="500">Tier I · 500 EXP</option><option value="200">Tier II · 200 EXP</option><option value="80" selected>Tier III · 80 EXP</option></select></label>
    <button type="button">Calculate</button>
  </div>
  <div class="calculator__result" data-result></div>
</div>

## Upgrade safety

Before committing, the server rechecks the relic level, the stored seed, the material type, and the required core count. Confirmation cancellation leaves the table inputs untouched. On success, the upgraded copy is created before inputs are consumed; if the output cannot safely enter inventory, the operation reports failure.
