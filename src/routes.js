const { addBookHandler, getAllBookHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler } = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/booksh",
    handler: addBookHandler,
  },
  {
    method: "GET",
    path: "/booksh",
    handler: getAllBookHandler,
  },
  {
    method: "GET",
    path: "/booksh/{id}",
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/booksh/{id}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
