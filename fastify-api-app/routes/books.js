const booksController = require('../controller/books');

const routes = [{
method: 'GET',
   url: '/api/books',
   handler: booksController.getAllBooks
},
{
   method: 'GET',
   url: '/api/books/:id',
   schema: booksController.getBookValidation,
   handler: booksController.getBookById,
},
{
   method: 'POST',
   url: '/api/books',
   handler: booksController.addBook
},
{
   method: 'PUT',
   url: '/api/books/:id',
   handler: booksController.updateBook
},
{
   method: 'DELETE',
   url: '/api/books/:id',
   handler: booksController.deleteBook
}
]
module.exports = routes