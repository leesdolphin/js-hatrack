/*globals requirejs */

requirejs.config({
  'baseUrl': '../build',
  'paths': {
    'index': 'index',
    'react': 'https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-with-addons',
    'react-dom': 'https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-dom',
    'jquery': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min',
    'oauth-web': '../node_modules/oauthio-web/dist/oauth.min',
    'radium': '../node_modules/radium/dist/radium.js'
  }
})

requirejs(['oauth-web', 'index'], function (OAuth, main) {
  // OAuth.initialize('KUhN5ym8PYgEIgAy1hli3zBNN-g')
  main.entrypoint(document.getElementById('container'))
})
