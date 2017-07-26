describe('Trelno.CardTagDisplay', ()=> {
  var display, tag

  beforeEach(()=> {
    display = Trelno.CardTagDisplay()
    tag = 'green'
  })

  describe('element()', ()=> {
    it('tag 파라매터가 없으면 에러를 던진다', () => {
      expect(()=> display.element()).toThrowError(Trelno.CardTagDisplay.messages.errorNoTag)
    })

    it('jquery 인스턴스를 반환한다', ()=> {
      expect(display.element(tag) instanceof $).toBe(true)
    })

    it('카드 이름이 붙은 css 클래스명을 붙인다', ()=> {
      const actual = display.element(tag).attr('class')
      expect(actual).toMatch(`.label-${tag}`)
    })
  })
})