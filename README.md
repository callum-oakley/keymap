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
  │  ┌─────┤close├─────┤tab+ │lock │        │     │ bsp ├─────┤ del ├─────┐  │
  │  │swap ├─────┤ cmd ├─────┼─────┤        ├─────┼─────┤down ├─────┤ tab │  │
  │  ├─────┤ alt ├─────┤shift│ esc │        │ esc │left ├─────┤right├─────┤  │
 nav │ctrl ├─────┤back ├─────┼─────┤        ├─────┼─────┤vol+ ├─────┤enter│  │
  │  ├─────┤fresh├─────┤ fwd │boot │        │     │vol- ├─────┤play ├─────┤  │
  │  │cmd-`├─────┘     └──┬──┴──┬──┴──┐  ┌──┴──┬──┴──┬──┘     └─────┤     │  │
  │  └─────┘              │     │╳╳╳╳╳│  │     │     │              └─────┘  │
  ╰                       └─────┴─────┘  └─────┴─────┘                       ╯

  ╭              ┌─────┐                                ┌─────┐              ╮
  │        ┌─────┤  3  ├─────┬─────┐        ┌─────┬─────┤  8  ├─────┐        │
  │  ┌─────┤  2  ├─────┤  4  │  5  │        │  6  │  7  ├─────┤  9  ├─────┐  │
  │  │  1  ├─────┤ cmd ├─────┼─────┤        ├─────┼─────┤ cmd ├─────┤  0  │  │
  │  ├─────┤ alt ├─────┤shift│ esc │        │ esc │shift├─────┤ alt ├─────┤  │
sym* │ctrl ├─────┤  -  ├─────┼─────┤        ├─────┼─────┤  ]  ├─────┤ctrl │  │
  │  ├─────┤  `  ├─────┤  =  │     │        │     │  [  ├─────┤  ;  ├─────┤  │
  │  │caps ├─────┘     └──┬──┴──┬──┴──┐  ┌──┴──┬──┴──┬──┘     └─────┤  \  │  │
  │  └─────┘              │╳╳╳╳╳│     │  │     │╳╳╳╳╳│              └─────┘  │
  ╰                       └─────┴─────┘  └─────┴─────┘         *half-layers  ╯

  ╭              ┌─────┐                                ┌─────┐              ╮
  │        ┌─────┤ f3  ├─────┬─────┐        ┌─────┬─────┤ f8  ├─────┐        │
  │  ┌─────┤ f2  ├─────┤ f4  │ f5  │        │ f6  │ f7  ├─────┤ f9  ├─────┐  │
  │  │ f1  ├─────┤ cmd ├─────┼─────┤        ├─────┼─────┤ cmd ├─────┤ f10 │  │
  │  ├─────┤ alt ├─────┤shift│ esc │        │ esc │shift├─────┤ alt ├─────┤  │
 fn* │ctrl ├─────┤     ├─────┼─────┤        ├─────┼─────┤     ├─────┤ctrl │  │
  │  ├─────┤ f12 ├─────┤     │     │        │     │     ├─────┤     ├─────┤  │
  │  │ f11 ├─────┘     └──┬──┴──┬──┴──┐  ┌──┴──┬──┴──┬──┘     └─────┤     │  │
  │  └─────┘              │     │╳╳╳╳╳│  │     │╳╳╳╳╳│              └─────┘  │
  ╰                       └─────┴─────┘  └─────┴─────┘      *nav + right sym ╯
```

## Design

I love tiny keyboards but find myself frustrated by many of the popular mechanisms to handle
modifiers.

- Mod-tap -- timing issues. If you roll quickly from `a` to `b` then is that supposed to be `a` then
  `b` or `b` modified by `a`?
- Chording -- same timing issues as mod-tap. If you roll quickly from `a` to `b` then is that
  supposed to be `a` then `b` or the `a` + `b` chord?
- Oneshot mods / "callum mods" ([my previously proposed method][]) -- solve the timing issues with
  mod-tap and chords, but at the expense of being slower in general. It turns what could be a single
  fluid movement into two distinct movements. This is most egregious when making multiple keypresses
  while "holding" the same modifiers, requiring you to re-activate the modifiers for each keypress.

After some experimentation I think I've found a solution that relies on purely the oldest
keyboard trick in the book: the humble layer (with an extremely minor twist).

### Half-layer mods

The minor twist is to make use of what I'm going to call **half-layers** -- layers that can be
activated on each half of the keyboard independently. `sym` above consists of two half-layers, with
a key on each thumb. Holding `left sym` activates just the left half, and holding `right sym`
activates just the right half. Both halves have home row modifiers, so to modify a key on the left
half of `base` we can use `right sym` without obscuring the key we want to modify (e.g. `cmd` + `c`
becomes `right sym` + `right cmd` + `c`).

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

To modify a key on `sym` we can activate both half-layers and use the modifiers on the other half.
e.g. `&` becomes `left sym` + `left shift` + `right sym` + `7`.

```
  ╭              ┌─────┐                                ┌─────┐              ╮
  │        ┌─────┤  3  ├─────┬─────┐        ┌─────┬─────┤  8  ├─────┐        │
  │  ┌─────┤  2  ├─────┤  4  │  5  │        │  6  │╳╳╳╳╳├─────┤  9  ├─────┐  │
  │  │  1  ├─────┤ cmd ├─────┼─────┤        ├─────┼─────┤ cmd ├─────┤  0  │  │
  │  ├─────┤ alt ├─────┤╳╳╳╳╳│ esc │        │ esc │shift├─────┤ alt ├─────┤  │
  │  │ctrl ├─────┤  -  ├─────┼─────┤        ├─────┼─────┤  ]  ├─────┤ctrl │  │
  │  ├─────┤  `  ├─────┤  =  │     │        │     │  [  ├─────┤  ;  ├─────┤  │
  │  │caps ├─────┘     └──┬──┴──┬──┴──┐  ┌──┴──┬──┴──┬──┘     └─────┤  \  │  │
  │  └─────┘              │╳╳╳╳╳│     │  │     │╳╳╳╳╳│              └─────┘  │
  ╰                       └─────┴─────┘  └─────┴─────┘                       ╯
```

Four keypresses to type one symbol may sound like a lot, but in practice it's one fluid movement of
each hand, rolling quickly from the thumb press in to the finger press:

- Left hand holds `left sym` and then `left shift` in one rolling motion.
- Immediately following, right hand holds `right sym` and then hits `7` in one rolling motion.

## Implementation

I'm currently running this on a [Ferris][]. You can see my `keymap.c` [here][keymap.c].

[my previously proposed method]: https://github.com/callum-oakley/qmk_firmware/blob/master/users/callum
[Ferris]: https://github.com/pierrechevalier83/ferris
[keymap.c]: https://github.com/callum-oakley/vial-qmk/blob/r2g-callum/keyboards/mechboards/ferris/r2g/keymaps/callum/keymap.c
