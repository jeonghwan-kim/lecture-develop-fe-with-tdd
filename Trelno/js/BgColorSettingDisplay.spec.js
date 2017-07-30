describe('Trelno.BgColorSettingDisplay', ()=> {
  let paletteEl,
    updateEl,
    display;

  beforeEach(()=> {
    triggerEl = $('<div style="background-color: #f00;"></div>');
    updateEl = $('<div></div>');

    display = Trelno.BgColorSettingDisplay(triggerEl, updateEl);
  });

  afterEach(()=> {
    triggerEl.remove();
    updateEl.remove();
  })

  it('triggerEl이 없으면 에러를 던진다', ()=> {
    let actual = () => {
      Trelno.BgColorSettingDisplay(null, triggerEl)
    }

    expect(actual).toThrowError(Trelno.messages.noTriggerElParam)
  })

  it('triggerEl이 제이쿼리 객체가 아니면 에러를 던지다', ()=> {
    let actual = () => {
      Trelno.BgColorSettingDisplay({}, triggerEl)
    }

    expect(actual).toThrowError(Trelno.messages.triggerElParamNot$)
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