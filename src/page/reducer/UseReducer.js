import React from 'react';
import { useState } from 'react';
import OthersNavbar from '../OthersNavbar';

const bookList = [
    { id: 101, name: 'Fik-hus Sirah' },
    { id: 102, name: 'Rain Drops Sirah' },
    { id: 103, name: 'Roufur Rahim' },
    { id: 104, name: 'Ar-Rahikul Maktum' },
    { id: 105, name: 'Jemon Chilen Tini' }
]

const Modal = ({ modalText }) => {
    return <p style={{ color: 'green', marginBottom: '20px' }}>{modalText}</p>
}

const UseReducer = () => {
    const [books, setBooks] = useState(bookList);
    const [bookName, setBookName] = useState('');
    const [modalText, setModalText] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddBook = e => {
        e.preventDefault();
        setBooks((prevValue) => {
            const newBook = { id: new Date().getTime(), name: bookName };
            return [...prevValue, newBook]
        });
        setIsModalOpen(true);
        setModalText('Book is Added')
        setBookName('');
    }

    return (
        <>
            <OthersNavbar />
            <div style={{ textAlign: 'center' }}>
                <h1>Book List</h1>
                <form onSubmit={handleAddBook}>
                    <input
                        type="text"
                        placeholder='Add New Book'
                        defaultValue={bookName}
                        onChange={(e) => setBookName(e.target.value)}
                    />
                    <button>Add Book</button>
                </form>

                {
                    isModalOpen && <Modal modalText={modalText} />
                }

                {
                    books.map(book => {
                        const { id, name } = book;
                        return <li key={id}>{name}</li>
                    })
                }
            </div>
        </>
    );
};

export default UseReducer;