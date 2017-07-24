var Trelno = Trelno || {};

Trelno.CardDisplay = card => {
  let display = {
    tagsHtml(tags = []) {
      return tags.reduce((html, tag) => {
        html += `<span class="label label-${tag}">&ensp;</span>`;
        return html;
      }, '');
    },

    element() {
      const template = `
        <div class="card" data-card-id="${card.id}">
          <div class="label-list">
            ${display.tagsHtml(card.tags)}
          </div>
          <div class="card-title">${card.name}</div>
          <div class="comment">
            <span class="comment-count">1</span>
          </div>
        </div>`;

      return $(template);
    }
  };

  return display;
}
