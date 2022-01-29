import React from 'react';
import './Navbar.scss'
import Search from "../Search";

const Navbar = (props) => {
    const {grid, setGrid, title, searchValue, emptyField, searchBook} = props;

    return (
        <div className='nav-bar'>
            <div className='left-side'>
                <p className='title'>{title}</p>
                <div className='more-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <mask id="mask0_5677_427" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0"
                              width="18" height="18">
                            <circle cx="2.25" cy="9" r="2.25" fill="black"/>
                            <circle cx="15.75" cy="9" r="2.25" fill="black"/>
                            <circle cx="9" cy="9" r="2.25" fill="black"/>
                        </mask>
                        <g mask="url(#mask0_5677_427)">
                            <rect x="-3" y="-3" width="24" height="24" fill="#0C635A"/>
                        </g>
                    </svg>
                </div>
            </div>
            <div className='right-side'>
                <div className='icons-wrapper'>
                    <div className={`icon grid-icon ${grid ? 'active' : ''}`} onClick={() => setGrid(true)}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.75" y="0.75" width="6" height="6" rx="1.5" strokeWidth="1.5"/>
                            <rect x="0.75" y="11.25" width="6" height="6" rx="1.5" strokeWidth="1.5"/>
                            <rect x="11.25" y="0.75" width="6" height="6" rx="1.5" strokeWidth="1.5"/>
                            <rect x="11.25" y="11.25" width="6" height="6" rx="1.5" strokeWidth="1.5"/>
                        </svg>
                    </div>
                    <div className={`icon list-icon ${!grid ? 'active' : ''}`} onClick={() => setGrid(false)}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="10.5" width="18" height="1.5"/>
                            <rect x="3" y="15" width="12" height="1.5"/>
                            <rect x="3" y="6" width="12" height="1.5"/>
                            <rect y="1.5" width="18" height="1.5"/>
                        </svg>
                    </div>
                </div>
                <Search searchBook={searchBook} searchValue={searchValue} emptyField={emptyField}/>
            </div>
        </div>
    );
};

export default Navbar;
