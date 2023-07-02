import pinotPack from './images/pinot-pack.jpg';
import snackPack from './images/snack-pack.jpg';
import tacoPack from './images/taco-pack.jpg';
import fruitPack from './images/fruit-pack.jpg';
import sandwichPack from './images/sandwich-pack.jpg';

const createMenulist = () => {
  const menuList = document.createElement('div');
  menuList.setAttribute('id', 'menu-list');

  const menuItemEven = (a, b, c) => {
    const item = document.createElement('div');
    item.classList.add('menu-item-even');
    const menuImage = new Image();
    menuImage.src = a;
    menuImage.classList.add('menu-image');
    const itemInfo = document.createElement('div');
    itemInfo.classList.add('item-info');
    const itemTitle = document.createElement('h2');
    itemTitle.classList.add('item-title');
    itemTitle.textContent = b;
    const menuDescription = document.createElement('p');
    menuDescription.classList.add('menu-description');
    menuDescription.textContent = c;
    itemInfo.appendChild(itemTitle);
    itemInfo.appendChild(menuDescription);
    item.appendChild(menuImage);
    item.appendChild(itemInfo);
    return item;
  };

  const menuItemOdd = (a, b, c) => {
    const item = document.createElement('div');
    item.classList.add('menu-item-odd');
    const menuImage = new Image();
    menuImage.src = a;
    menuImage.classList.add('menu-image');
    const itemInfo = document.createElement('div');
    itemInfo.classList.add('item-info');
    const itemTitle = document.createElement('h2');
    itemTitle.classList.add('item-title');
    itemTitle.textContent = b;
    const menuDescription = document.createElement('p');
    menuDescription.classList.add('menu-description');
    menuDescription.textContent = c;
    itemInfo.appendChild(itemTitle);
    itemInfo.appendChild(menuDescription);
    item.appendChild(itemInfo);
    item.appendChild(menuImage);
    return item;
  };

  const sandwich = menuItemEven(sandwichPack, 'Sandwich Pack Picnic', 'The go-to. Smoked beef and pork tenderloin sandwiches. Charcuterie board with unpasteurized goats milk cheese, apricot and gerkin. A carafe of our house lager');
  const pinot = menuItemOdd(pinotPack, 'The Pinot Pack', 'Our pinot pack is perfect for a more tradional spread. Luscious figs and grapes with creamy cows milk cheese. A bottle of Pinot Noir.');
  const taco = menuItemEven(tacoPack, 'Taco Picnic', 'NEW! Our Taco picnic is the perpect pick for a splash of summer. Braised chiken tacos with lime and jalepeno. Tequila shots with fresh strawberry and lime');
  const fruit = menuItemOdd(fruitPack, 'Fruit and Rose', 'Looking for something light and elegant? The fruit and rose picnic is where its at. Apple and rose.');
  const snack = menuItemEven(snackPack, 'The Snack Pack', 'Just need something to nibble while you chew your grapes? Salty pretzels, fresh baked cookies and wine.');
  menuList.appendChild(sandwich);
  menuList.appendChild(pinot);
  menuList.appendChild(taco);
  menuList.appendChild(fruit);
  menuList.appendChild(snack);
  return menuList;
};

const createMenu = () => {
  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu');
  menu.appendChild(createMenulist());
  return menu;
};

export default createMenu;
