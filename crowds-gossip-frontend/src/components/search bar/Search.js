import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate } from 'react-router-dom';

function Search({setText}) {
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate()
    
    return (
        <div className='search'>
            <SearchIcon className='serch-icon' />
            <input
                className='search-input'
                type={'text'}
                onChange={(e) => {
                    setSearchInput(e.target.value);
                    setText(e.target.value)
                }}
                onClick={()=>navigate('/search')}
                placeholder='Search other users'
            />
        </div>
    )
}

export default Search