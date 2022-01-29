import React from 'react';
import './ListView.scss';

const ListView = ({books, openBook}) => {

    return (
        <div className='list'>
            <table>
                <thead>
                <tr>
                    <th>
                        <div>
                            <p>Book Title & Author</p>
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4.5L4 1.5L7 4.5" strokeWidth="1.5"/>
                                <path d="M7 7.5L4 10.5L1 7.5" strokeWidth="1.5"/>
                            </svg>
                        </div>
                    </th>
                    <th>
                        <div>
                            <p>Genre</p>
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4.5L4 1.5L7 4.5" strokeWidth="1.5"/>
                                <path d="M7 7.5L4 10.5L1 7.5" strokeWidth="1.5"/>
                            </svg>
                        </div>
                    </th>
                    <th>
                        <div>
                            <p>Reading Progress</p>
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4.5L4 1.5L7 4.5" strokeWidth="1.5"/>
                                <path d="M7 7.5L4 10.5L1 7.5" strokeWidth="1.5"/>
                            </svg>
                        </div>
                    </th>
                    <th>
                        <div>
                            <p>Last Opened</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7"
                                 fill="none">
                                <path d="M1.5 0.75L6 5.25L10.5 0.75" strokeWidth="1.5"/>
                            </svg>
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    books && books.map(book => {
                        return (
                            <tr key={book.id} onClick={() => openBook(book.id)}>
                                <td className='title-author'>
                                    <div className='book-image'>
                                        <img src={book.imgUrl} alt="book-img"/>
                                    </div>
                                    <div className='text'>
                                        <p className='title'>{book.title}</p>
                                        <p className='author'>{book.author}</p>
                                    </div>
                                </td>
                                <td>
                                    <p className='genre'>{book.content}</p>
                                </td>
                                <td>
                                    <p className='list-progress'>{book.percentage}</p>
                                </td>
                                <td>
                                    <p className='last-opened'>{book.lastOpened}</p>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default ListView;
