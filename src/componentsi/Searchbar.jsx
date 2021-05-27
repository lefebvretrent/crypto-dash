import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

const Searchbar = ({onChange, placeholder}) => {
    return (
        <div className="Search">
      <span className="SearchSpan">
        <SearchIcon />
      </span>
      <input
        className="SearchInput"
        type="text"
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
    )
}

export default Searchbar
