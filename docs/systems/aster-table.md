# Aster Table

The Aster Table is the central workstation. The material placed in its right slot determines which relic operation it performs.

![The Aster Table relic-forging workstation](../assets/images/aster-table-render.svg){ .game-shot }

| Right-slot material | Operation |
|---|---|
| Aster Core I-III | Add Relic EXP and process crossed milestones |
| Dust of Enlightenment | Redistribute a finished relic's upgrade points |
| Resonance Core I-VI | Raise a max-level relic one matching rarity step |

## Crafting

![Aster Table crafting recipe](../assets/images/recipes/aster-table-recipe.png){ .recipe-image }

The top-center ingredient is the tag `solsrelicsystem:aster_cores`; datapacks may extend that tag.

## Screen layout

Read the table from left to right: **relic + material = previewed operation**.

<div class="aster-interface" role="img" aria-label="Aster Table screen with relic slot, material slot, and upgrade preview">
  <div class="aster-interface__title"><strong>ASTER TABLE</strong><span>Relic forging interface</span></div>
  <div class="aster-interface__work">
    <div class="aster-interface__slots">
      <div class="aster-slot">
        <span>1 · Relic</span>
        <div class="aster-slot__box"><img src="../../assets/images/pixel-diamond-sword.png" alt="Pixel-art diamond sword relic"></div>
        <small>The gear being changed</small>
      </div>
      <span class="aster-interface__operator" aria-hidden="true">+</span>
      <div class="aster-slot">
        <span>2 · Material</span>
        <div class="aster-slot__box"><span class="item-sprite item-sprite--t3" aria-hidden="true"></span><b>16</b></div>
        <small>The operation selector</small>
      </div>
    </div>
    <div class="aster-preview">
      <span class="aster-preview__label">3 · Server preview</span>
      <strong>Legendary Netherite Sword</strong>
      <div class="aster-preview__change"><span>Level</span><b>+12 to +16</b></div>
      <div class="aster-preview__change"><span>Crit Rate</span><b>23.0% to 28.9%</b></div>
      <div class="aster-preview__cost">13 Aster Core I · 6,370 EXP</div>
      <small>Review this result before confirming.</small>
    </div>
  </div>
  <div class="aster-interface__inventory"><span>Equipment</span><i></i><i></i><i></i><i></i><i></i><span>Inventory stays available below the operation</span></div>
</div>

<div class="screen-key">
  <div><b>1</b><span><strong>Choose the relic.</strong> Eligible gear goes in the left slot.</span></div>
  <div><b>2</b><span><strong>Choose the action.</strong> Aster Core levels, Dust rerolls, and Resonance Core ascends.</span></div>
  <div><b>3</b><span><strong>Trust the preview.</strong> The server shows the exact cost and result before anything is consumed.</span></div>
</div>

The confirmation overlay appears only after the preview is accepted. While it is open, unrelated table input is locked so the operation cannot change underneath the confirmation.

Shift-click routing prefers the material slot for recognized materials, the relic slot for eligible gear, then appropriate equipment or inventory slots.

## What each material does

=== "Aster Core"

    The table finds the smallest useful number of cores, previews deterministic milestone steps, and asks for confirmation. It consumes only the displayed count. If the remaining cores can fund another level, **Upgrade Again** starts the next cycle.

=== "Resonance Core"

    The preview compares old and target rarity, current and maximum level, and every affected stat. On confirmation, the server verifies the relic, matching core level, stable seed, and inventory capacity again.

=== "Dust"

    Dust opens a two-stage flow: confirm the attempt, then compare the old and redistributed upgrade points. The server holds recovery copies until the player chooses **Keep Old** or **Keep New**.

## Physical properties

The Aster Table has 2.5 hardness, 6 blast resistance, stone sound, light level 8, a custom collision shape, cyan/gold ambient particles, and horizontal facing based on placement. It requires the correct tool for drops.
