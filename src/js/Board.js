function Board(id, name, cards) {
  if (!id) throw new Error('id가 없습니다');
  if (!name) throw new Error(Board.ERROR_NO_NAME);

  this.id = id;
  this.name = name;
  this.cards = cards || [];
}

Board.ERROR_NO_ID = 'id가 없습니다';
Board.ERROR_NO_NAME = 'name이 없습니다';
Board.ERROR_NO_SELECTOR = '보드를 그릴 셀렉터가 없습니다';
Board.ERROR_NOT_FOUND_BY_SELECTOR = '셀렉터로 돔 요소를 찾을 수 없습니다';

Board.prototype.addCard = function(card) {
  this.cards.push(cards);
}

Board.prototype.drawCards = function(){
  var text = '';

  if (!this.cards.length) return text;

  text = '<ul class="card-list">';
  text = this.cards.reduce((text, card) => {
    text += '<li class="card">' + card.draw() + '</li>';
    return text;
  }, text)
  text += '</ul>';

  return text;
};

Board.prototype.draw = function() {
  var boardEl =
      '<div class="board">' +
        '<h2 class="title font-gray">' + this.name + '</h2>' +
          this.drawCards() +
        '<div class="add-card">' +
          '<a href="#" class="add-card-link">Add a card...</a>' +
        '</div>' +
      '</div>';
  return boardEl;
}
