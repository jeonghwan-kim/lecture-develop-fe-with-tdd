(() => {
  const onLoad = () => {
    Trelno.SidebarView({
      el: '.sidebar',
      data: {
        bgColor: '#ff0000'
      },
      triggerEl: '#show-menu-link', 
    });
  };

  document.addEventListener('DOMContentLoaded', onLoad);
})();