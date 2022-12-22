import React, { useState } from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Voting.css'

function Voting({ upVoters, downVoters, _id }) {
    const [upVotes, setUpVotes] = useState(upVoters.length)
    const [downVotes, setDownVotes] = useState(downVoters.length)

    return (
        <div className='vote-container'>
            <div className='up-vote-container'>
                <ArrowDropUpIcon
                    className='arrow-up'
                    fontSize='large'
                    onClick={() => alert('up vote')}
                />
                <p>{upVotes}</p>
            </div>
            <div className='down-vote-container'>
                <p>{downVotes}</p>
                <ArrowDropDownIcon
                    className='arrow-down'
                    fontSize='large'
                    onClick={() => alert('down vote')}
                />
            </div>
        </div>
    )
}

export default Voting