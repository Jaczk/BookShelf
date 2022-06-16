const { nanoid } = require("nanoid");
const books = require('./booksh');

const addBookHandler = (request, h) => {
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

  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  if (pageCount === readPage) {
    return finished = true;
  }
  let finished = false;

  const newBook = {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    id,
    insertedAt,
    updatedAt,
    finished,
  };
  books.push(newBook);
  
  const isSuccess = books.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Buku gagal ditambahkan',
  });
  response.code(500);
  return response;
};

  const getAllBookHandler = (request, h) => ({
    status: 'success',
    data: {
      books,
    },
  });

  const getBookByIdHandler = (request, h) => {
    const { id } = request.params;
    const books = booksh.filter((n) => n.id === id)[0];

    if (books !== undefined) {
      return {
        status: 'success',
        data: {
          note,
        },
      };
    }
    const response = h.response({
      status: 'fail',
      message: 'Catatan tidak ditemukan',
    });
    response.code(404);
    return response;
  };
  const editBookByIdHandler = (request, h) => {
    const { id } = request.params;

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

    const index = books.findIndex((booksh) => booksh.id === id);
 
  if (index !== -1) {
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      updatedAt 
    };
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui Buku. Id tidak ditemukan',
  });
  response.code(404);
  return response;
  };
  const deleteBookByIdHandler = (request, h) => {
    const { id } = request.params;

    const index = books.findIndex((booksh) => booksh.id === id);

    if (index !== -1) {
      books.splice(index, 1);
      const response = h.response({
        status: 'success',
        message: 'Buku berhasil dihapus',
      });
      response.code(200);
      return response;
    }
    const response = h.response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    });
    response.code(404);
    return response;
  };

module.exports = { addBookHandler, getAllBookHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler };
