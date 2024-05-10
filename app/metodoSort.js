const buttonSortByPrice = document.getElementById('btnOrdenarPorPreco');

function sortByPrice() {
    let orderedPrices = books.sort((a, b) =>  b.preco - a.preco);
    handleDisplayBooksOnScreen(orderedPrices);
}

buttonSortByPrice.addEventListener('click', sortByPrice);