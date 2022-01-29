import React, {useState} from 'react';
import './Sidebar.scss';
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    const {switchTheme, theme} = props;
    const [checked, setChecked] = useState(false);
    const switchDarkMode = () => {
        if (theme === 'light') {
            setChecked(true)
        } else {
            setChecked(false)
        }
        switchTheme()
    }
    return (
        <div className='sidebar'>
            <p className='title'>Library</p>
            <div className='sidebar-items'>
                <NavLink to="/books" className='sidebar-link'>
                    <div className='d-flex align-items-center'>
                        <div className='play-icon'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="9" cy="9" r="8.25" strokeWidth="1.5"/>
                                <path
                                    d="M12.375 8.35048C12.875 8.63916 12.875 9.36084 12.375 9.64952L7.875 12.2476C7.375 12.5363 6.75 12.1754 6.75 11.5981L6.75 6.40192C6.75 5.82457 7.375 5.46373 7.875 5.7524L12.375 8.35048Z"
                                    strokeWidth="1.5"/>
                            </svg>
                        </div>
                        <p className='text'>My Books</p>
                    </div>
                    <div className='books-quantity'> 15</div>
                </NavLink>
                <div className='addNewBookBtn'>
                    <div className='plus-icon'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="9" cy="9" r="8.25" strokeWidth="1.5"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M9.75 4.5H8.25V8.25L4.5 8.25V9.75H8.25V13.5H9.75V9.75H13.5V8.25L9.75 8.25V4.5Z"/>
                        </svg>
                    </div>
                    <p className='text'>Add New Books</p>
                </div>
            </div>
            <p className='title'>Settings</p>
            <div className='settings'>
                <div className='setting'>
                    <div className='d-flex align-items-center'>
                        <div className='darkMode-icon'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M16.5 9C16.5 12.889 13.54 16.0867 9.75 16.463V1.53703C13.54 1.91332 16.5 5.11099 16.5 9ZM8.25 1.53703V16.463C4.46001 16.0867 1.5 12.889 1.5 9C1.5 5.11099 4.46001 1.91332 8.25 1.53703ZM9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM15 9C15 11.6124 13.3304 13.8349 11 14.6586V3.34141C13.3304 4.16508 15 6.38756 15 9Z"/>
                            </svg>
                        </div>
                        <p className='text'>Dark Mode</p>
                    </div>
                    <div className="switch">
                        <input type="checkbox" onChange={switchDarkMode} checked={checked}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
