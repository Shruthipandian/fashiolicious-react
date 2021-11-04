import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const Header = () => {
    return (
        <div className='header'>
        <img className="header_logo"src="logo4.jpg"/>
        <div className="header_search">
        <input className="header_searchInput"type="text" />
        <SearchIcon className="header_searchicon" />

        </div>
        <div className="header_nav">
        <div className='header_option'>
         <span className='header_optionlineone'>Hello Guest</span>
         <span className='header_optionlinetwo'>Sign In</span>

        </div>
        <div className='header_option'>
         <span className='header_optionlineone'>Returns</span>
         <span className='header_optionlinetwo'>& orders</span>

        </div>
        <div className='header_option'>
         <span className='header_optionlineone'>your</span>
         <span className='header_optionlinetwo'>prime</span>

        </div>
        <div className="header_optionbasket">
        <ShoppingCartIcon />
        <span className="header_optionlinetwo header_basketcount">0</span>

        </div>

        </div>
            
        </div>
    )
}

export default Header


