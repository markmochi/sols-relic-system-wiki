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

The detector first uses armor material identity, then registry-path tokens. Bows, crossbows, and shields default to iron; tridents to diamond; elytra to netherite.

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

The code rolls any incoming damage directly sourced from a player. When successful:

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

After per-slot relic modifiers are installed, the code sums relic attack-speed and move-speed contributions. If a cap is exceeded, every slot's contribution is proportionally scaled down.

- Default maximum relic ATK Speed bonus: **+25%**
- Default maximum relic Move Speed bonus: **+20%**

Set movement speed is a separate global modifier; administrators should account for it when balancing custom sets.

## Durability

Durability% is a weapon main stat. It runs after vanilla durability/Unbreaking behavior and probabilistically restores damage increments:

```text
prevention chance = effective Durability / (100 + effective Durability)
```

A displayed +20 Durability gives about 16.67% prevention, not a flat 20%. It also has a last-durability recovery path that can restore a would-be-destroyed item to one durability when prevention succeeds.

## Luck and jump

- Luck% becomes Minecraft Luck attribute at `effective value / 100 × 5`.
- Jump Boost modifies jump movement; the code comments identify roughly +35% as the normal two-block-jump region.

## Build archetypes

<div class="relic-grid">
  <div class="relic-card relic-card--purple"><h3>Crit carry</h3><p>Crit main weapon/helmet, double-Crit sub-stats, Diamond or Netherite set. Balance Crit Rate before overstacking Crit DMG.</p></div>
  <div class="relic-card relic-card--gold"><h3>Consistent ATK</h3><p>ATK% weapon/chest plus flat-ATK legs. Strong for all hits and the universal non-melee formula.</p></div>
  <div class="relic-card relic-card--green"><h3>Bulwark</h3><p>HP%/DEF% chest, flat-HP boots, Iron/Turtle/Leather set. Mix HP and DEF rather than duplicating one axis blindly.</p></div>
  <div class="relic-card"><h3>Tempo</h3><p>ATK Speed and Move Speed, stopping near configured caps. Use freed sub-stat slots for damage or survival.</p></div>
</div>

