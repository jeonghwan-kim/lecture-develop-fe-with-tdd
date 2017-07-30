describe('ClickCountDisplay', () => {
  var display

  beforeEach(() => {
    display = ClickCountDisplay()
  })

  it('클릭 횟수를 0으로 초기화 한다', ()=> {
    expect(display.getClickCount()).toBe(0)
  })

  describe('increseCountAndUpdateDisplay', ()=> {
    it('클릭 횟수를 증가한다', ()=> {
      var initalCount = display.getClickCount()
      display.increseCountAndUpdateDisplay()
      expect(display.getClickCount()).toBe(initalCount + 1)
    })

    it('updateDisplay 함수를 실행한다', ()=> {
      spyOn(display, 'updateDisplay')
      display.increseCountAndUpdateDisplay();
      expect(display.updateDisplay).toHaveBeenCalled()
    })
  })
})