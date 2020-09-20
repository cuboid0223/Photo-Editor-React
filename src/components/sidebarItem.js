import React from 'react'

const sidebarItem = ({name, active, handleClick}) => {
    return (
     
        <button 
        className={`sidebar__item ${active ? 'active': ''}`}
        onClick={handleClick}
        >{name}</button>
    )
}

export default sidebarItem
