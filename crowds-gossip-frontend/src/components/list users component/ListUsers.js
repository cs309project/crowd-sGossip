import React, { useState, useEffect } from 'react'
import User from '../User component/User';

function ListUsers({ props }) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(props)
    }, [props]);


    return (
        <div>
            {
                users && users.length ? users.map((e, index) => {
                    return <User key={index} uID={e} />
                }) : null
            }
        </div>
    )
}

export default ListUsers