import React, { Fragment, useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GridGifItem } from './GridGifItem';

export const GifGrid = ( { category } ) => {

    // Aqui usamos la desestructuracion y al mismo tiempo renombramos data como images 
    // para utilizar images en lugar de data
    const { data: images, loading } = useFetchGifs( category );

    
    console.log(images);
    
    

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>
            
            { loading && <p className='animate__animated animate__flash'> Loading... </p>}
            
            <div className="card-grid">
                <div>
                    {
                        images.map( (img) => {
                            return(
                                <GridGifItem 
                                    key={ img.id }
                                    { ...img }/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default GifGrid;
