const content = document.getElementById('content');

const createHeader = () => {
  const header = document.createElement('div');
  header.textContent = 'head';
  header.setAttribute('id', 'header');
  content.appendChild(header);
};

const createMain = () => {
  const main = document.createElement('div');
  main.textContent = 'main';
  main.setAttribute('id', 'main');
  content.appendChild(main);
};

const createFooter = () => {
  const footer = document.createElement('div');
  footer.textContent = 'foot';
  footer.setAttribute('id', 'footer');
  content.appendChild(footer);
};

const load = () => {
  createHeader();
  createMain();
  createFooter();
};

export default load;
