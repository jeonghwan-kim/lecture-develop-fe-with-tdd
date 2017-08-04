var SidebarView = (linkEl, sidebarEl) => {
  const view = {
    show() {
      sidebarEl.removeClass('hide')     
    },

    hide() {
      sidebarEl.addClass('hide')     
    }
  }

  linkEl.on('click', ()=> view.show())
  sidebarEl.on('click', ()=> view.hide())

  return view
}