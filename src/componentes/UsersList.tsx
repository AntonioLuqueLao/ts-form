import { user } from "../types";

interface listPropTypes {
    users: user[]
}
const UserList = ({users}: listPropTypes) => {
    return (
        <div>
            <ul>
                {users.map(user => {
                    return (
                        <li key={user.username}>
                            <p>{user.username}</p>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default UserList;