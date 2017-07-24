describe('Trelno.CardDisplay', ()=> {
  let display,
    card;

  beforeEach(()=> {
    card = {
      name: 'card name'
    }
    display = Trelno.CardDisplay(card);
  });

  describe('html', () => {
    let html;

    beforeEach(()=> {
      html = display.html();
    });

    it('카드 이름을 출력한다', ()=> {
      expect(html).toMatch(card.name)
    })

    describe('카드에 태그가 있으면', ()=> {
      beforeEach(()=> {
        card.tags = ['green']
        html = display.html();
      })

      afterEach(()=> {
        delete card.tags;
      })

      it('태그 이름으로 클래스 명을 붙인다', ()=> {
        const tags = $(html).find('.label')
        expect(tags.attr('class')).toMatch(`label-${card.tags[0]}`);
      });
    })
  })

  describe('element', () => {
    let el;

    beforeEach(()=> {
      el = display.element();
    });

    it('카드 이름을 출력한다', ()=> {
      expect(el.find('.card-title').text()).toMatch(card.name)
    })

    describe('카드에 태그가 있으면', ()=> {
      beforeEach(()=> {
        card.tags = ['green']
        el = display.element();
      })

      afterEach(()=> {
        delete card.tags;
      })

      it('태그 이름으로 클래스 명을 붙인다', ()=> {
        const tags = el.find('.label')
        expect(tags.attr('class')).toMatch(`label-${card.tags[0]}`);
      });
    })
  })
})
