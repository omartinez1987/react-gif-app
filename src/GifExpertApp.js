import React, { Fragment, useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['Dragon Ball Z']);

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } categories={ categories }/>
            <hr/>
            <ol>
                {
                    categories.map(
                        ( category ) => {
                            return (
                                <GifGrid category={ category } key={ category }/>
                            )
                        }   
                    )
                }
            </ol>
        </>
    )
};

export default GifExpertApp;
