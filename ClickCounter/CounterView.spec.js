describe('ClickCountView 모듈', () => {
  let view
  let updateEl
  let triggerEl
  let data
  let clickCounter

  beforeEach(() => {
    updateEl = document.createElement('span')
    triggerEl = document.createElement('button')
    data = { value: 0 }
    clickCounter = App.Counter(data)
    view  = App.CounterView(clickCounter, { updateEl, triggerEl })
  })

  describe('updateView()', () => {
    it('Counter의 getValue() 실행결과를 출력한다', ()=> {
      const expected = clickCounter.getValue().toString() 
      
      view.updateView() 
      const actual = updateEl.innerHTML

      expect(actual).toBe(expected)
    })
  })

  describe('countAndUpdateView()', () => {
    it('Counter의 count() 함수를 실행한다', () => {
      spyOn(clickCounter, 'count')
      view.countAndUpdateView()
      expect(clickCounter.count).toHaveBeenCalled()
    })

    it('updateView 함수를 실행한다', () => {
      spyOn(view, 'updateView')
      view.countAndUpdateView()
      expect(view.updateView).toHaveBeenCalled()
    })
  })

  it('클릭 이벤트가 발생하면 countAndUpdateView()를 실행한다', ()=> {
    spyOn(view, 'countAndUpdateView')
    triggerEl.click()
    expect(view.countAndUpdateView).toHaveBeenCalled()
  })
})