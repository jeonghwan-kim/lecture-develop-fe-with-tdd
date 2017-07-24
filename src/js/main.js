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

    var board1 = Trelno.BoardDisplay(1, 'To Do',
      [
        Trelno.CardDisplay({
          id: '001',
          name: '계획 세우기',
          tags: ['green', 'red', 'blue']
        })
      ]
    );

    var board2 = Trelno.BoardDisplay(2, 'Doing',
      [
        Trelno.CardDisplay({
          id: '002',
          name: '카드2',
          tags: []
        })
      ]
    );

    $('#board-list')
      .append(board1.element())
      .append(board2.element())

    console.log(1)
  };

  document.addEventListener('DOMContentLoaded', onLoad);
})();