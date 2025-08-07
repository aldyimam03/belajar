const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "Contact";

// Fungsi koneksi ke database
async function connectDB() {
  try {
    const client = new MongoClient(url);
    await client.connect();
    console.log("✅ Berhasil connect ke database");

    const db = client.db(dbName);

    return { db, client }; // dikembalikan supaya bisa ditutup nanti
  } catch (error) {
    console.error("❌ Gagal connect:", error);
    throw error; // lempar error biar tahu kalau gagal
  }
}

// Fungsi insert data
async function insertData(db) {
  try {
    await db.collection("Mahasiswa").insertOne({
      name: "Fulan Async",
      email: "fulan@dicoding.com",
      phone: "08123456789",
    });

    await db.collection("Mahasiswa").insertMany([
      {
        name: "Fulan1",
        email: "fulan1@dicoding.com",
        phone: "08123456789",
      },
      {
        name: "Fulan2",
        email: "fulan2@dicoding.com",
        phone: "08123456789",
      },
    ]);

    console.log("✅ Data berhasil ditambahkan");
  } catch (error) {
    console.error("❌ Gagal insert data:", error);
  }
}

// Fungsi find data
async function findData(db) {
  try {
    console.log(await db.collection("Mahasiswa").find().toArray());
  } catch (error) {
    console.log("❌ Gagal find data:", error);
  }
}

// Fungsi find data by name
async function findDataByName(db, name) {
  try {
    console.log(await db.collection("Mahasiswa").findOne({ name: name }));
  } catch (error) {
    console.log("❌ Gagal find data:", error);
  }
}

// Fungsi find data by id
async function findDataById(db, id) {
  try {
    console.log(
      await db.collection("Mahasiswa").findOne({ _id: new ObjectId(id) })
    );
  } catch (error) {
    console.log("❌ Gagal find data:", error);
  }
}

// Fungsi update data by id
async function updateDataById(db, id, data) {
  try {
    const objectId = new ObjectId(id);
    const before = await db.collection("Mahasiswa").findOne({ _id: objectId });
    console.log("🔍 Sebelum update:", before);

    const result = await db
      .collection("Mahasiswa")
      .updateOne({ _id: objectId }, { $set: data });
    console.log("✅ Hasil update:", result);

    const after = await db.collection("Mahasiswa").findOne({ _id: objectId });
    console.log("🔎 Setelah update:", after);
  } catch (error) {
    console.log("❌ Gagal update data:", error);
  }
}

// Fungsi delete data by id
async function deleteDataById(db, id) {
  try {
    const result = await db
      .collection("Mahasiswa")
      .deleteOne({ _id: new ObjectId(id) });
    console.log("✅ Hasil delete:", result);
  } catch (error) {
    console.log("❌ Gagal delete data:", error);
  }
}

// Main flow
(async () => {
  // koneksi dulu
  const { db, client } = await connectDB();
  // lalu insert data
  //   await insertData(db);
  // cari data by name
  await findDataByName(db, "Fulan1");
  // cari data by id
  await findDataById(db, "6894470086aaf620c4928b60");
  // cari data
  await findData(db);
  // update data
  await updateDataById(db, "6894470086aaf620c4928b60", {
    name: "Fulan Updated",
  });
  // delete data
  await deleteDataById(db, "6894470086aaf620c4928b60");
  //cek data setelah diupdate / dihapus
  await findData(db);
  // terakhir, tutup koneksi
  await client.close();
  console.log("🔌 Koneksi ditutup");
})();
