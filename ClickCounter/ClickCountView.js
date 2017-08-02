var ClickCountView = function(clickCounter, options) {
  var view = {
    increseAndUpdateView() {
      clickCounter.increase()
      view.updateView()
    },

    updateView() {
      options.updateEl.text(clickCounter.getCounter())
    }
  }

  options.triggerEl.on('click', ()=> {
    view.increseAndUpdateView()
  })

  return view
}