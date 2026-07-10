# Installation

Sol's Relic System requires the matching build of **Sol's Item Rarity 1.7 or newer**. Keep the Minecraft version and loader identical across both mods.

## Version matrix

| Minecraft | Loader | Minimum loader declared by code | Relic System | Required Item Rarity |
|---|---|---:|---:|---:|
| 1.16.5 | Forge | 36.2.0 | 1.55 | 1.7+ |
| 1.20.1 | Forge | 47.0.0 | 1.55 | 1.7+ |
| 1.21.1 | NeoForge | 21.1.1 | 1.55 | 1.7+ |
| 1.21.11 | NeoForge | 21.11.42 | 1.55 | 1.7+ |

!!! danger "Do not mix loaders"
    A Forge jar cannot run on NeoForge, and a jar for one Minecraft version cannot be reused on another. For example, both the Relic System and Item Rarity jars in a 1.21.1 instance must be their **1.21.1 NeoForge** builds.

## Client and server installation

1. Install the correct Forge or NeoForge loader.
2. Start the game once so its `mods` and `config` folders exist, then close it.
3. Put the matching **Sol's Item Rarity** jar in `mods`.
4. Put the matching **Sol's Relic System** jar in `mods`.
5. Install both jars on the server and on every connecting client.
6. Start the game. The mod creates its common TOML and JSON configuration files on the server.

The client needs the mod because relic tooltips, the Aster Table screen, confirmation sequences, phantom slots, the combat-lock badge, and Stat Summary screen are client-rendered. The server remains authoritative for rolls, upgrades, material consumption, and configuration.

## Confirm it loaded

Run either command in a world:

```text
/srs help
/solsrelic help
```

Then open Controls and look for the **Sol's Relic System** category. The default Stat Summary key is ++i++.

## Configuration location

The mod creates the following files in the server configuration directory:

```text
config/
├─ solsrelicsystem-common.toml
├─ aster_core_mobs.json
├─ dust_of_enlightenment_mobs.json
├─ relic_blacklist.json
├─ relic_whitelist.json
├─ set_bonuses.json
└─ instructions.txt
```

Use `/srs reload` after editing JSON files. It requires Game Master permission. Restarting is safest after changing the common TOML.

## Optional companion

Sol's Damage Indicator can display the custom crits more clearly. The Relic System records recent critical-hit information specifically so companion integrations can identify its crit multiplier and final damage.

## Common installation failures

| Symptom | Likely cause | Fix |
|---|---|---|
| Missing dependency error | Item Rarity is absent or older than 1.7 | Install its matching 1.7+ jar |
| Invalid mod file / wrong loader | Forge and NeoForge builds were mixed | Replace the jar with the correct loader build |
| Server rejects connection | Client/server mod lists differ | Install matching versions on both sides |
| Relic stats appear twice | Item Rarity bonuses were re-enabled | Keep `disableRarityStatBonuses = true` unless intentional |
| Items never become relics | System disabled, item excluded, or utility tool | Check the common config and whitelist rules |
