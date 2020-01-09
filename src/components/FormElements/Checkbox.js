import React from 'react'

function Checkbox ({ isSelected, name, onCheckboxChange }) {
    return (
        <input type="checkbox" value={ name } onChange={onCheckboxChange} checked={ isSelected } />
    )
}

export default Checkbox