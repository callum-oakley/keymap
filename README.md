# Callum's Keymap

A keymap for 34 keys with half-layer mods.

```
  ╭              ┌─────┐                                ┌─────┐              ╮
  │        ┌─────┤  e  ├─────┬─────┐        ┌─────┬─────┤  i  ├─────┐        │
  │  ┌─────┤  w  ├─────┤  r  │  t  │        │  y  │  u  ├─────┤  o  ├─────┐  │
  │  │  q  ├─────┤  d  ├─────┼─────┤        ├─────┼─────┤  k  ├─────┤  p  │  │
  │  ├─────┤  s  ├─────┤  f  │  g  │        │  h  │  j  ├─────┤  l  ├─────┤  │
base │  a  ├─────┤  c  ├─────┼─────┤        ├─────┼─────┤  ,  ├─────┤  '  │  │
  │  ├─────┤  x  ├─────┤  v  │  b  │        │  n  │  m  ├─────┤  .  ├─────┤  │
  │  │  z  ├─────┘     └──┬──┴──┬──┴──┐  ┌──┴──┬──┴──┬──┘     └─────┤  /  │  │
  │  └─────┘              │ sym │ nav │  │space│ sym │              └─────┘  │
  ╰                       └─────┴─────┘  └─────┴─────┘                       ╯

  ╭              ┌─────┐                                ┌─────┐              ╮
  │        ┌─────┤tab- ├─────┬─────┐        ┌─────┬─────┤ up  ├─────┐        │
  │  ┌─────┤     ├─────┤tab+ │     │        │     │ bsp ├─────┤ del ├─────┐  │
  │  │lock ├─────┤ cmd ├─────┼─────┤        ├─────┼─────┤down ├─────┤ tab │  │
  │  ├─────┤ alt ├─────┤shift│ esc │        │ esc │left ├─────┤right├─────┤  │
 nav │ctrl ├─────┤back ├─────┼─────┤        ├─────┼─────┤vol+ ├─────┤enter│  │
  │  ├─────┤     ├─────┤ fwd │     │        │     │vol- ├─────┤play ├─────┤  │
  │  │ fn  ├─────┘     └──┬──┴──┬──┴──┐  ┌──┴──┬──┴──┬──┘     └─────┤     │  │
  │  └─────┘              │     │╳╳╳╳╳│  │     │     │              └─────┘  │
  ╰                       └─────┴─────┘  └─────┴─────┘                       ╯

  ╭              ┌─────┐                                ┌─────┐              ╮
  │        ┌─────┤  3  ├─────┬─────┐        ┌─────┬─────┤  8  ├─────┐        │
  │  ┌─────┤  2  ├─────┤  4  │  5  │        │  6  │  7  ├─────┤  9  ├─────┐  │
  │  │  1  ├─────┤ cmd ├─────┼─────┤        ├─────┼─────┤ cmd ├─────┤  0  │  │
  │  ├─────┤ alt ├─────┤shift│ esc │        │ esc │shift├─────┤ alt ├─────┤  │
sym* │ctrl ├─────┤  -  ├─────┼─────┤        ├─────┼─────┤  ]  ├─────┤ctrl │  │
  │  ├─────┤  `  ├─────┤  =  │     │        │     │  [  ├─────┤  ;  ├─────┤  │
  │  │     ├─────┘     └──┬──┴──┬──┴──┐  ┌──┴──┬──┴──┬──┘     └─────┤  \  │  │
  │  └─────┘              │╳╳╳╳╳│     │  │     │╳╳╳╳╳│              └─────┘  │
  ╰                       └─────┴─────┘  └─────┴─────┘         *half-layers  ╯

  ╭              ┌─────┐                                ┌─────┐              ╮
  │        ┌─────┤     ├─────┬─────┐        ┌─────┬─────┤ f2  ├─────┐        │
  │  ┌─────┤     ├─────┤     │     │        │     │ f1  ├─────┤ f3  ├─────┐  │
  │  │     ├─────┤     ├─────┼─────┤        ├─────┼─────┤ f6  ├─────┤ f4  │  │
  │  ├─────┤     ├─────┤     │     │        │     │ f5  ├─────┤ f7  ├─────┤  │
 fn  │     ├─────┤     ├─────┼─────┤        ├─────┼─────┤ f10 ├─────┤ f8  │  │
  │  ├─────┤     ├─────┤     │     │        │     │ f9  ├─────┤ f11 ├─────┤  │
  │  │╳╳╳╳╳├─────┘     └──┬──┴──┬──┴──┐  ┌──┴──┬──┴──┬──┘     └─────┤ f12 │  │
  │  └─────┘              │     │╳╳╳╳╳│  │     │     │              └─────┘  │
  ╰                       └─────┴─────┘  └─────┴─────┘                       ╯
```

## Design

I love tiny keyboards but find myself frustrated by many of the popular mechanisms to handle
modifiers.

- Mod-tap -- timing issues. If you roll quickly from `a` to `b` then is that supposed to be `a` then
  `b` or `b` modified by `a`?
- Chording -- same timing issues as mod-tap. If you roll quickly from `a` to `b` then is that
  supposed to be `a` then `b` or the `a` + `b` chord?
- Oneshot mods -- solves the timing issues with mod-tap and chords, but at the expense of being
  slower in general. It turns what could be a single fluid movement in to two distinct movements.
  This is most egregious when making multiple keypresses while "holding" the same modifiers,
  requiring repeatedly activating the mod again for each keypress.

After some experimentation I think I've found a solution that relies on purely the oldest
keyboard trick in the book: the humble layer (with an extremely minor twist).

### Half-layer mods

The minor twist is to make use of what I'm going to call **half-layers** -- layers that can be
activated on each half of the keyboard independently. `sym` above consists of two half-layers.
Holding `left sym` activates just the left half, and holding `right sym` activates just the right
half. Both halves have home row modifiers, so to modify a key on the left half of `base` we can use
`right sym` without covering the key we want to modify (e.g. `cmd` + `c` becomes `right sym` + `cmd`
\+ `c`).

```
  ╭              ┌─────┐                                ┌─────┐              ╮
  │        ┌─────┤  e  ├─────┬─────┐        ┌─────┬─────┤  8  ├─────┐        │
  │  ┌─────┤  w  ├─────┤  r  │  t  │        │  6  │  7  ├─────┤  9  ├─────┐  │
  │  │  q  ├─────┤  d  ├─────┼─────┤        ├─────┼─────┤╳╳╳╳╳├─────┤  0  │  │
  │  ├─────┤  s  ├─────┤  f  │  g  │        │ esc │shift├─────┤ alt ├─────┤  │
  │  │  a  ├─────┤╳╳╳╳╳├─────┼─────┤        ├─────┼─────┤  ]  ├─────┤ctrl │  │
  │  ├─────┤  x  ├─────┤  v  │  b  │        │     │  [  ├─────┤  ;  ├─────┤  │
  │  │  z  ├─────┘     └──┬──┴──┬──┴──┐  ┌──┴──┬──┴──┬──┘     └─────┤  \  │  │
  │  └─────┘              │ sym │ nav │  │     │╳╳╳╳╳│              └─────┘  │
  ╰                       └─────┴─────┘  └─────┴─────┘                       ╯
```

To modify a key on `sym` we can activate both half layers and use the modifiers on the other half.
e.g. `&` becomes `left sym` + `shift` + `right sym` + `7`.

```
  ╭              ┌─────┐                                ┌─────┐              ╮
  │        ┌─────┤  3  ├─────┬─────┐        ┌─────┬─────┤  8  ├─────┐        │
  │  ┌─────┤  2  ├─────┤  4  │  5  │        │  6  │╳╳╳╳╳├─────┤  9  ├─────┐  │
  │  │  1  ├─────┤ cmd ├─────┼─────┤        ├─────┼─────┤ cmd ├─────┤  0  │  │
  │  ├─────┤ alt ├─────┤╳╳╳╳╳│ esc │        │ esc │shift├─────┤ alt ├─────┤  │
  │  │ctrl ├─────┤  -  ├─────┼─────┤        ├─────┼─────┤  ]  ├─────┤ctrl │  │
  │  ├─────┤  `  ├─────┤  =  │     │        │     │  [  ├─────┤  ;  ├─────┤  │
  │  │     ├─────┘     └──┬──┴──┬──┴──┐  ┌──┴──┬──┴──┬──┘     └─────┤  \  │  │
  │  └─────┘              │╳╳╳╳╳│     │  │     │╳╳╳╳╳│              └─────┘  │
  ╰                       └─────┴─────┘  └─────┴─────┘                       ╯
```
