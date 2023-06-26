import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

// Pull our HTML tag into js
const content = document.getElementById('content');

// Create Header div and append it to content
const createHeader = () => {
  const header = document.createElement('div');
  header.textContent = 'head';
  header.setAttribute('id', 'header');
  content.appendChild(header);
  return header;
};

// Create Nav section of header and it's buttons, assign attributes, append
const createNav = () => {
  const head = document.getElementById('header');
  const nav = document.createElement('div');
  const home = document.createElement('button');
  const menu = document.createElement('button');
  const contact = document.createElement('button');
  nav.setAttribute('id', 'nav');
  home.setAttribute('id', 'homeBtn');
  menu.setAttribute('id', 'menuBtn');
  contact.setAttribute('id', 'contactBtn');
  home.classList.add('navBtn');
  menu.classList.add('navBtn');
  contact.classList.add('navBtn');
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  head.appendChild(nav);
};

// Create Main div and append it to content
const createMain = () => {
  const main = document.createElement('div');
  main.setAttribute('id', 'main');
  content.appendChild(main);
  return main;
};

// Create Footer div and append it to content
const createFooter = () => {
  const footer = document.createElement('div');
  footer.textContent = 'foot';
  footer.setAttribute('id', 'footer');
  content.appendChild(footer);
};

// Pulls the clicked navBtn page to display on div.main
const setMain = () => {
  const main = document.getElementById('main');
  const navBtn = document.querySelectorAll('.navBtn');
  main.appendChild(createHome());

  navBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      main.innerHTML = '';
      switch (e.target.id) {
        case 'homeBtn':
          main.appendChild(createHome());
          break;
        case 'menuBtn':
          main.appendChild(createMenu());
          break;
        case 'contactBtn':
          main.appendChild(createContact());
          break;
        default:
          main.appendChild(createHome());
          break;
      }
    });
  });
};

// Pass all HTML skeleton elements to index.js
const load = () => {
  createHeader();
  createMain();
  createFooter();
  createNav();
  setMain();
};

export default load;
