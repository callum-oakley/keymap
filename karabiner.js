function map(from, to, opts) {
  const manipulator = {
    type: "basic",
    from: {
      key_code: from,
      modifiers: { optional: ["any"] },
    },
  };

  if (typeof to === "string") {
    manipulator.to = [{
      key_code: to,
    }];
  } else if (Array.isArray(to)) {
    manipulator.to = [{
      modifiers: to.slice(0, -1),
      key_code: to[to.length - 1],
    }];
  } else if (to && to.layer) {
    manipulator.to = [{
      set_variable: { name: to.layer, value: true, key_up_value: false },
    }];
  }

  if (opts && opts.layer) {
    manipulator.conditions = [{
      type: "variable_if",
      name: opts.layer,
      value: true,
    }];
  }

  return manipulator;
}

({
  description: "Callum's Keymap",
  manipulators: [
    // fn ----------------------------------------------------------------------
    map("u", "f1", { layer: "fn" }),
    map("i", "f2", { layer: "fn" }),
    map("o", "f3", { layer: "fn" }),
    map("p", "f4", { layer: "fn" }),

    map("j", "f5", { layer: "fn" }),
    map("k", "f6", { layer: "fn" }),
    map("l", "f7", { layer: "fn" }),
    map("semicolon", "f8", { layer: "fn" }),

    map("m", "f9", { layer: "fn" }),
    map("comma", "f10", { layer: "fn" }),
    map("period", "f11", { layer: "fn" }),
    map("slash", "f12", { layer: "fn" }),

    // left_sym ----------------------------------------------------------------
    map("q", "1", { layer: "left_sym" }),
    map("w", "2", { layer: "left_sym" }),
    map("e", "3", { layer: "left_sym" }),
    map("r", "4", { layer: "left_sym" }),
    map("t", "5", { layer: "left_sym" }),

    map("a", "left_control", { layer: "left_sym" }),
    map("s", "left_option", { layer: "left_sym" }),
    map("d", "left_command", { layer: "left_sym" }),
    map("f", "left_shift", { layer: "left_sym" }),
    map("g", "escape", { layer: "left_sym" }),

    map("x", "grave_accent_and_tilde", { layer: "left_sym" }),
    map("c", "hyphen", { layer: "left_sym" }),
    map("v", "equal_sign", { layer: "left_sym" }),

    // right_sym ---------------------------------------------------------------
    map("y", "6", { layer: "right_sym" }),
    map("u", "7", { layer: "right_sym" }),
    map("i", "8", { layer: "right_sym" }),
    map("o", "9", { layer: "right_sym" }),
    map("p", "0", { layer: "right_sym" }),

    map("h", "escape", { layer: "right_sym" }),
    map("j", "right_shift", { layer: "right_sym" }),
    map("k", "right_command", { layer: "right_sym" }),
    map("l", "right_option", { layer: "right_sym" }),
    map("semicolon", "right_control", { layer: "right_sym" }),

    map("m", "open_bracket", { layer: "right_sym" }),
    map("comma", "close_bracket", { layer: "right_sym" }),
    map("period", "semicolon", { layer: "right_sym" }),
    map("slash", "backslash", { layer: "right_sym" }),

    // nav ---------------------------------------------------------------------
    // left hand
    map("q", ["command", "control", "q"], { layer: "nav" }),
    map("e", ["shift", "command", "open_bracket"], { layer: "nav" }),
    map("r", ["shift", "command", "close_bracket"], { layer: "nav" }),

    map("a", "left_control", { layer: "nav" }),
    map("s", "left_option", { layer: "nav" }),
    map("d", "left_command", { layer: "nav" }),
    map("f", "left_shift", { layer: "nav" }),
    map("g", "escape", { layer: "nav" }),

    map("z", { layer: "fn" }, { layer: "nav" }),
    map("c", ["command", "open_bracket"], { layer: "nav" }),
    map("v", ["command", "close_bracket"], { layer: "nav" }),

    // right hand
    map("u", "delete_or_backspace", { layer: "nav" }),
    map("i", "up_arrow", { layer: "nav" }),
    map("o", "delete_forward", { layer: "nav" }),
    map("p", "tab", { layer: "nav" }),

    map("h", "escape", { layer: "nav" }),
    map("j", "left_arrow", { layer: "nav" }),
    map("k", "down_arrow", { layer: "nav" }),
    map("l", "right_arrow", { layer: "nav" }),
    map("semicolon", "return_or_enter", { layer: "nav" }),

    map("m", "volume_decrement", { layer: "nav" }),
    map("comma", "volume_increment", { layer: "nav" }),
    map("period", "play_or_pause", { layer: "nav" }),

    // base --------------------------------------------------------------------
    map("semicolon", "quote"),
    map("left_option", { layer: "left_sym" }),
    map("left_command", { layer: "nav" }),
    map("right_command", { layer: "right_sym" }),
  ],
});
