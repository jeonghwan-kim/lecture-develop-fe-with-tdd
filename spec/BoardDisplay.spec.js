describe('Trlno.BoardDisplay', ()=>{
  let display,
    name,
    cardDisplayList,
    elementSpy,
    spy;

  beforeEach(()=>{
    name = 'board name';
    cardHtml = 'card html';
    spy = jasmine.createSpy('html').and.returnValue(cardHtml);
    elementSpy = jasmine.createSpy('element');
    cardDisplayList = [{
      element: elementSpy
    }]
    display = Trelno.BoardDisplay(1, name, cardDisplayList);
  });

  describe('cardList', ()=> {
    it('CardDisplay.element 메소드를 실행한다', () => {
      display.cardList();
      expect(elementSpy).toHaveBeenCalled();
    })
    it('그 결과를 배열로 반환한다', ()=> {
      expect(display.cardList() instanceof Array).toBe(true);
    })
  })

})
