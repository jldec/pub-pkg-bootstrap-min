# pub-pkg-bootstrap-min

pub-server package for injecting [Bootstrap](http://jquery.com/)

### installation

``` bash
npm install pub-pkg-bootstrap-min
```

### usage

Layout templates which use `{{{injectCss}}}` and `{{{injectJs}}}` will automatically link to

- /css/bootstrap-v3.3.4.min.css
- /js/bootstrap-v3.3.4.min.js

To prevent injection and link manually, set `inject:false` on the pkgs entry for pub-pkg-bootstrap-min in pub-config.

### credits
- Bootstrap v3.3.4 [http://getbootstrap.com](http://getbootstrap.com)
- Copyright 2011-2015 Twitter, Inc.
- Licensed under [MIT LICENSE](https://github.com/twbs/bootstrap/blob/master/LICENSE)
