var Trelno = Trelno || {};

Trelno.CardService = _ => {
  var storage = [];

  var service = {
    query() {
      return storage;
    },
    create(name) {
      var card = {
        id: Date.now().toString(),
        name: name
      };
      storage.push(card);
      return card;
    }
  };

  return service;
}
