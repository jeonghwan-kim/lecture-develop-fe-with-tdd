describe('ClickCountView 모듈', () => {
  var view, updateEl, triggerEl, clickCounter;

  beforeEach(() => {
    updateEl = $('<span></span>');
    triggerEl = $('<button></button>');
    clickCounter = ClickCounter();
    view  = ClickCountView(clickCounter, { updateEl, triggerEl })
  })

  it('클릭 이벤트가 발생하면 increseAndUpdateView를 실행한다', ()=> {
    spyOn(view, 'increseAndUpdateView')
    triggerEl.trigger('click')
    expect(view.increseAndUpdateView).toHaveBeenCalled()
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

    it('updateEl의 텍스트를 설정한다', () => {
      view.increseAndUpdateView()
      expect(updateEl.text()).toBe(view.getClickCount().toString())
    })
  })

  describe('updateView()', () => {
    it('클릭한적이 없으면 "0"을 출력한다', ()=> {
      view.updateView()
      expect(updateEl.text()).toBe('0')
    })
  })
})