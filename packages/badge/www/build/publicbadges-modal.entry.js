import { h, r as registerInstance, f as createEvent } from './index-4252c35c.js';

// @ts-ignore
const IconClose = () => h("svg", { class: "icon-close", viewBox: "0 0 20 20.07" },
  h("polygon", { points: "20 4.62 15.45 0.07 10.03 5.48 4.55 0 0 4.55 5.48 10.03 0 15.51 4.55 20.07 10.03 14.59 15.45 20 20 15.45 14.59 10.03 20 4.62" }));
// @ts-ignore
const IconCheck = () => h("svg", { class: "icon-check", viewBox: "0 0 20 20" },
  h("path", { d: "M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm1.11,12.88L9,15,6.88,12.88l-3-3L6,7.77l3,3,5.09-5.08L16.2,7.8Z" }));
// @ts-ignore
const IconCheckSmall = () => h("svg", { class: "icon-check-small", viewBox: "0 0 20 20" },
  h("polygon", { points: "5.11 5.08 2.12 2.09 0 4.21 3 7.2 5.12 9.32 7.23 7.2 12.32 2.12 10.2 0 5.11 5.08" }));
// @ts-ignore
const IconArrowDown = () => h("svg", { class: "icon-arrow-down", viewBox: "0 0 20 12.93" },
  h("path", { d: "M20,6.5l-2.9-3L10,10.6,3,3.53l-3,3,7.07,7.06h0l3,2.91h0l2.9-2.91h0Z", transform: "translate(0 -3.53)" }));
// @ts-ignore
const IconMore = () => h("svg", { class: "icon-more", viewBox: "0 0 20 19.97" },
  h("polygon", { points: "1.93 0 1.93 5.31 10.91 5.31 0 16.22 3.75 19.97 14.69 9.03 14.69 17.99 20 17.99 20 5.31 20 0 1.93 0" }));

const Metadata = {
  EN: {
    baseURL: 'https://publicspaces.net',
    title: 'PublicSpaces',
    subtitle: 'internet for the common good',
    about: function (baseURL) {
      return (`<p>PublicSpaces reclaims the internet as a force for the common good and advocates a new internet that strengthens the public domain. <a href="${baseURL}/manifesto" target="_blank" rel="noopener noreferrer">Read our manifesto</a> to see the values we want to see at the core of our digital lives.</p>`);
    },
    more: 'more about PublicSpaces'
  },
  NL: {
    baseURL: 'https://publicspaces.net',
    title: 'PublicSpaces',
    subtitle: 'internet in het publieke belang',
    about: function (baseURL) {
      return (`<p>PublicSpaces staat voor het publieke belang op het internet en ondersteunt nieuwe internet-technologie die het publieke domein versterkt. <a href="${baseURL}/manifesto" target="_blank" rel="noopener noreferrer">Lees ons manifest</a> om te zien welke waarden aan de basis moeten staan van onze digitale levens.</p>`);
    },
    more: 'meer over PublicSpaces'
  }
};

