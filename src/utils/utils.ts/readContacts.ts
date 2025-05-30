import { promises as fs } from 'fs';
import { PATH_DB } from '../../constants/contacts';
import { Contact } from '../../scripts/script-ts/generateContacts';

export const readContacts = async():Promise<Contact[]> => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8')
        return JSON.parse(data) as Contact[]
    } catch (error: any) {
        console.error('readContacts', error.message);
    throw error;
    }
}




