describe('App.ClickCounter', ()=> {
  let counter

  beforeEach(()=> {
    counter = App.ClickCounter()
  })

  describe('getValue()', ()=> {
    it('초기값이 0인 카운터 값을 반환한다', ()=> {
      expect(counter.getValue()).toBe(0)
    })
  })

  describe('increase()', ()=> {
    it('카운터를 1 올린다', ()=> {
      const initialValue = counter.getValue()
      counter.increase()
      expect(counter.getValue()).toBe(initialValue + 1)
    })
  })
})