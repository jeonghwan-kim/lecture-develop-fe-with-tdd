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

Trelno.CardService = _ => {
  var storage = [];

  var service = {
    query() {
      return storage;
    },
    create(name) {
      var card = {
        id: Date.now().toString(),
        name: name
      };
      storage.push(card);
      return card;
    }
  };

  return service;
}

(function() {
  var onLoad = function () {
    // var board1 = new Board(1, 'To Do', [new Card(1, '계획 세우기')]);
    // var board2 = new Board(2, 'Doing', [new Card(2, '요가하기'), new Card(3, '장보기')]);
    // var board3 = new Board(3, 'Done', []);
    // document.getElementById('board-list').innerHTML = board1.draw() + board2.draw() + board3.draw();

    Trelno.SidebarDisplay({
      triggerEl: $('#show-menu-link'),
      sidebarEl: $('#sidebar')
    });

    Trelno.BgColorSettingDisplay({
      triggerEl: $('.palette'),
      updateEl: $('body')
    })
  }

  document.addEventListener('DOMContentLoaded', onLoad);
})();
