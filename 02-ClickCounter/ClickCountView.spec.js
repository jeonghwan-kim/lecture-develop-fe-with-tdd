describe('ClickCountView 모듈', () => {
  let udpateEl, clickCounter, view

  it('ClickCounter를 주입하지 않으면 에러를 던진다', ()=> {
    const clickCounter = null
    const updateEl = $('<span></span>') 
    const actual = () => ClickCountView(clickCounter, updateEl)
    expect(actual).toThrowError(ClickCountView.messages.noClickCounter)
  })

  it('updateEl를 주입하지 않으면 에러를 던진다', ()=> {
    const clickCounter = ClickCounter()
    const updateEl = null 
    const actual = () => ClickCountView(clickCounter, updateEl)
    expect(actual).toThrowError(ClickCountView.messages.noUpdateEl)
  })

  beforeEach(()=> {
    updateEl = $('<span></span>');
    clickCounter = ClickCounter(); 
    view = ClickCountView(clickCounter, updateEl)
  })
  

  describe('updateView()', () => {
    it('ClickCounter의 getCounter() 실행결과를 출력한다', ()=> {
      const counterValue = clickCounter.getCounter()
      view.updateView()
      expect(updateEl.text()).toBe(counterValue.toString())
    })

    describe('increaseAndUpdateView()는', ()=> {
      it('ClickCounter의 increase 를 실행한다', ()=> {
      
      })
      
      it('updateView를 실행한다', ()=> {
      
      })
    })
  })
})