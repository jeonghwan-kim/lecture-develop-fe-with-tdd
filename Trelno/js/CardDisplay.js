var Trelno = Trelno || {};

Trelno.CardDisplay = (card, cardTagDisplay) => {
  let display = {
    tagListElements(tagList = []) {
      return tagList.map(tag => {
        return cardTagDisplay.element(tag)
      })
    },

    element() {
      const template = `
        <div class="card" data-card-id="${card.id}">
          <div class="label-list">
          </div>
          <div class="card-title">${card.name}</div>
          <div class="comment">
            <span class="comment-count">1</span>
          </div>
        </div>`

      const $el = $(template);
      display.tagListElements(card.tags).forEach(tagEl => {
        $el.find('.label-list').append(tagEl)
      })

      return $el
    }
  };

  return display;
}
