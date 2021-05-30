import React, { Fragment, useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['Dragon Ball Z']);

    // const handleAdd = () => {
    //     //setCategories( [ ...categories, 'Otro item' ]);
    //     setCategories( ( categs ) => { return [ ...categories, 'Otro item' ] });
    // }

    return(
        <Fragment>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories={ setCategories } categories={ categories }/>
            <hr/>

            {
                categories.map(
                    ( category ) => {
                        return (
                            <GifGrid category={ category } key={ category }/>
                        )
                    }   
                )
            }
        </Fragment>
    )
};

export default GifExpertApp;
