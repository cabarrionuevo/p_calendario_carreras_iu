import { TextField } from '@mui/material';
import React, { useState } from 'react'

export const SearchCategory = ({ onAddOwner }) => {
  
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target })=>{
        setInputValue(target.value);
    }
    
    const onSubmit = ( event )=>{    
        event.preventDefault();        
        if(inputValue.trim().length <= 1) return;
        onAddOwner(inputValue);
        setInputValue('');        
    }
  
    return (
        <form onSubmit={ onSubmit }>
        <TextField 
            fullWidth 
            label="Organizador" 
            id="fullWidth" 
            value={inputValue}
            onChange={onInputChange} />                 
        </form>
  )
}
