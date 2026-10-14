# Item blacklist and whitelist

## Precedence

```text
special relic → blacklist reject → whitelist accept → normal detector
```

Blacklist takes priority if the same item/namespace appears in both files.

## Blacklist

`relic_blacklist.json` excludes normal items from relic assignment.

```json
{
  "_config_version": 1,
  "blacklist": [
    "problematicmod",
    "minecraft:wooden_sword",
    "examplemod:admin_blade"
  ]
}
```

- `problematicmod` blocks the entire namespace.
- `modid:item_id` blocks one item.
- strings beginning with `_` are ignored as examples.

## Whitelist

`relic_whitelist.json` bypasses normal armor/weapon detection.

```json
{
  "_config_version": 1,
  "whitelist": [
    "exampleweapons:moon_staff",
    "exampletools:diamond_drill"
  ]
}
```

Whitelisted non-armor items use the weapon/main-hand main-stat pool. This can intentionally enable utility tools, but it can also turn inappropriate items into relics.

## Whole-mod warning

A bare namespace is allowed in the whitelist, but food, blocks, crafting materials, and curios are not filtered out afterward. Prefer exact IDs unless the namespace contains only suitable equipment.

## Existing items

In v1.5.8, the server reconciles existing inventory items as well as future pickups. After a reload, adding a normal item to the blacklist removes its invalid stored Relic data during reconciliation and refreshes its applied bonuses. Supported special relics keep their integration-defined eligibility.

Adding an item to the whitelist assigns stats to eligible stacks that do not already have Relic data, including items already in online players' inventories. The same checks run on login and respawn and periodically after inventories are restored or new items are obtained. Existing valid Relic rolls are retained.

Server-assigned stored stats control client tooltips; a different or malformed local whitelist no longer hides valid server data.

## Updating the lists

1. Enable F3+H advanced tooltips.
2. Record the exact lower-case registry ID.
3. Edit one JSON file.
4. Validate the JSON.
5. Run `/sol relicsystem reload`.
6. Inspect an existing eligible stack in an online player's inventory as well as a new copy; the reload applies the new rules immediately. Check its main-stat pool and equipped bonuses.
