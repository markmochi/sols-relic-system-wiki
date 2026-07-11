# Dust of Enlightenment

<div class="gallery-row"><div class="item-frame"><div class="item-sprite item-sprite--dust"></div><small>Dust of Enlightenment</small></div></div>

Dust is an endgame **upgrade-point redistributor**. It keeps the relic and its stat types, but gives the milestone points a new arrangement.

## What one Dust attempt does

<div class="dust-summary">
  <div><strong>Stays the same</strong><span>Relic, rarity, level, main stat, sub-stat types, and total upgrade points</span></div>
  <div><strong>Can change</strong><span>How many milestone points each existing sub-stat receives</span></div>
  <div><strong>Always spent</strong><span>One Dust and one reroll count, whether you keep the old or new result</span></div>
</div>

<div class="dust-flow" aria-label="Four steps in a Dust of Enlightenment reroll">
  <div class="dust-step">
    <b>1</b>
    <div><strong>Validate relic</strong><span>Max-level Epic or better with at least one sub-stat</span></div>
  </div>
  <div class="dust-step dust-step--commit">
    <b>2</b>
    <span class="item-sprite item-sprite--dust" aria-hidden="true"></span>
    <div><strong>Commit Dust</strong><span>The Dust is reserved for this attempt</span></div>
  </div>
  <div class="dust-step dust-step--compare">
    <b>3</b>
    <div>
      <strong>Redistribute</strong>
      <span class="dust-allocation dust-allocation--old">Old: ATK% +3 · Luck +1</span>
      <span class="dust-allocation dust-allocation--new">New: Crit +2 · ATK% +1 · HP% +1</span>
      <small>Both arrangements contain the same 4 points.</small>
    </div>
  </div>
  <div class="dust-step dust-step--choose">
    <b>4</b>
    <div><strong>Choose</strong><span><em>Keep New</em> or <em>Keep Old</em></span></div>
  </div>
</div>

<p class="dust-warning"><strong>Important:</strong> both choices consume the Dust and increase the reroll count. <strong>Keep Old</strong> protects the relic's stats, not the resource or pity progress.</p>

??? info "Eligibility checklist"
    A Dust attempt requires all of the following:

    - Epic rarity or higher
    - Maximum level for the current rarity
    - At least one sub-stat
    - Standard or supported special-relic reroll behavior
    - Survival mode; Creative mode is rejected

## A concrete example

Only existing milestone points move. Dust does not invent a fifth stat or replace a bad stat type.

| Existing sub-stat | Before | New result |
|---|---:|---:|
| Crit DMG | +0 | +2 |
| ATK% | +3 | +1 |
| HP% | +0 | +1 |
| Luck | +1 | +0 |
| **Total points** | **4** | **4** |

If you choose **Keep New**, the right column becomes permanent. If you choose **Keep Old**, the left column is restored.

??? note "How the numeric values are recalculated"
    When a stat keeps the same upgrade count, its numeric value stays unchanged. When its count changes, the value scales proportionally:

    ```text
    new value = old value × (new upgrades + 1) / (old upgrades + 1)
    ```

    This preserves the stat's underlying roll quality while moving milestone power between existing stat types.

## Pity attempt

Every **5th completed reroll** on the same relic is a pity attempt. The UI lets you select two preferred sub-stats. Guaranteed points are randomly split between those two first; any remaining points are then distributed across all sub-stats.

| Rarity | Guaranteed points shared by the selected stats |
|---|---:|
| Epic | Up to 2 |
| Legendary | Up to 3 |
| Mythical | Up to 3 |
| Supreme | Up to 3 |

"Up to" matters: the pity system cannot guarantee more points than the relic has in total.

## Keep New or Keep Old

- **Keep New:** save the redistributed counts and values.
- **Keep Old:** restore the exact pre-attempt stat arrangement.

Both complete the attempt, consume one Dust, and advance the fifth-reroll pity counter.

## Safety behavior

The server keeps recovery copies of the original relic and Dust while the choice screen is open. If computation fails or the player disconnects before choosing, both are returned. After a choice, a full inventory causes the relic to drop at the player instead of disappearing.

## Getting Dust

??? info "Default mob and chest rates"
    **Direct player-kill drops**

    | Mob | Chance |
    |---|---:|
    | Ender Dragon | 8% |
    | Warden | 5% |
    | Wither | 3% |
    | Elder Guardian | 2% |
    | Ravager | 1% |
    | Piglin Brute | 0.5% |
    | Vindicator | 0.5% |

    **Chest loot**

    | Category | Chance |
    |---|---:|
    | Common vanilla | 1% |
    | Rare vanilla | 3% |
    | Modded chest namespace | 3% |
    | Ancient City / ice box | 5% |
    | End City treasure | 7% |

### Crafting

![Dust of Enlightenment crafting recipe](../assets/images/recipes/dust-of-enlightenment.png){ .recipe-image }

One Dust can be crafted with **eight Resonance Core V** around a feather, making it a deliberately expensive endgame recipe.

## Before spending Dust

1. Do not use Dust to fix bad stat types; it cannot replace them.
2. Ascend first when ascension is planned, because ascension clears upgrade counts.
3. More milestone points create more meaningful possible distributions.
4. Time the fifth attempt for two stats you are happy to receive.
5. Compare effective values, not only the `+N` point counts.
