import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search'

function Search() {
    const [searchInput, setSearchInput] = useState("");


    return (
        <div className='search'>
            <SearchIcon className='serch-icon' />
            <input
                className='search-input'
                type={'text'}
                onChange={(e) => {
                    setSearchInput(e.target.value);
                }}
                placeholder='Search other users'
            />
        </div>
    )
}

export default Search