module.exports =
{
  'pub-pkg': 'pub-pkg-bootstrap-min',

  staticPaths: [
    { path:'./css/bootstrap-v3.3.4.min.css', route:'/css', inject:true, maxAge:'30d' },
    { path:'./js/bootstrap-v3.3.4.min.js', route:'/js', inject:true, maxAge:'30d' }
  ],
}