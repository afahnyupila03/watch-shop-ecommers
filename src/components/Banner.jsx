import React from 'react';

function Banner() {
    return(
        <div className='headerContent'>
            <div className='row'>
                <div className='headerForm'>
                    <form>
                        <h1>Select Your New Perfect Style</h1> <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit deserunt odio perspiciatis, quis mollitia praesentium blanditiis officiis consequatur! Repudiandae!</p>
                        <input type='submit' value='SHOP NOW' />
                    </form>
                </div>
                <div className='headerImage'>
                    <img src='/banner.webp' alt='banner' />
                </div>
            </div>
        </div>
    );
}

export default Banner;