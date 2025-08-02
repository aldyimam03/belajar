// kasus dibawah ini menggunakan lebih ringkas

// import core module
const fs = require("fs");
const readline = require("readline");

// inisialisasi readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// cek apakah file contacts.json sudah ada
if (!fs.existsSync("contacts.json")) {
  fs.writeFileSync("contacts.json", "[]", "utf-8");
}

// pertanyaan
const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (data) => {
      resolve(data);
    });
  });
};

const simpanContact = () => {
  const data = {
    name,
    email,
    phone,
  };

  const contacts = JSON.parse(fs.readFileSync("contacts.json", "utf-8"));
  contacts.push(data);
  fs.writeFileSync("contacts.json", JSON.stringify(contacts), "utf-8");

  // cek apakah data sukes disimpan
  if (!contacts) {
    return console.log("data gagal disimpan");
  } else {
    console.log("data berhasil disimpan");
  }

  console.log("terima kasih sudah mengisi data");

  rl.close();
}

module.export = {
  tulisPertanyaan,
  simpanContact,
};
