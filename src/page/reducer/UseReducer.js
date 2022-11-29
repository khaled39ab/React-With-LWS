
import React from 'react';
import { useReducer } from 'react';
import { useState } from 'react';
import OthersNavbar from '../OthersNavbar';
import { reducer } from './reducer'

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
/* 
    const [bookState, dispatch] = useReducer(reducer, {
        books: bookList,
        isModalOpen: true,
        modalText: ''
    });
 */
    const initialState = {
        books: bookList,
        isModalOpen: true,
        modalText: ''
    }
    const [bookState, dispatch] = useReducer(reducer, initialState);
    const [bookName, setBookName] = useState("");

    const handleAddBook = e => {
        e.preventDefault();
        /*   
          setBooks((prevValue) => {
              const newBook = { id: new Date().getTime(), name: bookName };
              return [...prevValue, newBook]
          });
          setIsModalOpen(true);
          setModalText('Book is Added');
        */
        const newBook = { id: new Date().getTime(), name: bookName }
        dispatch({ type: 'ADD', payload: newBook })
        setBookName("");
    }

    const handleRemove = (id) => {
        dispatch({ type: "REMOVE", payload: id })
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
                        value={bookName}
                        onChange={(e) => {
                            setBookName(e.target.value)
                        }}
                    />
                    <button type='submit'>Add Book</button>
                </form>

                {
                    bookState.isModalOpen && <Modal modalText={bookState.modalText} />
                }

                {
                    bookState.books.map(book => {
                        const { id, name } = book;
                        return <li key={id}>
                            {name}
                            <button onClick={() => handleRemove(id)}>Remove</button>
                        </li>
                    })
                }
            </div>
        </>
    );
};

export default UseReducer;
