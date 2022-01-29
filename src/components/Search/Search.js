import React, {useState} from 'react';
import './Search.scss'

const Search = ({searchBook, searchValue, emptyField, isMobile = false}) => {
    const [activeSearch, setActiveSearch] = useState(isMobile);

    const resetSearch = () => {
        if (isMobile) {
            setActiveSearch(true)
            emptyField()
        } else {
            setActiveSearch(false)
            emptyField()
        }
    }

    return (
        <div className={`search ${activeSearch ? 'active' : ''}`}>
            <div className='search-icon' onClick={() => setActiveSearch(true)}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M13.5 7.5C13.5 10.8137 10.8137 13.5 7.5 13.5C4.18629 13.5 1.5 10.8137 1.5 7.5C1.5 4.18629 4.18629 1.5 7.5 1.5C10.8137 1.5 13.5 4.18629 13.5 7.5ZM12.2465 13.3072C10.9536 14.3652 9.30095 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 9.30095 14.3652 10.9536 13.3072 12.2465L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4874 18.0732 17.0126 18.0732 16.7197 17.7803L12.2465 13.3072Z"/>
                </svg>
            </div>
            <input
                type="search"
                className='search-field'
                placeholder='Search for Keywords...'
                value={searchValue}
                onChange={event => searchBook(event.target.value)}
            />
            {
                activeSearch ?
                    <div className='close-icon' onClick={resetSearch}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M14.3033 3.6967C17.2322 6.62563 17.2322 11.3744 14.3033 14.3033C11.3744 17.2322 6.62563 17.2322 3.6967 14.3033C0.767767 11.3744 0.767767 6.62563 3.6967 3.6967C6.62563 0.767767 11.3744 0.767767 14.3033 3.6967ZM15.364 2.63604C18.8787 6.15076 18.8787 11.8492 15.364 15.364C11.8492 18.8787 6.15076 18.8787 2.63604 15.364C-0.87868 11.8492 -0.87868 6.15076 2.63604 2.63604C6.15076 -0.87868 11.8492 -0.87868 15.364 2.63604ZM11.6516 5.2877L12.7123 6.34836L10.0606 9.00001L12.7123 11.6517L11.6516 12.7123L8.99998 10.0607L6.34833 12.7123L5.28767 11.6517L7.93932 9.00001L5.28767 6.34836L6.34833 5.2877L8.99998 7.93935L11.6516 5.2877Z"/>
                        </svg>
                    </div>
                    :
                    ''
            }
        </div>
    );
};

export default Search;
