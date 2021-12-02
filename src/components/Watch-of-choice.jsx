import React from 'react';
import {general} from './newArrivals';

const imgStyle = {
    width: '25rem',
    marginLeft: '5rem'
};

const headerStyle = {
    fontSize: '3rem',
    marginRight: '-4rem'
};

const textArea = {
    marginLeft: '-2rem',
    marginRight: '-6rem',
    fontSize: '1.5rem'
};

const watchButton = {
    width: '10rem',
    height: '3rem',
    borderStyle: 'none',
    backgroundColor: 'red',
};

const watchLink = {
    fontSize: '1rem',
    color: 'white'
};




function Watch(props) {
    return (
        <div className='watchTop row' style={general}>
            <div className='watchText' style={textArea}>
                <h1 style={headerStyle}>{props.heading}</h1> <br />
                <p>{props.text}</p> <br />
                <button type='button' style={watchButton}><a href='./shop.html' style={watchLink}>SHOW WATCHES</a></button>
            </div>
            <div className='watchImg'>
                <img src={props.img} alt='img_14' style={imgStyle}/>
            </div>
        </div>
    );
}



export default Watch;
export {watchButton, watchLink};