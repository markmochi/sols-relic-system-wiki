# Five-minute start

This path takes a fresh player from compatible equipment to the first milestone.

## 1. Obtain compatible equipment

Use a weapon or an armor piece. The current detector recognizes armor equipment slots and many weapon classes, tags, names, and positive main-hand attack-damage entries. Ordinary pickaxes, shovels, hoes, and utility axes are deliberately treated as utility tools unless the server whitelists them.

When the server processes an eligible item, it receives:

- one main stat based on its equipment slot;
- zero to four starting sub-stats based on rarity;
- level +0 and zero stored Relic EXP;
- a private seed that locks future milestone outcomes.

Hover the item to see the relic panel. If no panel appears, read [Eligible equipment](../relics/eligible-items.md).

## 2. Find Aster Cores

Configured mobs can drop one Aster Core when directly credited to a player kill. With defaults, one combined roll selects at most one tier:

| Core | Default mob chance | EXP |
|---|---:|---:|
| Tier I | 1% | 500 |
| Tier II | 3% | 200 |
| Tier III | 8% | 80 |

Resonance Core I (0.8%) and II (0.5%) use a separate roll and may drop alongside an Aster Core. Chests can also contain cores; their chances depend on the chest category.

<div class="gallery-row">
  <div class="item-frame"><div class="item-sprite item-sprite--t1"></div><small>Tier I · 500 EXP</small></div>
  <div class="item-frame"><div class="item-sprite item-sprite--t2"></div><small>Tier II · 200 EXP</small></div>
  <div class="item-frame"><div class="item-sprite item-sprite--t3"></div><small>Tier III · 80 EXP</small></div>
</div>

## 3. Craft the Aster Table

Use any item in `#solsrelicsystem:aster_cores` in the top-center slot.

<div class="recipe" aria-label="Aster Table crafting recipe">
  <div class="recipe__slot">Book</div><div class="recipe__slot">Any Aster<br>Core</div><div class="recipe__slot">Book</div>
  <div class="recipe__slot">Diamond</div><div class="recipe__slot">Anvil</div><div class="recipe__slot">Diamond</div>
  <div class="recipe__slot">Diamond</div><div class="recipe__slot">Diamond</div><div class="recipe__slot">Diamond</div>
</div>

Place and use the table. It has two progression inputs: relic on the left and material on the right. Your armor slots and inventory remain visible for convenient gear management.

## 4. Level the relic

1. Put the relic in the **relic slot**.
2. Put a stack of Aster Cores in the **material slot**.
3. Review the preview: current level, resulting level, EXP, cores consumed, main-stat growth, and any milestones crossed.
4. Confirm. The table consumes only the displayed number of cores and returns the upgraded relic to your inventory.
5. If enough cores remain, use **Upgrade Again** to continue.

The first four default level costs are 135, 180, 235, and 300 EXP. Reaching +4 therefore costs **850 total EXP**.

## 5. Read the +4 milestone

At +4, one of two things happens:

- If the relic has fewer than four sub-stats, it gains one new, non-duplicate sub-stat.
- If it already has four, one existing sub-stat is chosen uniformly and gains one roll tier of its own stat.

Milestone results are calculated from the relic's stored seed and level. Closing the game, moving the item, or reloading the world does not change them.

## 6. Plan the next step

- A weak starting set of **stat types** is usually not worth expensive investment; Dust cannot replace those types.
- A good set of types with poor milestone distribution can become a Dust candidate at max level.
- A lower-rarity item can be raised one rarity at a time through [Resonance ascension](../systems/ascension.md).
- An unwanted leveled item can be converted into Tier III cores with `/srs recycle`.

<div class="build-callout"><strong>Best early rule:</strong> choose the relic for its main stat and sub-stat types first. Values and upgrade distribution matter later; types are the hardest part to change.</div>

