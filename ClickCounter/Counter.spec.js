describe('App.Counter', ()=> {
  describe('초기값을 주입하지 않으면', () => {
    it('에러를 던진다', () => {
      const actual = () => (counter = App.Counter())
      expect(actual).toThrowError()
    })
  })

  describe('초기값을 주입', () => {
    let counter
    let data

    beforeEach(()=> {
      data = {value: 0}
      counter = App.Counter(data);
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
    });
  
    describe('setCountFn()', ()=> {
      it('인자로 함수를 넘기면 count() 함수로 동작한다', ()=> {
        const add2 = value => value + 2
        const expected = add2(data.value)

        counter.setCountFn(add2)
        counter.count()
        const actual = counter.getValue()

        expect(actual).toBe(expected)
      })
    })
  })
})