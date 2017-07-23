describe('Trelno.SidebarDisplay', ()=> {
  let clickEl,
      sidebarEl,
      display;

  beforeEach(()=> {
    triggerEl = $('<a>show menu</a>');
    $('body').append(clickEl);

    sidebarEl = $('<div id="sidebar"><button class="close">x</button></div>');
    $('body').append(sidebarEl);

    const options = {triggerEl, sidebarEl};

    display = Trelno.SidebarDisplay(options);
  });

  afterEach(()=> {
    triggerEl.remove();
    sidebarEl.remove();
  })

  it('클릭 이벤트가 발생하면 사이드바를 보인다', () => {
    spyOn(display, 'show');
    triggerEl.trigger('click');
    expect(display.show).toHaveBeenCalled();
  })

  it('x 버튼을 클릭하면 사이드바를 숨긴다', ()=> {
    spyOn(display, 'hide');
    sidebarEl.find('.close').trigger('click');
    expect(display.hide).toHaveBeenCalled();
  })
})

// describe('Trelno.BackgroundColorManager', ()=> {
//   let colorEl;
//
//   beforeEach(()=> {
//     colorEl = $('l')
//     const options = {colorEl}
//     Trelno.BackgroundColorManager(options);
//   });
//
//   it('색상 요소를 클릭하면 body 배경색을 선택한 색으로 변경한다', ()=> {
//
//   })
// })
