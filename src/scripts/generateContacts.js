import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  const data = await readContacts();
  for (let i = 1; i <= number; i++) {
    data.push(createFakeContact());
  }
  writeContacts(data);
};

generateContacts(5);
