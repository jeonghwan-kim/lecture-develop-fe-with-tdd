const ClickCounter = () => {
  let counter = 0

  return {
    getCounter() {
      return counter
    },

    increase() {
      counter++
    }
  }
}