import React from 'react';

const white = {
    color: 'white',
    fontSize: '1.2rem'
}
const pText = {
    color: '#d1cfca',
    fontSize: '1.2rem'
};


function FreeShipping() {
    return(
            <div className='shippingSecureRefund'>
                <div className='row'>
                    <div className='shipping'>
                        <div className='shippingIcon'>
                            <box-icon type='solid' name='box' size='lg' color='white'></box-icon>
                        </div>
                        <div className='shippingText'>
                            <h3 style={white}>Free Shipping Method</h3> <br />
                            <p style={pText}>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                        </div>
                    </div>
                    <div className='securePayment'>
                        <div className='secureIcon'>
                            <box-icon name='lock-open' size='lg' color='white'></box-icon>
                        </div>
                        <div className='secureText'>
                            <h3 style={white}>Secure Payment Method</h3> <br />
                            <p style={pText}>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                        </div>
                    </div>
                    <div className='moneyRefund'>
                        <div className='refundIcon'>
                            <box-icon name='refresh' size='lg' color='white'></box-icon>
                        </div>
                        <div className='refundText'>
                            <h3 style={white}>Money Refund Method</h3> <br />
                            <p style={pText}>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default FreeShipping;