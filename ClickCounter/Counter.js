var Counter = function(_data) {
  let data = _data

  var counter = {
    count() {
      data.value++;
    },

    getValue() {
      return data.value;
    },

    setCountFn(method) {
      this.count = () => {
        data.value = method(data.value)
      }
      return this
    }
  }

  return counter
}