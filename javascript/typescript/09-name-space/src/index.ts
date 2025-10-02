/// <reference path="Mahasiswa.ts" />
/// <reference path="Mahasiswa2.ts" />

let mhs = new University.Mahasiswa("Aldy", 123);
console.log(mhs.nama);
mhs.nama = "Budi";
console.log(mhs.nama);

let mhs2 = new University.Mahasiswa2("Aldy", 123);
console.log(mhs2.nama);
mhs2.nama = "Budi";
console.log(mhs2.nama);
