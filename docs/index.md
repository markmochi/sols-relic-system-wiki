---
title: Sol's Relic System Field Guide
description: The complete guide to relic stats, leveling, ascension, rerolls, builds, and server configuration.
hide:
  - toc
---

<section class="relic-hero">
  <div>
    <div class="relic-hero__eyebrow">The complete relic field guide</div>
    <h1>Forge power.<br>Rewrite fate.</h1>
    <p class="relic-hero__lead">Turn compatible weapons and armor into long-term RPG gear. Hunt upgrade materials, shape a build through milestone rolls, ascend rarity, and use Dust to redistribute a finished relic's power.</p>
    <div class="relic-hero__actions">
      <a class="relic-button" href="getting-started/quick-start/">Begin the first relic →</a>
      <a class="relic-button relic-button--ghost" href="relics/optimization/">Buildcrafting guide</a>
      <a class="relic-button relic-button--ghost" href="changelog/">Release timeline</a>
    </div>
  </div>
  <div class="hero-relics" aria-label="Relic materials from the mod">
    <div class="item-frame"><div class="item-sprite item-sprite--t2"></div><small>Aster Core II</small></div>
    <div class="item-frame"><div class="item-sprite item-sprite--r6"></div><small>Resonance Core VI</small></div>
    <div class="item-frame"><div class="item-sprite item-sprite--dust"></div><small>Dust of Enlightenment</small></div>
  </div>
</section>

## Choose your path

<div class="relic-grid">
  <div class="relic-card"><div class="relic-card__kicker">New adventurer</div><h3>Your first relic</h3><p>Install the dependency, find compatible gear, craft an Aster Table, and complete your first upgrade.</p><p><a href="getting-started/quick-start/">Follow the five-minute guide →</a></p></div>
  <div class="relic-card relic-card--gold"><div class="relic-card__kicker">Endgame</div><h3>Ascend rarity</h3><p>Raise a max-level relic one rarity at a time with the matching Resonance Core.</p><p><a href="systems/ascension/">Master ascension →</a></p></div>
  <div class="relic-card relic-card--purple"><div class="relic-card__kicker">Buildcrafting</div><h3>Control the odds</h3><p>Know which rolls can change, which are permanent, and when Dust is worth spending.</p><p><a href="relics/optimization/">Roll better relics →</a></p></div>
  <div class="relic-card relic-card--green"><div class="relic-card__kicker">Server owners</div><h3>Tune the whole loop</h3><p>Control eligible items, mob lists, drop chances, XP, caps, sets, and cross-mod balance.</p><p><a href="admin/configuration/">Open the admin manual →</a></p></div>
</div>

## Release timeline

<div class="relic-card relic-card--gold release-preview">
  <div class="relic-card__kicker">Latest release · July 2026</div>
  <h3>Sol's Relic System v1.56</h3>
  <p>Cleans up obsolete configuration, fixes unwanted common-config rewrites, and keeps client displays aligned with the server's actual progression and stat balance.</p>
  <p><a href="changelog/">Explore every release from v1.5 →</a></p>
</div>

## The progression loop

Follow one relic through six decisions. You do not need to learn the endgame systems before making your first upgrade.

<div class="guide-flow guide-flow--progression" aria-label="Six steps in relic progression">
  <div class="guide-step">
    <span class="guide-step__number">1</span>
    <img class="guide-step__image" src="assets/images/pixel-diamond-sword.png" alt="Pixel-art diamond sword">
    <div><strong>Acquire</strong><span>Find compatible gear with a rarity.</span></div>
  </div>
  <div class="guide-step">
    <span class="guide-step__number">2</span>
    <span class="guide-step__symbol guide-step__symbol--stats" aria-hidden="true">ATK%</span>
    <div><strong>Inspect</strong><span>Check the main stat and starting sub-stats.</span></div>
  </div>
  <div class="guide-step">
    <span class="guide-step__number">3</span>
    <span class="item-sprite item-sprite--t2 guide-step__sprite" aria-hidden="true"></span>
    <div><strong>Level</strong><span>Spend Aster Cores at the Aster Table.</span></div>
  </div>
  <div class="guide-step">
    <span class="guide-step__number">4</span>
    <span class="guide-step__symbol guide-step__symbol--milestone" aria-hidden="true">+4</span>
    <div><strong>Reach milestones</strong><span>Add a sub-stat or upgrade an existing one.</span></div>
  </div>
  <div class="guide-step">
    <span class="guide-step__number">5</span>
    <span class="item-sprite item-sprite--dust guide-step__sprite" aria-hidden="true"></span>
    <div><strong>Finish the relic</strong><span>Keep, reroll, ascend, or recycle it.</span></div>
  </div>
  <div class="guide-step">
    <span class="guide-step__number">6</span>
    <span class="guide-step__symbol guide-step__symbol--build" aria-hidden="true">4/4</span>
    <div><strong>Build around it</strong><span>Combine effective stats, materials, and set bonuses.</span></div>
  </div>
</div>

<p class="flow-next"><strong>New player?</strong> Stop after step 3 for now. The <a href="getting-started/quick-start/">five-minute guide</a> walks through that first upgrade.</p>

!!! info "Default settings"
    Values shown throughout the guide use Sol's Relic System v1.56 defaults. Server configuration can change drop rates, XP, caps, eligible items, armor sets, and other balance settings.

## What is covered

- Minecraft **1.16.5 Forge**, **1.20.1 Forge**, **1.21.1 NeoForge**, and **1.21.11 NeoForge**
- Relic assignment, main stats, sub-stats, quality tiers, rarity, EXP, and deterministic milestones
- The Aster Table, Aster Cores, chest loot, mob drops, and exact default rates
- Resonance Cores I–VI, ascension requirements, preservation rules, previews, and crafting chain
- Dust rerolls, upgrade-point redistribution, Keep Old/Keep New, and five-reroll pity
- Effective stats, critical hits, universal damage, durability, offhand penalties, and material scaling
- Armor sets, phantom weapon slots, recycling, screens, tooltips, advancements, and commands
- Every generated configuration file and practical server examples
