describe('ClickCountDisplay 모듈', () => {
  var display,
    displayEl,
    clickEl

  beforeEach(() => {
    displayEl = $('<span></span>')
    clickEl = $('<button></button>')

    var options = {
      updateEl: displayEl,
      triggerEl: clickEl
    }

    display = ClickCountDisplay(options)
  })

  it('클릭 횟수를 0으로 초기화 한다', () => {
    expect(display.getClickCount()).toBe(0)
  })

  it('클릭 이벤트가 발생하면 increseCountAndUpdateDisplay를 실행한다', ()=> {
    spyOn(display, 'increseCountAndUpdateDisplay')
    clickEl.trigger('click')
    expect(display.increseCountAndUpdateDisplay).toHaveBeenCalled()
  })

  describe('increseCountAndUpdateDisplay()', () => {
    it('클릭 횟수를 증가한다', () => {
      var initalCount = display.getClickCount()
      display.increseCountAndUpdateDisplay()
      expect(display.getClickCount()).toBe(initalCount + 1)
    })

    it('updateDisplay 함수를 실행한다', () => {
      spyOn(display, 'updateDisplay')
      display.increseCountAndUpdateDisplay()
      expect(display.updateDisplay).toHaveBeenCalled()
    })

    it('updateEl의 텍스트를 설정한다', () => {
      display.increseCountAndUpdateDisplay()
      expect(displayEl.text()).toBe(display.getClickCount().toString())
    })
  })

  describe('updateCountDisplay()', () => {
    it('클릭한적이 없으면 "0"을 출력한다', ()=> {
      display.updateDisplay()
      expect(displayEl.text()).toBe('0')
    })
  })
})