import React from 'react'
import './SearchPanel.css'
import searchicon from '../../Assets/search-icon.png'
import Filter from '../Filter/Filter'
function SearchPanel() {
    return (
        <div className="search-panel">
          <input className="search-input" placeholder="Search videos, places" type="text" />  
          <img className="search-icon" src={searchicon} alt="search" />
          <Filter />
        </div>
    )
}

export default SearchPanel
