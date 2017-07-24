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