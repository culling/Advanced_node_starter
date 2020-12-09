class ProjectController {
    static find = (callback: any) => {
        callback("found Project");
    }

    // static findByIsbn = (isbn: any, callback: any) => {
    //     BookModel.find({ isbn: isbn }, (err: any, foundBooks: any) => {
    //         if (err) { console.error(err) };
    //         callback(foundBooks);
    //     });
    // }

    // static create = (book: any, callback: any) => {
    //     console.log("Create Book Called - Books Controller");
    //     console.log(book);
    //     const newBook = new BookModel(book);
    //     newBook.save((err: any) => {
    //         callback(err);
    //     });
    // };

    // static update = (book: any, callback: any) => {
    //     console.log("Update Book Called - Books Controller");
    //     console.log("Book: ", book);
    //     //const foundBook = 
    //     BookModel.update({ isbn: book.isbn }, { price: book.price }, {}, (err: any) => {
    //         callback(err);
    //     })
    // }

    // static delete = (book: any, callback: any) => {
    //     console.log("Delete Book Called - Books Controller");
    //     console.log(book);
    //     BookModel.findOneAndDelete({ isbn: book.isbn }, (err: any, results: any) => {
    //         callback(err, results);
    //     })
    // }
}

export default ProjectController;