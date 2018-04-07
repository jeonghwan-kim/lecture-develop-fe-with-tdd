var App = App || {}

App.CounterView = (counter, options) => {
  const view = {
    countAndUpdateView() {
      counter.count()
      view.updateView()
    },
    updateView() {
      options.updateEl.innerHTML = counter.getValue()
    }
  }

  options.triggerEl.addEventListener('click', () => {
    view.countAndUpdateView()
  })

  return view
}