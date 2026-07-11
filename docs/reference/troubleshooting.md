# FAQ and troubleshooting

## My pickaxe/axe does not receive relic stats

Normal utility tools are excluded by current v1.55 detection. A combat-qualified axe name may work, while an ordinary axe does not. Add the exact item ID to `relic_whitelist.json` if the server wants it eligible.

## I reloaded but the next milestone stayed the same

Expected. Normal milestone outcomes are derived from the relic's stored seed and milestone level. Reloading, moving, or previewing the item cannot reroll them.

## Dust did not give me new stat types

Expected. Dust redistributes existing milestone upgrade points among the existing sub-stat types. It cannot change types or main stat.

## I kept the old Dust result but my reroll count increased

Expected. Dust was consumed and the attempt completed. Keep Old restores stats but still increments the counter and progresses pity.

## Ascension lowered my stats

Ascension raises rarity but resets relic level to +0, clears milestone points, and rerolls preserved sub-stat base values. Level the target-rarity relic again; compare the preview before confirming.

## A Resonance Core refuses to work

Check all of these:

- the relic exactly matches the core's source rarity;
- it is at that rarity's max level;
- rarity is not fixed;
- the Item Rarity pool permits the target tier;
- it is not a disallowed special relic;
- the correct core remains in the material slot.

## Phantom weapon stats are only half value

If it is the offhand phantom slot, this is the default 50% offhand efficiency. Main-hand phantom stats are full value before material/stat scaling.

## I cannot edit phantom slots

A red border/countdown means combat lock. Default duration is 30 seconds after dealing or receiving relevant damage. Wait for the timer or have the server adjust `phantomSlots.combatLockSeconds`.

## My weapon was removed from my hand

An active phantom weapon already overrides that hand. The restriction handler moves a second real weapon back to inventory—or drops it if no space—to prevent stat/weapon stacking. Deactivate the phantom slot before equipping another weapon there.

## Effective tooltip values look lower than the roll table

Roll tables are raw. The tooltip applies material tier and configured stat scaling, plus offhand efficiency where equipped. Flat ATK has a particularly strong default 0.50 scaling.

## Aster Cores are not dropping

Verify:

1. relic system and Aster drops are enabled;
2. the entity appears in `aster_core_mobs.json`;
3. the damage source credits a player directly;
4. chances were not set to zero;
5. you are judging enough kills for an 88% default no-core outcome.

Looting does not increase the custom handler chance.

## Dust is not dropping

Mob rates come from `dust_of_enlightenment_mobs.json`, not the common fallback chest setting. The mob needs a positive exact/namespace/UUID rate and a player-credit kill.

## `/srs recycle` says no levels

Only relics above +0 are valid. Recycling is also disabled in Creative and can be globally disabled by the server.

## A JSON edit has no effect

- Ensure valid JSON—no trailing commas.
- Use lower-case registry IDs.
- Entries beginning with `_` are ignored as examples.
- Run `/srs reload` as Game Master.
- For common TOML changes, restart the server if behavior remains cached/synced.

## Still need help?

Use the [bug-report guide](reporting-issues.md) to collect the right versions, logs, screenshots, and reproduction steps before opening an issue. A complete report makes the problem much easier to reproduce and fix.
