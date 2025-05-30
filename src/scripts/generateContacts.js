import { createFakeContact } from '../utils/createFakeContact.js';
import readContacts from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();

  for (let i = 0; i < number; i++) {
    const contact = createFakeContact();
    contacts.push(contact);
  }

  try {
    await writeContacts(contacts);
  } catch (error) {
    console.error('generateContacts', error.message);
  }

  return contacts;
};

generateContacts(2);

// node src/scripts/generateContacts.js
