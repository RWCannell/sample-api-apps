const data = require('../data/books');

const getBookValidation = {
    params: {
        id: { type: 'integer' }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                title: { type: 'string' },
                author: { type: 'string' },
                originallyPublished: { type: 'integer' },
            }
        }
    }
}

const getAllBooks = async (req, res) => {
    return data.books;
}

const getBookById = async (req, res) => {
    const id = Number(req.params.id);
    
    const book = data.books.find(book => book.id === id);
    return book;
}

const addBook = async (req, res) => {
    const id = data.books.length + 1;
    const newBook = {
        id,
        title: req.body.title,
        author: req.body.author,
        originallyPublished: req.body.originallyPublished,
    };
    books.push(newBook);
    return {
        message: `Book with title '${req.body.title}' has been added.`
    };
}

const updateBook = async (req, res) => {
    const id = Number(req.params.id);
    books = data.books.map(book => {
        if (book.id === id) {
            return {
                id,
                title: req.body.title,
                author: req.body.author,
                originallyPublished: req.body.originallyPublished,
            }
        }
    });
    return {
        message: `Book with ID ${id} has been updated.`
    };
}

const deleteBook = async (req, res) => {
    const id = Number(req.params.id);

    books = data.books.filter(book => book.id !== id);
    return {
        message: `Book with ID ${id} has been deleted.`
    };
}

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook,
    getBookValidation,
}