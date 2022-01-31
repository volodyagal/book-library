import React, {useEffect, useState} from 'react';
import './Books.scss';
import Modal from "../../components/Modal";
import {booksApi} from "../../api/api";
import Navbar from "../../components/Navbar";
import GridView from "../../components/GridView";
import ListView from "../../components/ListView";
import Search from "../../components/Search";

const Books = () => {
    const [modalActive, setModalActive] = useState(false);
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [book, setBook] = useState({});
    const [grid, setGrid] = useState(true);

    useEffect(() => {
        booksApi.fetchBooks().then(data => setBooks(data))
    }, [])


    const openBookModal = (id) => {
        setBook(books[id - 1])
        setModalActive(true)
    }

    const closeBookModal = () => {
        setBook({})
        setModalActive(false)
    }

    const searchBook = (value) => {
        setSearchValue(value)
        if (value.length) {
            const filteredItems = books.filter(book => {
                return book.title.toLowerCase().includes(value.toLowerCase())
                    || book.author.toLowerCase().includes(value.toLowerCase())
                    || book.content.toLowerCase().includes(value.toLowerCase())
            })
            setFilteredBooks(filteredItems)
        } else {
            setFilteredBooks(books)
        }
    }


    return (
        <div>
            <Navbar
                title={'Book Library'}
                grid={grid}
                setGrid={setGrid}
                searchValue={searchValue}
                emptyField={() => setFilteredBooks(books)}
                searchBook={searchBook}
            />
            <div className='mobile-search'>
                <Search searchBook={searchBook} searchValue={searchValue} emptyField={() => setFilteredBooks(books)}
                        isMobile={true}/>
            </div>
            <div className='books-wrapper'>
                {
                    grid
                        ?
                        <GridView books={searchValue.length ? filteredBooks : books} openBook={openBookModal}/>
                        :
                        <ListView books={searchValue.length ? filteredBooks : books} openBook={openBookModal}/>
                }
                <Modal active={modalActive} setActive={setModalActive}>
                    <div className='modal-close-btn' onClick={() => closeBookModal(false)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 13.591L9.0455 16.5455L7.4545 14.9545L10.409 12L7.4545 9.0455L9.0455 7.4545L12 10.409L14.9545 7.4545L16.5455 9.0455L13.591 12L16.5455 14.9545L14.9545 16.5455L12 13.591Z"/>
                        </svg>
                    </div>
                    <div className='modal-image'>
                        <img src={book.imgUrl} alt="modal"/>
                    </div>
                    <p className='book-title'>{book.title}</p>
                    <p className='book-author'>{book.author}</p>
                    <p className='book-description'>{book.description}</p>
                    <div className='myModal-footer'>
                        <button className='close-btn' onClick={() => closeBookModal(false)}>Close</button>
                        <button className='continue-btn' onClick={() => closeBookModal(false)}>Continue Reading</button>
                    </div>
                </Modal>
            </div>
        </div>

    );
};

export default Books;
