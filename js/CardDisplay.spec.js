describe('Trelno.CardDisplay', () => {
  let display,
      card

  beforeEach(() => {
    card = {
      name: 'card name'
    }
    display = Trelno.CardDisplay(card)
  })

  describe('tagsHtml', ()=> {
    let html,
        tags = ['green']

    beforeEach(()=> {
      html = display.tagsHtml(tags)
    })

    it('태그 이름으로 클래스 명을 붙인 html 문자열을 반환한다', () => {
      expect(html).toMatch(`label-${tags[0]}`)
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
      let mockResponseOfTagsHtml

      beforeEach(() => {
        mockResponseOfTagsHtml = '<span></span>'
        spyOn(display, 'tagsHtml').and.returnValue(mockResponseOfTagsHtml)
        card.tags = ['green']
        $el = display.element()
      })

      afterEach(() => {
        delete card.tags
      })

      it('tagsHtml을 호출한다', () => {
        expect(display.tagsHtml).toHaveBeenCalled()
      })

      it('tagsHtml이 반환한 문자열을 돔에 추가한다', ()=> {
        expect($el.html()).toMatch(mockResponseOfTagsHtml)
      })
   })
  })
})
