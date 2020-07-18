describe('ClickCountView 모듈', () => {
  let updateEl, clickCounter, view
  
  beforeEach(()=> {
    updateEl = $('<span></span>');
    clickCounter = ClickCounter(); 
    view = ClickCountView(clickCounter, updateEl)
  })
  
  describe('네거티브 테스트', ()=> {
    it('ClickCounter를 주입하지 않으면 에러를 던진다', ()=> {
      const actual = () => ClickCountView(null, updateEl)
      expect(actual).toThrowError(ClickCountView.messages.noClickCounter)
    })

    it('updateEl를 주입하지 않으면 에러를 던진다', ()=> {
      const actual = () => ClickCountView(clickCounter, null)
      expect(actual).toThrowError(ClickCountView.messages.noUpdateEl)
    })
  })

  describe('updateView()', () => {
    it('ClickCounter의 getCounter() 실행결과를 출력한다', ()=> {
      const counterValue = clickCounter.getCounter()
      view.updateView()
      expect(updateEl.text()).toBe(counterValue.toString())
    })

    describe('increaseAndUpdateView()는', ()=> {
      it('ClickCounter의 increase 를 실행한다', ()=> {
        spyOn(clickCounter, 'increase')
        view.increaseAndUpdateView()
        expect(clickCounter.increase).toHaveBeenCalled()
      })
      
      it('updateView를 실행한다', ()=> {
        spyOn(view, 'updateView')
        view.increaseAndUpdateView()
        expect(view.updateView).toHaveBeenCalled()
      })
    })
  })

  it('클릭 이벤트가 발생하면 increseAndUpdateView를 실행한다', ()=> {
    // todo 
  })
})
