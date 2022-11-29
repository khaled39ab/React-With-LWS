export const reducer = (state, action) => {
    /*   
     const [books, setBooks] = useState(bookList);
     const [modalText, setModalText] = useState('');
     const [isModalOpen, setIsModalOpen] = useState(false);
    */

    if (action.type === 'ADD') {
        const allBooks = [...state.books, action.payload]
        return {
            ...state,
            books: allBooks,
            isModalOpen: true,
            modalText: 'Book is Added'
        }
    }
    if (action.type === "REMOVE") {
        const filteredBook = [...state.books].filter(book => book.id !== action.payload);
        return {
            ...state,
            books: filteredBook,
            isModalOpen: true,
            modalText: "Book is Removed"
        }
    }
    return state;
}