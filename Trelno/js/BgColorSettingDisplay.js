var Trelno = Trelno || {};

Trelno.BgColorSettingDisplay = (triggerEl, updateEl) => {
  if (!triggerEl) {
    throw new Error(Trelno.messages.noTriggerElParam)
  }
  if (!(triggerEl instanceof $)) {
    throw new Error(Trelno.messages.triggerElParamNot$)
  }

  var display = {
    setBackgroundColor(rgb) {
      updateEl.css('background-color', rgb);
    }
  };

  triggerEl.on('click', e => {
    var bgColor = $(e.target).css('background-color')
    display.setBackgroundColor(bgColor)
  });

  return display;
};

Trelno.messages = {
  noTriggerElParam: 'triggerEl 파라매터가 없습니다',
  triggerElParamNot$: 'triggerEl 파라매터는 제이쿼리 객체여야 합니다'
}
