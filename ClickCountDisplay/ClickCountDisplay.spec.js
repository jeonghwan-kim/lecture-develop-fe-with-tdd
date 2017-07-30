describe('ClickCountDisplay 모듈', () => {
  var display,
    displayEl

  beforeEach(() => {
    displayEl = $('<span></span>')

    var options = {
      updateEl: displayEl
    }

    display = ClickCountDisplay(options)
  })

  it('클릭 횟수를 0으로 초기화 한다', () => {
    expect(display.getClickCount()).toBe(0)
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