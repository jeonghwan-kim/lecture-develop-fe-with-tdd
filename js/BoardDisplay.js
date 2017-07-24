var Trelno = Trelno || {};

Trelno.BoardDisplay = (boardId, name, cardDisplayList = []) => {
  let display = {
    cardListElement() {
      return cardDisplayList.reduce((arr, cardDisplay)=> {
        if (typeof cardDisplay.element !== 'function') return arr;
        arr.push(cardDisplay.element());
        return arr;
      }, []);
    },

    templateElement() {
      const template = `
        <div class="board">
          <h2 class="title font-gray">${name}</h2>
          <ul class="card-list"></ul>
          <div class="add-card">
            <a href="#" class="add-card-link">Add a card...</a>
          </div>
        </div>`;

      return $(template);
    },

    bindDropEvent(el) {
      el.on('drop', e => {
        e.preventDefault();
        id = e.originalEvent.dataTransfer.getData('id');
        $(e.target).parents('.board').find('ul.card-list').append($(`#${id}`));

        const card = {
          id: id.replace('card-', ''),
          boardId: boardId
        }
        console.log('card', card)

        const service = Trelno.CardService()
        service.update(card)

        $('body').trigger('updateBoardDisplay')
      });

      el.on('dragover', e => {
        e.preventDefault();
      })
    },

    bindDragEvent(el) {
      el.on('dragstart', e => {
        e.originalEvent.dataTransfer.setData('id', e.target.id)
      })
    },

    element() {
      const $el = display.templateElement();

      display.bindDropEvent($el);

      display.cardListElement().forEach(cardEl => {
        const li = $(`<li id="card-${cardEl.data('card-id')}" draggable="true"></li>`);

        display.bindDragEvent(li)
        li.append(cardEl);
        $el.find('ul.card-list').append(li);
      });

      return $el;
    }
  }

  return display;
}
