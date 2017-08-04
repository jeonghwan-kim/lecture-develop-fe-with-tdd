var ClickCountView = function(clickCounter, options) {

  if (!clickCounter) throw new Error(ClickCountView.messages.noClickCounter)
  if (!options.updateEl) throw new Error(ClickCountView.messages.noUpdateEl)
  if (!options.triggerEl) throw new Error(ClickCountView.messages.noTriggerEl)

  const view =  {
    updateView() {
      options.updateEl.text(clickCounter.getCounter())
    },

    increaseAndUpdateView() {
      clickCounter.increase()
      this.updateView()
    }
  }
  
  options.triggerEl.on('click', () => {
   view.increaseAndUpdateView()   
  })

  return view
}