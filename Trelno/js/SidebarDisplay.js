var Trelno = Trelno || {};

Trelno.SidebarDisplay = (triggerEl, sidebarEl) => {
  var sidebar = {
    show() {
      sidebarEl.removeClass('hide')
    },
    hide() {
      sidebarEl.addClass('hide')
    }
  }

  triggerEl.on('click', () => {
    sidebar.show()
  })

  sidebarEl.find('.close').on('click', () => {
    sidebar.hide()
  });

  return sidebar;
}