(function() {
  var boardsData = [{
    id: 1,
    name: 'To Do',
  }, {
    id: 2,
    name: 'Doing'
  }, {
    id: 3,
    name: 'Done'
  }];

  var cardsData = [{
    id: 1,
    boardId: 1,
    title: '계획 세우기'
  }, {
    id: 2,
    boardId: 2,
    title: '예제 만들기'
  }];

  var onLoad = function () {
    var boards,
        cards,
        i,

    for (i = 0; i < boardsData.length; i++) {
      boards.push(new Board(boardsData[i]))
    }

    for (i = 0; i < cardsData.length; i++) {
      cards.push(new Card(cardsData[i]))
    }

    board.draw();
  }

  document.addEventListener('DOMContentLoaded', onLoad);
})();