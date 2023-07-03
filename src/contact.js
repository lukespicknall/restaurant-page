const contactInfo = () => {
  const contactAddress = document.createElement('div');
  contactAddress.setAttribute('id', 'contact-address');
  const addressIcon = document.createElement('i');
  addressIcon.classList.add('fa', 'fa-location-dot', 'fa-contact');
  addressIcon.setAttribute('aria-hidden', 'true');
  const cAddress = document.createElement('p');
  cAddress.textContent = 'BEEKHUIZENSEWEG 1, 6991 JM RHEDEN, NETHERLANDS';
  contactAddress.appendChild(addressIcon);
  contactAddress.appendChild(cAddress);

  // const contactEmail = document.createElement('div');
  // contactEmail.setAttribute('id', 'contact-email');
  // const emailIcon = document.createElement('i');
  // emailIcon.classList.add('fa', 'fa-location-dot', 'fa-contact');
  // emailIcon.setAttribute('aria-hidden', 'true');
  // const cEmail = document.createElement('p');
  // cEmail.textContent = 'info@aterma.nd';
  // contactEmail.appendChild(emailIcon);
  // contactEmail.appendChild(cEmail);

  // const contactPhone = document.createElement('div');
  // contactPhone.setAttribute('id', 'contact-phone');
  // const phoneIcon = document.createElement('i');
  // phoneIcon.classList.add('fa', 'fa-location-dot', 'fa-contact');
  // phoneIcon.setAttribute('aria-hidden', 'true');
  // const cPhone = document.createElement('p');
  // cPhone.textContent = '+88 44512356548';
  // contactPhone.appendChild(phoneIcon);
  // contactPhone.appendChild(cPhone);

  return contactAddress;
};

const createMap = () => {
  const map = document.createElement('div');
  map.setAttribute('id', 'map');
  map.innerHTML = `
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39279.356032107346!2d6.0105784!3d52.0258309!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7a32f28f0088f%3A0x905369d96e245648!2sPavilion%20De%20Posbank!5e0!3m2!1sen!2sus!4v1688421220756!5m2!1sen!2sus"
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
