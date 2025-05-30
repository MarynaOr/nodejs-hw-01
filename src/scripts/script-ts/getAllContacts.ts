import readContacts from "../../utils/readContacts";



export const getAllContacts = async () => {
    return readContacts();
};

console.log(await getAllContacts());


