var ClickCountDisplay = function() {
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

    }
  }
}