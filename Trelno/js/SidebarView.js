export const SidebarView = options => {
  const el = document.querySelector(options.el);
  const triggerEl = document.querySelector(options.triggerEl);

  if (!el) throw Error(messages.noEl);
  if (!triggerEl) throw Error(messages.noTriggerEl);

  const {data} = options;
  const closeEl = document.querySelector(`.sidebar .close`)

  if (!closeEl) throw Error(Trellno.SidebarView.messages.noCloseEl);
  closeEl.addEventListener('click', () => api.hide());
  triggerEl.addEventListener('click', () => api.show());

  const api  = {
    show() { el.style.display = 'block'; },
    hide() { el.style.display = 'none'; }
  };

  return api;
}

const messages = {
  noEl: 'el is required',
  noTriggerEl: 'triggerEl is required', 
  noCloseEl: '.close 클래스를 포함한 엘레먼트는 필수'
}