var ClickCountView = function(clickCounter, options) {
  var view = {
    getClickCount() {
      return clickCounter.getCounter()
    },

    increseAndUpdateView() {
      clickCounter.increase()
      this.updateView()
    },

    updateView() {
      options.updateEl.text(this.getClickCount())
    }
  }

  options.triggerEl.on('click', ()=> {
    view.increseAndUpdateView()
  })

  return view
}