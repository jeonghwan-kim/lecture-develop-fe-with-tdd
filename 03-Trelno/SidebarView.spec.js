describe('SidebarView', ()=> {
 
  it('sidebar 링크를 클릭하면 show 함수를 실행한다 =', () => {
    const linkEl = $('<a href="#"></a>')
    const sidebarEl = $('<nav></nav>')
    const sidebarView = SidebarView(linkEl, sidebarEl)
    spyOn(sidebarView, 'show')
    
    linkEl.trigger('click')
    
    expect(sidebarView.show).toHaveBeenCalled()
  })

  it('사이드바의 x 버튼을 클릭하면 hide 함수를 실행한다', ()=> {
    const linkEl = $('<a href="#"></a>')
    const sidebarEl = $('<nav><button class="close"></button></nav>')
    const sidebarView = SidebarView(linkEl, sidebarEl)
    spyOn(sidebarView, 'hide')
    
    sidebarEl.find('.close').trigger('click')
    
    expect(sidebarView.hide).toHaveBeenCalled()
  })

  describe('show()', ()=> {
    it('사이드바 엘레맨트의 hide 클래스를 제거한다', ()=> {
      const linkEl = $('<a href="#"></a>')
      const sidebarEl = $('<nav class="hide"></nav>')
      const sidebarView = SidebarView(linkEl, sidebarEl)
      sidebarView.show()
      expect(sidebarEl.attr('class')).not.toContain('hide')
    })
  })

  describe('hide()', ()=> {
    it('사이드바 엘레맨트의 hide 클래스를 추가한다', ()=> {
      const linkEl = $('<a href="#"></a>')
      const sidebarEl = $('<nav class=""></nav>')
      const sidebarView = SidebarView(linkEl, sidebarEl)
      sidebarView.hide()
      expect(sidebarEl.attr('class')).toContain('hide')
    })
  })
})