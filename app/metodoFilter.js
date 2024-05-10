const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => btn.addEventListener('click', handlefilterBooks));

function handlefilterBooks(){
    const elementBtn = document.getElementById(this.id);
    let category = elementBtn.value;
    let filteredBooks = books.filter(book => book.categoria == category);
    handleDisplayBooksOnScreen(filteredBooks);
}
  