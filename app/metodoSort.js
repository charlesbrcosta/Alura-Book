const buttonSortByPrice = document.getElementById('btnOrdenarPorPreco');

function handleSortByPrice() {
    let orderedPrices = books.sort((a, b) =>  a.preco - b.preco);
    handleDisplayBooksOnScreen(orderedPrices);
}

buttonSortByPrice.addEventListener('click', handleSortByPrice);