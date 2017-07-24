var Trelno = Trelno || {};

Trelno.CardService = _ => {
  const LSKey = 'trelnoStorage'
  const loadFromLS = _=> JSON.parse(localStorage.getItem(LSKey))
  const saveToLS = data => localStorage.setItem(LSKey, JSON.stringify(data))
  const genId = () => {
    if (!storage.length) return 1
    else return storage.reduce((max, t) => t.id > max ? t.id : max, 0) + 1
  }

  let storage = loadFromLS() || [];

  return {
    query() {
      storage = loadFromLS() || []

      return storage;
    },

    create(name, boardId) {
      var card = {
        id: genId(),
        name,
        boardId
      };

      storage.push(card);

      saveToLS(storage)

      return card;
    },

    update(card) {
      const c = storage.filter(c => c.id == card.id)[0]
      if (!c) return
      Object.assign(c, card);

      saveToLS(storage)
    }
  }
}
