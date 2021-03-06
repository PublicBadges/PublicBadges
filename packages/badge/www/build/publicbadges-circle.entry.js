import { r as registerInstance, h } from './index-4252c35c.js';

const publicBadgesCircleCss = "svg{all:initial}svg.interactive{cursor:pointer}.logo{fill:var(--badge-color)}#modal .logo{fill:var(--modal-color-fg)}.circle{transform:rotate(-90deg);transform-origin:50% 50%;fill:none;stroke:var(--badge-color);stroke-width:2;transition:transform 300ms ease;transform:rotate(-90deg)}#modal .circle{stroke:var(--modal-color-fg)}.interactive:hover .circle{transform:rotate(-100deg)}.badges circle{fill:var(--badge-color);stroke:var(--badge-color);stroke-width:0;transition:stroke-width 400ms ease, transform 400ms ease, opacity 200ms ease;transform-origin:50% 50%;opacity:1}.interactive:hover .badges circle{stroke-width:10;transform:translate(0, 100px) !important;opacity:0}.info{fill:var(--badge-color);opacity:0;transition:opacity 100ms ease}.interactive:hover .info{opacity:1;transition:opacity 300ms ease}text.test-mode{fill:#E1231E;stroke:#FFF;stroke-width:1px;font-weight:bold;font-size:18px;font-family:sans-serif}";

