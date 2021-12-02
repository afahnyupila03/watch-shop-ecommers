import React from 'react';

const boxStyle = {
    marginRight: '.8rem'
}
const red = {
    color: 'red'
};

function Header() {
    return(
        <header>
            <div className='header'>
                {/* Navbar */}
                <nav>
                    {/* Brand Link */}
                    <div className='logo'>
                        <a href='./index.html'>Time<span style={red}>Zone</span></a>
                    </div>

                    {/* Nav Links */}
                    <ul>
                        <li>
                            <a href='/index.html'>Home</a>
                        </li>
                        <li>
                            <a href='/shop.html'>Shop</a>
                        </li>
                        <li>
                            <a href='/about.html'>About</a>
                        </li>
                        <li>
                            <a href='/#'>Latest</a>
                        </li>
                        <li>
                            <a href='/blog.html'>Blog</a>
                        </li>
                        <li>
                            <a href='/#'>Pages</a>
                        </li>
                        <li>
                            <a href='/contact.html'>Contact</a>
                        </li>
                    </ul>

                    {/* Navbar Icons */}
                    <div className='box-icon'>
                        <ul>
                            <li>
                                <a href='./#'><box-icon name='search-alt-2' size='sm' style={boxStyle}></box-icon></a>
                            </li>
                            <li>
                                <a href='./login.html'><box-icon name='user' size='sm' style={boxStyle}></box-icon></a>
                            </li>
                            <li>
                                <a href='./cart.html'><box-icon name='cart' size='sm' style={boxStyle}></box-icon></a>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* !Navbar */}
            </div>
        </header>
    );
}

export default Header;

