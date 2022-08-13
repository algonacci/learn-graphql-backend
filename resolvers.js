const BookModel = require('./models/Book');

module.exports = {
    Query: {
        getAllBooks: async () => await BookModel.find({}),
        getBook: async (_, { _id }) => await BookModel.findById(_id)
    },

    Mutation: {
        createBook: async (_, args) => {
            const book = new BookModel(args);
            await book.save();
            return book;
        },

        updateBook: async (_, args) => {
            await BookModel.findByIdAndUpdate(args._id, args, { new: true });
            return await BookModel.findById(args._id);
        },

        deleteBook: async (_, args) => {
            const book = await BookModel.findByIdAndRemove(args._id);
            if (book) return true;
            return false;
        }
    }
}