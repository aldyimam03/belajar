import fs from "fs";

const path = "./data/contacts.json";

const loadContact = () => {
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, "[]", "utf-8");
  }
  const contacts = JSON.parse(fs.readFileSync(path, "utf-8"));
  return contacts;
};

const simpanContact = (contacts) => {
  fs.writeFileSync(path, JSON.stringify(contacts, null, 2), "utf-8");
};

const addContact = (contact) => {
  const contacts = loadContact();
  contacts.push(contact);
  simpanContact(contacts);
};

const findContact = (name) => {
  const contacts = loadContact();
  if (contacts.length === 0) {
    return null;
  }
  return contacts.find(
    (contact) => contact.name.toLowerCase() === name.toLowerCase()
  );
};

const removeContact = (name) => {
  const contacts = loadContact();
  const newContacts = contacts.filter(
    (contact) => contact.name.toLowerCase() !== name.toLowerCase()
  );
  if (contacts.length === newContacts.length) {
    console.log(`contact ${name} tidak ditemukan`);
    return false;
  }
  fs.writeFileSync(path, JSON.stringify(newContacts, null, 2), "utf-8");
  console.log(`contact ${name} berhasil dihapus`);
  return true;
};

const updateContact = (oldName, newData) => {
  const contacts = loadContact();
  const index = contacts.findIndex(
    (c) => c.name.toLowerCase() === oldName.toLowerCase()
  );
  
  if (index !== -1) {
    contacts[index] = newData;
    fs.writeFileSync(path, JSON.stringify(contacts, null, 2), "utf-8");
    return true;
  }
  return false;
};

const cekDuplikat = (name) => {
  const contacts = loadContact();
  return contacts.find((contact) => contact.name === name);
};

const findContactByEmail = (email) => {
  const contacts = loadContact();
  return contacts.find((contact) => contact.email === email);
};

const findContactByPhone = (phone) => {
  const contacts = loadContact();
  return contacts.find((contact) => contact.phone === phone);
};

export {
  loadContact,
  simpanContact,
  addContact,
  findContact,
  removeContact,
  updateContact,
  cekDuplikat,
  findContactByEmail,
  findContactByPhone,
};