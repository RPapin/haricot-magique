/* @ds-bundle: {"format":4,"namespace":"LeHaricotMagiqueDesignSystem_35ce97","components":[{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"VegetableCard","sourcePath":"components/content/VegetableCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/content/Accordion.jsx":"99bec8c766a3","components/content/VegetableCard.jsx":"8aba02742f67","components/core/Badge.jsx":"09a6355672ec","components/core/Button.jsx":"50ba6d92ee1b","components/core/Card.jsx":"9ed9c70621ed","components/core/IconButton.jsx":"8921a060f056","components/core/SectionHeading.jsx":"b5221cf3a081","components/core/Tag.jsx":"6fa2f19ded26","components/core/Wordmark.jsx":"fd05514bc7cd","components/forms/Checkbox.jsx":"b0983a2723b6","components/forms/Input.jsx":"7eb1d019c406","components/forms/Select.jsx":"04428970d268","components/navigation/NavBar.jsx":"030d88f58e1e","components/navigation/Tabs.jsx":"a76086f102c0","ui_kits/site-vitrine/FaqContact.jsx":"3487827ad185","ui_kits/site-vitrine/FarmStory.jsx":"102acb7457f1","ui_kits/site-vitrine/Hero.jsx":"fe018982fb20","ui_kits/site-vitrine/SiteFooter.jsx":"dee873818a81","ui_kits/site-vitrine/VegetableSection.jsx":"c95ea9ee462a","ui_kits/site-vitrine/VisitSection.jsx":"7da5863bcc5f","ui_kits/site-vitrine/data.js":"228f5a45e13b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LeHaricotMagiqueDesignSystem_35ce97 = window.LeHaricotMagiqueDesignSystem_35ce97 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  defaultOpen = null
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-hairline)'
    }
  }, items.map((it, i) => {
    const on = open === (it.id || i);
    return /*#__PURE__*/React.createElement("div", {
      key: it.id || i,
      style: {
        borderBottom: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(on ? null : it.id || i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-4)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '20px 0',
        textAlign: 'left',
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-heading-m)',
        color: 'var(--text-display)'
      }
    }, /*#__PURE__*/React.createElement("span", null, it.question), /*#__PURE__*/React.createElement("i", {
      className: 'ph ' + (on ? 'ph-minus' : 'ph-plus'),
      "aria-hidden": "true",
      style: {
        fontSize: '1rem',
        color: 'var(--carotte)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden',
        maxHeight: on ? '30rem' : 0,
        opacity: on ? 1 : 0,
        transition: 'max-height var(--dur-base) var(--ease-soft),opacity var(--dur-base) var(--ease-soft)'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 22px',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-body-m)',
        lineHeight: 'var(--leading-body)',
        color: 'var(--text-secondary)',
        maxWidth: '62ch',
        textWrap: 'pretty'
      }
    }, it.answer)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const badgeTones = {
  dispo: {
    bg: 'var(--state-dispo-soft)',
    fg: '#3E5327'
  },
  bientot: {
    bg: 'var(--state-bientot-soft)',
    fg: '#7A5C10'
  },
  fini: {
    bg: 'var(--state-fini-soft)',
    fg: 'var(--gris-700)'
  },
  bio: {
    bg: 'var(--basilic-100)',
    fg: 'var(--basilic-700)'
  },
  info: {
    bg: 'var(--chou-soft)',
    fg: 'var(--chou)'
  }
};
function Badge({
  tone = 'dispo',
  dot = false,
  children
}) {
  const t = badgeTones[tone] || badgeTones.dispo;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-micro)',
      fontWeight: 'var(--weight-semibold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      padding: '5px 11px 4px',
      borderRadius: 'var(--radius-pill)'
    }
  }, dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 'var(--radius-pill)',
      background: 'currentColor',
      opacity: .75
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/VegetableCard.jsx
try { (() => {
function VegetableCard({
  name,
  latin,
  price,
  unit = 'la botte',
  state = 'dispo',
  note,
  color = 'courgette',
  imageSlot = true
}) {
  const [hover, setHover] = React.useState(false);
  const labels = {
    dispo: 'En vente',
    bientot: 'Bientôt',
    fini: 'Terminé'
  };
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-m)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: hover ? 'var(--shadow-hover)' : 'var(--shadow-rest)',
      transform: hover ? 'translateY(var(--hover-lift))' : 'none',
      transition: 'transform var(--dur-base) var(--ease-soft),box-shadow var(--dur-base) var(--ease-soft)',
      opacity: state === 'fini' ? .62 : 1
    }
  }, imageSlot ? /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      background: 'var(--' + color + '-soft, var(--surface-sunk))',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      padding: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-micro)',
      color: 'var(--text-muted)',
      letterSpacing: '.04em'
    }
  }, "photo \xE0 fournir")) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-heading-m)',
      fontWeight: 'var(--weight-regular)',
      color: 'var(--text-display)'
    }
  }, name), price ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-body-s)',
      color: 'var(--text-body)',
      whiteSpace: 'nowrap'
    }
  }, price) : null), latin ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'var(--text-body-s)',
      color: 'var(--text-muted)'
    }
  }, latin) : null, note ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-s)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-secondary)',
      textWrap: 'pretty'
    }
  }, note) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-3)',
      paddingTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: state,
    dot: state === 'dispo'
  }, labels[state] || state), unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-meta)',
      color: 'var(--text-muted)'
    }
  }, unit) : null)));
}
Object.assign(__ds_scope, { VegetableCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/VegetableCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const btnBase = {
  fontFamily: 'var(--font-body)',
  fontWeight: 'var(--weight-medium)',
  borderRadius: 'var(--radius-pill)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  cursor: 'pointer',
  border: '1px solid transparent',
  textDecoration: 'none',
  lineHeight: 1.1,
  transition: 'background var(--dur-quick) var(--ease-soft),color var(--dur-quick) var(--ease-soft),transform var(--dur-instant) var(--ease-soft),box-shadow var(--dur-base) var(--ease-soft)'
};
const btnSizes = {
  sm: {
    padding: '8px 16px',
    fontSize: 'var(--text-body-s)'
  },
  md: {
    padding: '12px 26px',
    fontSize: 'var(--text-body-m)'
  },
  lg: {
    padding: '17px 34px',
    fontSize: 'var(--text-body-l)'
  }
};
const btnVariants = {
  primary: {
    rest: {
      background: 'var(--action-primary)',
      color: 'var(--text-on-invert)'
    },
    hover: {
      background: 'var(--action-primary-hover)',
      boxShadow: 'var(--shadow-hover)'
    }
  },
  accent: {
    rest: {
      background: 'var(--action-accent)',
      color: 'var(--lin-50)'
    },
    hover: {
      background: 'var(--action-accent-hover)',
      boxShadow: 'var(--shadow-hover)'
    }
  },
  outline: {
    rest: {
      background: 'transparent',
      color: 'var(--text-body)',
      borderColor: 'var(--border-strong)'
    },
    hover: {
      background: 'var(--surface-card)',
      borderColor: 'var(--basilic-700)'
    }
  },
  ghost: {
    rest: {
      background: 'transparent',
      color: 'var(--text-link)'
    },
    hover: {
      color: 'var(--text-link-hover)'
    }
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconTrailing,
  disabled = false,
  fullWidth = false,
  onClick,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = btnVariants[variant] || btnVariants.primary;
  const style = {
    ...btnBase,
    ...btnSizes[size],
    ...v.rest,
    ...(hover && !disabled ? v.hover : null),
    width: fullWidth ? '100%' : undefined,
    transform: press && !disabled ? 'scale(var(--press-scale))' : 'scale(1)',
    opacity: disabled ? .45 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer'
  };
  const Tag = href && !disabled ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    style: style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), icon ? /*#__PURE__*/React.createElement("i", {
    className: 'ph ph-' + icon,
    style: {
      fontSize: '1.15em'
    },
    "aria-hidden": "true"
  }) : null, /*#__PURE__*/React.createElement("span", null, children), iconTrailing ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: '1.7em',
      height: '1.7em',
      borderRadius: 'var(--radius-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: variant === 'primary' || variant === 'accent' ? 'rgba(251,247,239,.16)' : 'var(--surface-sunk)',
      transform: hover ? 'translate(2px,-1px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-soft)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'ph ph-' + (typeof iconTrailing === 'string' ? iconTrailing : 'arrow-up-right'),
    "aria-hidden": "true"
  })) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  tone = 'paper',
  interactive = false,
  padding = 'var(--space-6)',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    paper: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-hairline)'
    },
    sunk: {
      background: 'var(--surface-sunk)',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    },
    invert: {
      background: 'var(--surface-invert)',
      color: 'var(--text-on-invert)',
      border: '1px solid var(--border-invert)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-m)',
      padding,
      boxShadow: interactive && hover ? 'var(--shadow-hover)' : 'var(--shadow-rest)',
      transform: interactive && hover ? 'translateY(var(--hover-lift))' : 'none',
      transition: 'transform var(--dur-base) var(--ease-soft),box-shadow var(--dur-base) var(--ease-soft)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon = 'arrow-right',
  label,
  size = 'md',
  tone = 'neutral',
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dim = {
    sm: 32,
    md: 42,
    lg: 52
  }[size] || 42;
  const tones = {
    neutral: {
      background: hover ? 'var(--surface-sunk)' : 'transparent',
      color: 'var(--text-body)',
      border: '1px solid var(--border-hairline)'
    },
    solid: {
      background: hover ? 'var(--action-primary-hover)' : 'var(--action-primary)',
      color: 'var(--text-on-invert)',
      border: '1px solid transparent'
    },
    soft: {
      background: hover ? 'var(--basilic-100)' : 'var(--surface-card)',
      color: 'var(--basilic-700)',
      border: '1px solid var(--border-hairline)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: dim * 0.42,
      transition: 'background var(--dur-quick) var(--ease-soft),transform var(--dur-instant) var(--ease-soft)',
      ...tones[tone]
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    className: 'ph ph-' + icon,
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  level = 2,
  tone = 'ink'
}) {
  const H = 'h' + level;
  const color = tone === 'invert' ? 'var(--text-on-invert)' : 'var(--text-display)';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      textAlign: align,
      maxWidth: '34ch',
      margin: align === 'center' ? '0 auto' : undefined,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-micro)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: tone === 'invert' ? 'var(--basilic-300)' : 'var(--carotte)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement(H, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-regular)',
      fontSize: 'var(--text-display-m)',
      lineHeight: 'var(--leading-heading)',
      letterSpacing: 'var(--tracking-heading)',
      color
    }
  }, title), intro ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-l)',
      lineHeight: 'var(--leading-body)',
      color: tone === 'invert' ? 'var(--basilic-100)' : 'var(--text-secondary)',
      maxWidth: '46ch',
      textWrap: 'pretty'
    }
  }, intro) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
