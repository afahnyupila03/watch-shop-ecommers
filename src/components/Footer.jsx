import React from 'react';

const date = new Date();
const currentYear = date.getFullYear();

const colorlibStyle = {
    color: "red"
};

const boxStyle = {
    marginRight: '2rem'
};

const bottom = {
    marginBottom: "1rem"
};



function Footer() {
    return(
        <footer>
            {/* Footer Links */}
            <div className='row'>

            {/* TIme Zone */}
                <div className='time-zone'>
                    <h1>Time<span style={colorlibStyle}>Zone</span></h1> <br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde autem eius</p>
                </div>

                {/* Quick Links */}
                <div className='quick-links'>
                    <h1>Quick Links</h1> <br />
                    <ul>
                        <li style={bottom}>
                            <a href='https://preview.colorlib/theme/timezone/#'>About</a>
                        </li>
                        <li style={bottom}>
                            <a href='https://preview.colorlib/theme/timezone/#'>Offers and Discounts</a>
                        </li>
                        <li style={bottom}>
                            <a href='https://preview.colorlib/theme/timezone/#'>Get Coupon</a>
                        </li>
                        <li style={bottom}>
                            <a href='https://preview.colorlib/theme/timezone/#'>Contact Us</a>
                        </li>
                    </ul>
                </div>

                {/* New Products */}
                <div className='new-products'>
                    <h1>New Products</h1> <br />
                    <ul>
                        <li style={bottom}>
                            <a href='https://preview.colorlib/theme/timezone/#'>Woman Cloth</a>
                        </li>
                        <li style={bottom}>
                            <a href='https://preview.colorlib/theme/timezone/#'>Fashion Accessories</a>
                        </li>
                        <li style={bottom}>
                            <a href='https://preview.colorlib/theme/timezone/#'>Man Accessories</a>
                        </li>
                        <li style={bottom}>
                            <a href='https://preview.colorlib/theme/timezone/#'>Rubber made Toys</a>
                        </li>
                    </ul>
                </div>

                {/* Support */}
                <div className='support'>
                    <h1>Support</h1> <br />
                    <ul>
                        <li style={bottom}>
                            <a href='https://preview.colorlib/theme/timezone/#'>Frequently Asked Questions</a>
                        </li>
                        <li style={bottom}>
                            <a href='https://preview.colorlib/theme/timezone/#'>Terms and Conditions</a>
                        </li>
                        <li style={bottom}>
                            <a href='https://preview.colorlib/theme/timezone/#'>Privacy Policy</a>
                        </li>
                        <li style={bottom}>
                            <a href='https://preview.colorlib/theme/timezone/#'>Report a Payment Issue</a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className='row'>
                <div className='text'>
                    <p>Copyright{ " ©" + currentYear + " "} All rights reserved | This template is made with <box-icon name='heart' type='solid' color='red' ></box-icon> by <span style={colorlibStyle}>Colorlib</span></p>
                </div>
                <div className='text-media'>
                    <a href='./#' style={boxStyle}>
                        <box-icon name='twitter' type='logo' size='sm'></box-icon>
                    </a>
                    <a href='./sai4ull' style={boxStyle}>
                        <box-icon name='facebook' type='logo' size='sm'></box-icon>
                    </a>
                    <a href='./#' style={boxStyle}>
                        <box-icon name='behance' type='logo' size='sm'></box-icon>
                    </a>
                    <a href='./#' style={boxStyle}>
                        <box-icon name='globe' size='sm'></box-icon>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;