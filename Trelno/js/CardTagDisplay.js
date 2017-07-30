var Trelno = Trelno || {};

Trelno.CardTagDisplay = _ => {
  return {
    element(tag) {
      if (!tag) {
        throw new Error(Trelno.CardTagDisplay.messages.errorNoTag)
      }

      let html = `<span class="label label-${tag}">&ensp;</span>`
      return $(html)
    }
  }
}

Trelno.CardTagDisplay.messages = {
  errorNoTag: 'tag 파라매터를 넘겨주세요'
}