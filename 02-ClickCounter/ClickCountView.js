var ClickCountView = function(clickCounter, updateEl) {
  if (!clickCounter) throw new Error(ClickCountView.messages.noClickCounter)
  
  return {
    updateView() {
      updateEl.text(clickCounter.getCounter())
    },

    increaseAndUpdateView() {
      clickCounter.increase()
      this.updateView()
    },
  }
}

ClickCountView.messages = {
  noClickCounter: 'clickCount를 주입해야 합니다'
}