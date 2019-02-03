module.exports = {

  appUrl: 'https://jldec.github.io/pub-pkg-bootstrap-min',

  // replace '..' below with 'pub-pkg-bootstrap-min' if directory is copied
  pkgs: ['..', 'pub-pkg-font-awesome', 'pub-pkg-seo'],

  sources: [
    './templates',
    { path:'./index.md', writable:1 }
  ],
    
  staticPaths: [
    { path:'./images', route:'/images' },
    './.gitignore',
    './.nojekyll',
    './CNAME'
  ],

  outputs: { path:'../docs', relPaths:1 },
  noRobots: 1,
  linkNewWindow: 1
}
