// import core module & third-party
const fs = require("fs");
const validator = require("validator");

const loadContact = () => {
  const path = "./data/contacts.json";
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, "[]", "utf-8");
  }

  const contacts = JSON.parse(fs.readFileSync(path, "utf-8"));
  return contacts;
};
// cek apakah file contacts.json sudah ada

const simpanContact = (name, email, phone) => {
  // cek data
  if (!name || !email || !phone) {
    console.log("data tidak boleh kosong");
    return false;
  }

  const contacts = loadContact();

  const data = {
    name,
    email,
    phone,
  };

  // cek duplikasi
  const duplikasi = contacts.find((contact) => contact.name === name);
  if (duplikasi) {
    console.log("nama sudah terdaftar");
    return false;
  }

  // cek email
  if (!validator.isEmail(email)) {
    console.log("email tidak valid");
    return false;
  }

  // cek phone
  if (!validator.isMobilePhone(phone, "id-ID")) {
    console.log("nomor telepon tidak valid");
    return false;
  }

  contacts.push(data);

  fs.writeFileSync("contacts.json", JSON.stringify(contacts), "utf-8");

  // cek apakah data sukes disimpan
  if (!contacts) {
    return console.log("data gagal disimpan");
  } else {
    console.log("data berhasil disimpan");
  }

  console.log("terima kasih sudah mengisi data");
};

const findContact = (name) => {
  const contacts = loadContact();
  if (contacts.length === 0) {
    
  }
  return contacts.find(
    (contact) => contact.name.toLowerCase() === name.toLowerCase()
  );
};

const listContact = () => {
  const contacts = loadContact();
  console.log("Contact List");
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.name} - ${contact.phone}`);
  });
};

const detailContact = (name) => {
  const contacts = loadContact();
  const contact = contacts.find(
    (contact) => contact.name.toLowerCase() === name.toLowerCase()
  );
  if (!contact) {
    console.log(`contact ${name} tidak ditemukan`);
    return false;
  }
  console.log(contact);
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
  fs.writeFileSync("contacts.json", JSON.stringify(newContacts), "utf-8");
  console.log(`contact ${name} berhasil dihapus`);
};

module.exports = {
  loadContact,
  findContact,
};
