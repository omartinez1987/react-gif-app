
import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ( { setCategories, categories } ) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        console.log('Submit hecho!!');
        if( inputValue.trim().length > 2 ){
            setCategories( [ inputValue, ...categories ] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h2>Add category</h2>

            <input 
                type="text"
                onChange = { handleInputChange }
                value={ inputValue }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;