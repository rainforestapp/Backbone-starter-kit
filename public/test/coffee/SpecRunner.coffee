###############################
### Require JS config
###############################
require.config

    baseUrl: "/js/"

    # 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.7.2.min")
    paths:

        # Core Libraries
        jquery: "libs/jquery"
        lodash: "libs/lodash"
        backbone: "libs/backbone"
        backbone_extensions: "libs/backbone.extensions"
        queryparams: "libs/backbone/backbone.queryparams"
        hbs: "libs/hbs" # hbs is how we deal with handlebars templatez
        Handlebars: "libs/Handlebars"
        templates: "../templates"
        async: 'libs/async'
        async_extensions: 'libs/async.extensions'
        jasmine: "../../test/lib/jasmine"
        'jasmine-html': "../../test/lib/jasmine-html"


    # Sets the configuration for your third party scripts that are not AMD compatible
    shim:

        lodash:
            exports: "_"

        backbone:
            deps: ["lodash", "jquery"]
            exports: "Backbone" #attaches "Backbone" to the window object

        backbone_extensions:
            deps: ["backbone"]

        queryparams:
            deps: ["backbone"]

        async_extensions:
            deps: ["async"]
            exports: "async"

        Handlebars:
            exports: "Handlebars"

        Spinner:
            deps: ["jquery"]
            exports: "Spinner"
        
        jasmine:
            exports: 'jasmine'

        'jasmine-html':
            deps: ['jasmine']
            exports: 'jasmine'


    # Settings for the handlebars implementation
    hbs:

        # callback to determine path to look for helpers
        helperPathCallback: (name) ->
            "helpers/all"

        templateExtension: "hbs"

        # if disableI18n is `true` it won't load locales and the i18n helper
        # won't work as well.
        disableI18n: true



window.store = "TestStore" # override local storage store name - for testing
require ["lodash", "jquery", "backbone", "jasmine-html"], (_, $, Backbone, jasmine) ->
    
    jasmineEnv = jasmine.getEnv()
    jasmineEnv.updateInterval = 1000

    htmlReporter = new jasmine.HtmlReporter()

    jasmineEnv.addReporter htmlReporter
    jasmineEnv.specFilter = (spec) ->
        htmlReporter.specFilter spec

    specs = []
    specs.push "/test/spec/views/ExampleSpec.js"

    $ ->
        require specs, ->
            jasmineEnv.execute()