const PublicbadgesCircle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.badgesCount = 0;
    this.interactive = false;
    this.testMode = false;
  }
  render() {
    const badgeRadius = 2.5;
    const xOffsetLeft = (i) => (i - 1) * -(badgeRadius * 1.5);
    const xOffsetRight = (i) => i * (badgeRadius * 1.5);
    const badges = [];
    for (let i = 1; i <= this.badgesCount; i++) {
      let xOffset;
      if (this.badgesCount % 2 === 0) {
        xOffset = i % 2 === 0 ? xOffsetLeft(i) : xOffsetRight(i);
      }
      else {
        xOffset = i % 2 === 0 ? xOffsetRight(i) : xOffsetLeft(i);
      }
      badges.push(h("circle", { cx: "60", cy: "0", r: badgeRadius, style: { transform: `translate(${xOffset}px, 100px)` } }));
    }
    const classes = [];
    if (this.interactive) {
      classes.push("interactive");
    }
    return (
    // @ts-ignore
    h("svg", { class: classes.join(" "), viewBox: "0 0 120 120" }, badges && [
      // @ts-ignore
      h("g", { class: "badges" }, badges),
      // @ts-ignore
      h("g", { class: "info", transform: "translate(52 92)" }, h("path", { d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 13.4H7V6.7h2v6.7zM8 5c-.7 0-1.2-.6-1.2-1.2S7.3 2.5 8 2.5s1.2.6 1.2 1.2S8.7 5 8 5z" }))
    ], "// @ts-ignore", h("g", { class: "circle" }, h("circle", { class: "l", cx: "60", cy: "60", r: "58", "stroke-linecap": "square", "stroke-dashoffset": "4", "stroke-dasharray": "0 8 4 4 4 20 4 8 4 24 4 28 4 8 4 40 4 4 4 16 4 8 4 8 4 44 4 24 4 8 4 16 4 4 4 600" }), h("circle", { class: "s", cx: "60", cy: "60", r: "58", "stroke-linecap": "round", "stroke-dasharray": "0 20 0 8 0 4 0 24 0 4 0 4 0 8 0 12 0 4 0 8 0 4 0 16 0 12 0 16 0 4 0 4 0 8 0 20 0 8 0 24 0 12 0 8 0 8 0 4 0 4 0 24 0 4 0 4 0 8 0 24 0 4 0 24 0 8 0 600" })), h("path", { class: "logo", d: "M13.64 64.39V45.81h2.7v1.81a6.82 6.82 0 01.73-.82 5.31 5.31 0 011.44-.86 5.38 5.38 0 012.24-.47 6.27 6.27 0 014.81 2 7.22 7.22 0 011.87 5.13 7.54 7.54 0 01-1.79 5.21 6 6 0 01-4.71 2 5.24 5.24 0 01-2.83-.72 5 5 0 01-1.6-1.43v6.71zm2.76-11.77A4.84 4.84 0 0017.56 56a3.82 3.82 0 002.93 1.26A3.71 3.71 0 0023.41 56a4.91 4.91 0 001.14-3.37 4.78 4.78 0 00-1.16-3.34A3.75 3.75 0 0020.46 48a3.66 3.66 0 00-3 1.34 4.94 4.94 0 00-1.06 3.28zM33.9 59.83a4.1 4.1 0 01-3.61-1.65A7 7 0 0129.13 54v-8.19H32v8.46a3 3 0 00.78 2.19 2.59 2.59 0 002 .8 2.79 2.79 0 002.16-.89 3.25 3.25 0 00.83-2.3v-8.26h2.85v13.68h-2.8v-1.78a4.15 4.15 0 01-1.52 1.51 4.44 4.44 0 01-2.4.61zM42.64 59.49V40.54h2.86v7.1a5.3 5.3 0 014.43-2.17 6 6 0 014.71 2 7.54 7.54 0 011.79 5.21 7.25 7.25 0 01-1.87 5.15 6.31 6.31 0 01-4.81 2 5.33 5.33 0 01-4.41-2.12v1.78zm2.76-6.79a5 5 0 001.11 3.3 3.66 3.66 0 002.95 1.34A3.8 3.8 0 0052.4 56a4.8 4.8 0 001.15-3.34 5 5 0 00-1.14-3.38A3.72 3.72 0 0049.49 48a3.81 3.81 0 00-2.94 1.26 4.87 4.87 0 00-1.15 3.44zM58.36 59.49V40.54h2.86v18.95zM64.56 43.7a1.84 1.84 0 111.27.51 1.73 1.73 0 01-1.27-.51zm-.15 15.79V45.81h2.86v13.68zM81.32 47.15l-.86 2.41a5 5 0 00-3.62-1.5 4.08 4.08 0 00-3.12 1.31 4.69 4.69 0 00-1.2 3.28A4.59 4.59 0 0073.79 56 4.19 4.19 0 0077 57.29a5.25 5.25 0 003.56-1.52l.81 2.36a6.59 6.59 0 01-4.53 1.7 6.93 6.93 0 01-5.14-2 7.48 7.48 0 010-10.26 6.85 6.85 0 015.08-2.06 6.73 6.73 0 014.54 1.64zM31.16 74.06L33 72.64a3.8 3.8 0 003.27 1.79 2.39 2.39 0 001.47-.43 1.49 1.49 0 00.58-1.26 1.46 1.46 0 00-.68-1.2 6.52 6.52 0 00-1.64-.87c-.65-.24-1.31-.51-2-.8a4.35 4.35 0 01-1.67-1.35 3.62 3.62 0 01-.68-2.22A3.4 3.4 0 0133 63.47a5.23 5.23 0 013.36-1 4.85 4.85 0 012.85.78 4.76 4.76 0 011.6 1.75l-2 1.32a3 3 0 00-2.65-1.53 2.09 2.09 0 00-1.33.41 1.32 1.32 0 00-.51 1.09 1.39 1.39 0 00.7 1.18 7.55 7.55 0 001.66.81c.65.23 1.3.49 2 .77a4.26 4.26 0 011.68 1.34 3.59 3.59 0 01.7 2.24 3.73 3.73 0 01-1.41 3 5.38 5.38 0 01-3.55 1.16 5.23 5.23 0 01-4.94-2.73zM42.64 81.35V62.76h2.7v1.81a6.07 6.07 0 01.73-.81 5.55 5.55 0 011.44-.87 5.38 5.38 0 012.24-.47 6.25 6.25 0 014.81 2 7.26 7.26 0 011.87 5.14 7.54 7.54 0 01-1.79 5.2 6 6 0 01-4.71 2 5.24 5.24 0 01-2.83-.72 5.12 5.12 0 01-1.6-1.43v6.71zm2.76-11.77A4.86 4.86 0 0046.56 73a3.85 3.85 0 002.93 1.25A3.73 3.73 0 0052.41 73a4.93 4.93 0 001.14-3.37 4.8 4.8 0 00-1.15-3.34A3.8 3.8 0 0049.46 65a3.66 3.66 0 00-2.95 1.34 5 5 0 00-1.11 3.24zM57.09 72.23A4.09 4.09 0 0158.55 69a5.73 5.73 0 013.83-1.25 4.78 4.78 0 013.28 1v-1.32a2.31 2.31 0 00-.78-1.85 3.16 3.16 0 00-2.13-.67A7.82 7.82 0 0058.92 66l-1.1-2A9.5 9.5 0 0163 62.42q5.44 0 5.45 5.19v8.84H66l-.24-1a4.48 4.48 0 01-3.51 1.37 5.42 5.42 0 01-3.68-1.28 4.1 4.1 0 01-1.48-3.31zm3.65-1.77a2.17 2.17 0 000 3.38 3.21 3.21 0 002.09.67 3.17 3.17 0 002.07-.66 2.21 2.21 0 000-3.42 3.28 3.28 0 00-2.11-.64 3.12 3.12 0 00-2.05.67zM81.32 64.1l-.86 2.41A5 5 0 0076.84 65a4 4 0 00-3.12 1.31 5 5 0 00.07 6.58A4.18 4.18 0 0077 74.24a5.2 5.2 0 003.56-1.52l.81 2.36a6.55 6.55 0 01-4.53 1.71 6.94 6.94 0 01-5.14-2.05 7.48 7.48 0 010-10.26 6.88 6.88 0 015.08-2.06 6.73 6.73 0 014.54 1.68zM83.88 74.79a7 7 0 01-2-5.13 7.31 7.31 0 011.91-5.19 6.23 6.23 0 014.75-2 6.16 6.16 0 014.82 2 7.52 7.52 0 011.76 5.21 6.24 6.24 0 010 .71h-10.3a3.83 3.83 0 001.22 2.9 4.67 4.67 0 006.8-.81l1.89 1.42a6.37 6.37 0 01-2.1 2.06 6.56 6.56 0 01-3.62.93 6.89 6.89 0 01-5.13-2.1zm1-6.47h7.32a3.55 3.55 0 00-1.1-2.58 3.64 3.64 0 00-2.55-.93 3.56 3.56 0 00-2.51 1 3.81 3.81 0 00-1.12 2.51zM96.05 74.06l1.78-1.42a3.81 3.81 0 003.28 1.79 2.39 2.39 0 001.52-.45 1.52 1.52 0 00.58-1.26 1.46 1.46 0 00-.68-1.2 6.52 6.52 0 00-1.67-.85c-.65-.24-1.31-.51-2-.8a4.32 4.32 0 01-1.66-1.35 3.62 3.62 0 01-.68-2.22 3.42 3.42 0 011.32-2.83 5.26 5.26 0 013.37-1A4.84 4.84 0 01105.7 65l-2 1.32a3 3 0 00-2.65-1.53 2.06 2.06 0 00-1.32.41 1.32 1.32 0 00-.51 1.09 1.4 1.4 0 00.69 1.18 7.64 7.64 0 001.67.81c.64.23 1.3.49 2 .77a4.33 4.33 0 011.68 1.34 3.58 3.58 0 01.69 2.24 3.72 3.72 0 01-1.4 3 5.4 5.4 0 01-3.55 1.16 5.22 5.22 0 01-4.95-2.73zM27.38 68.44a1.15 1.15 0 01.87-.35 1.2 1.2 0 011.23 1.22 1.2 1.2 0 01-1.23 1.23A1.2 1.2 0 0127 69.31a1.15 1.15 0 01.38-.87zM20.61 68.44a1.23 1.23 0 012.11.87 1.23 1.23 0 11-2.46 0 1.18 1.18 0 01.35-.87zM13.85 68.44a1.18 1.18 0 01.88-.35A1.2 1.2 0 0116 69.31a1.2 1.2 0 01-1.22 1.23 1.2 1.2 0 01-1.23-1.23 1.18 1.18 0 01.3-.87zM86.2 51.4h6.71v1.97H86.2zM84.51 53.23a1.19 1.19 0 01-.88.36 1.21 1.21 0 01-1.22-1.23 1.2 1.2 0 011.22-1.23 1.2 1.2 0 011.23 1.23 1.18 1.18 0 01-.35.87zM94.3 51.4h6.71v1.97H94.3zM102.77 51.48a1.18 1.18 0 01.87-.35 1.2 1.2 0 011.23 1.23 1.21 1.21 0 01-1.23 1.23 1.21 1.21 0 01-1.22-1.23 1.18 1.18 0 01.35-.88z" }), this.testMode &&
      // @ts-ignore
      h("text", { class: "test-mode", x: "60", y: "60", "text-anchor": "middle", transform: "rotate(-45 60 60)" }, "test modus")));
  }
};
PublicbadgesCircle.style = publicBadgesCircleCss;

export { PublicbadgesCircle as publicbadges_circle };
