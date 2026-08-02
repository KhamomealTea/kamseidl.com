/* @ds-bundle: {"format":3,"namespace":"CrucibleDesignSystem_d53f36","components":[{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"StatTile","sourcePath":"components/display/StatTile.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SegmentedToggle","sourcePath":"components/forms/SegmentedToggle.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/display/Avatar.jsx":"d3b76b31585e","components/display/Badge.jsx":"1674fd6a48b3","components/display/Card.jsx":"326dc615169e","components/display/StatTile.jsx":"8047f1c6a683","components/forms/Button.jsx":"d72cf707b5fc","components/forms/Checkbox.jsx":"19f20a5659b6","components/forms/Input.jsx":"af093046cf24","components/forms/SegmentedToggle.jsx":"a5a78f20230c","components/forms/Select.jsx":"fe50ff8780b9","ui_kits/crucible-stats/DashboardScreen.jsx":"6b591fd0d7fa","ui_kits/crucible-stats/LoginScreen.jsx":"d9cd3bf254fa","ui_kits/crucible-stats/PlayerScreen.jsx":"7720086b3889","ui_kits/crucible-stats/TopNav.jsx":"9be766305954","ui_kits/crucible-stats/app.jsx":"72d8c8796494"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CrucibleDesignSystem_d53f36 = window.CrucibleDesignSystem_d53f36 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Crucible Avatar — a #0C4981 circle with white initials, or a cover image.
 * Optional small badge (e.g. an edit pencil) anchored bottom-right.
 */

let _avatarInjected = false;
function ensureAvatarStyles() {
  if (_avatarInjected || typeof document === "undefined") return;
  _avatarInjected = true;
  const css = `
  .cr-avatar{position:relative;display:inline-flex;align-items:center;justify-content:center;
    border-radius:50%;background:var(--navy-700);color:#fff;font-family:var(--font-medium);font-weight:500;
    overflow:visible;flex-shrink:0;}
  .cr-avatar img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:50%;}
  .cr-avatar__badge{position:absolute;right:-2px;bottom:-2px;width:40%;height:40%;min-width:18px;min-height:18px;
    background:var(--navy-700);border-radius:50%;display:flex;align-items:center;justify-content:center;
    border:2px solid var(--ink-950);}
  .cr-avatar__badge img{position:static;width:60%;height:60%;}
  `;
  const tag = document.createElement("style");
  tag.setAttribute("data-cr", "avatar");
  tag.textContent = css;
  document.head.appendChild(tag);
}
function initials(name) {
  if (!name) return "";
  const parts = name.replace(/\./g, "").trim().split(" ").filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
function Avatar({
  name = "",
  src = null,
  size = 40,
  badge = null,
  className = "",
  ...rest
}) {
  ensureAvatarStyles();
  const fontSize = Math.round(size * 0.38);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["cr-avatar", className].filter(Boolean).join(" "),
    style: {
      width: size,
      height: size,
      fontSize
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name), badge && /*#__PURE__*/React.createElement("span", {
    className: "cr-avatar__badge"
  }, badge));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Crucible Badge — compact status/label chip. `default` is the #1B1B1B pill;
 * `accent`/`success`/`danger` are tinted; `outline` is a hairline pill.
 * Optional leading icon and a small status dot.
 */

let _badgeInjected = false;
function ensureBadgeStyles() {
  if (_badgeInjected || typeof document === "undefined") return;
  _badgeInjected = true;
  const css = `
  .cr-badge{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-body);font-size:12px;
    line-height:1;padding:5px 10px;border-radius:var(--radius-pill);border:1px solid transparent;white-space:nowrap;}
  .cr-badge--default{background:var(--ink-800);color:#fff;}
  .cr-badge--accent{background:var(--blue-tint-08);color:var(--blue-500);}
  .cr-badge--success{background:rgba(135,173,0,.14);color:var(--success-500);}
  .cr-badge--danger{background:var(--danger-tint-16);color:var(--danger-500);}
  .cr-badge--outline{background:transparent;color:var(--text-secondary);border-color:var(--border-default);}
  .cr-badge__dot{width:6px;height:6px;border-radius:50%;background:currentColor;flex-shrink:0;}
  .cr-badge img,.cr-badge svg{width:13px;height:13px;}
  `;
  const tag = document.createElement("style");
  tag.setAttribute("data-cr", "badge");
  tag.textContent = css;
  document.head.appendChild(tag);
}
function Badge({
  children,
  variant = "default",
  dot = false,
  icon = null,
  className = "",
  ...rest
}) {
  ensureBadgeStyles();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["cr-badge", `cr-badge--${variant}`, className].filter(Boolean).join(" ")
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "cr-badge__dot"
  }), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Crucible Card — a surface on the dark stage. Default uses the signature 1px
 * blue edge-gradient over #0D0D0D; `plain` is a flat #141414 panel with a
 * hairline border; `raised` adds a soft shadow.
 */

