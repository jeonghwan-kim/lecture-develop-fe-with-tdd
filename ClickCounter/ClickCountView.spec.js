describe('App.ClickCountView 모듈', () => {
  let udpateEl, clickCounter, view

  it('ClickCounter를 주입하지 않으면 에러를 던진다', ()=> {
    const clickCounter = null
    const updateEl = document.createElement('span') 
    const actual = () => App.ClickCountView(clickCounter, updateEl)
    expect(actual).toThrowError(App.ClickCountView.messages.noClickCounter)
  })

  it('updateEl를 주입하지 않으면 에러를 던진다', ()=> {
    const clickCounter = App.ClickCounter()
    const updateEl = null 
    const actual = () => App.ClickCountView(clickCounter, updateEl)
    expect(actual).toThrowError(App.ClickCountView.messages.noUpdateEl)
  })

  beforeEach(()=> {
    updateEl = document.createElement('span')
    clickCounter = App.ClickCounter(); 
    view = App.ClickCountView(clickCounter, updateEl)
  })
  
  describe('네거티브 테스트', ()=> {
    it('ClickCounter를 주입하지 않으면 에러를 던진다', ()=> {
      const actual = () => App.ClickCountView(null, updateEl)
      expect(actual).toThrowError(App.ClickCountView.messages.noClickCounter)
    })

    it('updateEl를 주입하지 않으면 에러를 던진다', ()=> {
      const actual = () => App.ClickCountView(clickCounter, null)
      expect(actual).toThrowError(App.ClickCountView.messages.noUpdateEl)
    })
  })

  describe('updateView()', () => {
    it('ClickCounter의 getValue() 실행결과를 출력한다', ()=> {
      const counterValue = clickCounter.getValue()
      view.updateView()
      expect(updateEl.innerHTML).toBe(counterValue.toString())
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