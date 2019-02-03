module.exports =
{
  'pub-pkg': 'pub-pkg-bootstrap-min',

  staticPaths: [
    { path:'./css/bootstrap-v4.2.1.min.css', route:'/css', inject:true, maxAge:'30d' },
    { path:'./js/bootstrap-v4.2.1.bundle.min.js', route:'/js', inject:true, maxAge:'30d' }
  ],
}