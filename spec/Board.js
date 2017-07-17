describe('Board', function() {
  describe('Board(id, name, cards)', function() {
    it('id가 없으면 예외를 던진다', function() {
      expect(function() {
        new Board();
      }).toThrowError(Board.ERROR_NO_ID);
    });

    it('name이 없으면 예외를 던진다', function() {
      expect(function() {
        new Board(1);
      }).toThrowError(Board.ERROR_NO_NAME);
    });
  });

  describe('draw()', function() {
    var board,
        boardName = 'board name',
        card;

    beforeEach(function() {
      card = new Card(1, '계획 세우기');
      board = new Board(1, boardName, [card]);
      spyOn(Card.prototype, 'draw')
    });

    it('title 이 포함된 html 문자열을 반환한다', function() {
      expect(board.draw()).toMatch(boardName);
    })

    it('card의 draw 메소드를 호출한다', function() {
      board.draw();
      expect(card.draw).toHaveBeenCalled();
    })
  })
})
