describe('ClickCountView 모듈', () => {
  it('ClickCounter를 주입하지 않으면 에러를 던진다', ()=> {
    const clickCounter = null
    const updateEl = $('<span></span>') 
    const actual = () => ClickCountView(clickCounter, updateEl)
    expect(actual).toThrowError(ClickCountView.messages.noClickCounter)
  })

  describe('updateView()', () => {
    it('ClickCounter의 getCounter() 실행결과를 출력한다', ()=> {
      // todo 
    })
  })
})