function Card() {

}
Card.prototype.draw = function() {

}

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

Board.prototype.draw = function() {
  var boardEl = 
      '<div class="board">' + 
        '<h2 class="title">' + this.name + '</h2>' +
        '<ul class="card-list">' +
          '<li class="card">' +
            '<div class="label-list">' +
              '<span class="label label-green">&nbsp;</span>' +
            '</div>' +
            '<div class="card-title">계획 세우기</div>' +
            '<div class="comment">' +
              '<span class="comment-count">1</span>' +
            '</div>' +
          '</li>' +
        '</ul>' +
        '<div class="add-card">' +
          '<a href="#" class="add-card-link">Add a card...</a>' +
        '</div>' +
      '</div>';
  return boardEl;
}