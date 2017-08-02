describe('ClickCountView 모듈', () => {
  var view, updateEl, triggerEl, clickCounter;

  beforeEach(() => {
    updateEl = $('<span></span>');
    triggerEl = $('<button></button>');
    clickCounter = ClickCounter(); // todo: spy로 하자 
    view  = ClickCountView(clickCounter, { updateEl, triggerEl })
  })

  describe('updateView()', () => {
    it('ClickCounter의 getCounter() 실행결과를 출력한다', ()=> {
      const counterValue = clickCounter.getCounter().toString() 
      view.updateView() 
      expect(updateEl.text()).toBe(counterValue)
    })
  })

  describe('increseAndUpdateView()', () => {
    it('ClickCounter의 increase 함수를 실행한다', () => {
      spyOn(clickCounter, 'increase')
      view.increseAndUpdateView()
      expect(clickCounter.increase).toHaveBeenCalled()
    })

    it('updateView 함수를 실행한다', () => {
      spyOn(view, 'updateView')
      view.increseAndUpdateView()
      expect(view.updateView).toHaveBeenCalled()
    })
  })

  it('클릭 이벤트가 발생하면 increseAndUpdateView를 실행한다', ()=> {
    spyOn(view, 'increseAndUpdateView')
    triggerEl.trigger('click')
    expect(view.increseAndUpdateView).toHaveBeenCalled()
  })
})