import React from 'react';
import {general} from './newArrivals';

const textStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    marginTop: '2rem',
};

const priceStyle = {
    marginTop: '4%'
};

const imgStyle = {
    width: '20rem'
};

const buttonStyle = {
    width: '12rem',
    borderRadius: '0.6rem',
    height: '3rem',
    fontSize: '1.5rem',
    backgroundColor: 'red',
    borderStyle: 'none'
};

const white = {
    color: 'white'
};

const nameStyle = {
    fontSize: '1.2rem',
    textAlign: 'center',
    color: '#292929'
}

const stylePrice = {
    fontSize: '1rem',
    color: 'red'
};


function Popular(props) {
    return(
            <div className='row'>
            <div className='popularLeft' style={textStyle}>
                <div className='card' style={{general}}>
                    <div className='cardHead'>
                        <img src={props.img} alt='img_8' style={imgStyle} />
                    </div>
                    <div className='cardBody' style={priceStyle}>
                        <a href='./product_detail.html' style={nameStyle}>{props.name}</a>
                        <p style={stylePrice}>{props.price}</p> <br />
                        <button type='button' style={buttonStyle}><a href='product_details.html' class='cart' style={white}>Add to Cart</a></button>
                    </div>
                </div>
            </div>
            </div>
    );
}

export default Popular;