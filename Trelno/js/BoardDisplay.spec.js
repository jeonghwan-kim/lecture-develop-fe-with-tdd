describe('Trlno.BoardDisplay', () => {
  let display,
    name,
    cardDisplayList

  beforeEach(() => {
    name = 'board name'
    cardDisplayList = []

    display = Trelno.BoardDisplay(1, name, cardDisplayList)
  })

  describe('cardListElement', () => {
    let $elList,
      spy

    beforeEach(() => {
      spy = jasmine.createSpy('CardDisplay.element')
      cardDisplayList.push({
        element: spy
      })
      $elList = display.cardListElement()
    })

    afterEach(() => {
      cardDisplayList.pop()
    })

    it('CardDisplay.element()를 실행한다', () => {
      expect(spy).toHaveBeenCalled()
    })

    it('그 결과를 배열로 반환한다', () => {
      expect($elList instanceof Array).toBe(true)
    })
  })

  describe('templateElement', () => {
    let $el

    beforeEach(() => {
      $el = display.templateElement()
    })

    it('jquery 객체를 반환한다', () => {
      expect($el instanceof $).toBe(true)
    })

    it('.title 클래스가 요소에 name 문자열을 포함한다', () => {
      expect($el.find('.title').text()).toBe(name)
    })
  })

  describe('bindDropEvent', ()=> {
    // todo
  })

  describe('bindDragEvent', ()=> {
    // todo
  })

  describe('element', () => {
    let $el

    beforeEach(() => {
      spyOn(display, 'templateElement')
      spyOn(display, 'bindDropEvent')
      spyOn(display, 'cardListElement').and.returnValue([])

      $el = display.element()
    })

    it('templateElement를 호출한다', () => {
      expect(display.templateElement).toHaveBeenCalled()
    })

    it('bindDragEvent를 호출한다', () => {
      expect(display.bindDropEvent).toHaveBeenCalled()
    })

    it('cardListElement를 호출한다', () => {
      expect(display.cardListElement).toHaveBeenCalled()
    })
  })
})
