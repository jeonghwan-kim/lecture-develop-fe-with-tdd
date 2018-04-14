var App = App || {}

App.Counter = () => {
  let value = 0

  const counter = {
    count () { value++ },
    getValue () { return value },
  }

  return counter
}