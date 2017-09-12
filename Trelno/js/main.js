import {SidebarView} from './SidebarView.js'
import {BgColorSettingView} from './BgColorSettingView.js'

const onLoad = () => {
  SidebarView({
    el: '.sidebar',
    data: {
      bgColor: '#ff0000'
    },
    triggerEl: '#show-menu-link', 
  });

  BgColorSettingView({
    el: 'body', 
    triggerEls: '.palette'
  })
};

document.addEventListener('DOMContentLoaded', onLoad);