var ClickCounter = function() {
  var counter = 0

  return {
    getCounter() {
      return counter
    },

    increase() {
      counter++
    }
  }
}