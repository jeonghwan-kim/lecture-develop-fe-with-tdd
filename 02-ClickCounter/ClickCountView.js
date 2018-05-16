const ClickCountView = function(clickCounter, updateEl) {
  if (!clickCounter) throw new Error(ClickCountView.messages.noClickCounter)
  if (!updateEl) throw new Error(ClickCountView.messages.noUpdateEl)
  
  return {
    updateView() {
      updateEl.innerHTML = clickCounter.getValue()
    },

    increaseAndUpdateView() {
      clickCounter.increase()
      this.updateView()
    }
  }
}

ClickCountView.messages = {
  noClickCounter: 'clickCount를 주입해야 합니다',
  noUpdateEl: 'updateEl를 주입해야 합니다'
}