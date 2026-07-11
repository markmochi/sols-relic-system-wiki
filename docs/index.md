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
  <div class="relic-card__kicker">Latest release · July 11, 2026</div>
  <h3>Sol's Relic System v1.55</h3>
  <p>Adds <code>relic_whitelist.json</code>, letting server owners opt otherwise-unrecognized modded equipment into relic stat rolls while preserving blacklist priority.</p>
  <p><a href="changelog/">Explore every release from v1.5 →</a></p>
</div>

## The progression loop

![Relic progression from discovery through ascension](assets/images/progression-loop.svg){ .game-shot }

1. **Acquire compatible gear.** Rarity comes from Sol's Item Rarity; relic data is assigned by Sol's Relic System.
2. **Inspect the starting roll.** Every relic has one slot-based main stat and rarity-dependent starting sub-stats.
3. **Spend Aster Cores.** Each core adds Relic EXP at the Aster Table.
4. **Reach milestones.** Default milestones at +4, +8, +12, +16, +20, and +24 add a missing sub-stat or upgrade one existing sub-stat.
5. **Finish or recycle.** Keep a strong max-level relic, reroll its upgrade distribution with Dust, ascend it, or recycle an unwanted leveled relic.
6. **Build around equipment.** Material multipliers, set bonuses, speed caps, offhand efficiency, and phantom overrides determine the effective result.

!!! info "Default settings"
    Values shown throughout the guide use Sol's Relic System v1.55 defaults. Server configuration can change drop rates, XP, caps, eligible items, armor sets, and other balance settings.

## What is covered

- Minecraft **1.16.5 Forge**, **1.20.1 Forge**, **1.21.1 NeoForge**, and **1.21.11 NeoForge**
- Relic assignment, main stats, sub-stats, quality tiers, rarity, EXP, and deterministic milestones
- The Aster Table, Aster Cores, chest loot, mob drops, and exact default rates
- Resonance Cores I–VI, ascension requirements, preservation rules, previews, and crafting chain
- Dust rerolls, upgrade-point redistribution, Keep Old/Keep New, and five-reroll pity
- Effective stats, critical hits, universal damage, durability, offhand penalties, and material scaling
- Armor sets, phantom weapon slots, recycling, screens, tooltips, advancements, and commands
- Every generated configuration file and practical server examples
