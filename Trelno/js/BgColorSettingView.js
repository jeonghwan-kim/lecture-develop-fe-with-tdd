export const BgColorSettingView = (options) => {
  const el  = document.querySelector(options.el)
  const triggerEls = document.querySelectorAll(options.triggerEls)

  if (!el) throw Error(messages.noEl)
  if (!triggerEls || !triggerEls.length) throw Error(messages.noTriggerEls)

  triggerEls.forEach(el => {
    el.addEventListener('click', e => {
      // https://stackoverflow.com/questions/26074476/document-body-style-backgroundcolor-doesnt-work-with-external-css-style-sheet
      const bgColor = window.getComputedStyle(e.currentTarget).backgroundColor
      api.setBgColor(bgColor)
    });
  });
  
  const api = {
    setBgColor(rgb) {
      el.style.backgroundColor = rgb;
    }
  };

  return api;
};

const messages = {
  noEl: 'el is requried',
  noTriggerEls: 'triggerEls is required',
};
