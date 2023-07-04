const contactInfo = () => {
  const infoBox = document.createElement('div');
  infoBox.setAttribute('id', 'info-box');

  const contactAddress = document.createElement('div');
  contactAddress.classList.add('contact-info');
  const addressIcon = document.createElement('i');
  addressIcon.classList.add('fa', 'fa-location-dot', 'fa-contact');
  addressIcon.setAttribute('aria-hidden', 'true');
  const cAddress = document.createElement('div');
  cAddress.textContent = 'HEAUVENSEWEG 5A, 6991 JE RHEDEN, NETHERLANDS';
  contactAddress.appendChild(addressIcon);
  contactAddress.appendChild(cAddress);
  infoBox.appendChild(contactAddress);

  const contactEmail = document.createElement('div');
  contactEmail.classList.add('contact-info');
  const emailIcon = document.createElement('i');
  emailIcon.classList.add('fa-regular', 'fa-envelope', 'fa-contact');
  emailIcon.setAttribute('aria-hidden', 'true');
  const cEmail = document.createElement('div');
  cEmail.textContent = 'info@aterma.nl';
  contactEmail.appendChild(emailIcon);
  contactEmail.appendChild(cEmail);
  infoBox.appendChild(contactEmail);

  const contactPhone = document.createElement('div');
  contactPhone.classList.add('contact-info');
  const phoneIcon = document.createElement('i');
  phoneIcon.classList.add('fa-solid', 'fa-phone-volume', 'fa-contact');
  phoneIcon.setAttribute('aria-hidden', 'true');
  const cPhone = document.createElement('div');
  cPhone.textContent = '+31 123 4567';
  contactPhone.appendChild(phoneIcon);
  contactPhone.appendChild(cPhone);
  infoBox.appendChild(contactPhone);

  return infoBox;
};

const createMap = () => {
  const map = document.createElement('div');
  map.setAttribute('id', 'map');
  map.innerHTML = `
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56045.37126845338!2d5.978342553164783!3d52.04259074290867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7bcc9278a0a47%3A0x46a1476b7999402f!2sNationaal%20Park%20Veluwezoom!5e0!3m2!1sen!2sus!4v1688510380758!5m2!1sen!2sus"
      id="map-iframe"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  `;
  return map;
};

const createContactBox = () => {
  const contactBox = document.createElement('div');
  contactBox.setAttribute('id', 'contact-box');
  contactBox.appendChild(contactInfo());
  contactBox.appendChild(createMap());
  return contactBox;
};

const createContact = () => {
  const contact = document.createElement('div');
  contact.setAttribute('id', 'contact');
  contact.appendChild(createContactBox());
  return contact;
};

export default createContact;
