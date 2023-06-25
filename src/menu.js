const createMenu = () => {
  const menu = document.createElement('div');
  menu.textContent = 'menu';
  menu.setAttribute('id', 'menu');
  return menu;
};

export default createMenu;
