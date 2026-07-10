# Stats and roll values

This page lists values stored directly in `StatType`. Tables show **raw values** before material, stat-scaling, and offhand multipliers.

## Main-stat pools

Main-stat weights sum to 100 within each slot, so each weight is also its default percentage chance.

### Helmet

| Main stat | Chance | Raw value at +0 | Raw growth per level |
|---|---:|---:|---:|
| Crit DMG | 15% | 9.3% | +2.645% |
| Crit Rate | 15% | 4.7% | +1.32% |
| Luck | 25% | 4.0% | +0.6% |
| ATK Speed | 20% | 3.0% | +0.45% |
| Move Speed | 25% | 3.0% | +0.45% |

### Chestplate or chest-slot equipment

| Main stat | Chance | Raw value at +0 | Raw growth per level |
|---|---:|---:|---:|
| DEF% | 35% | 8.7% | +2.48% |
| HP% | 35% | 7.0% | +1.98% |
| ATK% | 30% | 7.0% | +1.98% |

### Leggings and boots

| Slot | Fixed main stat | Raw value at +0 | Raw growth per level |
|---|---|---:|---:|
| Legs | Flat ATK | 1.0 | +0.2 |
| Feet | Flat HP | 3.0 | +0.6 |

### Weapons and whitelisted main-hand items

| Main stat | Chance | Raw value at +0 | Raw growth per level |
|---|---:|---:|---:|
| ATK% | 25% | 7.0% | +1.98% |
| ATK Speed | 25% | 3.0% | +0.45% |
| Crit Rate | 15% | 4.7% | +1.32% |
| Crit DMG | 15% | 9.3% | +2.645% |
| Durability | 20% | 5.0% | +1.25% |

Durability is main-stat-only and cannot appear as a sub-stat.

## Sub-stat quality tiers

Every new sub-stat and every normal milestone upgrade chooses one of its four values with equal **25% probability**.

| Sub-stat | Tier 1 | Tier 2 | Tier 3 | Tier 4 | Selection weight* |
|---|---:|---:|---:|---:|---:|
| Flat ATK | 0.5 | 0.8 | 1.1 | 1.5 | 150 |
| Flat DEF | 0.5 | 1.0 | 1.5 | 2.0 | 150 |
| Flat HP | 1.0 | 2.0 | 3.0 | 4.0 | 150 |
| ATK% | 4.1% | 4.7% | 5.3% | 5.8% | 100 |
| DEF% | 5.1% | 5.8% | 6.6% | 7.3% | 100 |
| HP% | 4.1% | 4.7% | 5.3% | 5.8% | 100 |
| Crit Rate | 2.7% | 3.1% | 3.5% | 3.9% | 38 |
| Crit DMG | 5.4% | 6.2% | 7.0% | 7.8% | 38 |
| Move Speed | 1.5% | 2.0% | 2.5% | 3.0% | 80 |
| ATK Speed | 1.5% | 2.0% | 2.5% | 3.0% | 80 |
| Jump Boost | 3.0% | 4.0% | 5.2% | 6.5% | 120 |
| Luck | 2.0% | 2.7% | 3.3% | 4.0% | 80 |

\*Crit's declared weight is 75, then the default `critSubStatWeightMultiplier = 0.5` is applied and rounded, producing 38. Server configuration can change that multiplier.

Sub-stat selection is weighted among only the currently legal types:

- the main-stat type is removed;
- Durability is always removed;
- types already present on the relic are removed;
- Crit weights are adjusted by the configured multiplier.

Because the available pool shrinks after every selection, exact percentages change from one sub-stat slot to the next.

## What each stat does

| Stat | Applied effect |
|---|---|
| Flat ATK | Adds attack damage; also contributes to supported non-melee damage |
| ATK% | Multiplies base attack damage; contributes to supported non-melee damage |
| Flat DEF | Adds armor points |
| DEF% | Multiplies base armor |
| Flat HP | Adds maximum health |
| HP% | Multiplies base maximum health |
| Crit Rate | Added to the configured 5% base, capped at 100% by default |
| Crit DMG | Added to the configured 50% base; only the amount above 50 raises the multiplier |
| Move Speed | Multiplies movement speed, with a default +20% total relic cap |
| ATK Speed | Multiplies attack speed, with a default +25% total relic cap |
| Jump Boost | Applied through the jump handler; approximately 35% reaches a two-block jump under normal conditions |
| Luck | Converts percentage into Minecraft Luck attribute contribution (`value / 100 × 5`) |
| Durability | Converts bonus to prevention chance `bonus / (100 + bonus)` after Unbreaking processing |

## Effective-stat calculator

Use this to understand material, scaling, and offhand reductions. Choose 1.0 scaling for Crit, speed, jump, Luck, or Durability.

<div class="calculator" data-effective-stat-calculator>
  <div class="calculator__grid">
    <label>Raw stat value<input name="raw" type="number" value="10" min="0" step="0.1"></label>
    <label>Material<select name="material"><option value="0.45">Wood / Leather (0.45)</option><option value="0.60">Stone / Chainmail (0.60)</option><option value="0.70">Gold (0.70)</option><option value="0.85">Iron (0.85)</option><option value="1" selected>Diamond / Special (1.00)</option><option value="1.12">Netherite (1.12)</option></select></label>
    <label>Stat scaling<select name="scaling"><option value="0.5">Flat ATK (0.50)</option><option value="0.7" selected>Default ATK% / DEF / HP (0.70)</option><option value="1">Unscaled type (1.00)</option></select></label>
    <label>Hand<select name="hand"><option value="1" selected>Main hand / armor</option><option value="0.5">Offhand (0.50)</option></select></label>
    <button type="button">Calculate</button>
  </div>
  <div class="calculator__result" data-result></div>
</div>

