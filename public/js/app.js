// Generated by CoffeeScript 1.3.3

/* Require.js config
*/


(function() {

  require.config({
    paths: {
      jquery: "libs/jquery",
      lodash: "libs/lodash",
      backbone: "libs/backbone",
      backbone_extensions: "libs/backbone.extensions",
      hbs: "libs/hbs",
      Handlebars: "libs/Handlebars",
      templates: "../templates",
      async: 'libs/async',
      async_extensions: 'libs/async.extensions'
    },
    shim: {
      backbone: {
        deps: ["lodash", "jquery"],
        exports: "Backbone"
      },
      lodash: {
        exports: "_"
      },
      backbone_extensions: {
        deps: ["backbone"]
      },
      async_extensions: {
        deps: ["async"],
        exports: "async"
      },
      Handlebars: {
        exports: "Handlebars"
      }
    },
    hbs: {
      helperPathCallback: function(name) {
        return "helpers/all";
      },
      templateExtension: "hbs",
      disableI18n: true
    }
  });

  /* Instantiate your app
  */


  define(function(require) {
    var $, Backbone, GenericController, async, async_extensions, backbone_extensions, _;
    $ = require('jquery');
    _ = require('lodash');
    Backbone = require('backbone');
    backbone_extensions = require('backbone_extensions');
    async = require('async');
    async_extensions = require('async_extensions');
    GenericController = require('controllers/generic');
    (function() {});
    /* Global environment setup
    */

    window.r = {};
    r.config = {};
    r.controllers = {};
    r.ui = {};
    /* Event aggregator
    */

    r.events = _.extend({}, Backbone.Events);
    /* Assign static variables
    */

    r.config.api = '/api/1';
    r.controllers.generic = new GenericController;
    /* Initialize routers
    */

    return $(document).ready(function() {
      var start;
      start = function() {
        var enablePushState, pushState;
        enablePushState = true;
        pushState = !!(enablePushState && window.history && window.history.pushState);
        return Backbone.history.start({
          pushState: pushState
        });
      };
      return start();
    });
  });

}).call(this);
