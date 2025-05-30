import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('readContacts', error.message);
    throw error;
  }
};

export default readContacts;
