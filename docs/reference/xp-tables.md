# Complete XP table

Default cost formula: `100 + 30L + 5L²`, where `L` is the target level.

| Target | EXP for level | Cumulative EXP | Milestone |
|---:|---:|---:|:---:|
| +1 | 135 | 135 | — |
| +2 | 180 | 315 | — |
| +3 | 235 | 550 | — |
| +4 | 300 | 850 | ◆ |
| +5 | 375 | 1,225 | — |
| +6 | 460 | 1,685 | — |
| +7 | 555 | 2,240 | — |
| +8 | 660 | 2,900 | ◆ |
| +9 | 775 | 3,675 | — |
| +10 | 900 | 4,575 | — |
| +11 | 1,035 | 5,610 | — |
| +12 | 1,180 | 6,790 | ◆ |
| +13 | 1,335 | 8,125 | — |
| +14 | 1,500 | 9,625 | — |
| +15 | 1,675 | 11,300 | — |
| +16 | 1,860 | 13,160 | ◆ |
| +17 | 2,055 | 15,215 | — |
| +18 | 2,260 | 17,475 | — |
| +19 | 2,475 | 19,950 | — |
| +20 | 2,700 | 22,650 | ◆ |
| +21 | 2,935 | 25,585 | — |
| +22 | 3,180 | 28,765 | — |
| +23 | 3,435 | 32,200 | — |
| +24 | 3,700 | 35,900 | ◆ |

## Core conversion at defaults

| Core | EXP | Exact role |
|---|---:|---|
| Aster I | 500 | Fastest, rarest |
| Aster II | 200 | Mid-size progress |
| Aster III | 80 | Fine progress and recycle refund unit |

Surplus from a consumed core carries into subsequent levels in the same relic state. At maximum level, stored XP is reset to zero.

## Configurable formula

The unsimplified code is:

```text
round(
  base × 2
  + base × 0.6 × L
  + base × scaling × 0.4 × L²
)
```

Changing `baseXPPerLevel` or `xpScalingFactor` invalidates this page's numeric table; the in-game preview remains authoritative.

