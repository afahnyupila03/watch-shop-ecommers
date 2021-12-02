import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Arrivals from '../Arrivals.js';
import Card from './newArrivals';
import Footer from './Footer';
import Popular from './Popular';
import popular, {popular2} from '../popular';
import Watch from './Watch-of-choice';
import WATCH_2 from './Watch222';
import watch_1, {watch_2a} from '../Watches';
import Random from './Random';
import FreeShipping from './Free-shipping';

// Inline Styling
// Arrivals
const mainStyle = {
    padding: '4rem 2rem',
    margin: '2rem 8rem',
    fontSize: '2rem',
};
const arrivalText = {
    marginBottom: '-3rem'
};

// Popular
const popularStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    marginTop: '4rem'
};
const popularPara = {
    fontSize: '1rem',
    textAlign: 'center',
    marginLeft: '22rem',
    marginRight: '22rem'
}
const viewButton = {
    backgroundColor: 'red',
    boderRadius: '0.6rem',
    margin: '8rem 0',
    marginLeft: '35rem',
    height: '3rem',
    borderStyle: 'none',
    width: '20rem',
    borderWidth: '2rem'
};
const view = {
    backgroundColor: 'red',
    color: 'white',
    fontSize: '1.5rem',
    textAlign: 'center'
};

function App() {
    return (
        <div>
            <Header />

            <Banner />
            
            {/* Arrival Items */}
            <div className='row' style={mainStyle}>
                <h1 className='cardText' style={arrivalText}>New Arrivals</h1>
            </div>
            <div className='row'>
                {Arrivals.map((arrivallItems) => (
                    <Card
                        key={arrivallItems.id}
                        img={arrivallItems.img}
                        name={arrivallItems.name}
                        price={arrivallItems.price}
                    />)
                )}
            </div>

            {/* Random Images */}
            <Random />

            {/* Popular Items */}
            <div className='row' style={popularStyle}>
                <div className='popularText'>
                    <h1>Popular Items</h1> <br />
                    <p style={popularPara}>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                </div>
            </div>
            <div className='row'>
                {popular.map((popularItems) => (
                    <Popular
                        key={popularItems.id}
                        img={popularItems.img}
                        name={popularItems.name}
                        price={popularItems.price}
                    />
                )
                )}
            </div>
            <div className='row'>
                {popular2.map((popularItems) => (
                    <Popular
                        key={popularItems.id}
                        img={popularItems.img}
                        name={popularItems.name}
                        price={popularItems.price}
                    />)
                )}
            </div>

            {/* More Products Button Link */}
            <div className='row more-products'>
                <button type='button' style={viewButton}><a href='./catalogi.html' style={view}>VIEW MORE PRODUCTS</a></button>
            </div>

            {/* Watch of Choice */}
            <div className='row'>
                {watch_1.map((choiceItems) => (
                    <Watch
                        key={choiceItems.id}
                        heading={choiceItems.heading}
                        text={choiceItems.text}
                        img={choiceItems.img}
                    />
                )
                )}
            </div>
            <div className='row'>
                {watch_2a.map((watchItems) => (
                    <WATCH_2
                        key={watchItems.id}
                        heading={watchItems.heading}
                        text={watchItems.text}
                        img={watchItems.img}
                    />
                )
                )}
            </div>

            {/* Free-Shipping */}
            <FreeShipping />
            <Footer />
        </div>
    );
}

export default App;