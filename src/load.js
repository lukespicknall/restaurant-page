import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

// Pull our HTML tag into js
// const content = document.createElement('div');
// content.setAttribute('id', 'content');
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
  const gitHub = document.createElement('a');
  const socials = document.createElement('div');
  gitHub.setAttribute('id', 'gitHub');
  gitHub.setAttribute('target', 'blank');
  gitHub.href = 'https://github.com/lukespicknall/restaurant-page';
  socials.setAttribute('id', 'socials');

  const ghLink = document.createElement('i');
  ghLink.classList.add('fa', 'fa-github', 'fa-foot');
  ghLink.setAttribute('aria-hidden', 'true');
  gitHub.appendChild(ghLink);

  const instaLink = document.createElement('i');
  instaLink.classList.add('fa-brands', 'fa-instagram', 'fa-foot');
  instaLink.setAttribute('aria-hidden', 'true');
  const instaShell = document.createElement('a');
  instaShell.setAttribute('target', 'blank');
  instaShell.href = 'https://www.instagram.com/explore/locations/242937426/veluwezoom-national-park/';
  instaShell.appendChild(instaLink);
  socials.appendChild(instaShell);

  const mailLink = document.createElement('i');
  mailLink.classList.add('fa-regular', 'fa-envelope', 'fa-foot');
  mailLink.setAttribute('aria-hidden', 'true');
  const mailShell = document.createElement('a');
  mailShell.setAttribute('target', 'blank');
  mailShell.href = 'https://github.com/lukespicknall/restaurant-page';
  mailShell.appendChild(mailLink);
  socials.appendChild(mailShell);

  const mapLink = document.createElement('i');
  mapLink.classList.add('fa', 'fa-location-dot', 'fa-foot');
  mapLink.setAttribute('aria-regular', 'true');
  const mapShell = document.createElement('a');
  mapShell.setAttribute('target', 'blank');
  mapShell.href = 'https://www.google.com/maps/place/Nationaal+Park+Veluwezoom/@52.0473761,6.0054257,14z/data=!4m6!3m5!1s0x47c7bcc9278a0a47:0x46a1476b7999402f!8m2!3d52.0483103!4d6.0198869!16s%2Fm%2F05m_gqg?entry=ttu';
  mapShell.appendChild(mapLink);
  socials.appendChild(mapShell);

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
