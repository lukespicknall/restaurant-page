import picnic from './images/bw-picnic-crop.jpg';
import parkPic from './images/nationaal-park-veluwezoom.jpg';

const createCover = () => {
  const cover = document.createElement('div');
  const coverImg = new Image();
  cover.setAttribute('id', 'cover');
  coverImg.setAttribute('id', 'coverImg');
  coverImg.src = picnic;
  cover.appendChild(coverImg);
  return cover;
};

const createWelcome = () => {
  const welcome = document.createElement('div');
  welcome.setAttribute('id', 'welcome');
  const welcomeText = document.createElement('p');
  welcomeText.classList.add('welcome-text');
  welcomeText.textContent = 'Nestled in rolling hills and cradled by ancient wood and billowing lavender, Aterma is a nice place to have lunch. Join us for a lovely day on the grass with a picnic package of your choice. And bring any extras or compliments you like!';
  welcome.appendChild(welcomeText);
  return welcome;
};

const createWall = () => {
  const wall = document.createElement('div');
  const wallImg = new Image();
  wall.setAttribute('id', 'wall');
  wallImg.setAttribute('id', 'wallImg');
  wallImg.src = parkPic;
  wall.appendChild(wallImg);
  return wall;
};

const createInfo = () => {
  const infoLogo = document.createElement('div');
  infoLogo.textContent = 'Aterma';
  infoLogo.setAttribute('id', 'infoLogo');
  const info = document.createElement('div');
  const address = document.createElement('div');
  const schedule = document.createElement('div');
  info.setAttribute('id', 'info');
  address.setAttribute('id', 'address');
  schedule.setAttribute('id', 'schedule');
  address.textContent = 'BEEKHUIZENSEWEG 1, 6991 JM RHEDEN, NETHERLANDS';
  for (let i = 0; i < 7; i += 1) {
    const day = document.createElement('div');
    const hours = document.createElement('div');
    day.classList.add('day');
    hours.classList.add('hour');
    switch (i) {
      case 0:
        day.textContent = 'M O N';
        hours.textContent = '5 - 11 P';
        break;
      case 1:
        day.textContent = 'T U E S';
        hours.textContent = '5 - 11 P';
        break;
      case 2:
        day.textContent = 'W E D S';
        hours.textContent = '5 - 11 P';
        break;
      case 3:
        day.textContent = 'T H U R S';
        hours.textContent = '5 - 11 P';
        break;
      case 4:
        day.textContent = 'F R I';
        hours.textContent = '5 - 11 P';
        break;
      case 5:
        day.textContent = 'S A T';
        hours.textContent = '5 - 11 P';
        break;
      case 6:
        day.textContent = 'S U N';
        hours.textContent = 'C L O S E D';
        break;
      default:
        day.textContent = 'MON-SAT';
        hours.textContent = '5 - 11 P';
        break;
    }
    schedule.appendChild(day);
    schedule.appendChild(hours);
  }
  info.appendChild(infoLogo);
  info.appendChild(address);
  info.appendChild(schedule);
  return info;
};

const createHome = () => {
  const home = document.createElement('div');
  home.setAttribute('id', 'home');
  home.appendChild(createCover());
  home.appendChild(createWelcome());
  home.appendChild(createWall());
  home.appendChild(createInfo());
  return home;
};

export default createHome;
