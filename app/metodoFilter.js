const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => btn.addEventListener('click', handlefilterBooks));

function handlefilterBooks(){
    const elementBtn = document.getElementById(this.id);
    let category = elementBtn.value;
    let filteredBooks = category === 'disponivel' ? handleAvailability() : handleFilterCategory(category);

    handleDisplayBooksOnScreen(filteredBooks);

    if(category === 'disponivel'){
        const amount = handleCalculateTotalValueAvailableBooks(filteredBooks);
        
        handleShowTotalValueAvailableBooks(amount);
    }    
}

function handleFilterCategory(category) {
    return books.filter(book => book.categoria == category);
}

function handleAvailability() {
    return books.filter(book => book.quantidade > 0);
}

function handleShowTotalValueAvailableBooks(amount) {
    elementTotalValueAvailableBooks.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${amount}</span></p>
    </div>`
}
