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
        boardName = 'board name';
    beforeEach(function() {
      board = new Board(1, boardName);
    });

    it('title 이 포함된 html 문자열을 반환한다', function() {
      expect(board.draw()).toMatch(boardName);
    })
  })
})