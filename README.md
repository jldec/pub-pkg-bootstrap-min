# pub-pkg-bootstrap-min

_This package is no longer being mainained._

pub-server package for injecting [Bootstrap](https://getbootstrap.com/) v4.2.1

This minimal package includes bundled [Bootstrap](https://getbootstrap.com/docs/4.2/getting-started/introduction/) javascript and css components. It does not come with prebuilt HTML templates or themes.

The /example directory includes a simple HTML layout with a [navbar](https://getbootstrap.com/docs/4.2/components/navbar/) and [jumbotron](https://getbootstrap.com/docs/4.2/components/jumbotron/).

The example is published at https://jldec.github.io/pub-pkg-bootstrap-min/ by pointing GitHub Pages to the /docs directory.

### installation

``` bash
npm install pub-pkg-bootstrap-min
```

### usage

Layout templates which use `{{{injectCss}}}` and `{{{injectJs}}}` will automatically link to

- /css/bootstrap-v4.2.1.min.css
- /js/bootstrap-v4.2.1.bundle.min.js

To prevent injection and link manually, set `inject:false` on the pkgs entry for pub-pkg-bootstrap-min in pub-config.

### credits
- Bootstrap v4.2.1 [https://getbootstrap.com](https://getbootstrap.com)
- Copyright (c) 2011-2019 Twitter, Inc.
- Copyright (c) 2011-2019 The Bootstrap Authors
- Licensed under [MIT LICENSE](https://github.com/twbs/bootstrap/blob/v4-dev/LICENSE)