const tagColors = {
  carotte: '--carotte',
  tomate: '--tomate',
  betterave: '--betterave',
  aubergine: '--aubergine',
  courgette: '--courgette',
  ble: '--ble',
  chou: '--chou',
  basilic: '--basilic-700'
};
function Tag({
  color = 'courgette',
  selected = false,
  onClick,
  children
}) {
  const c = 'var(' + (tagColors[color] || tagColors.courgette) + ')';
  const soft = tagColors[color] && color !== 'basilic' ? 'var(--' + color + '-soft)' : 'var(--basilic-100)';
  const [hover, setHover] = React.useState(false);
  const interactive = Boolean(onClick);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-meta)',
      letterSpacing: '.01em',
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      cursor: interactive ? 'pointer' : 'default',
      background: selected ? c : hover && interactive ? soft : 'transparent',
      color: selected ? 'var(--lin-50)' : c,
      border: '1px solid ' + (selected ? c : 'var(--border-hairline)'),
      transition: 'all var(--dur-quick) var(--ease-soft)'
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function Wordmark({
  size = 'md',
  tone = 'ink',
  subtitle = false
}) {
  const scale = {
    sm: '1.0625rem',
    md: '1.4rem',
    lg: '2.1rem'
  }[size] || '1.4rem';
  const color = tone === 'invert' ? 'var(--text-on-invert)' : 'var(--text-display)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: '2px',
      lineHeight: 1.05
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: scale,
      letterSpacing: '-.015em',
      color
    }
  }, "Le Haricot ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: tone === 'invert' ? 'var(--basilic-300)' : 'var(--courgette)'
    }
  }, "Magique")), subtitle ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-micro)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: tone === 'invert' ? 'var(--basilic-300)' : 'var(--text-muted)'
    }
  }, "Mara\xEEchage en permaculture \xB7 La Tour de Salvagny") : null);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  hint,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: '10px',
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      flex: '0 0 auto',
      width: 20,
      height: 20,
      marginTop: 1,
      borderRadius: 'var(--radius-xs)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: checked ? 'var(--action-primary)' : 'var(--surface-card)',
      border: '1px solid ' + (checked ? 'var(--action-primary)' : 'var(--border-strong)'),
      color: 'var(--text-on-invert)',
      fontSize: 12,
      transition: 'all var(--dur-quick) var(--ease-soft)'
    }
  }, checked ? /*#__PURE__*/React.createElement("i", {
    className: "ph ph-check",
    "aria-hidden": "true"
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-s)',
      color: 'var(--text-body)'
    }
  }, label), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-meta)',
      color: 'var(--text-muted)'
    }
  }, hint) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  hint,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  multiline = false,
  rows = 4,
  id
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useMemo(() => 'in-' + Math.random().toString(36).slice(2, 7), []);
  const fieldStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-body-m)',
    color: 'var(--text-body)',
    background: 'var(--surface-card)',
    border: '1px solid ' + (error ? 'var(--tomate)' : focus ? 'var(--basilic-700)' : 'var(--border-hairline)'),
    borderRadius: 'var(--radius-s)',
    padding: '12px 14px',
    width: '100%',
    outline: 'none',
    boxShadow: focus ? '0 0 0 3px rgba(201,98,44,.16)' : 'none',
    transition: 'border-color var(--dur-quick) var(--ease-soft),box-shadow var(--dur-quick) var(--ease-soft)',
    resize: 'vertical'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-meta)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-secondary)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--carotte)'
    }
  }, " *") : null) : null, multiline ? /*#__PURE__*/React.createElement("textarea", {
    id: uid,
    rows: rows,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: fieldStyle
  }) : /*#__PURE__*/React.createElement("input", {
    id: uid,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: fieldStyle
  }), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-meta)',
      color: error ? 'var(--tomate)' : 'var(--text-muted)'
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  hint,
  id
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useMemo(() => 'sel-' + Math.random().toString(36).slice(2, 7), []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-meta)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-secondary)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", {
    id: uid,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-m)',
      color: 'var(--text-body)',
      background: 'var(--surface-card)',
      border: '1px solid ' + (focus ? 'var(--basilic-700)' : 'var(--border-hairline)'),
      borderRadius: 'var(--radius-s)',
      padding: '12px 38px 12px 14px',
      outline: 'none',
      cursor: 'pointer',
      boxShadow: focus ? '0 0 0 3px rgba(201,98,44,.16)' : 'none',
      transition: 'all var(--dur-quick) var(--ease-soft)'
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 14,
      pointerEvents: 'none',
      color: 'var(--text-muted)'
    }
  })), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-meta)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  links = [],
  active,
  onNavigate,
  cta = 'Réserver un panier',
  onCta
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(251,247,239,.86)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--measure-page)',
      margin: '0 auto',
      padding: '14px var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(links[0] && links[0].id);
    },
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: "md"
  })), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      alignItems: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.id
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href || '#',
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(l.id);
      }
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-s)',
      textDecoration: 'none',
      color: active === l.id ? 'var(--basilic-700)' : 'var(--text-secondary)',
      borderBottom: '1px solid ' + (active === l.id ? 'var(--carotte)' : 'transparent'),
      paddingBottom: 2,
      transition: 'color var(--dur-quick) var(--ease-soft)'
    }
  }, l.label)))), cta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "primary",
    onClick: onCta
  }, cta) : null));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, items.map(it => {
    const on = value === it.id;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(it.id),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0 0 12px',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-body-m)',
        color: on ? 'var(--text-display)' : 'var(--text-muted)',
        boxShadow: on ? 'inset 0 -2px 0 var(--basilic-700)' : 'none',
        transition: 'color var(--dur-quick) var(--ease-soft)'
      }
    }, it.label, it.count != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-meta)',
        color: 'var(--text-muted)',
        marginLeft: 6
      }
    }, it.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/FaqContact.jsx
