const elementForInsertingBooks = document.getElementById('livros');
const elementTotalValueAvailableBooks = document.getElementById('valor_total_livros_disponiveis');

function handleDisplayBooksOnScreen(listBooks) {
    elementTotalValueAvailableBooks.innerHTML = '';
    elementForInsertingBooks.innerHTML = '';
    listBooks.forEach(book => {
        /* let availability = checkBookAvailability(book); */
        let availability = book.quantidade < 1 ? 'livro__imagens indisponivel' : 'livro_imagens'; 
        elementForInsertingBooks.innerHTML += `
        <div class="livro">
            <img class="${availability}" src="${book.imagem}" alt="${book.alt}" />
            <h2 class="livro__titulo">${book.titulo}</h2>
                <p class="livro__descricao">${book.autor}</p>
                <p class="livro__preco" id="preco">R$ ${book.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${book.categoria}</span>
            </div>
        </div>`;
    });
}

/* function checkBookAvailability(books) {
    if(books.quantidade < 1) {
        return "livro__imagens indisponivel";
    } else {
        return "livro__imagens"
    }

} */