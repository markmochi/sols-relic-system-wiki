# Recycling relics

Recycling destroys one leveled relic and returns Tier III Aster Cores. It is a command-driven recovery system, not an Aster Table material operation.

## Use it

1. Hold the unwanted relic in the main hand.
2. Run `/srs recycle` or `/solsrelic recycle`.
3. Review the confirmation overlay, including item, rarity, level, stats, rerolls, and core refund.
4. Confirm within 30 seconds without changing the selected hotbar slot or relic.

Creative mode is rejected to prevent infinite cores. A +0 relic cannot be recycled.

## Refund formula

```text
invested EXP = cumulative EXP for completed levels + stored current EXP
refund EXP   = floor(invested EXP × 0.60)
Tier III     = max(1, floor(refund EXP / 80))
```

Both 60% and 80 EXP are configurable. Integer division means remainder EXP is lost. The minimum is one Tier III core after a valid positive-level recycle.

## Default examples

| Relic state | Invested EXP | 60% refund EXP | Tier III cores |
|---|---:|---:|---:|
| +1, no stored EXP | 135 | 81 | 1 |
| +4 max | 850 | 510 | 6 |
| +9 max | 3,675 | 2,205 | 27 |
| +12 max | 6,790 | 4,074 | 50 |
| +16 max | 13,160 | 7,896 | 98 |
| +20 max | 22,650 | 13,590 | 169 |
| +24 max | 35,900 | 21,540 | 269 |

## What is not refunded

- Item value, enchantments, or durability
- Rarity value
- Resonance Cores used in earlier ascensions
- Dust used on reroll attempts
- Lost integer remainder after conversion

The entire held item is destroyed, not merely its relic data. Use the preview carefully.

