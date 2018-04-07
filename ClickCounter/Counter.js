var App = App || {}

App.Counter = _data => {
  const data = _data

  const counter = {
    count () { data.value++ },
    getValue () { return data.value },
    setCountFn (fn) {
      this.count = () => (data.value = fn(data.value))
      return this
    }
  }

  return counter
}