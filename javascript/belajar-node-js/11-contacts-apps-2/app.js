// mengambil argument dari command line

// if (command === "add") {

// } else if (command === "remove") {

// } else if (command === "list") {

// }

const yargs = require("yargs");
const contact = require("./contact");

// manual
// yargs.command(
//   "add",
//   "menambahkan contact baru",
//   () => {},
//   (argv) => {
//     console.log(argv.nama);
//   }
// );

yargs
  .command({
    command: "add",
    describe: "menambahkan contact baru",
    builder: {
      name: {
        describe: "nama lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "email",
        demandOption: true,
        type: "string",
      },
      noHp: {
        describe: "nomor hp",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      contact.simpanContact(argv.name, argv.email, argv.noHp);
      // const contact = {
      //   nama: argv.nama,
      //   email: argv.email,
      //   noHp: argv.noHp,
      // };
      console.log(contact);
    },
  })
  .demandCommand(1, "setidaknya harus ada satu command");

// menampilkan contact
yargs.command({
  command: "list",
  describe: "menampilkan semua contact",
  handler() {
    contact.listContact();
  },
});

// menampilkan detail contact
yargs.command({
  command: "detail",
  describe: "menampilkan detail contact berdasarkan nama",
  builder: {
    name: {
      describe: "nama",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contact.detailContact(argv.name);
  },
});

// menghapus contact
yargs.command({
  command: "remove",
  describe: "menghapus contact berdasarkan nama",
  builder: {
    name: {
      describe: "name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contact.removeContact(argv.name);
  },
})
yargs.parse();
