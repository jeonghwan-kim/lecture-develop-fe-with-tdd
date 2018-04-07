var ClickCounter = function() {
  let count = 0;

  var counter = {
    increase() {
      count++;
    },

    decrease() {
      count--;
    },

    getCounter() {
      return count;
    },

    setIncrease(method) {
      this.increase = () => {
        count = method(count)
      }
      return this
    }
  }

  return counter
}