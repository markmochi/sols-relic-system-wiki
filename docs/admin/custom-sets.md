# Custom armor sets

`set_bonuses.json` defines both built-in material entries and explicit item-list sets. The generated file is intended to be edited.

## Stat keys

Use enum names exactly:

```text
ATK_FLAT, DEF_FLAT, HP_FLAT,
ATK_PERCENT, DEF_PERCENT, HP_PERCENT,
CRIT_RATE, CRIT_DAMAGE,
MOVEMENT_SPEED, ATTACK_SPEED, JUMP_SPEED,
LUCK_PERCENT, DURABILITY_PERCENT
```

Not every stat has a live set-attribute application path. The standard handler explicitly applies ATK%, DEF%, HP%, Move Speed, Luck, Crit Rate, and Crit DMG from sets. Test unusual flat/speed/jump/durability custom-set keys before relying on them.

## Full example

```json
{
  "_config_version": 1,
  "material_sets": {
    "leather": {
      "name": "Leather",
      "name_key": "solsrelicsystem.set.leather.name",
      "lore": "Worn by wanderers who endure the wild.",
      "lore_key": "solsrelicsystem.set.leather.lore",
      "2piece": { "HP_PERCENT": 5.0 },
      "4piece": { "HP_PERCENT": 10.0, "DEF_PERCENT": 5.0 }
    }
  },
  "custom_sets": {
    "shadow_walker": {
      "name": "Shadow Walker",
      "lore": "Born from the void between worlds.",
      "items": [
        "examplemod:shadow_helmet",
        "examplemod:shadow_chestplate",
        "examplemod:shadow_leggings",
        "examplemod:shadow_boots"
      ],
      "2piece": {
        "MOVEMENT_SPEED": 8.0,
        "CRIT_RATE": 5.0
      },
      "4piece": {
        "CRIT_RATE": 15.0,
        "CRIT_DAMAGE": 25.0,
        "ATK_PERCENT": 10.0
      }
    }
  }
}
```

## Cumulative rule

At four pieces, the calculation adds both maps. The example full set therefore grants:

```text
+8% Move Speed
+20% Crit Rate
+25% Crit DMG
+10% ATK
```

Write `4piece` as the extra four-piece tier, not the desired grand total, unless deliberate double counting is intended.

## Two-piece-only sets

Omit `4piece`. Maximum display count is based on up to four configured items, while the handler recognizes the missing four-piece map and shows only the 2-piece requirement.

## Custom-set priority

When identifying one item, exact custom-set membership is checked before material identity. Do not place the same armor item into multiple custom sets; the registry-to-set lookup can only resolve one final ID reliably.

## Localization

Built-in sets can use `name_key` and `lore_key`, resolved from the client's language files. Literal `name` and `lore` remain fallbacks and are the practical choice for private/custom packs without a resource pack.

## Reload and test

Run `/srs reload`, equip two pieces, inspect a relic tooltip and ++i++ summary, then equip all four. Check live attributes/damage rather than only text before deployment.

