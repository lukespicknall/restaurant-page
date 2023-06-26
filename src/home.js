import picnic from './images/bw-picnic-crop.jpg';

const createCover = () => {
  const cover = document.createElement('div');
  const coverImg = new Image();
  cover.setAttribute('id', 'cover');
  coverImg.setAttribute('id', 'coverImg');
  coverImg.src = picnic;
  cover.appendChild(coverImg);
  return cover;
};

const createInfo = () => {
  const info = document.createElement('div');
  const address = document.createElement('div');
  const schedule = document.createElement('div');
  info.setAttribute('id', 'info');
  address.setAttribute('id', 'address');
  schedule.setAttribute('id', 'schedule');
  address.textContent = '2132 Ayrsley Town Blvd, Charlotte, NC';
  for (let i = 0; i < 7; i += 1) {
    const day = document.createElement('div');
    const hours = document.createElement('div');
    day.classList.add('day');
    hours.classList.add('hour');
    switch (i) {
      case 0:
        day.textContent = 'MON';
        hours.textContent = '5 - 11 P';
        break;
      case 1:
        day.textContent = 'TUES';
        hours.textContent = '5 - 11 P';
        break;
      case 2:
        day.textContent = 'WEDS';
        hours.textContent = '5 - 11 P';
        break;
      case 3:
        day.textContent = 'THURS';
        hours.textContent = '5 - 11 P';
        break;
      case 4:
        day.textContent = 'FRI';
        hours.textContent = '5 - 11 P';
        break;
      case 5:
        day.textContent = 'SAT';
        hours.textContent = '5 - 11 P';
        break;
      case 6:
        day.textContent = 'SUN';
        hours.textContent = 'CLOSED';
        break;
      default:
        day.textContent = 'MON-SAT';
        hours.textContent = '5 - 11 P';
        break;
    }
    schedule.appendChild(day);
    schedule.appendChild(hours);
  }
  info.appendChild(address);
  info.appendChild(schedule);
  return info;
};

const createHome = () => {
  const home = document.createElement('div');
  home.setAttribute('id', 'home');
  home.appendChild(createCover());
  home.appendChild(createInfo());
  return home;
};

export default createHome;
