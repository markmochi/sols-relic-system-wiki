# Report a bug

Found something that does not work as expected? You can report it through the public issue tracker.

[Open a bug report](https://github.com/markmochi/sols-relic-system-wiki/issues/new?template=bug_report.yml){ .md-button .md-button--primary }

## Before reporting

1. Make sure the problem involves **Sol's Relic System**, not only another mod.
2. Check [FAQ & troubleshooting](troubleshooting.md) for common configuration and compatibility problems.
3. Update to the newest release available for your Minecraft version when possible.
4. Restart the game or dedicated server and reproduce the problem once more.
5. Search [existing issues](https://github.com/markmochi/sols-relic-system-wiki/issues) to avoid opening a duplicate.

!!! warning "Keep sensitive information private"
    Remove access tokens, server addresses, personal paths, player IP addresses, and other private information before attaching logs or configuration files.

## Information you will need

### Versions

Copy the exact version numbers from the Mods screen, launcher, or server log:

```text
Minecraft version:
Mod loader and version:
Sol's Relic System version:
Sol's Item Rarity version:
Java version:
Singleplayer or dedicated server:
```

Do not write only “latest.” A version that is latest today may not be latest when the report is investigated.

### Clear reproduction steps

Describe the shortest reliable path to the bug:

```text
1. Equip ...
2. Place ... in the Aster Table.
3. Click ...
4. The problem occurs.
```

Include what you **expected** to happen and what **actually** happened. Mention whether it occurs every time or only sometimes.

### Logs and crash reports

- For a crash, attach the matching file from `crash-reports`.
- For non-crash bugs, attach `logs/latest.log` from the affected game or server session.
- Paste short excerpts into the form only when they contain the full error. Attach longer logs as files.
- Do not send a screenshot of text when the original log file is available.

### Screenshots or video

For relic-stat, leveling, ascension, or reroll problems, include clear images of:

- the complete item tooltip;
- the Aster Table preview or comparison screen;
- relevant chat errors;
- the full interface rather than a tightly cropped number.

### Mods and configuration

List the modpack name/version or attach a mod list. Mention custom datapacks and any changes to Sol's Relic System configuration. If one specific item or mob is involved, include its full registry ID; enable advanced tooltips with ++f3+h++ to find item IDs.

## Test without unrelated mods when possible

Create a backup first. Then try reproducing with only:

- the correct mod loader;
- Sol's Relic System;
- Sol's Item Rarity;
- any dependency explicitly required by those mods.

If the bug disappears, add the other mods back in groups until the conflict returns. Report the smallest combination that reproduces it. Never remove mods from an important world without making a backup.

## A useful report title

Write the result and where it occurs:

- Good: `Resonance Core III is consumed without opening the ascension preview`
- Good: `Crit Rate is missing from the Stat Summary after reconnecting`
- Avoid: `help`, `bug`, `it crashed`, or `not working`

## After submitting

Watch the issue for questions and test requests. Add new findings in a comment instead of opening another issue for the same problem. If you discover the solution, share it so other players can benefit.
