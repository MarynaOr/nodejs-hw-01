
import { PATH_DB } from "../../constants/contacts";
import { Contact } from "../../scripts/script-ts/generateContacts"
import { promises as fs } from 'fs';


export const writeContacts =async(updatedContacts: Contact[]): Promise<void> =>{
    try {
        const data = JSON.stringify(updatedContacts, null, 2);
        await fs.writeFile(PATH_DB, data, 'utf-8')
        return
    } catch (error:any) {
console.error('writeContacts', error.message);
    }
}






