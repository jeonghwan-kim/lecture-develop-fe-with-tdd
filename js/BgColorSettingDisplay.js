var Trelno = Trelno || {};

Trelno.BgColorSettingDisplay = options => {
  var setting = {
    setBackgroundColor(rgb) {
      options.updateEl.css('background-color', rgb);
    }
  };

  options.triggerEl.on('click', e => {
    var bgColor = $(e.currentTarget).css('background-color')
    setting.setBackgroundColor(bgColor)
  });

  return setting;
};
