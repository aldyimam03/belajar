const storageKey = "BOOKS_DATA_KEY";

function checkStorage() {
	return typeof Storage !== "undefined";
}

document.addEventListener("DOMContentLoaded", () => {
	if (checkStorage()) {
		localStorage.setItem(storageKey, JSON.stringify(getBooks()));

		renderBookList();
	} else {
		alert("Browser yang Anda gunakan tidak mendukung Web Storage");
	}
});

const checkbox = document.getElementById("bookFormIsComplete");
checkbox.addEventListener("change", () => {
	if (checkbox.checked) {
		document.getElementById("bookFormStatus").innerText = "Selesai dibaca";
	} else {
		document.getElementById("bookFormStatus").innerText = "Belum selesai dibaca";
	}
});

function makeBookElement(book) {
	// elemen <h3> for title
	const txtTitle = document.createElement("h3");
	txtTitle.setAttribute("data-testid", "bookItemTitle");
	txtTitle.innerText = book.title;

	// elemen <p> for author
	const txtAuthor = document.createElement("p");
	txtAuthor.setAttribute("data-testid", "bookItemAuthor");
	txtAuthor.innerText = `Penulis: ${book.author}`;

	// elemen <p> for year
	const txtYear = document.createElement("p");
	txtYear.setAttribute("data-testid", "bookItemYear");
	txtYear.innerText = `Tahun: ${book.year}`;

	// container pembungkus item text
	const textContainer = document.createElement("div");
	textContainer.append(txtTitle, txtAuthor, txtYear);

	// container pembungkus item button
	const buttonContainer = document.createElement("div");

	// kondisi untuk memasukkan button, jika book belum selesai dibaca atau selesai dibaca
	if (!book.isComplete) {
		const completeButton = document.createElement("button");
		completeButton.setAttribute("data-testid", "bookItemIsCompleteButton");
		buttonContainer.append(completeButton);

		completeButton.addEventListener("click", () => {
			addBookToCompleted(book.id);
			alert("Berhasil memindahkan buku ke rak 'Selesai dibaca'");
		});
	} else {
		const undoButton = document.createElement("button");
		undoButton.classList.add("undo-button");
		undoButton.setAttribute("data-testid", "bookItemIsCompleteButton");
		buttonContainer.append(undoButton);

		undoButton.addEventListener("click", () => {
			undoBookFromCompleted(book.id);
			alert("Berhasil memindahkan buku ke rak 'Belum selesai dibaca'");
		});
	}

	// delete button
	const deleteButton = document.createElement("button");
	deleteButton.setAttribute("data-testid", "bookItemDeleteButton");

	deleteButton.addEventListener("click", () => {
		deleteBook(book.id);
		alert("Berhasil menghapus buku");
	});

	// edit button
	const editButton = document.createElement("button");
	editButton.setAttribute("data-testid", "bookItemEditButton");

	editButton.addEventListener("click", () => {
		editBook(book);
	});

	buttonContainer.append(deleteButton, editButton);

	// container pembungkus semua elemen
	const container = document.createElement("div");
	container.setAttribute("data-testid", "bookItem");
	container.setAttribute("data-bookid", book.id);

	container.append(textContainer, buttonContainer);

	return container;
}

function getBooks() {
	if (checkStorage()) {
		return JSON.parse(localStorage.getItem(storageKey)) || [];
	}

	return [];
}

function renderBookList(books = getBooks()) {
	const uncompletedBookList = document.getElementById("incompleteBookList");
	uncompletedBookList.innerHTML = "";

	const completedBookList = document.getElementById("completeBookList");
	completedBookList.innerHTML = "";

	for (const book of books) {
		const bookElement = makeBookElement(book);

		if (!book.isComplete) {
			uncompletedBookList.append(bookElement);
		} else {
			completedBookList.append(bookElement);
		}
	}
}

const submitForm = document.getElementById("bookForm");
submitForm.addEventListener("submit", (e) => {
	const inputTitle = document.getElementById("bookFormTitle").value;
	const inputAuthor = document.getElementById("bookFormAuthor").value;
	const inputYear = parseInt(document.getElementById("bookFormYear").value);
	const checkComplete = document.getElementById("bookFormIsComplete").checked;

	const newBookData = {
		id: Number(new Date()),
		title: inputTitle,
		author: inputAuthor,
		year: inputYear,
		isComplete: checkComplete,
	};

	e.preventDefault();
	addBook(newBookData);
	renderBookList();

	// reset form
	submitForm.reset();
	document.getElementById("bookFormStatus").innerText = "Belum selesai dibaca";

	alert("Berhasil menambahkan buku");
});

