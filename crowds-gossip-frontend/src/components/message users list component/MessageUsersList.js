import React, { useState } from 'react'
import UserInMessages from '../user in messages component/UserInMessages';

function MessageUsersList({props}) {
    const [users, setUsers] = useState(props);
    return (
        <div>
            {
                users.map((e, index) => {
                    return <UserInMessages key={index} ProfileImg={e.ProfileImg} name={e.name} />
                })
            }
        </div>
    )
}

export default MessageUsersList