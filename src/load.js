import createHome from './home';
import createMenu from './menu';
import createContact from './contact';
import ghIcon from './images/github.svg';
import instaIcon from './images/instagram.svg';
import mailIcon from './images/email-outline.svg';
import mapsIcon from './images/google-maps.svg';

// Pull our HTML tag into js
const content = document.getElementById('content');

// Create Header div and append it to content
const createHeader = () => {
  const header = document.createElement('div');
  const headerBox = document.createElement('div');
  header.setAttribute('id', 'header');
  headerBox.setAttribute('id', 'headerBox');
  header.appendChild(headerBox);
  content.appendChild(header);
  return header;
};

const createLogo = () => {
  const headBox = document.getElementById('headerBox');
  const logo = document.createElement('div');
  logo.textContent = 'Aterma';
  logo.setAttribute('id', 'logo');
  headBox.appendChild(logo);
};

// Create Nav section of header and it's buttons, assign attributes, append
const createNav = () => {
  const headBox = document.getElementById('headerBox');
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
  home.textContent = 'HOME';
  menu.textContent = 'MENU';
  contact.textContent = 'CONTACT';
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  headBox.appendChild(nav);
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
  const gitHub = document.createElement('div');
  const socials = document.createElement('div');
  gitHub.setAttribute('id', 'gitHub');
  socials.setAttribute('id', 'socials');

  const ghLink = new Image();
  ghLink.src = ghIcon;
  ghLink.classList.add('footLink');
  ghLink.setAttribute('path', 'currentColor');
  gitHub.appendChild(ghLink);

  const instaLink = new Image();
  instaLink.src = instaIcon;
  instaLink.classList.add('footLink');
  instaLink.setAttribute('path', 'fill=currentColor');
  socials.appendChild(instaLink);

  const mailLink = new Image();
  mailLink.src = mailIcon;
  mailLink.classList.add('footLink');
  mailLink.setAttribute('path', 'currentColor');
  socials.appendChild(mailLink);

  const mapLink = new Image();
  mapLink.src = mapsIcon;
  mapLink.classList.add('footLink');
  mapLink.setAttribute('path', 'currentColor');
  socials.appendChild(mapLink);

  const footer = document.createElement('div');
  footer.setAttribute('id', 'footer');
  footer.appendChild(gitHub);
  footer.appendChild(socials);
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
  createLogo();
  createNav();
  setMain();
};

export default load;
