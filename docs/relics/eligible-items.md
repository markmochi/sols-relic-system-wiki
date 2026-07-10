# Eligible equipment

<span class="source-stamp">Source: RelicDataManager.isRelicEligible / isWeapon / isArmor</span>

Eligibility runs in this order:

1. A registered special relic is accepted.
2. The JSON blacklist rejects a matching item or namespace.
3. The JSON whitelist accepts a matching item or namespace.
4. Otherwise, normal weapon and armor detection runs.

The blacklist therefore wins over the whitelist.

## Armor

Any non-empty stack with a valid armor equipment slot is accepted:

- head;
- chest, including equippable elytra-like items;
- legs;
- feet.

The item's real equipment slot decides its main-stat pool. Armor only grants its relic stats when worn in that correct slot.

## Weapons

The detector accepts several routes:

- native trident, mace, bow, crossbow, projectile-weapon, or weapon-like classes;
- NeoForge/Forge melee and ranged weapon/tool tags;
- sword-sweep or trident-throw item abilities;
- a positive main-hand attack-damage entry;
- class names containing `weapon`, `weapons`, or `battleaxe`;
- registry paths containing recognized weapon tokens.

Recognized registry-path families include:

```text
sword, katana, blade, dagger, rapier, spear, trident, mace,
bow, crossbow, gun, rifle, pistol, staff, scythe, weapon
```

Qualified combat axes include names such as `battle_axe`, `waraxe`, `great-axe`, and `doubleaxe`.

## Utility tools are intentionally excluded

The current v1.55 code detects utility behavior before accepting generic tags or attack damage. Normal instances of these are not relic weapons:

- pickaxes and mining drills/hammers;
- shovels and spades;
- hoes and sickles;
- ordinary axes, hatchets, and lumber axes;
- similarly named modded mining tools detected from block-breaking behavior.

This is a deliberate current-code distinction. A server owner can opt a specific tool in through `relic_whitelist.json`.

!!! tip "Server-safe compatibility fix"
    Prefer whitelisting one item ID, such as `someweapons:moon_blade`. Whitelisting a whole namespace forces every item from that mod—including food, materials, and blocks—through relic eligibility as a main-hand item.

## Shields, fishing rods, and unusual equipment

They are not automatically accepted merely because players think of them as equipment. They need a recognized weapon route, special-relic integration, or whitelist entry. Use F3+H to find the registry ID and test with a specific whitelist entry.

## When an item still does not work

Check in this order:

1. `general.enabled` is true.
2. The item or its namespace is not in `relic_blacklist.json`.
3. It is actually equippable armor or detected as a weapon.
4. If it is a utility/unusual item, add its exact ID to the whitelist.
5. Run `/srs reload`, then reacquire or reprocess the item.

