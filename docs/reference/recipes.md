# Recipe compendium

All layouts below come from v1.55 recipe JSON. Patterns are shaped and must match the shown 3×3 grid.

## Aster Table

```text
Book          Any Aster Core   Book
Diamond       Anvil            Diamond
Diamond       Diamond          Diamond
```

## Dust of Enlightenment

```text
Resonance V   Resonance V      Resonance V
Resonance V   Feather          Resonance V
Resonance V   Resonance V      Resonance V
```

Cost: 8 Resonance Core V + 1 Feather → 1 Dust.

## Resonance Core I

```text
Aster III     Aster II         Aster III
Aster II      Nether Star      Aster II
Aster III     Aster II         Aster III
```

## Resonance Core II

```text
Aster III     Aster II         Aster III
Aster II      Resonance I      Aster II
Aster III     Aster II         Aster III
```

## Resonance Core III

```text
Aster III     Aster II         Aster III
Aster II      Resonance II     Aster II
Aster III     Aster II         Aster III
```

## Resonance Core IV

```text
Resonance I   Aster II         Resonance I
Aster II      Resonance III    Aster II
Resonance I   Aster II         Resonance I
```

## Resonance Core V

```text
Aster I       Resonance III    Aster I
Resonance II  Nether Star      Resonance IV
Aster I       Resonance I      Aster I
```

## Resonance Core VI

```text
Aster I       Dust             Aster I
Resonance V   Aster II         Resonance V
Aster I       Dust             Aster I
```

!!! warning "Core VI exact Dust count"
    The shaped pattern contains Dust in two positions, so it consumes **2 Dust**, not four. It also consumes 4 Tier I Aster Cores, 1 Tier II Aster Core, and 2 Resonance Core V.

## Datapack note

Recipes use namespaced IDs except the Aster Table's top-center `#solsrelicsystem:aster_cores` tag. Replacing recipe JSON is possible through normal datapack precedence, but the Aster Table material slot still recognizes only actual Aster Core, Dust, and Resonance Core item classes.

