/* @ds-bundle: {"format":3,"namespace":"ClasslessDesignSystem_225e16","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"62860621eb97","components/core/Badge.jsx":"1ac1660a94ac","components/core/Button.jsx":"35005314636b","components/core/Card.jsx":"9b9da117a440","components/feedback/Alert.jsx":"bcb6afb26e33","components/forms/Checkbox.jsx":"84f5d2f45eca","components/forms/Input.jsx":"49f8c01cf4e9","components/forms/Select.jsx":"650ba7e24e96","components/forms/Switch.jsx":"87620cccabfa","components/navigation/Tabs.jsx":"02c3b7f27d32","ui_kits/app/AppShell.jsx":"07482c6587d5","ui_kits/app/Dashboard.jsx":"e24a4ef3a37e","ui_kits/app/Login.jsx":"ebd106484521","ui_kits/app/MeetingView.jsx":"881bab0b2834","ui_kits/marketing/CtaFooter.jsx":"c0503013acd8","ui_kits/marketing/Header.jsx":"73905dea87c1","ui_kits/marketing/Hero.jsx":"9cb6e7fc92bd","ui_kits/marketing/KitBits.jsx":"2b92e0ff5ca0","ui_kits/marketing/Proof.jsx":"c396c2d025cd","ui_kits/marketing/Services.jsx":"8e49562d74c7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ClasslessDesignSystem_225e16 = window.ClasslessDesignSystem_225e16 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Classless — Avatar
 * Image or initials. Falls back to a brand-tinted initial chip.
 */
function Avatar({
  src = null,
  name = '',
  size = 40,
  tone = 'blue',
  // initials background tone
  square = false,
  style = {},
  ...rest
}) {
  const tones = {
    blue: {
      bg: 'var(--blue-100)',
      fg: 'var(--blue-700)'
    },
    red: {
      bg: 'var(--red-100)',
      fg: 'var(--red-700)'
    },
    orange: {
      bg: 'var(--orange-100)',
      fg: 'var(--orange-700)'
    },
    green: {
      bg: 'var(--green-100)',
      fg: 'var(--green-700)'
    },
    neutral: {
      bg: 'var(--neutral-200)',
      fg: 'var(--neutral-700)'
    }
  }[tone];
  const initials = name ? name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase() : '';
  const base = {
    width: size,
    height: size,
    flex: 'none',
    borderRadius: square ? 'var(--radius-md)' : '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    userSelect: 'none',
    ...style
  };
  if (src) {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: src,
      alt: name,
      style: {
        ...base,
        objectFit: 'cover'
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      background: tones.bg,
      color: tones.fg,
      fontFamily: 'var(--font-jp)',
      fontWeight: 700,
      fontSize: Math.round(size * 0.4)
    }
  }, rest), initials || '?');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Classless — Badge
 * Compact status/label pill. `soft` (default) uses a tinted fill;
 * `solid` uses the full brand color.
 */
