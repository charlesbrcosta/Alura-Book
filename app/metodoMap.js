function handleApplyDiscount(books) {
    const discount = 0.7;
    discountedBook = books.map(book => {
        return {...book, preco: book.preco * discount}
    });

    return discountedBook;
}