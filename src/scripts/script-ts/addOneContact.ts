import { createFakeContact } from '../../utils/createFakeContact';
import readContacts from '../../utils/readContacts';
import writeContacts from '../../utils/writeContacts';
import { Contact } from './generateContacts';

export const addOneContact = async (): Promise<Contact[]> => {
  const contacts: Contact[] = await readContacts();
  const newContact = createFakeContact();
  contacts.push(newContact);

  try {
    await writeContacts(contacts);
  } catch (error: any) {
    console.error('addOneContact', error.message);
  }

  return contacts;
};