const searchForm = document.getElementById("searchBook");
searchForm.addEventListener("submit", (e) => {
	const inputSearchTitle = document.getElementById("searchBookTitle").value;

	e.preventDefault();
	const booksAfterSearch = searchBook(inputSearchTitle);

	renderBookList(booksAfterSearch);
});

function addBook(data) {
	let books = [];
	if (checkStorage()) {
		if (localStorage.getItem(storageKey) !== null) {
			books = JSON.parse(localStorage.getItem(storageKey));
		}

		books.push(data);

		localStorage.setItem(storageKey, JSON.stringify(books));
	}
}

function addBookToCompleted(id) {
	const books = getBooks();

	const bookTarget = books.find((book) => book.id === id);

	if (!bookTarget) return;

	bookTarget.isComplete = true;

	localStorage.setItem(storageKey, JSON.stringify(books));
	renderBookList();
}

function undoBookFromCompleted(id) {
	const books = getBooks();

	const bookTarget = books.find((book) => book.id === id);

	if (!bookTarget) return;

	bookTarget.isComplete = false;

	localStorage.setItem(storageKey, JSON.stringify(books));
	renderBookList();
}

function deleteBook(id) {
	const books = getBooks();

	const bookIndex = books.findIndex((book) => book.id === id);

	if (bookIndex === -1) return;

	books.splice(bookIndex, 1);

	localStorage.setItem(storageKey, JSON.stringify(books));
	renderBookList();
}

function searchBook(title) {
	const books = getBooks();
	console.log("title : " + title);

	const filterBooks = books.filter((book) => book.title.toLowerCase().includes(title.toLowerCase()));
	console.log(filterBooks);

	return filterBooks;
}

let editingBookId = null;
function editBook(book) {
	document.getElementById("bookFormSubmit").style.display = "none";
	document.querySelector(".updateButtons").style.display = "flex";

	const sectionTitle = document.querySelector(".section-title");
	const fieldTitle = document.getElementById("bookFormTitle");
	const fieldAuthor = document.getElementById("bookFormAuthor");
	const fieldYear = document.getElementById("bookFormYear");
	const fieldIsComplete = document.getElementById("bookFormIsComplete");

	sectionTitle.innerText = "Update Buku";
	fieldTitle.value = book.title;
	fieldAuthor.value = book.author;
	fieldYear.value = book.year;
	fieldIsComplete.checked = book.isComplete;

	const formElement = document.getElementById("bookForm");
	formElement.scrollIntoView({
		behavior: "smooth",
		block: "center",
	});

	editingBookId = book.id;
}

document.getElementById("updateButton").addEventListener("click", () => {
	if (editingBookId === null) return;
	const books = getBooks();

	const sectionTitle = document.querySelector(".section-title");
	const fieldTitle = document.getElementById("bookFormTitle");
	const fieldAuthor = document.getElementById("bookFormAuthor");
	const fieldYear = document.getElementById("bookFormYear");
	const fieldIsComplete = document.getElementById("bookFormIsComplete");

	const bookTarget = books.find((b) => b.id === editingBookId);
	if (!bookTarget) return;

	bookTarget.title = fieldTitle.value;
	bookTarget.author = fieldAuthor.value;
	bookTarget.year = parseInt(fieldYear.value);
	bookTarget.isComplete = fieldIsComplete.checked;

	localStorage.setItem(storageKey, JSON.stringify(books));

	renderBookList();
	submitForm.reset();
	document.getElementById("bookFormSubmit").style.display = "inline-block";
	document.querySelector(".updateButtons").style.display = "none";
	sectionTitle.innerText = "Tambah Buku Baru";
});

document.getElementById("cancelButton").addEventListener("click", () => {
	document.getElementById("bookFormSubmit").style.display = "inline-block";
	document.querySelector(".updateButtons").style.display = "none";
	document.querySelector(".section-title").innerText = "Tambah Buku Baru";
	submitForm.reset();
});
