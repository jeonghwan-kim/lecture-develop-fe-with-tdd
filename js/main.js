function updateBoardDisplay() {
  console.log('updateBoardDisplay')

  const cardList = Trelno.CardService().query()
  const board1CardList = cardList.filter(c => c.boardId === 1)
  const board2CardList = cardList.filter(c => c.boardId === 2)

  var board1 = Trelno.BoardDisplay(1, 'To Do', board1CardList.map(c => Trelno.CardDisplay(c)))
  var board2 = Trelno.BoardDisplay(2, 'Doing', board2CardList.map(c => Trelno.CardDisplay(c)))

  $('#board-list')
    .empty()
    .append(board1.element())
    .append(board2.element())
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

    updateBoardDisplay()

    $('body').on('updateBoardDisplay', updateBoardDisplay)

    // Trelno.CardService().create('card 1', 1)
    // Trelno.CardService().create('card 2', 1)
    // Trelno.CardService().create('card 3', 2)
  };

  document.addEventListener('DOMContentLoaded', onLoad);
})();