import React from 'react'
import './Search.scss'
export const Search = () => {
  return (
    <div className='search'>
      <div className="search-container">
        <div className="search-border">
          <input className="search-input" type="text" placeholder="Tìm kiếm..."></input>
          <i className="fas fa-search navbar__search-icon"></i>
        </div>
      </div>
    </div>
  )
}
