// import { createFakeContact } from '../utils/createFakeContact.js';
// import readContacts from '../utils/readContacts.js';
// import writeContacts from '../utils/writeContacts.js';

import { createFakeContact } from '../../utils/createFakeContact.js';
import readContacts from '../../utils/readContacts.js';
import writeContacts from '../../utils/writeContacts.js';

export interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
  job: string;
}

const generateContacts = async (number: number): Promise<Contact[]> => {
  const contacts: Contact[] = await readContacts();

  for (let index = 0; index < number; index++) {
    const contact: Contact = createFakeContact();
    contacts.push(contact);
  }

  try {
    await writeContacts(contacts);
  } catch (error: any) {
    console.error('generateContacts', error.message);
  }
  return contacts;
};
