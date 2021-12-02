import React from 'react';
import {watchButton, watchLink} from './Watch-of-choice';
import { general } from './newArrivals';

const headerStyle = {
    fontSize: '3rem',
    marginRight: '-6rem'
};


const textArea = {
    marginLeft: '-15rem',
    marginRight: '-4rem',
    fontSize: '1.5rem'
};

const watchImgStyle = {
    width: '25rem',
    marginLeft: '-5rem'
}

function WATCH_2(props) {
    return (
        <div className='watchBottom row' style={general}>
            <div className='watchImg'>
                <img src={props.img} alt='img_14' style={watchImgStyle}/>
            </div>
            <div className='watchText' style={textArea}>
                <h1 style={headerStyle}>{props.heading}</h1> <br />
                <p>{props.text}</p> <br />
                <button type='button' style={watchButton}><a href='./shop.html' style={watchLink}>SHOW WATCHES</a></button>
            </div>
        </div>
    );
}

export default WATCH_2;
export {watchImgStyle};