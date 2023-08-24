import React from 'react'
import './Card.css'

function Card({title, imageUrl, body}) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={imageUrl} alt=''/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>{title}</h3>
                </div>
                <div className='card-body'>
                    <p>Build time: {body}</p>
                </div>
            </div>
            <div className='btn'>
                <button>
                    <a>
                        View More
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Card