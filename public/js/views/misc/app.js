// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var $, AppView, Backbone, _;
    $ = require('jquery');
    _ = require('underscore');
    Backbone = require('backbone');
    (function() {});
    AppView = (function(_super) {

      __extends(AppView, _super);

      function AppView() {
        return AppView.__super__.constructor.apply(this, arguments);
      }

      AppView.prototype.initialize = function(opts) {
        return _.bindAll(this);
      };

      AppView.prototype.showView = function(view) {
        if (this.currentView != null) {
          this.currentView.close();
        }
        this.currentView = view;
        this.currentView.render();
        return $('#page').html(this.currentView.el);
      };

      return AppView;

    })(Backbone.View);
    return AppView;
  });

}).call(this);
