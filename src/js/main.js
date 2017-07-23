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

Trelno.CardDisplay = card => {
  let display = {
    tagsHtml(tags = []) {
      return tags.reduce((html, tag) => {
        html += `<span class="label label-${tag}">&ensp;</span>`;
        return html;
      }, '');
    },
    html() {
      return `
        <div class="label-list">
          ${display.tagsHtml(card.tags)}
        </div>
        <div class="card-title">${card.name}</div>
        <div class="comment">
          <span class="comment-count">1</span>
        </div>`;
    }
  };

  return display;
}

Trelno.BoardDisplay = (id, name, cardDisplayList = []) => {
  let display = {
    html() {
      return cardDisplayList.reduce((html, cardDisplay)=> {
        if (typeof cardDisplay.html !== 'function') return html;
        html += cardDisplay.html();
        return html;
      }, '');
    }
  }

  return display;
}

(function() {
  var onLoad = function () {
    Trelno.SidebarDisplay({
      triggerEl: $('#show-menu-link'),
      sidebarEl: $('#sidebar')
    });

    Trelno.BgColorSettingDisplay({
      triggerEl: $('.palette'),
      updateEl: $('body')
    })
  }

  var board1 = new Board(1, 'To Do',
    [
      Trelno.CardDisplay({
        name: '계획 세우기',
        tags: ['green', 'red', 'blue']
      })
    ]
  );
  // var board2 = new Board(2, 'Doing', [new Card(2, '요가하기'), new Card(3, '장보기')]);
  // var board3 = new Board(3, 'Done', []);
  //
  document.getElementById('board-list').innerHTML = board1.html();
  document.addEventListener('DOMContentLoaded', onLoad);
})();



function drag(e) {
  e.dataTransfer.setData('id', e.target.id)
}
function drop(e) {
  e.preventDefault();
  id = e.dataTransfer.getData('id');
  console.log('drop', id, $(e.target))
  $(e.target).parents('.board').find('ul.card-list').append(document.getElementById(id))
}
function allowDrop(e) {
  e.preventDefault();
}
