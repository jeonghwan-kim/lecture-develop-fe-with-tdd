var ClickCountView = function(clickCounter, updateEl) {

  return {
    updateView() {
      updateEl.text(clickCounter.getCounter())
    },

    increaseAndUpdateView() {
      clickCounter.increase()
      this.updateView()
    }
  }
}