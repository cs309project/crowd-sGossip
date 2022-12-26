import React, { useState, useEffect } from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Voting.css'
import { handleDownVote, handleUpVote } from '../../API/Post';

function Voting({ currentUser ,upVoters, downVoters, _id, updated, setUpdated }) {
    const [upVotes, setUpVotes] = useState(0)
    const [downVotes, setDownVotes] = useState(0)

    const upVotePress = async () => {
        await handleUpVote({
            _id: _id.toString(),
            upVoter: currentUser._id.toString(),
            upVoters,
            downVoters
        })
        setUpdated(!updated)
    }

    const downVotePress = async () => {
        await handleDownVote({
            _id: _id.toString(),
            downVoter: currentUser._id.toString(),
            upVoters,
            downVoters
        })
        setUpdated(!updated)
    }

    useEffect(() => {
        if (upVoters && downVoters) {
            setUpVotes(upVoters.length)
            setDownVotes(downVoters.length)
        }
    }, [upVoters, downVoters, _id])


    return (
        <div className='vote-container'>
            <div className='up-vote-container'>
                <ArrowDropUpIcon
                    className='arrow-up'
                    fontSize='large'
                    onClick={async () => await upVotePress()}
                />
                <p>{upVotes}</p>
            </div>
            <div className='down-vote-container'>
                <p>{downVotes}</p>
                <ArrowDropDownIcon
                    className='arrow-down'
                    fontSize='large'
                    onClick={async () => await downVotePress()}
                />
            </div>
        </div>
    )
}

export default Voting