try { (() => {
const {
  SectionHeading,
  Accordion,
  Card,
  Input,
  Select,
  Checkbox,
  Button
} = window.LeHaricotMagiqueDesignSystem_35ce97;
function FaqContact() {
  const d = window.LHM_DATA;
  const [envoye, setEnvoye] = React.useState(false);
  const [prevenir, setPrevenir] = React.useState(true);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      maxWidth: 'var(--measure-page)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,.9fr)',
      gap: 'clamp(24px,5vw,72px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Questions",
    title: "Ce qu'on nous demande souvent"
  }), /*#__PURE__*/React.createElement(Accordion, {
    items: d.faq,
    defaultOpen: 0
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-6)"
  }, envoye ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-regular)',
      fontSize: 'var(--text-heading-l)',
      color: 'var(--text-display)'
    }
  }, "Message envoy\xE9"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-m)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-secondary)'
    }
  }, "Nina r\xE9pond en g\xE9n\xE9ral sous deux jours, entre deux r\xE9coltes."), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setEnvoye(false)
  }, "\xC9crire un autre message")) : /*#__PURE__*/React.createElement("form", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    },
    onSubmit: e => {
      e.preventDefault();
      setEnvoye(true);
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-regular)',
      fontSize: 'var(--text-heading-l)',
      color: 'var(--text-display)'
    }
  }, "R\xE9server un panier"), /*#__PURE__*/React.createElement(Input, {
    label: "Votre pr\xE9nom",
    placeholder: "Nina",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    type: "email",
    placeholder: "vous@exemple.fr",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Jour de retrait",
    options: d.horaires.map(h => h.jour + ' ' + h.h)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Message",
    multiline: true,
    rows: 3,
    hint: "Pr\xE9cisez la taille du panier ou ce que vous cherchez."
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Pr\xE9venez-moi des nouvelles r\xE9coltes",
    checked: prevenir,
    onChange: setPrevenir
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true
  }, "Envoyer"))));
}
Object.assign(window, {
  FaqContact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/FaqContact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/FarmStory.jsx
try { (() => {
const {
  SectionHeading,
  Card
} = window.LeHaricotMagiqueDesignSystem_35ce97;
const chiffres = [{
  v: '1 ha',
  l: 'cultivé à la main'
}, {
  v: '0',
  l: 'traitement, zéro labour'
}, {
  v: '32',
  l: 'variétés sur l\'année'
}, {
  v: '2',
  l: 'ventes par semaine'
}];
function FarmStory() {
  return /*#__PURE__*/React.createElement("section", {
    id: "ferme",
    style: {
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--measure-page)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,.9fr) minmax(0,1.1fr)',
      gap: 'clamp(24px,5vw,72px)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "La ferme",
    title: "Un potager conduit comme un sol vivant"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-l)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-secondary)',
      maxWidth: 'var(--measure-text)',
      textWrap: 'pretty'
    }
  }, "Les planches sont permanentes et couvertes toute l'ann\xE9e: paille, compost, engrais verts. Le sol n'est jamais retourn\xE9, ce qui garde l'eau et la vie qu'il contient. Les cultures sont associ\xE9es pour se prot\xE9ger entre elles, et rien ne part en dehors de la ferme: ce qui est r\xE9colt\xE9 le matin est vendu sur place l'apr\xE8s-midi."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))',
      gap: 'var(--space-4)'
    }
  }, chiffres.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.l,
    tone: "sunk",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-heading-l)',
      color: 'var(--text-display)',
      lineHeight: 1.1
    }
  }, c.v), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 'var(--text-meta)',
      color: 'var(--text-muted)'
    }
  }, c.l)))))));
}
Object.assign(window, {
  FarmStory
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/FarmStory.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/Hero.jsx
try { (() => {
const {
  Button,
  Badge,
  Wordmark
} = window.LeHaricotMagiqueDesignSystem_35ce97;
function Hero({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'clamp(48px,7vw,104px) var(--gutter) var(--section-y)',
      maxWidth: 'var(--measure-page)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,.95fr)',
      gap: 'clamp(24px,5vw,72px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "bio",
    dot: true
  }, "Mara\xEEchage en permaculture"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-regular)',
      fontSize: 'var(--text-display-xl)',
      lineHeight: 'var(--leading-display)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-display)',
      textWrap: 'balance'
    }
  }, "Des l\xE9gumes cueillis le matin, vendus l'apr\xE8s-midi"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '46ch',
      fontSize: 'var(--text-body-l)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-secondary)',
      textWrap: 'pretty'
    }
  }, "Nina Papin cultive un hectare \xE0 La Tour de Salvagny, sans labour ni traitement. La boutique de la ferme ouvre le mercredi et le samedi."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconTrailing: true,
    onClick: onCta
  }, "R\xE9server un panier"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    icon: "map-pin",
    onClick: () => onCta && onCta('visite')
  }, "Venir \xE0 la ferme"))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 5',
      borderRadius: 'var(--radius-l)',
      background: 'var(--basilic-100)',
      border: '1px solid var(--border-hairline)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-micro)',
      letterSpacing: '.04em',
      color: 'var(--text-muted)'
    }
  }, "photo de la ferme \xE0 fournir \xB7 format portrait 4:5")));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/SiteFooter.jsx
