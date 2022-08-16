import React from 'react';
import './bannerMid.css';
function BannerMid() {

    return (
        <div className='bannerMid'>
            <div className='container'>
                <div className='heading'>
                    <h2>SIH JOURNEY SO FAR FROM 2021</h2>
                </div>
                <div className='content1'>
                    <div className='box1'>
                        <div className='nums'><h1>15,00,000+</h1></div>
                        <div className='description'>
                            <p>Students</p>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='nums'><h1>8127+</h1></div>
                        <div className='description'><p>Institutes</p></div>
                    </div>
                    <div className='box1'>
                        <div className='nums'><h1>365</h1></div>
                        <div className='description'><p>Organizations</p></div>
                    </div>
                    <div className='box1'>
                        <div className='nums'><h1>6,535</h1></div>
                        <div className='description'><p>Selected Ideas solutions</p></div>
                    </div>
                    <div className='box2'>
                        <div className='nums'><h1>2145+</h1></div>
                        <div className='description'><p>Problem Statements</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BannerMid;