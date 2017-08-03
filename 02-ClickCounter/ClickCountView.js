var ClickCountView = function(clickCounter, options) {
  const view = {
    updateView() {
      options.updateEl.text(clickCounter.getCounter())
    },

    increaseAndUpdateView() {
      clickCounter.increase()
      this.updateView()
    }
  }
  
  options.triggerEl.on('click', () => {
   view.increaseAndUpdateView()   
  })

  return view
}