let _cardInjected = false;
function ensureCardStyles() {
  if (_cardInjected || typeof document === "undefined") return;
  _cardInjected = true;
  const css = `
  .cr-card{position:relative;border-radius:var(--radius-md);font-family:var(--font-body);color:#fff;box-sizing:border-box;}
  .cr-card--gradient{background:var(--ink-950);}
  .cr-card--gradient::before{content:"";position:absolute;inset:0;padding:1px;border-radius:inherit;
    background:var(--grad-border-blue);opacity:.6;
    -webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
    -webkit-mask-composite:xor;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
    mask-composite:exclude;pointer-events:none;}
  .cr-card--plain{background:var(--ink-850);border:1px solid var(--border-default);}
  .cr-card--raised{background:var(--ink-850);border:1px solid var(--border-default);box-shadow:var(--shadow-3);}
  .cr-card__body{position:relative;}
  `;
  const tag = document.createElement("style");
  tag.setAttribute("data-cr", "card");
  tag.textContent = css;
  document.head.appendChild(tag);
}
function Card({
  children,
  variant = "gradient",
  padding = 24,
  className = "",
  style = {},
  ...rest
}) {
  ensureCardStyles();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["cr-card", `cr-card--${variant}`, className].filter(Boolean).join(" "),
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "cr-card__body",
    style: {
      padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/StatTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Crucible StatTile — the analytics product's signature metric block. A big
 * condensed Khand numeral, an uppercase label, and an optional delta chip
 * (up = blue, down = red). Sits in a plain or gradient card.
 */

let _statInjected = false;
function ensureStatStyles() {
  if (_statInjected || typeof document === "undefined") return;
  _statInjected = true;
  const css = `
  .cr-stat{display:flex;flex-direction:column;gap:8px;font-family:var(--font-body);min-width:0;}
  .cr-stat__label{font-size:13px;letter-spacing:.03em;text-transform:uppercase;color:#9aa1ab;}
  .cr-stat__row{display:flex;align-items:flex-start;gap:10px;flex-wrap:wrap;}
  .cr-stat__value{font-family:var(--font-stat);font-weight:600;color:#fff;line-height:.85;letter-spacing:.01em;}
  .cr-stat__value--accent{color:var(--blue-450);}
  .cr-stat__unit{font-family:var(--font-body);font-size:15px;color:var(--text-muted);margin-left:-4px;padding-top:2px;}
  .cr-stat__delta{display:inline-flex;align-items:center;gap:3px;font-size:13px;font-family:var(--font-medium);
    padding:3px 9px;border-radius:var(--radius-pill);margin-top:1px;}
  .cr-stat__delta--up{background:var(--blue-tint-08);color:var(--blue-500);}
  .cr-stat__delta--down{background:var(--danger-tint-16);color:var(--danger-500);}
  .cr-stat__delta--flat{background:var(--white-04);color:var(--text-secondary);}
  .cr-stat__arrow{font-size:11px;line-height:1;}
  `;
  const tag = document.createElement("style");
  tag.setAttribute("data-cr", "stat");
  tag.textContent = css;
  document.head.appendChild(tag);
}
function StatTile({
  value,
  label,
  unit = null,
  delta = null,
  direction = "up",
  accent = false,
  size = 56,
  className = "",
  ...rest
}) {
  ensureStatStyles();
  const arrow = direction === "down" ? "▾" : direction === "flat" ? "•" : "▴";
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["cr-stat", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "cr-stat__label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "cr-stat__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cr-stat__value" + (accent ? " cr-stat__value--accent" : ""),
    style: {
      fontSize: size
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    className: "cr-stat__unit"
  }, unit), delta != null && /*#__PURE__*/React.createElement("span", {
    className: `cr-stat__delta cr-stat__delta--${direction}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "cr-stat__arrow"
  }, arrow), delta)));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Crucible Button — the brand's action control.
 * Variants: primary (solid blue) · secondary (slate navy) · outline
 * (dark fill, hairline border) · ghost · text (inline link) · danger.
 * `glow` adds the signature 1px blue edge-gradient (the "button-border-gradient").
 * `pill` renders the special gradient-edged capsule used for hero CTAs.
 */

let _btnInjected = false;
function ensureBtnStyles() {
  if (_btnInjected || typeof document === "undefined") return;
  _btnInjected = true;
  const css = `
  .cr-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;
    font-family:var(--font-body);font-weight:400;white-space:nowrap;cursor:pointer;
    border:1px solid transparent;border-radius:var(--radius-sm);transition:var(--transition);
    user-select:none;text-decoration:none;line-height:1;box-sizing:border-box;}
  .cr-btn:disabled,.cr-btn[aria-disabled="true"]{cursor:not-allowed;pointer-events:none;}
  .cr-btn--sm{height:34px;padding:0 14px;font-size:14px;}
  .cr-btn--md{height:40px;padding:0 20px;font-size:14px;}
  .cr-btn--lg{height:48px;padding:0 26px;font-size:16px;}
  .cr-btn--block{width:100%;}
  /* primary */
  .cr-btn--primary{background:var(--blue-500);color:#fff;box-shadow:var(--shadow-1);}
  .cr-btn--primary:hover{background:var(--blue-500);box-shadow:var(--shadow-2);}
  .cr-btn--primary:active{background:var(--blue-700);}
  .cr-btn--primary:disabled{background:rgba(10,138,254,.5);color:rgba(255,255,255,.7);}
  /* secondary */
  .cr-btn--secondary{background:var(--navy-ink);color:#fff;}
  .cr-btn--secondary:hover{background:#0d141f;}
  /* outline */
  .cr-btn--outline{background:var(--ink-850);color:#fff;border-color:var(--border-default);}
  .cr-btn--outline:hover{background:var(--ink-800);border-color:var(--border-default);}
  .cr-btn--outline:disabled{color:rgba(255,255,255,.5);border-color:rgba(38,39,41,.5);}
  /* ghost */
  .cr-btn--ghost{background:var(--white-04);color:#fff;}
  .cr-btn--ghost:hover{background:var(--white-08);}
  /* text */
  .cr-btn--text{background:transparent;color:var(--blue-500);height:auto;padding:0;box-shadow:none;}
  .cr-btn--text:hover{color:var(--blue-500);background:transparent;}
  .cr-btn--text:disabled{color:rgba(10,138,254,.5);}
  /* danger */
  .cr-btn--danger{background:var(--danger-600);color:#fff;}
  .cr-btn--danger:hover{background:#b8262f;}
  /* glow edge */
  .cr-btn--glow{position:relative;isolation:isolate;}
  .cr-btn--glow::before{content:"";position:absolute;inset:0;padding:1px;border-radius:inherit;z-index:1;
    background:var(--grad-button-edge);opacity:.6;
    -webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
    -webkit-mask-composite:xor;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
    mask-composite:exclude;pointer-events:none;}
  /* pill (special CTA) */
  .cr-btn--pill{padding:1px;border-radius:var(--radius-pill);background:var(--grad-pill-edge);border:none;height:auto;}
  .cr-btn--pill > span{display:inline-flex;align-items:center;gap:8px;border-radius:var(--radius-pill);
    background:var(--grad-pill-fill);color:#fff;font-weight:500;font-family:var(--font-medium);width:100%;height:100%;justify-content:center;}
  .cr-btn--pill.cr-btn--sm > span{padding:8px 14px;}
  .cr-btn--pill.cr-btn--md > span{padding:10px 18px;}
  .cr-btn--pill.cr-btn--lg > span{padding:12px 24px;}
  `;
  const tag = document.createElement("style");
  tag.setAttribute("data-cr", "button");
  tag.textContent = css;
  document.head.appendChild(tag);
}
function Button({
  children,
  variant = "primary",
  size = "md",
  glow = false,
  pill = false,
  block = false,
  startIcon = null,
  endIcon = null,
  disabled = false,
  type = "button",
  className = "",
  ...rest
}) {
  ensureBtnStyles();
  const cls = ["cr-btn", `cr-btn--${size}`, pill ? "cr-btn--pill" : `cr-btn--${variant}`, glow && !pill ? "cr-btn--glow" : "", block ? "cr-btn--block" : "", className].filter(Boolean).join(" ");
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, startIcon, children, endIcon);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled
  }, rest), pill ? /*#__PURE__*/React.createElement("span", null, inner) : inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Crucible Checkbox — 18px square, 2px radius. Unchecked: #141414 fill with
 * a white hairline. Checked: solid white box with a dark tick. Optional label.
 */

let _checkInjected = false;
function ensureCheckStyles() {
  if (_checkInjected || typeof document === "undefined") return;
  _checkInjected = true;
  const css = `
  .cr-check{display:inline-flex;align-items:center;gap:8px;font-family:var(--font-body);
    font-size:14px;color:#fff;cursor:pointer;user-select:none;}
  .cr-check input{position:absolute;opacity:0;width:0;height:0;}
  .cr-check__box{width:18px;height:18px;border-radius:2px;background:var(--ink-850);
    border:1px solid #fff;display:inline-flex;align-items:center;justify-content:center;
    flex-shrink:0;transition:var(--transition);}
  .cr-check input:checked + .cr-check__box{background:#fff;border-color:#fff;}
  .cr-check__box svg{opacity:0;width:14px;height:14px;}
  .cr-check input:checked + .cr-check__box svg{opacity:1;}
  .cr-check input:focus-visible + .cr-check__box{outline:2px solid var(--blue-450);outline-offset:2px;}
  .cr-check--disabled{opacity:.4;cursor:not-allowed;}
  `;
  const tag = document.createElement("style");
  tag.setAttribute("data-cr", "checkbox");
  tag.textContent = css;
  document.head.appendChild(tag);
}
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  className = "",
  ...rest
}) {
  ensureCheckStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: ["cr-check", disabled ? "cr-check--disabled" : "", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked)
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "cr-check__box"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0 0 12 5z",
    fill: "#141414"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Crucible Input — dark text field. #0D0D0D fill, hairline #262729 border,
 * white text, muted placeholder. Optional label, helper/error text, adornments.
 */

let _inputInjected = false;
function ensureInputStyles() {
  if (_inputInjected || typeof document === "undefined") return;
  _inputInjected = true;
  const css = `
  .cr-field{display:flex;flex-direction:column;gap:6px;font-family:var(--font-body);width:100%;}
  .cr-field__label{font-size:14px;color:var(--text-secondary);}
  .cr-field__box{display:flex;align-items:center;gap:10px;background:var(--ink-950);
    border:1px solid var(--border-default);border-radius:var(--radius-sm);
    padding:0 12px;height:40px;transition:var(--transition);}
  .cr-field__box:focus-within{border-color:var(--blue-450);}
  .cr-field__box input,.cr-field__box textarea{flex:1;background:transparent;border:none;outline:none;
    color:#fff;font-family:var(--font-body);font-size:14px;line-height:150%;padding:0;min-width:0;}
  .cr-field__box textarea{resize:vertical;padding:10px 0;}
  .cr-field__box input::placeholder,.cr-field__box textarea::placeholder{color:var(--text-muted);opacity:1;}
  .cr-field__box img,.cr-field__box svg{width:16px;height:16px;flex-shrink:0;opacity:.7;}
  .cr-field--error .cr-field__box{border-color:var(--danger-700);background:var(--danger-tint-16);}
  .cr-field--error input{color:var(--danger-500);}
  .cr-field--disabled .cr-field__box{opacity:.5;pointer-events:none;}
  .cr-field__help{font-size:12px;color:var(--text-faint);}
  .cr-field--error .cr-field__help{color:var(--danger-500);}
  `;
  const tag = document.createElement("style");
  tag.setAttribute("data-cr", "input");
  tag.textContent = css;
  document.head.appendChild(tag);
}
function Input({
  label,
  helperText,
  error = false,
  disabled = false,
  startAdornment = null,
  endAdornment = null,
  multiline = false,
  rows = 3,
  className = "",
  id,
  ...rest
}) {
  ensureInputStyles();
  const cls = ["cr-field", error ? "cr-field--error" : "", disabled ? "cr-field--disabled" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("label", {
    className: cls,
    htmlFor: id
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "cr-field__label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "cr-field__box"
  }, startAdornment, multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    disabled: disabled
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    disabled: disabled
  }, rest)), endAdornment), helperText && /*#__PURE__*/React.createElement("span", {
    className: "cr-field__help"
  }, helperText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedToggle.jsx
try { (() => {
/**
 * Crucible SegmentedToggle — the QBTabsToggle. A rounded shell with a hairline
 * border holding 2–3 segments; the active segment gets a navy-tinted pill
 * (#1B2B38) and blue text. Controlled or uncontrolled.
 */

let _segInjected = false;
function ensureSegStyles() {
  if (_segInjected || typeof document === "undefined") return;
  _segInjected = true;
  const css = `
  .cr-seg{position:relative;display:inline-flex;align-items:center;gap:4px;padding:4px;border-radius:var(--radius-lg);
    border:1px solid var(--white-15);background:transparent;font-family:var(--font-body);}
  .cr-seg--block{display:flex;width:100%;}
  .cr-seg__pill{position:absolute;top:4px;bottom:4px;left:0;border-radius:var(--radius-sm);background:var(--ink-750);
    transition:transform .28s cubic-bezier(0.4,0,0.2,1),width .28s cubic-bezier(0.4,0,0.2,1);pointer-events:none;z-index:0;}
  .cr-seg__opt{position:relative;z-index:1;appearance:none;border:none;background:transparent;cursor:pointer;
    border-radius:var(--radius-sm);padding:6px 14px;height:34px;display:inline-flex;align-items:center;
    justify-content:center;gap:6px;font-family:var(--font-body);font-size:14px;color:#fff;
    transition:color .2s ease;white-space:nowrap;}
  .cr-seg--block .cr-seg__opt{flex:1;}
  .cr-seg__opt:hover{color:rgba(255,255,255,.8);}
  .cr-seg__opt--active{color:var(--blue-500);}
  .cr-seg__opt--active:hover{color:var(--blue-500);}
  `;
  const tag = document.createElement("style");
  tag.setAttribute("data-cr", "segmented");
  tag.textContent = css;
  document.head.appendChild(tag);
}
function SegmentedToggle({
  options = [],
  value,
  defaultValue,
  onSelect,
  block = false,
  className = ""
}) {
  ensureSegStyles();
  const norm = options.map(o => typeof o === "string" ? {
    id: o,
    label: o
  } : o);
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? norm[0]?.id);
  const selected = isControlled ? value : internal;
  const wrapRef = React.useRef(null);
  const optRefs = React.useRef({});
  const [pill, setPill] = React.useState({
    left: 0,
    width: 0,
    ready: false
  });
  React.useLayoutEffect(() => {
    const el = optRefs.current[selected];
    const wrap = wrapRef.current;
    if (el && wrap) {
      const w = wrap.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      setPill({
        left: b.left - w.left,
        width: b.width,
        ready: true
      });
    }
  }, [selected, norm.length]);
  const pick = id => {
    if (!isControlled) setInternal(id);
    onSelect && onSelect(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: wrapRef,
    role: "tablist",
    className: ["cr-seg", block ? "cr-seg--block" : "", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("span", {
    className: "cr-seg__pill",
    style: {
      transform: `translateX(${pill.left}px)`,
      width: pill.width,
      opacity: pill.ready ? 1 : 0
    }
  }), norm.map(o => {
    const active = o.id === selected;
    return /*#__PURE__*/React.createElement("button", {
      key: o.id,
      ref: n => optRefs.current[o.id] = n,
      role: "tab",
      "aria-selected": active,
      className: "cr-seg__opt" + (active ? " cr-seg__opt--active" : ""),
      onClick: () => pick(o.id)
    }, o.icon, o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedToggle.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/**
 * Crucible Select — dark custom dropdown matching the Input frame. A button
 * trigger + a popup listbox (so corners, highlight, and outline are fully
 * controllable). When open, the trigger's bottom corners and the menu's top
 * corners square off so they read as one connected element. Options are
 * {label,value} or plain strings.
 */

let _selectInjected = false;
function ensureSelectStyles() {
  if (_selectInjected || typeof document === "undefined") return;
  _selectInjected = true;
  const css = `
  .cr-select{display:flex;flex-direction:column;gap:6px;font-family:var(--font-body);width:100%;}
  .cr-select__label{font-size:14px;color:var(--text-secondary);}
  .cr-select__wrap{position:relative;}
  .cr-select__trigger{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;height:34px;
    background:var(--ink-900);color:#fff;border:1px solid var(--border-default);
    border-radius:var(--radius-sm);padding:0 12px;font-family:var(--font-body);font-size:14px;
    cursor:pointer;outline:none;transition:border-color .2s ease,border-radius .12s ease;text-align:left;box-sizing:border-box;}
  .cr-select__trigger:hover{border-color:#3a3b3e;}
  .cr-select__wrap.is-open .cr-select__trigger{border-color:var(--blue-450);
    border-bottom-color:transparent;border-bottom-left-radius:0;border-bottom-right-radius:0;}
  .cr-select__trigger:disabled{opacity:.5;cursor:not-allowed;}
  .cr-select__value--placeholder{color:var(--text-muted);}
  .cr-select__chev{width:11px;height:11px;flex-shrink:0;border-right:2px solid #fff;border-bottom:2px solid #fff;
    transform:rotate(45deg) translate(-1px,-1px);opacity:.85;box-sizing:border-box;transition:transform .2s ease;}
  .cr-select__wrap.is-open .cr-select__chev{transform:rotate(-135deg) translate(-2px,-2px);}
  .cr-select__menu{position:absolute;top:100%;left:0;right:0;z-index:60;margin:0;padding:4px;list-style:none;
    background:var(--ink-900);border:1px solid var(--blue-450);border-top:none;
    border-radius:0 0 var(--radius-sm) var(--radius-sm);max-height:240px;overflow-y:auto;
    box-shadow:var(--shadow-pop);}
  .cr-select__opt{display:flex;align-items:center;padding:8px 10px;border-radius:4px;font-size:14px;color:#fff;
    cursor:pointer;transition:background .12s ease;}
  .cr-select__opt.is-selected{background:#2b2f37;color:#fff;font-family:var(--font-medium);font-weight:500;}
  .cr-select__opt:hover,.cr-select__opt.is-active{background:rgba(37,173,245,0.5);}
  `;
  const tag = document.createElement("style");
  tag.setAttribute("data-cr", "select");
  tag.textContent = css;
  document.head.appendChild(tag);
}
function Select({
  label,
  options = [],
  value,
  defaultValue,
  onChange,
  placeholder,
  disabled = false,
  className = "",
  id
}) {
  ensureSelectStyles();
  const norm = options.map(o => typeof o === "string" ? {
    label: o,
    value: o
  } : o);
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(-1);
  const wrapRef = React.useRef(null);
  const selected = norm.find(o => String(o.value) === String(current));
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);
  const pick = o => {
    if (!isControlled) setInternal(o.value);
    onChange && onChange(o.value);
    setOpen(false);
  };
  const onKey = e => {
    if (disabled) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        return;
      }
      setActive(i => Math.min(norm.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive(i => Math.max(0, i - 1));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (open && active >= 0) pick(norm[active]);else setOpen(v => !v);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: ["cr-select", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "cr-select__label",
    id: id ? id + "-label" : undefined
  }, label), /*#__PURE__*/React.createElement("div", {
    ref: wrapRef,
    className: "cr-select__wrap" + (open ? " is-open" : "")
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    id: id,
    className: "cr-select__trigger",
    disabled: disabled,
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    onClick: () => setOpen(v => !v),
    onKeyDown: onKey
  }, /*#__PURE__*/React.createElement("span", {
    className: selected ? "" : "cr-select__value--placeholder"
  }, selected ? selected.label : placeholder || "Select…"), /*#__PURE__*/React.createElement("span", {
    className: "cr-select__chev"
  })), open && /*#__PURE__*/React.createElement("ul", {
    className: "cr-select__menu",
    role: "listbox"
  }, norm.map((o, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    role: "option",
    "aria-selected": selected && String(selected.value) === String(o.value),
    className: "cr-select__opt" + (i === active ? " is-active" : "") + (selected && String(selected.value) === String(o.value) ? " is-selected" : ""),
    onMouseEnter: () => setActive(i),
    onClick: () => pick(o)
  }, o.label)))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/crucible-stats/DashboardScreen.jsx
try { (() => {
/* Crucible Stats — Dashboard / Group Summary (tabs, KPI row, roster table) */
const CR_PLAYERS = [{
  name: "Marcus Hale",
  pos: "QB",
  score: "94.2",
  reps: "1,284",
  ttt: "2.4",
  active: "2h ago",
  status: "active"
}, {
  name: "Devin Carter",
  pos: "QB",
  score: "88.7",
  reps: "1,012",
  ttt: "2.7",
  active: "Today",
  status: "active"
}, {
  name: "Tyler Brooks",
  pos: "QB",
  score: "82.1",
  reps: "864",
  ttt: "2.9",
  active: "Yesterday",
  status: "active"
}, {
  name: "Andre Willis",
  pos: "WR",
  score: "79.5",
  reps: "742",
  ttt: "—",
  active: "3d ago",
  status: "idle"
}, {
  name: "Jordan Pierce",
  pos: "QB",
  score: "76.0",
  reps: "690",
  ttt: "3.1",
  active: "5d ago",
  status: "idle"
}, {
  name: "Chris Donnelly",
  pos: "RB",
  score: "71.4",
  reps: "510",
  ttt: "—",
  active: "1w ago",
  status: "off"
}];
function Tabs({
  active,
  onChange
}) {
  const tabs = ["Group Summary", "Main Stats", "Game Plans", "Reports History"];
  const wrapRef = React.useRef(null);
  const btnRefs = React.useRef({});
  const [bar, setBar] = React.useState({
    left: 0,
    width: 0
  });
  React.useLayoutEffect(() => {
    const el = btnRefs.current[active];
    const wrap = wrapRef.current;
    if (el && wrap) {
      const w = wrap.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      setBar({
        left: b.left - w.left,
        width: b.width
      });
    }
  }, [active]);
  return /*#__PURE__*/React.createElement("div", {
    ref: wrapRef,
    className: "cr-tabs"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    ref: n => btnRefs.current[t] = n,
    onClick: () => onChange(t),
    className: "cr-tab",
    "aria-selected": active === t
  }, t)), /*#__PURE__*/React.createElement("span", {
    className: "cr-tab-bar",
    style: {
      transform: `translateX(${bar.left}px)`,
      width: bar.width
    }
  }));
}
function DashboardScreen({
  onOpenPlayer
}) {
  const {
    Card,
    StatTile,
    Badge,
    Avatar,
    Input,
    Select,
    Button
  } = window.CrucibleDesignSystem_d53f36;
  const [tab, setTab] = React.useState("Group Summary");
  const [q, setQ] = React.useState("");
  const [pos, setPos] = React.useState("All positions");
  const rows = CR_PLAYERS.filter(p => p.name.toLowerCase().includes(q.toLowerCase())).filter(p => pos === "All positions" || p.pos === pos);
  const statusBadge = s => s === "active" ? /*#__PURE__*/React.createElement(Badge, {
    variant: "success",
    dot: true
  }, "Active") : s === "idle" ? /*#__PURE__*/React.createElement(Badge, {
    variant: "outline"
  }, "Idle") : /*#__PURE__*/React.createElement(Badge, {
    variant: "default"
  }, "Offline");
  return /*#__PURE__*/React.createElement("div", {
    className: "cr-page"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "cr-display-title",
    style: {
      fontSize: 38,
      margin: 0
    }
  }, "REDWOOD ACADEMY"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "#aab0b9",
      margin: "6px 0 0",
      fontSize: 15
    }
  }, "Spring 2026 cohort")), /*#__PURE__*/React.createElement(Button, {
    pill: true,
    className: "cr-pill-tight",
    startIcon: /*#__PURE__*/React.createElement("img", {
      src: "../../assets/icons/assignment.svg",
      width: 16,
      alt: ""
    })
  }, "New Group Report")), /*#__PURE__*/React.createElement(Tabs, {
    active: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16,
      margin: "24px 0"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "plain",
    padding: 20
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Avg Decision Score",
    value: "82.0",
    delta: "+3.1",
    direction: "up",
    accent: true,
    size: 38
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "plain",
    padding: 20
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Total Reps",
    value: "5,102",
    delta: "+612",
    direction: "up",
    size: 38
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "plain",
    padding: 20
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Avg Time to Throw",
    value: "2.7",
    unit: "s",
    delta: "-0.2",
    direction: "down",
    size: 38
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "plain",
    padding: 20
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Active Athletes",
    value: "14",
    unit: "/ 18",
    direction: "flat",
    size: 38
  }))), /*#__PURE__*/React.createElement(Card, {
    variant: "plain",
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 20px",
      borderBottom: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-medium)",
      fontWeight: 500,
      fontSize: 16
    }
  }, "Roster"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search players",
    value: q,
    onChange: e => setQ(e.target.value),
    startAdornment: /*#__PURE__*/React.createElement("img", {
      src: "../../assets/icons/search.svg",
      style: {
        filter: "brightness(0) invert(1)"
      },
      alt: ""
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ["All positions", "QB", "WR", "RB"],
    value: pos,
    onChange: setPos
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 396
    }
  }, /*#__PURE__*/React.createElement("table", {
    className: "cr-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Athlete"), /*#__PURE__*/React.createElement("th", null, "Pos"), /*#__PURE__*/React.createElement("th", null, "Decision Score"), /*#__PURE__*/React.createElement("th", null, "Reps"), /*#__PURE__*/React.createElement("th", null, "Time to Throw"), /*#__PURE__*/React.createElement("th", null, "Last Active"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(p => /*#__PURE__*/React.createElement("tr", {
    key: p.name,
    onClick: () => onOpenPlayer(p)
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.name,
    size: 34
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-medium)",
      fontWeight: 500
    }
  }, p.name))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    variant: "accent"
  }, p.pos)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "cr-num"
  }, p.score)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "cr-num"
  }, p.reps)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "cr-num"
  }, p.ttt, p.ttt !== "—" ? "s" : "")), /*#__PURE__*/React.createElement("td", {
    className: "cr-td-dim"
  }, p.active), /*#__PURE__*/React.createElement("td", null, statusBadge(p.status)))))))));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/crucible-stats/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/crucible-stats/LoginScreen.jsx
try { (() => {
/* Crucible Stats — Login screen (recreation of LoginPage) */
function LoginScreen({
  onSignIn
}) {
  const {
    Button,
    Input,
    Checkbox
  } = window.CrucibleDesignSystem_d53f36;
  const [email, setEmail] = React.useState("coach@redwood.io");
  const [pw, setPw] = React.useState("••••••••");
  const [remember, setRemember] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    className: "cr-login"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cr-login__card-wrap"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/crucible.svg",
    alt: "Crucible",
    height: 40,
    style: {
      marginBottom: 4
    }
  }), /*#__PURE__*/React.createElement("h1", {
    className: "cr-display-title"
  }, "LOG IN"), /*#__PURE__*/React.createElement("div", {
    className: "cr-border-gradient",
    style: {
      width: 420,
      maxWidth: "100%",
      background: "#0d0d0d"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "40px 24px 28px",
      display: "flex",
      flexDirection: "column",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "Enter your email",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    value: pw,
    onChange: e => setPw(e.target.value),
    endAdornment: /*#__PURE__*/React.createElement("img", {
      src: "../../assets/icons/user.svg",
      style: {
        filter: "brightness(0) invert(1)"
      },
      alt: ""
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: -8
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Remember me",
    checked: remember,
    onChange: setRemember
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "text"
  }, "Forgot password")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    glow: true,
    block: true,
    onClick: onSignIn
  }, "Sign In"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--text-secondary)"
    }
  }, "Don't have an account?"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14
    }
  }, "Create an account"))))));
}
window.LoginScreen = LoginScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/crucible-stats/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/crucible-stats/PlayerScreen.jsx
try { (() => {
/* Crucible Stats — Player page (PlayerSummaryCard + stat trend) */
function MiniChart({
  data,
  color
}) {
  const w = 560,
    h = 150,
    pad = 8;
  const max = Math.max(...data),
    min = Math.min(...data);
  const pts = data.map((v, i) => {
    const x = pad + i / (data.length - 1) * (w - pad * 2);
    const y = h - pad - (v - min) / (max - min || 1) * (h - pad * 2);
    return [x, y];
  });
  const line = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
  const area = line + ` L ${w - pad} ${h - pad} L ${pad} ${h - pad} Z`;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    width: "100%",
    height: h,
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "crFill",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: color,
    stopOpacity: "0.28"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: color,
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "url(#crFill)"
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: color,
    strokeWidth: "2.5",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }), pts.map((p, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: p[0],
    cy: p[1],
    r: "3",
    fill: "#0d0d0d",
    stroke: color,
    strokeWidth: "2"
  })));
}
function PlayerScreen({
  player,
  onBack
}) {
  const {
    Card,
    StatTile,
    Badge,
    Avatar,
    Button
  } = window.CrucibleDesignSystem_d53f36;
  const p = player || {
    name: "Marcus Hale",
    pos: "QB",
    score: "94.2",
    reps: "1,284",
    ttt: "2.4"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "cr-page"
  }, /*#__PURE__*/React.createElement("button", {
    className: "cr-back",
    onClick: onBack
  }, "\u2190 Back to roster"), /*#__PURE__*/React.createElement("div", {
    className: "cr-border-gradient",
    style: {
      background: "#0d0d0d",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.name,
    size: 64,
    className: "cr-edit-avatar",
    badge: /*#__PURE__*/React.createElement("img", {
      src: "../../assets/icons/edit.svg",
      style: {
        filter: "brightness(0) invert(1)"
      },
      alt: ""
    })
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-medium)",
      fontWeight: 600,
      fontSize: 28,
      whiteSpace: "nowrap"
    }
  }, p.name), /*#__PURE__*/React.createElement(Badge, {
    variant: "accent"
  }, p.pos), /*#__PURE__*/React.createElement(Badge, null, "Premium+")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cr-meta-label"
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    className: "cr-meta-val"
  }, p.name.split(" ")[0].toLowerCase(), "@redwood.io", /*#__PURE__*/React.createElement("br", null), "(123) 456-7890")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: "rgba(255,255,255,0.1)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cr-meta-label"
  }, "School & Location"), /*#__PURE__*/React.createElement("div", {
    className: "cr-meta-val"
  }, "Redwood Academy \xB7 Florida", /*#__PURE__*/React.createElement("br", null), "2023 \u2013 2027")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: "rgba(255,255,255,0.1)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cr-meta-label"
  }, "Activity"), /*#__PURE__*/React.createElement("div", {
    className: "cr-meta-val"
  }, "Last active: 2h ago", /*#__PURE__*/React.createElement("br", null), "Joined: 09-01-2023"))))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    glow: true,
    startIcon: /*#__PURE__*/React.createElement("img", {
      src: "../../assets/icons/print.svg",
      width: 16,
      style: {
        filter: "brightness(0) invert(1)"
      },
      alt: ""
    })
  }, "Generate Report"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-medium)",
      fontWeight: 500,
      fontSize: 16
    }
  }, "Decision Score \xB7 last 8 sessions"), /*#__PURE__*/React.createElement(Badge, {
    variant: "success",
    dot: true
  }, "Trending up")), /*#__PURE__*/React.createElement(MiniChart, {
    data: [74, 78, 76, 82, 85, 88, 91, 94],
    color: "#25adf5"
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "plain"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-medium)",
      fontWeight: 500,
      fontSize: 16,
      marginBottom: 12
    }
  }, "Season averages"), /*#__PURE__*/React.createElement("div", {
    className: "cr-statlist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cr-statlist__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cr-statlist__label"
  }, "Decision Score"), /*#__PURE__*/React.createElement("span", {
    className: "cr-statlist__sep"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cr-statlist__num cr-statlist__num--accent"
  }, p.score), /*#__PURE__*/React.createElement("span", {
    className: "cr-dchip cr-dchip--up"
  }, "\u25B4 +4.2")), /*#__PURE__*/React.createElement("div", {
    className: "cr-statlist__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cr-statlist__label"
  }, "Time to Throw"), /*#__PURE__*/React.createElement("span", {
    className: "cr-statlist__sep"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cr-statlist__num"
  }, p.ttt, /*#__PURE__*/React.createElement("span", {
    className: "cr-statlist__unit"
  }, "s")), /*#__PURE__*/React.createElement("span", {
    className: "cr-dchip cr-dchip--down"
  }, "\u25BE -0.3")), /*#__PURE__*/React.createElement("div", {
    className: "cr-statlist__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cr-statlist__label"
  }, "Total Reps"), /*#__PURE__*/React.createElement("span", {
    className: "cr-statlist__sep"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cr-statlist__num"
  }, p.reps), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: "cr-statlist__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cr-statlist__label"
  }, "Completion %"), /*#__PURE__*/React.createElement("span", {
    className: "cr-statlist__sep"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cr-statlist__num"
  }, "68.4", /*#__PURE__*/React.createElement("span", {
    className: "cr-statlist__unit"
  }, "%")), /*#__PURE__*/React.createElement("span", {
    className: "cr-dchip cr-dchip--up"
  }, "\u25B4 +2.1"))))));
}
window.PlayerScreen = PlayerScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/crucible-stats/PlayerScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/crucible-stats/TopNav.jsx
try { (() => {
/* Crucible Stats — top navigation bar (recreation of PageContainer header) */
function TopNav({
  user,
  onLogoClick,
  mode,
  onMode,
  onAiToggle,
  aiOpen
}) {
  const {
    SegmentedToggle,
    Avatar
  } = window.CrucibleDesignSystem_d53f36;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 72,
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 48px",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(13,13,13,0.6)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/crucible.svg",
    alt: "Crucible",
    height: 28,
    style: {
      cursor: "pointer"
    },
    onClick: onLogoClick
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cr-pill-cta",
    onClick: onLogoClick
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/sports_football.svg",
    width: 16,
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, "Build Crucible into Your Organization")), /*#__PURE__*/React.createElement(SegmentedToggle, {
    options: [{
      id: "default",
      label: "Default"
    }, {
      id: "org",
      label: "Org"
    }],
    value: mode,
    onSelect: onMode
  }), /*#__PURE__*/React.createElement("button", {
    className: "cr-ai-bubble" + (aiOpen ? " is-open" : ""),
    onClick: onAiToggle,
    "aria-label": "AI Assistant"
  }, "C"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 32,
      background: "rgba(255,255,255,0.1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/settings.svg",
    width: 20,
    style: {
      filter: "brightness(0) invert(1)",
      opacity: 0.85
    },
    alt: ""
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: user.name,
    size: 38
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-medium)",
      fontWeight: 600,
      fontSize: 14,
      color: "#fff"
    }
  }, user.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, user.role)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-secondary)",
      fontSize: 11
    }
  }, "\u25BE"))));
}
window.TopNav = TopNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/crucible-stats/TopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/crucible-stats/app.jsx
try { (() => {
/* Crucible Stats — app shell: login → dashboard ↔ player, with AI panel */
function AiPanel({
  open,
  onClose
}) {
  const {
    Input,
    Button
  } = window.CrucibleDesignSystem_d53f36;
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "cr-ai-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cr-ai-panel__head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cr-ai-dot"
  }, "C"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, "Crucible Assistant")), /*#__PURE__*/React.createElement("button", {
    className: "cr-ai-x",
    onClick: onClose
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "cr-ai-panel__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cr-ai-msg cr-ai-msg--bot"
  }, "Hi! I'm your Crucible assistant. Ask me anything about the platform or let me walk you through getting started."), /*#__PURE__*/React.createElement("div", {
    className: "cr-ai-msg cr-ai-msg--user"
  }, "Who needs reps this week?"), /*#__PURE__*/React.createElement("div", {
    className: "cr-ai-msg cr-ai-msg--bot"
  }, "Tyler Brooks and Jordan Pierce are below the group's decision-score average \u2014 I'd queue a coverage-reads game plan for both.")), /*#__PURE__*/React.createElement("div", {
    className: "cr-ai-panel__input"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Ask Crucible\u2026"
  })));
}
function App() {
  const [screen, setScreen] = React.useState("login");
  const [player, setPlayer] = React.useState(null);
  const [mode, setMode] = React.useState("org");
  const [ai, setAi] = React.useState(false);
  const user = {
    name: "Ryan Fitzpatrick",
    role: "Player Manager"
  };
  if (screen === "login") {
    return /*#__PURE__*/React.createElement(window.LoginScreen, {
      onSignIn: () => setScreen("dashboard")
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "cr-app"
  }, /*#__PURE__*/React.createElement(window.TopNav, {
    user: user,
    mode: mode,
    onMode: setMode,
    aiOpen: ai,
    onAiToggle: () => setAi(v => !v),
    onLogoClick: () => {
      setScreen("dashboard");
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cr-app__scroll"
  }, screen === "dashboard" ? /*#__PURE__*/React.createElement(window.DashboardScreen, {
    onOpenPlayer: p => {
      setPlayer(p);
      setScreen("player");
    }
  }) : /*#__PURE__*/React.createElement(window.PlayerScreen, {
    player: player,
    onBack: () => setScreen("dashboard")
  })), /*#__PURE__*/React.createElement(AiPanel, {
    open: ai,
    onClose: () => setAi(false)
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/crucible-stats/app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SegmentedToggle = __ds_scope.SegmentedToggle;

__ds_ns.Select = __ds_scope.Select;

})();
