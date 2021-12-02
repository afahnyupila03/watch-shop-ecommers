import React from 'react';

const general = {
    margin: '0 10%'
}

const cardStyle = {
    fontSize: '1.5rem',
    textAlign: 'center',
    marginTop: '2rem',
    color: 'red'
};
const center = {
    textAlign: 'center'
};

function Card(props) {
    return(
                <div className='arrivallLeft'>
                    <div className='card' style={{general, marginLeft: '2cm'}}>
                        <div className='cardHead'>
                            <img src={props.img} alt='img_1' style={{height: '12cm'}} />
                        </div>
                        <div className='cardBody' style={cardStyle}>
                            <a href='./product_detail.html'>{props.name}</a>
                            <p style={center}>{props.price}</p>
                        </div>
                    </div>
                </div>
            
    );
}

export default Card;
export {general};