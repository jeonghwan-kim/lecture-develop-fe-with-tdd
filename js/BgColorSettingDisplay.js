var Trelno = Trelno || {};

Trelno.BgColorSettingDisplay = (triggerEl, updateEl) => {
  var setting = {
    setBackgroundColor(rgb) {
      updateEl.css('background-color', rgb);
    }
  };

  triggerEl.on('click', e => {
    var bgColor = $(e.target).css('background-color')
    setting.setBackgroundColor(bgColor)
  });

  return setting;
};
