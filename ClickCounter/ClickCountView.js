
var App = App || {}

App.ClickCountView = (clickCounter, options) => {
  if (!clickCounter) throw new Error(App.ClickCountView.messages.noClickCounter)
  if (!options.updateEl) throw new Error(App.ClickCountView.messages.noUpdateEl)
  if (!options.triggerEl) throw new Error(App.ClickCountView.messages.noTriggerEl)
  
  const view = {
    updateView() {
      options.updateEl.innerHTML = clickCounter.getValue()
    },

    countAndUpdateView() {
      clickCounter.count()
      this.updateView()
    }
  }
  
  options.triggerEl.addEventListener('click', () => {
   view.countAndUpdateView()   
  })

  return view
}

App.ClickCountView.messages = {
  noClickCounter: 'clickCount를 주입해야 합니다',
  noUpdateEl: 'updateEl를 주입해야 합니다',
  noTriggerEl: 'triggerEl를 주입해야 합니다'
}