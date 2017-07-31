var ClickCountDisplay = function(options) {
  var counter = 0

  var clickCounter = {
    getClickCount() {
      return counter
    },

    increseCountAndUpdateDisplay() {
      counter++
      this.updateDisplay()
    },

    updateDisplay() {
      options.updateEl.text(this.getClickCount())
    }
  }

  options.triggerEl.on('click', ()=> {
    clickCounter.increseCountAndUpdateDisplay()
  })

  return clickCounter
}