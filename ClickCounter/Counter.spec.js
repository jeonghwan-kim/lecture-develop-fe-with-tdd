describe('App.Counter', ()=> {
  describe('초기값을 주입하지 않으면', () => {
    it('에러를 던진다', () => {
      // todo 
    })
  })

  describe('초기값을 주입하면', () => {
    let counter

    beforeEach(()=> {
      counter = App.Counter();
    })
  
    describe('getValue()', ()=> {
      it('초기값이 0인 값을 반환한다', ()=> {
        expect(counter.getValue()).toBe(0)
      })
    })
  
    describe('count()', ()=> {
      it('값을 1 증가한다', ()=> {
        counter.count();
        expect(counter.getValue()).toBe(1)
      })
    })
  })
})