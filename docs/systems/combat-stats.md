# Combat stats and effective builds

Relic values pass through several layers before affecting play. The tooltip and previews display effective contributions after material/scaling; final player attributes may also include set bonuses and caps.

## Material hierarchy

| Tier detector | Multiplier | Typical examples |
|---|---:|---|
| Wood / Leather | 0.45× | Wooden weapon, leather armor |
| Stone / Chainmail | 0.60× | Stone weapon, chainmail |
| Gold | 0.70× | Gold/golden equipment |
| Iron | 0.85× | Iron equipment, bows/crossbows/shields |
| Diamond | 1.00× | Diamond, turtle, trident |
| Netherite | 1.12× | Netherite, elytra |
| Special | 1.00× | Unrecognized/custom material fallback |

Forge 1.16.5/1.20.1 and NeoForge 1.21.1 use native material identity and defense-based classification for modded armor. Incomplete defense data now falls back safely to Special (1.00×). On NeoForge 1.21.1, only helmet, chestplate, leggings, and boots contribute; animal armor defense is excluded. NeoForge 1.21.11 uses material-name and item-path tokens. Bows, crossbows, and shields default to iron; tridents to diamond; elytra to netherite.

## Default scaling knobs

| Stat family | Multiplier |
|---|---:|
| Flat ATK | 0.50× |
| ATK% | 0.70× |
| Flat DEF / DEF% | 0.70× |
| Flat HP / HP% | 0.70× |
| Crit, speeds, jump, Luck, Durability | 1.00× |
| Offhand after the above | 0.50× |

Server owners can change these values.

## Critical hits

Defaults:

- base Crit Rate: 5%;
- base Crit DMG: 50%;
- Crit Rate cap: 100%;
- vanilla jump crit disabled;
- Sol's crit system enabled.

Critical chance is rolled for incoming damage directly caused by a player. When successful:

```text
crit multiplier = 1 + (total Crit DMG - 50) × 0.005
```

At 50 Crit DMG the multiplier is 1.0×. At 100 it is 1.25×; at 150 it is 1.50×. Crit DMG at or below 50 does not increase damage.

## ATK and non-melee damage

Melee damage receives flat ATK and ATK% as player attack attributes. For supported non-melee player-owned sources—arrows, thrown/hurting projectiles, and some tamed/owned damage—the universal handler applies:

```text
new damage = (original damage + scaled flat ATK × 0.75)
             × (1 + scaled ATK% / 100 × 0.75)
```

Set ATK% is included. The 0.75 efficiencies and the entire universal handler are configurable.

## Defense and health

- Flat DEF adds armor points.
- DEF% multiplies base armor.
- Flat HP adds maximum-health points.
- HP% multiplies base max health.
- When equipment changes reduce maximum health, current health is clamped to prevent phantom health above the new maximum.

## Speed caps

After each equipped relic contributes its modifiers, total Attack Speed and Move Speed are checked against their caps. If a cap is exceeded, every slot's contribution is proportionally scaled down.

- Default maximum relic ATK Speed bonus: **+25%**
- Default maximum relic Move Speed bonus: **+20%**

Set movement speed is a separate global modifier; administrators should account for it when balancing custom sets.

## Durability

Durability% is a weapon main stat. It runs after vanilla durability/Unbreaking behavior and probabilistically restores damage increments:

```text
prevention chance = effective Durability / (100 + effective Durability)
```

A displayed +20 Durability gives about 16.67% prevention, not a flat 20%. It also has a last-durability recovery path that can restore a would-be-destroyed item to one durability when prevention succeeds.

## Luck and loot drops

In v1.5.8, equipped Relic and set-bonus **LUCK%** affects loot directly. Use the effective Luck total in the Stat Summary after material and offhand scaling.

- Every **1% Luck** gives a **0.5% chance** to generate one additional roll of an applicable loot table.
- **100% Luck** reaches the cap: **50% bonus-roll chance**. Luck above this does not raise this bonus further.
- Loot-table drops include chest rewards, vanilla mob drops such as Wither Skeleton Skulls, and supported modded loot. All normal table conditions still apply; an extra roll does not guarantee a rare item.
- Direct Aster Core, Resonance Core, and Dust mob drops instead have their existing chances multiplied by the equivalent relative bonus, with each chance capped at 100%.

| Effective Luck | Extra loot-roll chance | Direct material drop multiplier |
|---|---:|---:|
| 0% | 0% | 1.00× |
| 20% | 10% | 1.10× |
| 50% | 25% | 1.25× |
| 100% or more | 50% | 1.50× |

For example, **20% Luck** raises a direct **8% Dust** drop chance to **8.8%**, rather than adding 10 percentage points. Default **12%** combined Aster Core odds become **13.2%**. See [Mob and chest drops](../admin/entity-drops.md) for eligibility and configuration.

### Wither Skeleton Skull example

With default Java loot tables, eligible player kills, **50% displayed Luck**, and no other Luck effects:

| Looting | Vanilla chance of a skull | With Luck: chance of at least one skull |
|---|---:|---:|
| None | 2.5% | 3.1094% |
| III | 5.5% | 6.7994% |

Because the bonus roll can also succeed when the original roll succeeds, a kill can occasionally produce two skulls. Average skull yield rises by **25%**: without Looting, from **2.5** to **3.125 skulls per 100 kills**. The chance of at least one skull is `p + q × p × (1 - p)`, where `p` is the vanilla chance and `q` is the bonus-roll chance.

These are v1.5.8 rules; v1.57 did not include the bonus-roll implementation. Other Luck effects and loot-changing mods can alter the result. Internally, Relic Luck contributes to Minecraft's Luck attribute at `effective Luck / 100 × 5`; the loot bonus uses that attribute.

## Jump Boost

Jump Boost modifies jump movement; roughly +35% reaches the normal two-block-jump region.

## Build archetypes

<div class="relic-grid">
  <div class="relic-card relic-card--purple"><h3>Crit carry</h3><p>Crit main weapon/helmet, double-Crit sub-stats, Diamond or Netherite set. Balance Crit Rate before overstacking Crit DMG.</p></div>
  <div class="relic-card relic-card--gold"><h3>Consistent ATK</h3><p>ATK% weapon/chest plus flat-ATK legs. Strong for all hits and the universal non-melee formula.</p></div>
  <div class="relic-card relic-card--green"><h3>Bulwark</h3><p>HP%/DEF% chest, flat-HP boots, Iron/Turtle/Leather set. Mix HP and DEF rather than duplicating one axis blindly.</p></div>
  <div class="relic-card"><h3>Tempo</h3><p>ATK Speed and Move Speed, stopping near configured caps. Use freed sub-stat slots for damage or survival.</p></div>
</div>
