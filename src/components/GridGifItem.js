import React from 'react'

export const GridGifItem = ({ id, title, url }) => {
    
    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={ url }/>
            <p>{ title }</p>
        </div>
    )
}
export default GridGifItem;