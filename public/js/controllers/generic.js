// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var $, Backbone, ExampleView, GenericController, _;
    $ = require('jquery');
    _ = require('lodash');
    Backbone = require('backbone');
    ExampleView = require('views/example');
    (function() {});
    return GenericController = (function(_super) {

      __extends(GenericController, _super);

      function GenericController() {
        return GenericController.__super__.constructor.apply(this, arguments);
      }

      GenericController.prototype.routes = {
        "": "example"
      };

      GenericController.prototype.example = function() {
        var exampleView;
        exampleView = new ExampleView;
        return $('#page').html(exampleView.render().el);
      };

      GenericController;


      return GenericController;

    })(Backbone.Router);
  });

}).call(this);