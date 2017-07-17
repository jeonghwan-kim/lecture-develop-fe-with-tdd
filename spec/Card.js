describe('Card', function() {
  describe('Card(id, name, tag)', function() {
    it('id가 없으면 에러를 반환', function() {
      expect(function() {
        new Card()
      }).toThrowError()
    })
    it('name이 없으면 에러를 반환', function() {
      expect(function() {
        new Card(1)
      }).toThrowError()
    })
  })
  describe('draw()', function() {
    var card,
        cardName = '계획 세우기';

    beforeEach(function() {
      card = new Card(1, cardName);
    });

    it('name 이 포함된 html 문자열 반환', function() {
      expect(card.draw()).toMatch(cardName)
    })
  })
})
