import React, { useState } from 'react'
import User from '../User component/User';

function ListUsers({props}) {
    const [users, setUsers] = useState(props);
    return (
        <div>
            {
                users.map((e, index) => {
                    return <User key={index} ProfileImg={e.ProfileImg} name={e.name} />
                })
            }
        </div>
    )
}

export default ListUsers