# Add Public Badges to your website

Adding the Public Badges to your website is done by including the PublicBadges javascript and adding our [web component](https://www.webcomponents.org/introduction) into the html of your website.

## Include javascript in your site/project
Including PublicBadges javascript can be done by simply referencing the javascript via a script tag (see below for different hosting options) or include it into your project via npm.

### via script tags

The javascript can be included from different sources.

From CDN:
```html
<script type="module" src="https://unpkg.com/@publicbadges/badge@latest/dist/publicbadges/publicbadges.esm.js"></script>
<script nomodule src="https://unpkg.com/@publicbadges/badge@latest/dist/publicbadges/publicbadges.js"></script>
```

From the Public Spaces server:
```html
<script type="module" src="https://assets.publicspaces.net/@publicbadges/badge@latest/dist/publicbadges/publicbadges.esm.js"></script>
<script nomodule src="https://assets.publicspaces.net/@publicbadges/badge@latest/dist/publicbadges/publicbadges.js"></script>
```

Or [download](https://assets.publicspaces.net/@publicbadges/badge@latest.zip) the javascript files and host it on your own server. For example:
```html
<script type="module" src="https://example.org/path/to/publicbadges-folder/publicbadges.esm.js"></script>
<script nomodule src="https://example.org/path/to/publicbadges-folder/publicbadges.js"></script>
```

### Include javascript in your project from NPM:

```bash
npm install @offcourse/public-badges-drawer
```

Or if you use yarn:
```bash
yarn add @offcourse/public-badges-drawer
```

Please refer to the [StencilJS documentation](https://stenciljs.com/docs/overview) for more information on how to include the web component in your JS framework.
See [Custom Elements Everywhere](https://custom-elements-everywhere.com/) for how your framework supports web components. 

## Include Public Badges drawer web component in your html

The Public Badges drawer is a [web component](https://www.webcomponents.org/introduction) that you can use directly in your html.

```html
<publicbadges-drawer />
```

To configure the badges drawer the following (optional) html attributes are available:

| attribute   | values          | default               | description                                                                                     |
|-------------|-----------------|-----------------------|-------------------------------------------------------------------------------------------------|
| badge-color | hex color code  | "#3C3C3C"             | Sets the color of the badges drawer. Make sure it has enough contrast with the background color |
| modal-theme | "dark", "light" | "light"               | Sets the color scheme of the modal (that appears when the drawer is clicked).                   |
| language    | "EN", "NL"      | "EN"                  | Sets the language of the badges drawer                                                          |
| test-mode   | "true", "false" | "false"               | Puts the badge drawer in test mode. For testing in development or staging environment           |
| test-domain | string          | "https://example.org" | To test if domain name is succesfully registered. Can only be used when test mode is active     |


To test web component for layout/positioning:
```html
<publicbadges-drawer test-mode="true" />
```

To test domain name:
```html
<publicbadges-drawer test-mode="true" test-domain="https://yourdomain.org" />
```

The size can optionally be controled with css (default size is 120px, minimum size is 90px).
```html
<publicbadges-drawer style="width:150px; height:150px;" />
```

## Browser support

Older browsers may not support web components and thus not show the PublicBadges web component. Internet Explorer, Edge v. <79, Firefox v. <63, Chrome v. <67 and Safari v. <10.1 do not support web components. See [https://caniuse.com/custom-elementsv1](https://caniuse.com/custom-elementsv1) for a full overview of browser support.

While it is possible to polyfill web component apis for older browsers, the PublicBadges web component may still not function properly as is has not been tested older browsers that don't support web components.