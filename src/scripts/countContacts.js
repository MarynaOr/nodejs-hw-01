import readContacts from '../utils/readContacts.js';
export const countContacts = async () => {
  const contactLength = await readContacts();
  return contactLength.length;
};

console.log(await countContacts());
