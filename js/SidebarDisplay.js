var Trelno = Trelno || {};

Trelno.SidebarDisplay = options => {
  var sidebar = {
    show() {
      options.sidebarEl.removeClass('hide')
    },
    hide() {
      options.sidebarEl.addClass('hide')
    }
  }

  options.triggerEl.on('click', e => {
    sidebar.show()
  })

  options.sidebarEl.find('.close').on('click', e => {
    sidebar.hide()
  });

  return sidebar;
}