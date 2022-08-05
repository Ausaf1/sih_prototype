import React from 'react';
import Avatar from "./avatar";
import Details from "./details";

function Card(props) {
    return (
        <div className='card'>
            <div className='top'>
                <h1 className='name'>{props.name} </h1>
                < Avatar imgURL={props.imgURL} />
            </div>
            <div className='bottom'>
                <Details detailsinfo={props.phone} />
                <form action="https://drive.google.com/file/d/1ce9AiJB9DleUCC9Hu-E4VbZuzzl1CMeY/view?usp=sharing">
                    <input className='download-button' type="submit" value="Download" />
                </form>
                {/* <a className='download-button' href="https://drive.google.com/file/d/1ce9AiJB9DleUCC9Hu-E4VbZuzzl1CMeY/view?usp=sharing">Download!</a> */}
                {/* <button><a href='https://drive.google.com/file/d/1ce9AiJB9DleUCC9Hu-E4VbZuzzl1CMeY/view?usp=sharing'>Download</a></button> */}
            </div>
        </div>
    );
}

export default Card;