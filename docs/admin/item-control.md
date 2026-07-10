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

Adding an item to the blacklist prevents normal future eligibility; it does not automatically erase already-stored relic data from existing stacks. Use admin tooling carefully if a migration must clean old data.

Adding an item to the whitelist affects it when assignment next processes an eligible data-less stack. A fresh copy is the simplest test.

## Updating the lists

1. Enable F3+H advanced tooltips.
2. Record the exact lower-case registry ID.
3. Edit one JSON file.
4. Validate the JSON.
5. Run `/srs reload`.
6. Test a fresh stack and inspect its main-stat pool.
