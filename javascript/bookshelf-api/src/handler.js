const { nanoid } = require("nanoid");
const books = require("./books");

// MEMBUAT BUKU
const postBooks = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  // CEK NAMA
  if (!name) {
    const response = h.response({
      status: "fail",
      message: "Gagal menambahkan buku. Mohon isi nama buku",
    });
    response.code(400);
    return response;
  }

  // KETIKA READPAGE LEBIH BESAR DARI PAGECOUNT
  if (readPage > pageCount) {
    const response = h.response({
      status: "fail",
      message:
        "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
    });
    response.code(400);
    return response;
  }

  const bookId = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const finished = pageCount === readPage;

  const newBooks = {
    bookId,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  books.push(newBooks);

  const isSuccess = books.filter((book) => book.bookId === bookId).length > 0;

  // KETIKA BERHASIL
  if (isSuccess) {
    const response = h.response({
      status: "success",
      message: "Buku berhasil ditambahkan",
      data: {
        bookId: bookId,
      },
    });
    response.code(201);
    return response;
  }

  // KETIKA GAGAL
  const response = h.response({
    status: "fail",
    message: "Gagal menambahkan buku",
  });
  response.code(400);
  return response;
};

// MENDAPATKAN BUKU
const getAllBooks = (request, h) => {
  const { name, reading, finished } = request.query;

  // Filter buku berdasarkan query parameters
  let filteredBooks = books;

  // Filter berdasarkan nama (case insensitive)
  if (name) {
    filteredBooks = filteredBooks.filter((book) =>
      book.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  // Filter berdasarkan status reading
  if (reading !== undefined) {
    const isReading = reading === "1"; 
    filteredBooks = filteredBooks.filter((book) => book.reading === isReading);
  }

  // Filter berdasarkan status finished
  if (finished !== undefined) {
    const isFinished = finished === "1"; 
    filteredBooks = filteredBooks.filter(
      (book) => book.finished === isFinished
    );
  }

  return h.response({
    status: "success",
    data: {
      books: filteredBooks.map(({ bookId, name, publisher }) => ({
        id: bookId,
        name,
        publisher,
      })),
    },
  });
};

// MENDAPATKAN BOOK SESUAI ID
const getBookById = (request, h) => {
  const { bookId } = request.params;
  const book = books.find((n) => n.bookId === bookId);

  if (book) {
    const { bookId: id, ...rest } = book;
    return h
      .response({
        status: "success",
        data: {
          book: { id, ...rest },
        },
      })
      .code(200);
  }

  return h
    .response({
      status: "fail",
      message: "Buku tidak ditemukan",
    })
    .code(404);
};

// MENGEDIT BOOK
const editbookById = (request, h) => {
  const { bookId } = request.params;

  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  const updatedAt = new Date().toISOString();

  if (!name) {
    return h
      .response({
        status: "fail",
        message: "Gagal memperbarui buku. Mohon isi nama buku",
      })
      .code(400);
  }

  if (readPage > pageCount) {
    return h
      .response({
        status: "fail",
        message:
          "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount",
      })
      .code(400);
  }

  const finished = pageCount === readPage;
  const index = books.findIndex((book) => book.bookId === bookId);

  if (index !== -1) {
    books[index] = {
      ...books[index],
      bookId: bookId,
      name: name,
      year: year,
      author: author,
      summary: summary,
      publisher: publisher,
      pageCount: pageCount,
      readPage: readPage,
      finished: finished,
      reading: reading,
      updatedAt,
    };

    const response = h.response({
      status: "success",
      message: "Buku berhasil diperbarui",
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Gagal memperbarui buku. Id tidak ditemukan",
  });
  response.code(404);
  return response;
};

// MENGHAPUS BOOK SESUAI ID
const deleteBookById = (request, h) => {
  const { bookId } = request.params;

  const index = books.findIndex((book) => book.bookId === bookId);

  if (index !== -1) {
    books.splice(index, 1);
    const response = h.response({
      status: "success",
      message: "Buku berhasil dihapus",
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Buku gagal dihapus. Id tidak ditemukan",
  });
  response.code(404);
  return response;
};

module.exports = {
  postBooks,
  getAllBooks,
  getBookById,
  editbookById,
  deleteBookById,
};
