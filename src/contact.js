const createContact = () => {
  const contact = document.createElement('div');
  contact.textContent = 'contact';
  contact.setAttribute('id', 'contact');
  return contact;
};

export default createContact;
