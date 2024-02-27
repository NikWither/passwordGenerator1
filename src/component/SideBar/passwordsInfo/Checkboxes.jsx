import React from 'react'

export const Checkboxes = ({ value, handleCheckboxChange, checked, id, info }) => {
  return (
    <div>
      <input 
        type="checkbox" 
        id={id} 
        checked={checked} 
        onChange={handleCheckboxChange}
      />
      <label className="">{value}</label>
      <p>{info}</p>
    </div>
  )
}
