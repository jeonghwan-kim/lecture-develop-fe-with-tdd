var App = App || {}

App.ClickCounter = _data => {
  if (!_data) throw Error('_data')
  const data = _data
  data.value = data.value || 0

  return {
    getValue() {
      return data.value
    },

    count() {
      data.value++
    },

    setCountFn (fn) {
      this.count = () => (data.value = fn(data.value)) 
      return this
    }
  }
}