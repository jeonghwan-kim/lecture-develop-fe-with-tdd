var CounterView = function(counter, options) {
  var view = {
    countAndUpdateView() {
      counter.count()
      view.updateView()
    },

    updateView() {
      options.updateEl.text(counter.getValue())
    }
  }

  options.triggerEl.on('click', () => {
    view.countAndUpdateView()
  })

  return view
}