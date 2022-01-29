import React from 'react';
import './Card.scss'

const Card = ({book, openBook}) => {
    const {id, title, author, imgUrl, content, percentage} = book;
    return (
        <div className='cart'>
            <div className='cart-img' onClick={() => openBook(id)}>
                <p className='percent'>{percentage}</p>
                <img src={imgUrl} alt="cart"/>
                <p className='about'>{content}</p>
            </div>
            <p className='cart-title'>{title}</p>
            <p className='cart-subTitle'>{author}</p>
        </div>
    );
};

export default Card;