function Badge({
  children,
  tone = 'blue',
  // 'blue' | 'red' | 'orange' | 'green' | 'neutral'
  variant = 'soft',
  // 'soft' | 'solid' | 'outline'
  size = 'md',
  // 'sm' | 'md'
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    blue: {
      solid: 'var(--blue-600)',
      soft: 'var(--blue-50)',
      softText: 'var(--blue-700)',
      line: 'var(--blue-200)'
    },
    red: {
      solid: 'var(--red-600)',
      soft: 'var(--red-50)',
      softText: 'var(--red-700)',
      line: 'var(--red-200)'
    },
    orange: {
      solid: 'var(--orange-600)',
      soft: 'var(--orange-50)',
      softText: 'var(--orange-700)',
      line: 'var(--orange-200)'
    },
    green: {
      solid: 'var(--green-600)',
      soft: 'var(--green-50)',
      softText: 'var(--green-700)',
      line: 'var(--green-200)'
    },
    neutral: {
      solid: 'var(--neutral-700)',
      soft: 'var(--neutral-100)',
      softText: 'var(--neutral-700)',
      line: 'var(--neutral-200)'
    }
  }[tone];
  const sized = size === 'sm' ? {
    fs: '11px',
    pad: '2px 8px',
    gap: '5px',
    dot: '6px'
  } : {
    fs: '12px',
    pad: '4px 11px',
    gap: '6px',
    dot: '7px'
  };
  const variants = {
    soft: {
      background: tones.soft,
      color: tones.softText,
      border: '1px solid transparent'
    },
    solid: {
      background: tones.solid,
      color: '#fff',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: tones.softText,
      border: `1px solid ${tones.line}`
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: sized.gap,
      padding: sized.pad,
      fontFamily: 'var(--font-jp)',
      fontWeight: 700,
      fontSize: sized.fs,
      lineHeight: 1.3,
      letterSpacing: '0.02em',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...variants,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: sized.dot,
      height: sized.dot,
      borderRadius: '50%',
      flex: 'none',
      background: variant === 'solid' ? '#fff' : tones.solid
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Classless — Button
 * Primary actions use the deepened brand blue; `tone` swaps in any of
 * the four brand colors. Pill-shaped, with a small energetic hover lift.
 */
function Button({
  children,
  variant = 'primary',
  // 'primary' | 'secondary' | 'ghost' | 'link'
  tone = 'blue',
  // 'blue' | 'red' | 'orange' | 'green' | 'ink'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const toneFill = {
    blue: {
      bg: 'var(--blue-600)',
      hover: 'var(--blue-700)',
      soft: 'var(--blue-50)',
      text: 'var(--blue-700)'
    },
    red: {
      bg: 'var(--red-600)',
      hover: 'var(--red-700)',
      soft: 'var(--red-50)',
      text: 'var(--red-700)'
    },
    orange: {
      bg: 'var(--orange-600)',
      hover: 'var(--orange-700)',
      soft: 'var(--orange-50)',
      text: 'var(--orange-700)'
    },
    green: {
      bg: 'var(--green-600)',
      hover: 'var(--green-700)',
      soft: 'var(--green-50)',
      text: 'var(--green-700)'
    },
    ink: {
      bg: 'var(--neutral-900)',
      hover: 'var(--neutral-800)',
      soft: 'var(--neutral-100)',
      text: 'var(--neutral-900)'
    }
  }[tone] || {};
  const sizes = {
    sm: {
      h: '36px',
      px: '16px',
      fs: '14px',
      gap: '6px'
    },
    md: {
      h: '44px',
      px: '22px',
      fs: '15px',
      gap: '8px'
    },
    lg: {
      h: '56px',
      px: '30px',
      fs: '17px',
      gap: '10px'
    }
  }[size];
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes.gap,
    height: sizes.h,
    padding: `0 ${sizes.px}`,
    fontFamily: 'var(--font-jp)',
    fontWeight: 700,
    fontSize: sizes.fs,
    lineHeight: 1,
    letterSpacing: '0.01em',
    borderRadius: 'var(--radius-pill)',
    border: '2px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    whiteSpace: 'nowrap',
    transition: 'background var(--dur) var(--ease-out), color var(--dur) var(--ease-out), transform var(--dur) var(--ease-spring), box-shadow var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)',
    ...style
  };
  const variants = {
    primary: {
      background: toneFill.bg,
      color: '#fff',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: '#fff',
      color: toneFill.text,
      borderColor: 'var(--color-border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: toneFill.text
    },
    link: {
      background: 'transparent',
      color: toneFill.text,
      height: 'auto',
      padding: 0,
      borderRadius: 0
    }
  };
  const hover = (e, on) => {
    if (disabled) return;
    const el = e.currentTarget;
    if (variant === 'primary') {
      el.style.background = on ? toneFill.hover : toneFill.bg;
      el.style.transform = on ? 'translateY(-2px)' : 'translateY(0)';
      el.style.boxShadow = on ? 'var(--shadow-md)' : 'var(--shadow-sm)';
    } else if (variant === 'secondary') {
      el.style.background = on ? toneFill.soft : '#fff';
      el.style.borderColor = on ? toneFill.bg : 'var(--color-border-strong)';
    } else if (variant === 'ghost') {
      el.style.background = on ? toneFill.soft : 'transparent';
    } else if (variant === 'link') {
      el.style.textDecoration = on ? 'underline' : 'none';
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: e => hover(e, true),
    onMouseLeave: e => hover(e, false),
    style: {
      ...base,
      ...variants[variant]
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Classless — Card
 * White surface, soft border + shadow. Optional brand `accent` paints a
 * top edge (single tone or the four-color spectrum). `interactive` adds
 * an energetic hover lift.
 */
function Card({
  children,
  accent = null,
  // null | 'blue' | 'red' | 'orange' | 'green' | 'spectrum'
  interactive = false,
  padding = '28px',
  as = 'div',
  style = {},
  ...rest
}) {
  const Comp = as;
  const accentColor = {
    blue: 'var(--brand-blue)',
    red: 'var(--brand-red)',
    orange: 'var(--brand-orange)',
    green: 'var(--brand-green)',
    spectrum: 'var(--gradient-spectrum-smooth)'
  }[accent];
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement(Comp, _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      position: 'relative',
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-card)',
      boxShadow: hover ? 'var(--shadow-hover)' : 'var(--shadow-sm)',
      padding,
      overflow: 'hidden',
      transform: hover ? 'translateY(-4px)' : 'translateY(0)',
      transition: 'transform var(--dur) var(--ease-spring), box-shadow var(--dur) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), accentColor && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '5px',
      background: accentColor
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Classless — Alert
 * Inline status banner with a soft tinted fill and a colored left rule.
 */
function Alert({
  children,
  title,
  tone = 'info',
  // 'info' | 'success' | 'warning' | 'danger'
  icon = null,
  onClose,
  style = {},
  ...rest
}) {
  const tones = {
    info: {
      bg: 'var(--color-info-soft)',
      bar: 'var(--blue-600)',
      text: 'var(--blue-900)'
    },
    success: {
      bg: 'var(--color-success-soft)',
      bar: 'var(--green-600)',
      text: 'var(--green-900)'
    },
    warning: {
      bg: 'var(--color-warning-soft)',
      bar: 'var(--orange-600)',
      text: 'var(--orange-900)'
    },
    danger: {
      bg: 'var(--color-danger-soft)',
      bar: 'var(--red-600)',
      text: 'var(--red-900)'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-start',
      padding: '14px 16px',
      background: tones.bg,
      borderLeft: `4px solid ${tones.bar}`,
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-jp)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: tones.bar,
      display: 'inline-flex',
      flex: 'none',
      marginTop: '1px'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: '14px',
      color: tones.text,
      marginBottom: '3px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13.5px',
      color: 'var(--text-secondary)',
      lineHeight: 1.6
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "\u9589\u3058\u308B",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: '2px',
      color: 'var(--text-muted)',
      display: 'inline-flex',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Classless — Checkbox
 * Square check with a brand-blue fill when selected.
 */
function Checkbox({
  checked = false,
  onChange,
  label,
  tone = 'blue',
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const cid = id || React.useId();
  const fill = {
    blue: 'var(--blue-600)',
    green: 'var(--green-600)',
    red: 'var(--red-600)',
    orange: 'var(--orange-600)'
  }[tone];
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-jp)',
      fontSize: '14px',
      fontWeight: 500,
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "checkbox",
    "aria-checked": checked,
    id: cid,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: '20px',
      height: '20px',
      flex: 'none',
      padding: 0,
      borderRadius: 'var(--radius-xs)',
      border: checked ? 'none' : '2px solid var(--color-border-strong)',
      background: checked ? fill : '#fff',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
    }
  }, rest), checked && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Classless — Input
 * Labeled text field with hint / error states and optional affixes.
 */
function Input({
  label,
  hint,
  error,
  prefix = null,
  suffix = null,
  size = 'md',
  // 'md' | 'lg'
  id,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const h = size === 'lg' ? '56px' : '44px';
  const fs = size === 'lg' ? '16px' : '15px';
  const borderColor = error ? 'var(--color-danger)' : focus ? 'var(--brand-blue)' : 'var(--color-border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-jp)',
      fontWeight: 700,
      fontSize: '13px',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      height: h,
      padding: '0 14px',
      background: disabled ? 'var(--color-bg-subtle)' : '#fff',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'inline-flex'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-jp)',
      fontSize: fs,
      color: 'var(--text-primary)'
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'inline-flex'
    }
  }, suffix)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-jp)',
      fontSize: '12px',
      color: error ? 'var(--color-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Classless — Select
 * Styled wrapper over a native <select> (reliable, accessible).
 */
function Select({
  label,
  hint,
  error,
  options = [],
  // [{value, label}] or string[]
  placeholder,
  size = 'md',
  id,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sid = id || React.useId();
  const h = size === 'lg' ? '56px' : '44px';
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const borderColor = error ? 'var(--color-danger)' : focus ? 'var(--brand-blue)' : 'var(--color-border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: sid,
    style: {
      fontFamily: 'var(--font-jp)',
      fontWeight: 700,
      fontSize: '13px',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: sid,
    disabled: disabled,
    defaultValue: placeholder ? '' : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: h,
      padding: '0 42px 0 14px',
      background: disabled ? 'var(--color-bg-subtle)' : '#fff',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      fontFamily: 'var(--font-jp)',
      fontSize: size === 'lg' ? '16px' : '15px',
      color: 'var(--text-primary)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-muted)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: 'absolute',
      right: '14px',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-jp)',
      fontSize: '12px',
      color: error ? 'var(--color-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Classless — Switch
 * On/off toggle. Brand-blue when on, with a springy knob.
 */
function Switch({
  checked = false,
  onChange,
  label,
  tone = 'blue',
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const sid = id || React.useId();
  const onColor = {
    blue: 'var(--blue-600)',
    green: 'var(--green-600)',
    red: 'var(--red-600)',
    orange: 'var(--orange-600)'
  }[tone];
  const track = /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    id: sid,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: '46px',
      height: '28px',
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      padding: '3px',
      background: checked ? onColor : 'var(--neutral-300)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      display: 'flex',
      alignItems: 'center',
      transition: 'background var(--dur) var(--ease-out)'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '22px',
      height: '22px',
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transform: checked ? 'translateX(18px)' : 'translateX(0)',
      transition: 'transform var(--dur) var(--ease-spring)'
    }
  }));
  if (!label) return track;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: sid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-jp)',
      fontSize: '14px',
      fontWeight: 500,
      color: 'var(--text-primary)',
      ...style
    }
  }, track, label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Classless — Tabs
 * Underline tabs with an animated active indicator in brand blue.
 */
function Tabs({
  items = [],
  // [{ id, label }]
  value,
  onChange,
  tone = 'blue',
  style = {}
}) {
  const [internal, setInternal] = React.useState(items[0] && items[0].id);
  const active = value !== undefined ? value : internal;
  const set = id => {
    setInternal(id);
    onChange && onChange(id);
  };
  const color = {
    blue: 'var(--blue-600)',
    red: 'var(--red-600)',
    orange: 'var(--orange-600)',
    green: 'var(--green-600)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: '4px',
      borderBottom: '1.5px solid var(--color-border)',
      ...style
    }
  }, items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => set(it.id),
      style: {
        position: 'relative',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        padding: '12px 16px',
        marginBottom: '-1.5px',
        fontFamily: 'var(--font-jp)',
        fontWeight: 700,
        fontSize: '15px',
        color: on ? color : 'var(--text-muted)',
        borderBottom: `2.5px solid ${on ? color : 'transparent'}`,
        transition: 'color var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)'
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppShell.jsx
try { (() => {
/* Classless app — sidebar + topbar shell */
function Sidebar({
  active,
  onNav
}) {
  const items = [{
    id: 'home',
    label: 'ダッシュボード',
    icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z'
  }, {
    id: 'meetings',
    label: '会議',
    icon: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z'
  }, {
    id: 'knowledge',
    label: 'ナレッジ',
    icon: 'M4 19.5A2.5 2.5 0 016.5 17H20M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5z'
  }, {
    id: 'members',
    label: 'メンバー',
    icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75'
  }, {
    id: 'settings',
    label: '設定',
    icon: 'M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-2.82 1.17V21a2 2 0 11-4 0v-.09A1.65 1.65 0 007 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 003.6 14a2 2 0 11 0-4h.09A1.65 1.65 0 005 8.6l.06-.06A2 2 0 117.9 5.7l.06.06A1.65 1.65 0 0010 6.6 1.65 1.65 0 0011 5.09V5a2 2 0 014 0v.09A1.65 1.65 0 0017 6.6a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0020.4 12a1.65 1.65 0 001.51 1z'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flex: 'none',
      background: '#fff',
      borderRight: '1px solid var(--color-border)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark-classless.png",
    alt: "",
    style: {
      width: 30,
      height: 30
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: 16,
      letterSpacing: '0.02em'
    }
  }, "\u96D1\u8AC7\u4F1A\u8B70"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9.5,
      color: 'var(--text-muted)',
      letterSpacing: '0.1em',
      marginTop: 3
    }
  }, "by CLASSLESS"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      padding: '10px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      flex: 1
    }
  }, items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onNav(it.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '11px 14px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-md)',
        textAlign: 'left',
        background: on ? 'var(--blue-50)' : 'transparent',
        color: on ? 'var(--blue-700)' : 'var(--text-secondary)',
        fontFamily: 'var(--font-jp)',
        fontWeight: 700,
        fontSize: 14,
        transition: 'background var(--dur-fast) var(--ease-out)'
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.background = 'var(--color-bg-subtle)';
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "19",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: it.icon
    })), it.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      margin: 12,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--neutral-900)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      lineHeight: 1.6
    }
  }, "AI\u30AF\u30EC\u30B8\u30C3\u30C8\u6B8B\u91CF"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'rgba(255,255,255,0.18)',
      borderRadius: 99,
      marginTop: 10,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '68%',
      height: '100%',
      background: 'var(--gradient-spectrum-smooth)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'rgba(255,255,255,0.7)',
      marginTop: 8
    }
  }, "680 / 1,000")));
}
function Topbar({
  title,
  onNew
}) {
  const {
    Button,
    Avatar,
    Badge
  } = window.ClasslessDesignSystem_225e16;
  const Plus = () => /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  }));
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 68,
      flex: 'none',
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'saturate(180%) blur(8px)',
      borderBottom: '1px solid var(--color-border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 28px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 20,
      fontWeight: 900
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 38,
      padding: '0 14px',
      background: 'var(--color-bg-subtle)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-pill)',
      width: 220
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-muted)",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4.3-4.3"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "\u4F1A\u8B70\u30FB\u30CA\u30EC\u30C3\u30B8\u3092\u691C\u7D22")), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Plus, null),
    onClick: onNew
  }, "\u65B0\u3057\u3044\u4F1A\u8B70"), /*#__PURE__*/React.createElement(Avatar, {
    name: "\u68EE \u5065\u53F8",
    tone: "green",
    size: 38
  })));
}
Object.assign(window, {
  Sidebar,
  Topbar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Dashboard.jsx
try { (() => {
/* Classless app — dashboard */
function Dashboard({
  onOpenMeeting
}) {
  const {
    Card,
    Badge,
    Avatar
  } = window.ClasslessDesignSystem_225e16;
  const stats = [{
    label: '今週の会議',
    n: '14',
    d: '+3',
    tone: 'blue'
  }, {
    label: '生成された議事録',
    n: '128',
    d: '+22',
    tone: 'green'
  }, {
    label: 'ナレッジ記事',
    n: '342',
    d: '+18',
    tone: 'orange'
  }];
  const meetings = [{
    title: '製造ラインAI化 定例',
    tone: 'blue',
    time: '今日 14:00',
    dur: '52分',
    tags: ['実証実験', '製造'],
    people: ['森 健司', '佐藤 愛子', '田中 巧'],
    status: '要約済み',
    st: 'green'
  }, {
    title: '雑談：新人オンボーディング改善',
    tone: 'orange',
    time: '今日 11:20',
    dur: '23分',
    tags: ['人材育成'],
    people: ['佐藤 愛子', '鈴木 一郎'],
    status: 'AI処理中',
    st: 'orange'
  }, {
    title: '自治体向け研修プログラム企画',
    tone: 'green',
    time: '昨日 16:30',
    dur: '1時間8分',
    tags: ['研修', '自治体'],
    people: ['森 健司', '高橋 結衣'],
    status: '要約済み',
    st: 'green'
  }, {
    title: 'プロダクト週次レビュー',
    tone: 'red',
    time: '昨日 10:00',
    dur: '44分',
    tags: ['プロダクト'],
    people: ['田中 巧', '高橋 結衣', '鈴木 一郎'],
    status: '要約済み',
    st: 'green'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, stats.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.label,
    padding: "22px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--text-muted)'
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 38,
      lineHeight: 1
    }
  }, s.n), /*#__PURE__*/React.createElement(Badge, {
    tone: "green",
    size: "sm",
    variant: "soft"
  }, s.d))))), /*#__PURE__*/React.createElement(Card, {
    accent: "spectrum",
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      padding: '20px 24px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-md)',
      background: 'var(--blue-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--brand-blue)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2l2.4 7.4H22l-6 4.6 2.3 7.4L12 17l-6.3 4.4L8 14 2 9.4h7.6z"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: 16
    }
  }, "\u4ECA\u9031\u306EAI\u30A4\u30F3\u30B5\u30A4\u30C8"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      marginTop: 4,
      lineHeight: 1.7
    }
  }, "\u300C\u88FD\u9020\u30E9\u30A4\u30F3AI\u5316\u300D\u306B\u95A2\u3059\u308B\u8B70\u8AD6\u304C ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-primary)'
    }
  }, "5\u4EF6"), " \u5897\u52A0\u3002\u5B9F\u8A3C\u30D5\u30A7\u30FC\u30BA\u3078\u306E\u79FB\u884C\u304C\u8FD1\u3065\u3044\u3066\u3044\u307E\u3059\u3002")), /*#__PURE__*/React.createElement(Badge, {
    tone: "blue",
    dot: true
  }, "New"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 18,
      fontWeight: 900
    }
  }, "\u6700\u8FD1\u306E\u4F1A\u8B70"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 13.5,
      fontWeight: 700
    }
  }, "\u3059\u3079\u3066\u8868\u793A")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, meetings.map((m, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    interactive: true,
    padding: "18px",
    onClick: onOpenMeeting
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 44,
      borderRadius: 99,
      background: `var(--brand-${m.tone})`,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 15.5
    }
  }, m.title), m.tags.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: "neutral",
    size: "sm",
    variant: "outline"
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, m.time, " \xB7 ", m.dur)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      marginRight: 8
    }
  }, m.people.map((p, j) => /*#__PURE__*/React.createElement("span", {
    key: j,
    style: {
      marginLeft: j ? -10 : 0,
      border: '2px solid #fff',
      borderRadius: '50%'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p,
    size: 30,
    tone: ['blue', 'green', 'orange', 'red'][j % 4]
  })))), /*#__PURE__*/React.createElement(Badge, {
    tone: m.st,
    size: "sm",
    dot: true
  }, m.status)))))));
}
Object.assign(window, {
  Dashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Login.jsx
try { (() => {
/* Classless app — login screen */
function Login({
  onLogin
}) {
  const {
    Button,
    Input,
    Checkbox
  } = window.ClasslessDesignSystem_225e16;
  const [remember, setRemember] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 clamp(40px, 7vw, 96px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark-classless.png",
    alt: "",
    style: {
      width: 36,
      height: 36
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 900,
      fontSize: 20,
      letterSpacing: '0.02em'
    }
  }, "\u96D1\u8AC7\u4F1A\u8B70")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 32,
      fontWeight: 900,
      lineHeight: 1.3
    }
  }, "\u304A\u304B\u3048\u308A\u306A\u3055\u3044\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 15,
      marginTop: 12,
      marginBottom: 32,
      lineHeight: 1.8
    }
  }, "\u30A2\u30AB\u30A6\u30F3\u30C8\u306B\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u3001\u30C1\u30FC\u30E0\u306E\u4F1A\u8A71\u3092\u30CA\u30EC\u30C3\u30B8\u306B\u5909\u3048\u307E\u3057\u3087\u3046\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
    type: "email",
    placeholder: "you@company.co.jp",
    size: "lg"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u30D1\u30B9\u30EF\u30FC\u30C9",
    type: "password",
    defaultValue: "password",
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: remember,
    onChange: setRemember,
    label: "\u30ED\u30B0\u30A4\u30F3\u72B6\u614B\u3092\u4FDD\u6301"
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u304A\u5FD8\u308C\u3067\u3059\u304B\uFF1F")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: onLogin
  }, "\u30ED\u30B0\u30A4\u30F3"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 13.5,
      color: 'var(--text-muted)'
    }
  }, "\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u304A\u6301\u3061\u3067\u306A\u3044\u65B9\u306F ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontWeight: 700
    }
  }, "\u65B0\u898F\u767B\u9332")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--neutral-900)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(700px 360px at 70% 20%, rgba(55,171,217,0.22), transparent 60%), radial-gradient(500px 300px at 20% 90%, rgba(20,169,137,0.18), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cl-spectrum-bar",
    style: {
      width: 72,
      height: 6,
      marginBottom: 28
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 900,
      color: '#fff',
      lineHeight: 1.45,
      letterSpacing: '0.02em'
    }
  }, "\u96D1\u8AC7\u304B\u3089\u3001", /*#__PURE__*/React.createElement("br", null), "\u30C1\u30FC\u30E0\u306E\u30CA\u30EC\u30C3\u30B8\u3092\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.66)',
      fontSize: 14.5,
      lineHeight: 1.9,
      marginTop: 20,
      maxWidth: '34ch'
    }
  }, "\u4F1A\u8B70\u3082\u3001\u3061\u3087\u3063\u3068\u3057\u305F\u7ACB\u3061\u8A71\u3082\u3002AI\u304C\u8981\u70B9\u3092\u307E\u3068\u3081\u3001\u691C\u7D22\u3067\u304D\u308B\u8CC7\u7523\u306B\u5909\u3048\u3066\u3044\u304D\u307E\u3059\u3002"))));
}
Object.assign(window, {
  Login
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/MeetingView.jsx
try { (() => {
/* Classless app — meeting detail (transcript + AI summary) */
function MeetingView({
  onBack
}) {
  const {
    Badge,
    Button,
    Avatar,
    Tabs
  } = window.ClasslessDesignSystem_225e16;
  const [tab, setTab] = React.useState('summary');
  const transcript = [{
    who: '森 健司',
    tone: 'green',
    t: '00:02',
    text: '今日は製造ラインのAI化、実証の進め方を詰めたいです。'
  }, {
    who: '佐藤 愛子',
    tone: 'blue',
    t: '00:18',
    text: '現場ヒアリングだと、検品工程の負荷がいちばん高いみたいですね。'
  }, {
    who: '田中 巧',
    tone: 'orange',
    t: '00:41',
    text: '画像認識で不良検知の精度をまず測りましょう。データは先月分が使えます。'
  }, {
    who: '森 健司',
    tone: 'green',
    t: '01:05',
    text: 'いいですね。3週間でPoC、その後に現場レビューという流れでどうでしょう。'
  }, {
    who: '佐藤 愛子',
    tone: 'blue',
    t: '01:22',
    text: '賛成です。現場の方にも早めに触ってもらいたいです。'
  }];
  const summary = ['検品工程の負荷軽減を最優先テーマとする。', '画像認識による不良検知のPoCを3週間で実施。', '先月分の検査データを学習・評価に利用する。', 'PoC後に現場レビューを行い、本導入を判断。'];
  const actions = [{
    who: '田中 巧',
    text: '先月分の検査データを整備し共有',
    due: '6/12'
  }, {
    who: '佐藤 愛子',
    text: '現場ヒアリングの追加日程を調整',
    due: '6/10'
  }, {
    who: '森 健司',
    text: 'PoC計画書のドラフト作成',
    due: '6/14'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 28px',
      borderBottom: '1px solid var(--color-border)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontWeight: 700,
      fontSize: 13,
      padding: 0,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 18l-6-6 6-6"
  })), "\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u306B\u623B\u308B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 22,
      fontWeight: 900,
      whiteSpace: 'nowrap'
    }
  }, "\u88FD\u9020\u30E9\u30A4\u30F3AI\u5316 \u5B9A\u4F8B"), /*#__PURE__*/React.createElement(Badge, {
    tone: "green",
    dot: true
  }, "\u8981\u7D04\u6E08\u307F")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginTop: 7
    }
  }, "2026.06.08 14:00 \xB7 52\u5206 \xB7 \u53C2\u52A0\u80053\u540D")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    tone: "ink"
  }, "\u5171\u6709"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    tone: "ink"
  }, "\u30CA\u30EC\u30C3\u30B8\u306B\u4FDD\u5B58")))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: '1px solid var(--color-border)',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 24px',
      borderBottom: '1px solid var(--color-divider)',
      fontWeight: 800,
      fontSize: 13,
      color: 'var(--text-secondary)',
      flex: 'none'
    }
  }, "\u6587\u5B57\u8D77\u3053\u3057"), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: 'auto',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, transcript.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: m.who,
    tone: m.tone,
    size: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 13.5
    }
  }, m.who), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, m.t)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.8,
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, m.text)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      background: 'var(--color-bg-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 24px 0',
      flex: 'none',
      background: 'var(--color-bg-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--brand-blue)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2l2.4 7.4H22l-6 4.6 2.3 7.4L12 17l-6.3 4.4L8 14 2 9.4h7.6z"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 900,
      fontSize: 14
    }
  }, "AI\u30A2\u30B7\u30B9\u30BF\u30F3\u30C8")), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: 'summary',
      label: '要約'
    }, {
      id: 'actions',
      label: 'アクション'
    }, {
      id: 'topics',
      label: 'トピック'
    }],
    value: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: 'auto',
      padding: 24
    }
  }, tab === 'summary' && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, summary.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      background: '#fff',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: 'var(--blue-50)',
      color: 'var(--blue-700)',
      fontWeight: 800,
      fontSize: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.7
    }
  }, s)))), tab === 'actions' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, actions.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: '#fff',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: a.who,
    size: 30,
    tone: ['blue', 'orange', 'green'][i % 3]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, a.text), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, "\u62C5\u5F53: ", a.who)), /*#__PURE__*/React.createElement(Badge, {
    tone: "orange",
    size: "sm",
    variant: "soft"
  }, "\u301C", a.due)))), tab === 'topics' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, ['画像認識', '不良検知', 'PoC', '検品工程', '現場レビュー', '学習データ', '本導入判断'].map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: ['blue', 'green', 'orange', 'red'][t.length % 4],
    variant: "soft"
  }, "#", t)))))));
}
Object.assign(window, {
  MeetingView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/MeetingView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/CtaFooter.jsx
try { (() => {
/* Classless marketing — dark CTA + footer */
function JoinCta({
  onNav
}) {
  const {
    Button
  } = window.ClasslessDesignSystem_225e16;
  const Arrow = () => /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      background: 'var(--neutral-900)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(900px 380px at 80% 0%, rgba(55,171,217,0.18), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cl-container",
    style: {
      position: 'relative',
      paddingTop: 'var(--section-y)',
      paddingBottom: 'var(--section-y)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cl-spectrum-bar",
    style: {
      width: 72,
      height: 6,
      margin: '0 auto 30px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-eyebrow)',
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--brand-blue)'
    }
  }, "Join Us"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: 'clamp(32px, 4.4vw, 60px)',
      fontWeight: 900,
      marginTop: 22,
      lineHeight: 1.25,
      letterSpacing: '0.02em'
    }
  }, "\u5730\u65B9\u306E\u672A\u6765\u3092\u3001", /*#__PURE__*/React.createElement("br", null), "\u4E00\u7DD2\u306B\u5B9F\u88C5\u3057\u3088\u3046\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.72)',
      fontSize: 17,
      lineHeight: 1.9,
      maxWidth: '46ch',
      margin: '24px auto 0',
      fontWeight: 500
    }
  }, "AI\u5C0E\u5165\u306E\u3054\u76F8\u8AC7\u304B\u3089\u3001\u5171\u540C\u4E8B\u696D\u306E\u3054\u63D0\u6848\u307E\u3067\u3002\u307E\u305A\u306F\u304A\u6C17\u8EFD\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      marginTop: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Arrow, null),
    onClick: () => onNav && onNav('contact')
  }, "\u304A\u554F\u3044\u5408\u308F\u305B"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    tone: "ink",
    style: {
      background: 'transparent',
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.4)'
    }
  }, "\u63A1\u7528\u60C5\u5831\u3092\u898B\u308B"))));
}
function Footer() {
  const cols = [{
    h: 'サービス',
    items: ['AI導入コンサルティング', '研修・人材育成', '業務支援プロダクト', '共同事業・伴走支援']
  }, {
    h: '会社情報',
    items: ['ミッション', '会社概要', 'メンバー', 'ニュース']
  }, {
    h: '採用',
    items: ['採用情報', '募集職種一覧', '社員インタビュー']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--neutral-900)',
      borderTop: '1px solid rgba(255,255,255,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cl-container",
    style: {
      paddingTop: 64,
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-classless-stacked-dark.png",
    alt: "Classless",
    style: {
      width: 132,
      marginLeft: -6
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.6)',
      fontSize: 13,
      lineHeight: 1.9,
      marginTop: 8,
      maxWidth: '28ch'
    }
  }, "\u5730\u65B9\u304B\u3089AI\u3067\u3001\u4EBA\u9593\u306E\u53EF\u80FD\u6027\u3092\u89E3\u653E\u3059\u308B\u3002", /*#__PURE__*/React.createElement("br", null), "\u682A\u5F0F\u4F1A\u793EClassless / \u5BAE\u57CE\u770C\u4ED9\u53F0\u5E02")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontWeight: 700,
      fontSize: 13,
      marginBottom: 16,
      letterSpacing: '0.04em'
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, c.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'rgba(255,255,255,0.66)',
      fontSize: 13.5
    },
    onMouseEnter: e => e.currentTarget.style.color = '#fff',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,0.66)'
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    className: "cl-spectrum-bar",
    style: {
      margin: '44px 0 24px',
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'rgba(255,255,255,0.5)'
    }
  }, "\xA9 2026 Classless Inc."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22
    }
  }, ['プライバシーポリシー', '利用規約', '特定商取引法'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'rgba(255,255,255,0.5)',
      fontSize: 12
    }
  }, l))))));
}
Object.assign(window, {
  JoinCta,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/CtaFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Header.jsx
try { (() => {
/* Classless marketing — sticky site header */
function Header({
  onNav
}) {
  const {
    Button
  } = window.ClasslessDesignSystem_225e16;
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector('[data-kit-scroll]') || window;
    const onScroll = () => {
      const y = el === window ? window.scrollY : el.scrollTop;
      setScrolled(y > 12);
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);
  const links = ['サービス', '導入事例', '会社情報', 'ニュース', '採用'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0)',
      backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      transition: 'background var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cl-container",
    style: {
      height: 76,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      e.preventDefault();
      onNav && onNav('top');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark-classless.png",
    alt: "",
    style: {
      width: 36,
      height: 36
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 23,
      color: 'var(--text-primary)',
      letterSpacing: '0.01em'
    }
  }, "Classless")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: 'var(--font-jp)',
      fontWeight: 700,
      fontSize: 14.5,
      color: 'var(--text-primary)'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--brand-blue)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-primary)'
  }, l)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => onNav && onNav('contact')
  }, "\u304A\u554F\u3044\u5408\u308F\u305B"))));
}
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
/* Classless marketing — hero */
function Hero({
  onNav
}) {
  const {
    Button,
    Badge
  } = window.ClasslessDesignSystem_225e16;
  const {
    Placeholder
  } = window;
  const Arrow = () => /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--color-bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -180,
      right: -160,
      width: 520,
      height: 520,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(55,171,217,0.16), transparent 65%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 40,
      right: 280,
      width: 360,
      height: 360,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(20,169,137,0.12), transparent 65%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cl-container",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 56,
      alignItems: 'center',
      paddingTop: 88,
      paddingBottom: 'var(--section-y)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "blue",
    dot: true
  }, "\u5730\u65B9\u767A AI \u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(40px, 5.4vw, 72px)',
      fontWeight: 900,
      lineHeight: 1.16,
      letterSpacing: '0.02em',
      margin: 0
    }
  }, "\u5730\u65B9\u304B\u3089", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-blue)'
    }
  }, "AI"), "\u3067\u3001", /*#__PURE__*/React.createElement("br", null), "\u4EBA\u9593\u306E\u53EF\u80FD\u6027\u3092", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      whiteSpace: 'nowrap'
    }
  }, "\u89E3\u653E\u3059\u308B\u3002", /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 6,
      height: 14,
      background: 'var(--blue-100)',
      zIndex: -1,
      borderRadius: 4
    }
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 28,
      fontSize: 18,
      lineHeight: 1.9,
      color: 'var(--text-secondary)',
      maxWidth: '40ch',
      fontWeight: 500
    }
  }, "\u6559\u5BA4\u306E\u5916\u3078\u3002\u5730\u57DF\u306E\u4F01\u696D\u30FB\u6559\u80B2\u73FE\u5834\u306B\u4F34\u8D70\u3057\u3001\u751F\u6210AI\u3092\u65E5\u5E38\u306E\u9053\u5177\u306B\u5909\u3048\u3066\u3044\u304F\u3002Classless \u306F\u5B66\u3073\u3068\u4ED5\u4E8B\u3092\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3057\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 38,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Arrow, null),
    onClick: () => onNav && onNav('contact')
  }, "\u7121\u6599\u3067\u76F8\u8AC7\u3059\u308B"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    tone: "ink"
  }, "\u8CC7\u6599\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cl-spectrum-bar",
    style: {
      width: 64,
      height: 5
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)',
      letterSpacing: '0.06em'
    }
  }, "\u6771\u5317\u30FB\u4ED9\u53F0\u767A / \u5168\u56FD\u306E\u5730\u57DF\u3068\u3068\u3082\u306B"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    tone: "blue",
    ratio: "4 / 5",
    label: "hero / \u73FE\u5834\u306E\u5199\u771F",
    radius: "var(--radius-2xl)",
    style: {
      boxShadow: 'var(--shadow-xl)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -22,
      left: -22,
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 34,
      color: 'var(--brand-green)',
      lineHeight: 1
    }
  }, "120", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, "+")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-jp)',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--text-secondary)',
      lineHeight: 1.4
    }
  }, "\u5730\u57DF\u4F01\u696D\u306E", /*#__PURE__*/React.createElement("br", null), "AI\u5C0E\u5165\u3092\u652F\u63F4")))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/KitBits.jsx
