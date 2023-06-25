const createHome = () => {
  const home = document.createElement('div');
  home.textContent = 'home';
  home.setAttribute('id', 'home');
  return home;
};

export default createHome;
