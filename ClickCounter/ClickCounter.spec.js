describe('ClickCounter', ()=> {
  var counter;

  beforeEach(()=> {
    counter = ClickCounter();
  })

  describe('getCounter()', ()=> {
    it('초기값이 0인 카운터 값을 반환한다', ()=> {
      expect(counter.getCounter()).toBe(0)
    })
  })

  describe('increase()', ()=> {
    it('카운터를 1 올린다', ()=> {
      counter.increase();
      expect(counter.getCounter()).toBe(1)
    })
  });

  describe('decrease()', ()=> {
    it('카운터를 1 내린다', ()=> {
      counter.decrease();
      expect(counter.getCounter()).toBe(-1)
    })
  })
})