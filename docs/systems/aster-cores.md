# Aster Cores and drops

<div class="gallery-row">
  <div class="item-frame"><div class="item-sprite item-sprite--t1"></div><small>Aster Core I<br>500 EXP</small></div>
  <div class="item-frame"><div class="item-sprite item-sprite--t2"></div><small>Aster Core II<br>200 EXP</small></div>
  <div class="item-frame"><div class="item-sprite item-sprite--t3"></div><small>Aster Core III<br>80 EXP</small></div>
</div>

Tier I is the strongest and rarest core. Tier numbering describes potency, not the usual low-to-high order.

## Mob drops

On an allowed entity killed directly by a player, the code performs one combined tier roll:

| Outcome | Default interval on the roll | Exact chance |
|---|---:|---:|
| Tier I | 0–1 | 1% |
| Tier II | 1–4 | 3% |
| Tier III | 4–12 | 8% |
| No Aster Core | 12–100 | 88% |

At most one Aster Core comes from this roll. Looting is not consulted by this handler, and environmental/non-player kills fail the player-credit check.

## Default allowed mobs

The generated allow-list contains:

```text
Zombie, Husk, Drowned, Skeleton, Stray, Creeper,
Spider, Cave Spider, Enderman, Witch, Pillager, Vindicator,
Evoker, Ravager, Blaze, Ghast, Magma Cube, Silverfish,
Endermite, Guardian, Elder Guardian, Phantom, Shulker,
Piglin Brute, Wither, Ender Dragon, Warden
```

Server owners can add exact entity IDs, namespaces, or UUID entries in `aster_core_mobs.json`.

## Bonus Resonance drops

Before checking whether ordinary Aster Core drops are enabled, the same allowed-mob handler makes a separate roll:

- **Resonance Core II:** 0.5%
- **Resonance Core I:** 0.8% after the Core II interval
- total chance for either: 1.3%

Because this roll is separate, a valid player kill can drop both one low Resonance Core and one Aster Core.

## Chest drops

For each chest loot table, default Aster chances are multiplied by category:

| Chest category | Multiplier | Combined chance | Possible stack increase |
|---|---:|---:|---|
| Common vanilla | 1.0× | 12% | All tiers ×1 |
| Rare vanilla | 1.5× | 18% | Tier I/II up to 2 |
| Modded namespace | 1.25× | 15% | All tiers ×1 |
| Ancient City / ice box | 2.0× | 24% | Tier I/II up to 2 |
| End City treasure | 3.0× | 36% | Tier I up to 3; Tier II/III up to 2 |

When a chest core pool succeeds, the tier is selected with weights proportional to its multiplied chance. The rare category includes bastion treasure, nether bridge, woodland mansion, stronghold library, buried treasure, and the listed normal/ominous Trial Chamber reward tables.

!!! note
    On some loader versions the injection implementation differs (loot-table event versus global modifiers), but the v1.55 configuration intent and documented category defaults are shared.

## Best farming approach

- Farm an allowed mob you can kill quickly with direct player credit.
- Add boss farming when you also want Dust; Dust has its own independent roll.
- Prioritize End City/Ancient City exploration for higher chest odds.
- Save Tier I cores for expensive late levels when fewer inventory slots and confirmation cycles matter.
- Use surplus Tier III cores for fine-grained progress and recycling refunds.

