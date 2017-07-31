var ClickCounter = function() {
  var counter = 0;

  return {
    increase() {
      counter++;
    },

    decrease() {
      counter--;
    },

    getCounter() {
      return counter;
    }
  }
}