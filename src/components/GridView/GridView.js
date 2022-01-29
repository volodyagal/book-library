import React from 'react';
import './GridView.scss'
import Card from "../Card";

const GridView = ({books, openBook}) => {
    return (
        <div className='grid'>
            {
                books && books.map(book => <Card
                    key={book.id}
                    book={book}
                    openBook={openBook}/>)
            }
        </div>
    );
};

export default GridView;
