describe('Trelno.CardDisplay', () => {
  let display,
      card

  beforeEach(() => {
    card = {
      name: 'card name'
    }
    display = Trelno.CardDisplay(card)
  })

  describe('tagListElements', ()=>{
    let spy

    beforeEach(() => {
      spy = jasmine.createSpy('CardTagDisplay.element')
      card.tags = ['green']
      display = Trelno.CardDisplay(card, {element: spy})
      display.element()
    })

    afterEach(()=> {
      delete card.tags
    })

    it('cardTagDisplay.element()를 호출한다', () => {
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('element', () => {
    let $el

    beforeEach(() => {
      $el = display.element()
    })

    it('jquery 인스턴스를 반환한다', ()=> {
      expect($el instanceof $).toBe(true)
    })

    it('card-title 클래스에 카드 이름을 출력한다', () => {
      expect($el.find('.card-title').text()).toMatch(card.name)
    })

    describe('카드에 태그가 있으면', () => {
      beforeEach(()=> {
        card.tags = ['green']
        spyOn(display, 'tagListElements').and.returnValue([])
      })

      afterEach(()=> {
        delete card.tags
      })

      it('tagListElements를 호출한다', () => {
        display.element()
        expect(display.tagListElements).toHaveBeenCalled()
      })
   })
  })
})
