let books = [];
const endpointFromAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

handleGetSearchBooksFromAPI();

async function handleGetSearchBooksFromAPI() {
    const response = await fetch(endpointFromAPI);
    books = await response.json();

    let discountedBooks = handleApplyDiscount(books);

    handleDisplayBooksOnScreen(discountedBooks);
}