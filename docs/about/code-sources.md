# Code sources and verification

This wiki was built from the executable mod projects, not the existing description/changelog Markdown in the workspace.

## Audited code lines

| Minecraft | Project | Mod version |
|---|---|---:|
| 1.16.5 Forge | `1.16.5 Mods/SolsRelicSystem` | 1.55 |
| 1.20.1 Forge | `1.20.1 Mods/SolsRelicSystem-1.20.1` | 1.55 |
| 1.21.1 NeoForge | `1.21.1 Mods/SolsRelicSystem-1.21.1-NeoForge` | 1.55 |
| 1.21.11 NeoForge | `1.21.11 Mods/SolsRelicSystem-1.21.11 -NeoForge` | 1.55 |

Each contains the same 75 player/server/client Java class roles. Loader-specific syntax differs, while documented gameplay values were checked across the synchronized source lines.

## Primary classes used

| Topic | Code authority |
|---|---|
| Relic data, rarity caps, XP formula | `RelicData` |
| Eligibility, rolls, milestones, ascension creation | `RelicDataManager` |
| Stat pools, weights, values | `StatType`, `SubStat` |
| Material hierarchy | `MaterialTier` |
| Aster Table routing and leveling | `AsterTableMenu`, `AnvilHandler` |
| Ascension validation/seed/commit | `ResonanceAscensionManager`, `ResonanceCoreItem` |
| Dust algorithm/pity/recovery | `DustRerollManager` |
| Crit formula | `CritSystem`, `CritDamageHandler` |
| Effective values and attributes | `RelicStatDisplay`, `RelicAttributeHandler` |
| Universal player-owned damage | `UniversalDamageHandler` |
| Durability | `RelicDurabilityHandler` |
| Set calculation | `SetBonusManager`, `SetBonusHandler` |
| Phantom slots and combat lock | `PhantomSlotCapability`, `PhantomSlotHandler`, related handlers/overlay |
| Commands/recycling | `RelicCommands` |
| Defaults/generated JSON | `RelicConfig` |
| Tooltips/screens | `RelicTooltipHandler` and client screen/overlay classes |

## Resource authorities

- `data/solsrelicsystem/recipe(s)/*.json` for shaped recipes
- `data/solsrelicsystem/advancement(s)/resonance/*.json` for advancement triggers
- `assets/solsrelicsystem/lang/en_us.json` for player-facing names
- actual item and block textures for every visual asset in this site
- `models/block/aster_table.json` for the table reconstruction
- loader metadata/build properties for dependency and version matrices

## Known code/documentation distinctions

The audit intentionally reflects several current-code facts that legacy descriptions may miss:

- current Aster mob chances are 1% / 3% / 8%;
- utility tools are excluded unless they enter via whitelist/integration;
- Dust redistributes upgrade points and keeps stat types;
- ascension preserves types, rerolls their bases, and resets level/upgrades;
- set 2-piece and 4-piece maps stack cumulatively;
- the common Dust fallback is not the mob-rate source;
- the registered v1.55 key map exposes ++i++ for Stat Summary, not an active lock key workflow.

## Maintaining accuracy

When gameplay code changes:

1. update the relevant wiki page in the same code change;
2. recalculate tables if `StatType`, XP, or config defaults changed;
3. replace copied textures if assets changed;
4. run `mkdocs build --strict`;
5. verify navigation, internal links, calculators, desktop, and mobile layout;
6. update the verified mod version shown in the site banner.

