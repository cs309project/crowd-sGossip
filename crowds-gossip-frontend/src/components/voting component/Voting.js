import React, { useState } from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Voting.css'

function Voting({upVoters, downVoters, _id}) {
    const [upVotes, setUpVotes] = useState(upVoters.length)
    const [downVotes, setDownVotes] = useState(downVoters.length)

    return (
        <div className='vote-container'>
            <div className='arrow-up-div'>
                <ArrowDropUpIcon
                    fontSize='large'
                    onClick={() => alert('up vote')}
                />
            </div>
            <div className='up-vote-stat'>
                <p>{upVotes}</p>
            </div>
            <div className='down-vote-stat'>
                <p>{downVotes}</p>
            </div>
            <div className='arrow-down-div'>
                <ArrowDropDownIcon
                fontSize='large'
                onClick={() => alert('down vote')}
                />
            </div>
        </div>
    )
}

export default Voting