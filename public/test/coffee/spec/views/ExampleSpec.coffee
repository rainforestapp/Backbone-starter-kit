describe "View :: Example", ->

  beforeEach ->

    flag = false

    require ["views/example"], (ExampleView) =>

      @view = new ExampleView
      @view.render()

      $("#sandbox").html @view.el
      flag = true

    waitsFor ->
      flag


  afterEach ->
    @view.remove()


  describe "Example group", ->
    it "shows hello world", ->
      expect( @view.$el.find('h1').text().toLowerCase().indexOf('hello world') != -1 ).toEqual true

    it "shows some paragraph", ->
      expect( @view.$el.find('p').text().toLowerCase().indexOf('some string') != -1 ).toEqual true