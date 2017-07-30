var ClickCountDisplay = function(options) {
  var counter = 0
  return {
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
}