try { (() => {
const {
  Wordmark
} = window.LeHaricotMagiqueDesignSystem_35ce97;
function SiteFooter() {
  const d = window.LHM_DATA;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--measure-page)',
      margin: '0 auto',
      padding: 'var(--space-7) var(--gutter)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-6)',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: "md",
    subtitle: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      flexWrap: 'wrap',
      fontSize: 'var(--text-meta)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, d.contact.lieu), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "T\xE9l\xE9phone: ", d.contact.tel), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "E-mail: ", d.contact.mail))));
}
Object.assign(window, {
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/VegetableSection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  VegetableCard,
  Tag,
  Tabs
} = window.LeHaricotMagiqueDesignSystem_35ce97;
function VegetableSection() {
  const [famille, setFamille] = React.useState('tout');
  const [saison, setSaison] = React.useState('ete');
  const d = window.LHM_DATA;
  const liste = famille === 'tout' ? d.legumes : d.legumes.filter(l => l.famille === famille);
  return /*#__PURE__*/React.createElement("section", {
    id: "legumes",
    style: {
      maxWidth: 'var(--measure-page)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Au potager",
    title: "Ce qui est en vente cette semaine",
    intro: "La liste change chaque semaine. Les prix sont ceux affich\xE9s \xE0 la boutique."
  }), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: 'printemps',
      label: 'Printemps'
    }, {
      id: 'ete',
      label: 'Été',
      count: liste.length
    }, {
      id: 'automne',
      label: 'Automne'
    }, {
      id: 'hiver',
      label: 'Hiver'
    }],
    value: saison,
    onChange: setSaison
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, d.familles.map(fa => /*#__PURE__*/React.createElement(Tag, {
    key: fa.id,
    color: fa.id === 'racines' ? 'carotte' : fa.id === 'fruits' ? 'tomate' : fa.id === 'feuilles' ? 'courgette' : fa.id === 'courges' ? 'ble' : 'basilic',
    selected: famille === fa.id,
    onClick: () => setFamille(fa.id)
  }, fa.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))',
      gap: 'var(--space-5)'
    }
  }, liste.map(l => /*#__PURE__*/React.createElement(VegetableCard, _extends({
    key: l.name
  }, l)))));
}
Object.assign(window, {
  VegetableSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/VegetableSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/VisitSection.jsx
try { (() => {
const {
  SectionHeading,
  Card,
  Button,
  Badge
} = window.LeHaricotMagiqueDesignSystem_35ce97;
function VisitSection() {
  const d = window.LHM_DATA;
  return /*#__PURE__*/React.createElement("section", {
    id: "visite",
    style: {
      background: 'var(--surface-invert)',
      color: 'var(--text-on-invert)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--measure-page)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 'clamp(24px,5vw,72px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "invert",
    eyebrow: "Venir nous voir",
    title: "La boutique de la ferme",
    intro: "Libre-service, on remplit son panier et on paie \xE0 la caisse en bois pr\xE8s de l'entr\xE9e."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "invert",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, d.horaires.map(h => /*#__PURE__*/React.createElement("div", {
    key: h.jour,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 'var(--space-4)',
      paddingBottom: 'var(--space-3)',
      borderBottom: '1px solid var(--border-invert)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-heading-m)'
    }
  }, h.jour), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-body-s)',
      color: 'var(--basilic-300)'
    }
  }, h.h))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "dispo",
    dot: true
  }, "Ouvert aujourd'hui"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-meta)',
      color: 'var(--basilic-300)'
    }
  }, "Visite guid\xE9e le 1er samedi du mois, 10h.")))), /*#__PURE__*/React.createElement(Card, {
    tone: "invert",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-meta)',
      color: 'var(--basilic-300)'
    }
  }, d.contact.lieu), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 7',
      borderRadius: 'var(--radius-s)',
      background: 'rgba(251,247,239,.06)',
      border: '1px solid var(--border-invert)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-micro)',
      color: 'var(--basilic-300)'
    }
  }, "plan d'acc\xE8s \xE0 fournir")), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    href: "#contact",
    iconTrailing: "arrow-down-right"
  }, "\xC9crire \xE0 Nina"))))));
}
Object.assign(window, {
  VisitSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/VisitSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/data.js
try { (() => {
window.LHM_DATA = {
  liens: [{
    id: 'ferme',
    label: 'La ferme'
  }, {
    id: 'legumes',
    label: 'Les légumes'
  }, {
    id: 'visite',
    label: 'Venir nous voir'
  }, {
    id: 'contact',
    label: 'Contact'
  }],
  legumes: [{
    name: 'Carotte de Colmar',
    latin: 'Daucus carota',
    price: '2,80 €',
    unit: 'la botte',
    state: 'dispo',
    color: 'carotte',
    famille: 'racines',
    note: 'Semée en mai, arrachée le matin de la vente.'
  }, {
    name: 'Betterave crapaudine',
    latin: 'Beta vulgaris',
    price: '3,40 €',
    unit: 'le kg',
    state: 'dispo',
    color: 'betterave',
    famille: 'racines',
    note: 'Chair sucrée, très bonne rôtie au four.'
  }, {
    name: 'Tomate cornue des Andes',
    latin: 'Solanum lycopersicum',
    price: '4,50 €',
    unit: 'le kg',
    state: 'dispo',
    color: 'tomate',
    famille: 'fruits',
    note: 'Peu de graines, beaucoup de chair.'
  }, {
    name: 'Aubergine de Barbentane',
    latin: 'Solanum melongena',
    price: '4,20 €',
    unit: 'le kg',
    state: 'dispo',
    color: 'aubergine',
    famille: 'fruits',
    note: 'Cueillie jeune, sans amertume.'
  }, {
    name: 'Blette arc-en-ciel',
    latin: 'Beta vulgaris cicla',
    price: '2,20 €',
    unit: 'la botte',
    state: 'dispo',
    color: 'courgette',
    famille: 'feuilles',
    note: 'Côtes colorées, feuilles tendres.'
  }, {
    name: 'Courge butternut',
    latin: 'Cucurbita moschata',
    price: '2,60 €',
    unit: 'la pièce',
    state: 'bientot',
    color: 'ble',
    famille: 'courges',
    note: 'Récolte prévue fin septembre.'
  }, {
    name: 'Poireau bleu de Solaize',
    latin: 'Allium ampeloprasum',
    price: '3,10 €',
    unit: 'la botte',
    state: 'bientot',
    color: 'chou',
    famille: 'feuilles',
    note: 'Variété lyonnaise, résiste au gel.'
  }, {
    name: 'Courgette ronde de Nice',
    latin: 'Cucurbita pepo',
    price: '3,00 €',
    unit: 'le kg',
    state: 'fini',
    color: 'courgette',
    famille: 'courges',
    note: 'Saison terminée, retour en juin.'
  }],
  familles: [{
    id: 'tout',
    label: 'Tout'
  }, {
    id: 'racines',
    label: 'Racines'
  }, {
    id: 'fruits',
    label: 'Fruits'
  }, {
    id: 'feuilles',
    label: 'Feuilles'
  }, {
    id: 'courges',
    label: 'Courges'
  }],
  faq: [{
    question: "Faut-il commander à l'avance ?",
    answer: "Non. La boutique de la ferme est en libre-service aux horaires d'ouverture. Pour un panier de 5 kg, un mot la veille aide Nina à préparer."
  }, {
    question: "Qu'est-ce qui change avec la permaculture ?",
    answer: "Pas de labour, pas de traitement, des planches permanentes couvertes toute l'année. Les cultures sont associées pour se protéger entre elles."
  }, {
    question: "Peut-on visiter le terrain ?",
    answer: "Oui, une visite guidée d'une heure a lieu le premier samedi du mois. Elle se termine par la dégustation de ce qui vient d'être récolté."
  }, {
    question: "Acceptez-vous les paiements par carte ?",
    answer: "Espèces et carte à partir de 5 €. Les chèques sont acceptés à l'ordre du Haricot Magique."
  }],
  horaires: [{
    jour: 'Mercredi',
    h: '17h – 19h'
  }, {
    jour: 'Samedi',
    h: '10h – 13h'
  }],
  contact: {
    lieu: 'Chemin des Verchères, 69890 La Tour de Salvagny',
    tel: 'à compléter',
    mail: 'à compléter'
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.VegetableCard = __ds_scope.VegetableCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
