function Card(id, name, tag) {
  if (!id) throw new Error();
  if (!name) throw new Error();

  this.id = id;
  this.name = name;
  this.tag = tag || [];
}
Card.prototype.draw = function() {
  var cardEl = 
    '<div class="label-list">' +
      '<span class="label label-green">&nbsp;</span>' +
    '</div>' +
    '<div class="card-title">' + this.name + '</div>' +
    '<div class="comment">' +
      '<span class="comment-count">1</span>' +
    '</div>';
  return cardEl;
}