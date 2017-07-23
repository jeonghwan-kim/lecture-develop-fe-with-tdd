var Trelno = Trelno || {}

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

(function() {
  var onLoad = function () {
    var board1 = new Board(1, 'To Do', [new Card(1, '계획 세우기')]);
    var board2 = new Board(2, 'Doing', [new Card(2, '요가하기'), new Card(3, '장보기')]);
    var board3 = new Board(3, 'Done', []);
    document.getElementById('board-list').innerHTML = board1.draw() + board2.draw() + board3.draw();

    const sidebarDisplay = Trelno.SidebarDisplay({
      triggerEl: $('#show-menu-link'),
      sidebarEl: $('#sidebar')
    });

    $('.palette').on('click', e => {
      var bgColor = $(e.currentTarget).css('background-color')
      $('body').css('background-color', bgColor)
    })
  }

  document.addEventListener('DOMContentLoaded', onLoad);
})();