const publicBadgesModalCss = "#modal-bg{position:fixed;width:100%;height:100%;left:0;top:0;display:block;background-color:rgba(0, 0, 0, 0)}#modal{all:initial;position:absolute;padding:10px;background:var(--modal-color-bg);color:var(--modal-color-fg);box-shadow:0 0 15px 0 rgba(0, 0, 0, 0.25);font-size:14px;font-family:Manrope, sans-serif;font-weight:400}@supports (font-variation-settings: normal){#modal{font-family:\"Manrope VF\", sans-serif;font-variation-settings:\"wght\" 450;font-variation-ligatures:normal;font-feature-settings:\"calt\", \"liga\"}}#modal *,#modal *:before,#modal *:after{text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;font-smoothing:antialiased}#modal.bottom{bottom:0;animation:from-bottom 250ms ease 1}#modal.top{top:0;animation:from-top 250ms ease 1}#modal [class^=icon] path,#modal [class^=icon] polygon,#modal [class^=icon] rect,#modal [class^=icon] circle{fill:var(--modal-color-fg)}@keyframes from-bottom{from{opacity:0.5;clip-path:polygon(-10% 110%, -10% 110%, 110% 110%, 110% 110%)}to{opacity:1;clip-path:polygon(-10% 110%, -10% -10%, 110% -10%, 110% 110%)}}@keyframes from-top{from{opacity:0.5;clip-path:polygon(-10% -10%, -10% -10%, 110% -10%, 110% -10%)}to{opacity:1;clip-path:polygon(-10% -10%, -10% 110%, 110% 110%, 110% -10%)}}h1,h2,h3{line-height:1.2em;margin:0}h1{font-size:19px;font-weight:600;font-variation-settings:\"wght\" 650}h2{margin-bottom:0.5em;font-size:19px;font-weight:400;font-variation-settings:\"wght\" 450}h3{margin-bottom:0.25em;font-size:16px;font-weight:600;font-variation-settings:\"wght\" 650}h4{margin:0em;font-size:14px;font-weight:400;font-variation-settings:\"wght\" 450}p{line-height:1.5em}p:last-child{margin-bottom:0}li{line-height:1.5em}strong{font-weight:700}a{color:var(--modal-color-fg)}a:hover{text-decoration:none}a.more{text-decoration:none}a.more svg{position:relative;display:inline-block;width:8px;margin-left:5px;vertical-align:middle}a.more:hover{text-decoration:underline}a.more:hover svg{top:-1px;left:1px}.close{position:absolute;top:3px;right:4px;width:24px;height:24px;padding:8px;background:none;border:none;cursor:pointer;outline:none;z-index:1}.close svg{cursor:pointer}.close:hover svg{transform:scale(1.3);transition:transform 200ms ease}#modal-content{display:flex;justify-content:space-between;align-items:center}.vertical #modal-content{flex-direction:column}.column{width:320px}.vertical .column{padding:20px 10px}.vertical .column:last-child{padding-bottom:10px}@media (max-width: 359px){.vertical .column{width:300px;padding:20px 5px}}.horizontal .column{padding:35px 30px}#logo{width:150px}.vertical #logo{padding-right:20px}.horizontal #logo{padding-right:0px}#badges ul{margin:0;padding-left:0;list-style:none}#badges ul li{position:relative;margin-bottom:2em;padding:0 0 0 30px}#badges ul li:last-child{margin-bottom:0}#badges ul li .icon-check{position:absolute;width:18px;left:0;top:0}#badges ul.accordeon li{padding-right:20px;cursor:pointer;user-select:none}#badges ul.accordeon .badge-info{max-height:0;overflow-y:hidden;transition:all 150ms cubic-bezier(0, 1, 0.5, 1)}#badges ul.accordeon .icon-arrow-down{position:absolute;right:1px;top:4px;width:10px;transition:all 200ms ease}#badges ul.accordeon li.open .badge-info{max-height:16rem}#badges ul.accordeon li.open .icon-arrow-down{transform:scaleY(-1)}#badges ul .evidence{margin:0}#badges ul .evidence li{margin-bottom:10px;padding-left:16px}#badges ul .evidence .icon-check-small{position:absolute;left:0;top:6px;width:16px;height:16px}.horizontal #badges{border-right:1px solid var(--modal-color-fg)}.vertical #about{border-top:1px solid var(--modal-color-fg)}.horizontal #about{position:relative;left:-1px;border-left:1px solid var(--modal-color-fg)}";

const PublicbadgesModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeDrawer = createEvent(this, "closeDrawer", 7);
    this.badges = [];
    this.theme = "";
    this.language = "EN";
    this.positioning = { orientation: "vertical", left: 0, origin: "top" };
    this.openBadge = null;
    this.closeDrawer = ({
      emit: (e) => e
    });
    this.closeModalHandler = () => {
      console.log('click');
      this.closeDrawer.emit();
    };
    this.toggleBadge = (i) => {
      this.openBadge = this.openBadge === i ? null : i;
    };
  }
  componentDidLoad() {
    if (this.positioning.orientation === "vertical") {
      window.scrollBy(0, this.modalEl.getBoundingClientRect().top - 10);
    }
  }
  render() {
    const metadata = Metadata[this.language];
    const { orientation, left, origin } = this.positioning;
    return ([
      h("div", { id: "modal-bg", onClick: this.closeModalHandler }),
      h("div", { id: "modal", class: `${orientation} ${this.theme} ${origin}`, style: { left: left.toString() + "px" }, ref: (el) => this.modalEl = el }, h("button", { class: "close", onClick: this.closeModalHandler }, h(IconClose, null)), h("div", { id: "modal-content" }, h("div", { id: "logo", class: "column" }, h("publicbadges-circle", { interactive: false })), h("div", { id: "badges", class: "column" }, h("ul", { class: this.badges.length !== 1 ? "accordeon" : "" }, this.badges.map((badge, i) => (h("li", { class: this.openBadge === i ? "open" : "", onClick: () => { this.toggleBadge(i); } }, h(IconCheck, null), h("h3", null, badge.name), h("div", { class: "badge-info" }, h("p", null, badge.description), badge.evidence &&
        h("ul", { class: "evidence" }, badge.evidence.map(proof => {
          return h("li", null, h(IconCheckSmall, null), h("h4", null, proof === null || proof === void 0 ? void 0 : proof.description));
        }))), this.badges.length !== 1 && h(IconArrowDown, null)))))), h("div", { id: "about", class: "column" }, h("h1", null, metadata.title), h("h2", null, metadata.subtitle), h("div", { innerHTML: metadata.about(metadata.baseURL) }), h("p", null, h("a", { class: "more", href: metadata.baseURL, target: "_blank", rel: "noopener noreferrer" }, metadata.more, h(IconMore, null))))))
    ]);
  }
};
PublicbadgesModal.style = publicBadgesModalCss;

export { PublicbadgesModal as publicbadges_modal };