try { (() => {
/* Classless marketing — small shared bits (placeholders, eyebrow, section) */

/* Brand-tinted image placeholder. Looks intentional, not broken. */
function Placeholder({
  tone = 'blue',
  label = '画像',
  ratio = '4 / 3',
  radius = 'var(--radius-lg)',
  style = {}
}) {
  const tints = {
    blue: ['var(--blue-100)', 'var(--blue-400)'],
    red: ['var(--red-100)', 'var(--red-400)'],
    orange: ['var(--orange-100)', 'var(--orange-400)'],
    green: ['var(--green-100)', 'var(--green-400)'],
    ink: ['var(--neutral-200)', 'var(--neutral-400)']
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      width: '100%',
      borderRadius: radius,
      overflow: 'hidden',
      background: `linear-gradient(135deg, ${tints[0]}, ${tints[1]})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "rgba(255,255,255,0.85)",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "8.5",
    r: "1.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 15l-5-5L5 21"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 10,
      right: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'rgba(255,255,255,0.9)',
      letterSpacing: '0.08em'
    }
  }, label));
}

/* English eyebrow label (uses the .cl-eyebrow utility, with tone override) */
function Eyebrow({
  children,
  tone
}) {
  const color = tone ? `var(--accent-${tone})` : undefined;
  return /*#__PURE__*/React.createElement("span", {
    className: "cl-eyebrow",
    style: color ? {
      color
    } : undefined
  }, children);
}

/* Section wrapper with consistent vertical rhythm */
function Section({
  children,
  bg = 'transparent',
  id,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: bg,
      paddingTop: 'var(--section-y)',
      paddingBottom: 'var(--section-y)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cl-container"
  }, children));
}
Object.assign(window, {
  Placeholder,
  Eyebrow,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/KitBits.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Proof.jsx
try { (() => {
/* Classless marketing — impact numbers + latest news */
function Impact() {
  const stats = [{
    n: '120',
    suf: '+',
    label: 'AI導入支援した\n地域企業・団体'
  }, {
    n: '8',
    suf: '県',
    label: '東北を中心に\n展開するエリア'
  }, {
    n: '3,400',
    suf: '名',
    label: '研修を受講した\n地域の人材'
  }, {
    n: '94',
    suf: '%',
    label: '伴走支援の\n継続利用率'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-bg)',
      paddingTop: 8,
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cl-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 0,
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)'
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '34px 28px',
      borderLeft: i ? '1px solid var(--color-divider)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 48,
      lineHeight: 1,
      color: 'var(--text-primary)'
    }
  }, s.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--brand-blue)'
    }
  }, s.suf)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--text-secondary)',
      lineHeight: 1.6,
      whiteSpace: 'pre-line'
    }
  }, s.label))))));
}
function News() {
  const {
    Badge
  } = window.ClasslessDesignSystem_225e16;
  const {
    Eyebrow,
    Section
  } = window;
  const items = [{
    date: '2026.06.02',
    cat: 'プレスリリース',
    tone: 'blue',
    title: '宮城県内3社と、製造現場のAI活用に関する共同実証を開始しました'
  }, {
    date: '2026.05.20',
    cat: 'イベント',
    tone: 'orange',
    title: '「地方×生成AI 活用カンファレンス 2026」を仙台にて開催します'
  }, {
    date: '2026.05.08',
    cat: 'プロダクト',
    tone: 'green',
    title: 'AI議事録「雑談会議」に、要点の自動ハイライト機能を追加'
  }, {
    date: '2026.04.15',
    cat: 'お知らせ',
    tone: 'red',
    title: '東北6県の自治体向けに、AI人材育成プログラムの提供を開始'
  }];
  return /*#__PURE__*/React.createElement(Section, {
    id: "news"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "green"
  }, "Latest News"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(30px, 3.4vw, 44px)',
      fontWeight: 900,
      marginTop: 16
    }
  }, "\u6700\u65B0\u30CB\u30E5\u30FC\u30B9")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontWeight: 700,
      fontSize: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, "\u30CB\u30E5\u30FC\u30B9\u4E00\u89A7\u3078", /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--color-border)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'grid',
      gridTemplateColumns: '140px 120px 1fr 24px',
      alignItems: 'center',
      gap: 20,
      padding: '22px 8px',
      borderBottom: '1px solid var(--color-border)',
      color: 'var(--text-primary)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--color-bg-subtle)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, it.date), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Badge, {
    tone: it.tone,
    variant: "soft",
    size: "sm"
  }, it.cat)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15.5,
      fontWeight: 700,
      lineHeight: 1.6
    }
  }, it.title), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-muted)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6"
  }))))));
}
Object.assign(window, {
  Impact,
  News
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Proof.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Services.jsx
try { (() => {
/* Classless marketing — What We Do (services) */
function Services() {
  const {
    Card,
    Badge
  } = window.ClasslessDesignSystem_225e16;
  const {
    Eyebrow,
    Section
  } = window;
  const services = [{
    accent: 'blue',
    tag: 'CONSULTING',
    title: 'AI導入コンサルティング',
    body: '業務の棚卸しから、生成AIで何を変えるかの設計まで。現場の言葉で、導入のロードマップを描きます。',
    icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zM12 8v4l3 2'
  }, {
    accent: 'green',
    tag: 'ENABLEMENT',
    title: '研修・人材育成',
    body: '使えるAI人材を、地域に。実務に直結したワークショップとハンズオンで、現場の自走を後押しします。',
    icon: 'M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 1 3 3 6 3s6-2 6-3v-5'
  }, {
    accent: 'orange',
    tag: 'PRODUCT',
    title: '業務支援プロダクト',
    body: '雑談から議事録、ナレッジ整理まで。日々の仕事に溶け込むAIツールを、現場とともに育てます。',
    icon: 'M3 3h18v14H3zM3 21h18M8 17v4M16 17v4'
  }, {
    accent: 'red',
    tag: 'PARTNERSHIP',
    title: '共同事業・伴走支援',
    body: '一度きりの導入で終わらせない。パートナーとして並走し、成果が出るまで伴走し続けます。',
    icon: 'M20 6L9 17l-5-5'
  }];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-bg-subtle)",
    id: "services"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      marginBottom: 52,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "What We Do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(30px, 3.6vw, 46px)',
      fontWeight: 900,
      marginTop: 18,
      letterSpacing: '0.01em'
    }
  }, "AI\u3092\u3001\u5730\u57DF\u306E\u73FE\u5834\u306E", /*#__PURE__*/React.createElement("br", null), "\u300C\u3042\u305F\u308A\u307E\u3048\u300D\u306B\u3059\u308B\u3002")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '34ch',
      fontSize: 15.5,
      lineHeight: 1.9,
      color: 'var(--text-secondary)',
      fontWeight: 500
    }
  }, "\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0\u30FB\u4EBA\u6750\u80B2\u6210\u30FB\u30D7\u30ED\u30C0\u30AF\u30C8\u30023\u3064\u306E\u8EF8\u3067\u3001\u5730\u57DF\u4F01\u696D\u306EAI\u6D3B\u7528\u3092\u307E\u308B\u3054\u3068\u652F\u3048\u307E\u3059\u3002")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 20
    }
  }, services.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    accent: s.accent,
    interactive: true,
    padding: "32px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: `var(--${s.accent}-50)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: `var(--brand-${s.accent})`,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: s.icon
  }))), /*#__PURE__*/React.createElement(Badge, {
    tone: s.accent,
    variant: "soft",
    size: "sm"
  }, s.tag)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      fontWeight: 900,
      marginBottom: 10
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.85,
      color: 'var(--text-secondary)'
    }
  }, s.body)))));
}
Object.assign(window, {
  Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Services.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
