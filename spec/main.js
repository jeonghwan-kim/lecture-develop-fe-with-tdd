describe('Trelno.SidebarDisplay', ()=> {
  let clickEl,
      sidebarEl,
      display;

  beforeEach(()=> {
    triggerEl = $('<a>show menu</a>');
    $('body').append(clickEl);

    sidebarEl = $('<div id="sidebar"><button class="close">x</button></div>');
    $('body').append(sidebarEl);

    const options = {triggerEl, sidebarEl};
    display = Trelno.SidebarDisplay(options);
  });

  afterEach(()=> {
    triggerEl.remove();
    sidebarEl.remove();
  })

  it('클릭 이벤트가 발생하면 사이드바를 보인다', () => {
    spyOn(display, 'show');
    triggerEl.trigger('click');
    expect(display.show).toHaveBeenCalled();
  })

  it('x 버튼을 클릭하면 사이드바를 숨긴다', ()=> {
    spyOn(display, 'hide');
    sidebarEl.find('.close').trigger('click');
    expect(display.hide).toHaveBeenCalled();
  })
})

describe('Trelno.BgColorSettingDisplay', ()=> {
  let paletteEl,
      updateEl,
      display;

  beforeEach(()=> {
    triggerEl = $('<div style="background-color: #f00;"></div>');
    updateEl = $('<div></div>');

    display = Trelno.BgColorSettingDisplay({triggerEl, updateEl});
  });

  afterEach(()=> {
    triggerEl.remove();
    updateEl.remove();
  })

  it('색상 요소를 클릭하면 setBackgroundColor()를 호출한다', ()=> {
    spyOn(display, 'setBackgroundColor');
    triggerEl.trigger('click');
    expect(display.setBackgroundColor).toHaveBeenCalledWith('rgb(255, 0, 0)')
  })

  it('색상 요소를 클릭하면 배경색을 선택한 색으로 변경한다', ()=> {
    triggerEl.trigger('click');
    expect(updateEl.css('background-color')).toBe('rgb(255, 0, 0)')
  })
});

describe('Trelno.CardService', ()=> {
  let service,
      storage,
      response;

  beforeEach(()=> {
    service = Trelno.CardService()
  })

  describe('query', ()=> {
    beforeEach(()=> {
      response = service.query();
    })

    describe('성공시', () => {
      it('카드 배열을 반환한다', ()=> {
        expect(response instanceof Array).toBe(true);
      })
    })

    describe('실패시', ()=> {
      it('빈 배열을 반환한다', ()=> {

      })
    })
  })

  describe('create', ()=> {
    const name = 'card name';

    beforeEach(()=> {
      response = service.create(name);
    });

    describe('성공시', ()=> {
      it('생성된 카드 객체를 반환한다', ()=> {
        expect(typeof response).toBe('object');
      });
      it('생성된 카드 객체 name이 같다', ()=> {
        expect(response.name).toBe(name);
      });
      it('생성된 카드 객체에 id 값이 있다', ()=> {
        expect(response.hasOwnProperty('id')).toBe(true);
      })

      describe('query()를 호출하면', ()=> {
        it('응답 배열에 생성한 카드 객체가 있다', () => {
          const cards = service.query();
          expect(cards.some(card => card.name === name)).toBe(true);
        });
      });
    });

    describe('실패시', ()=>{
      it('빈 객체를 반환한다', ()=>{

      })
    })
  })

  describe('destroy', ()=> {
    describe('성공시', ()=>{
      it('true를 반환한다', ()=> {

      })
    })

    describe('실패시', ()=> {
      it('false를 반환한다', ()=> {

      })
    })
  })
})

describe('Trlno.BoardDisplay', ()=>{
  let display,
      name,
      cardDisplayList,
      cardHtml,
      spy;

  beforeEach(()=>{
    name = 'board name';
    cardHtml = 'card html';
    spy = jasmine.createSpy('html').and.returnValue(cardHtml);
    cardDisplayList = [{
      html: spy
    }]
    display = Trelno.BoardDisplay(1, name, cardDisplayList);
  });

  describe('html', ()=> {
    it('CardDisplay.html() 을 호출 결과를 포함한다', ()=> {
      const html = display.html();
      expect(spy).toHaveBeenCalled();
      expect(html).toMatch(cardHtml);
    })
  })
})

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
})
