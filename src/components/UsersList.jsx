import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchUsers, deleteUser} from "../features/users/userSlice"

function UsersList({setEditUser}){
    const users = useSelector( (state) => state.users.list)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    }

    return(
        <div>
            <h3>Users List</h3>
            <table border={2}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map( (user,index) => (
                            <tr key={user.id}>
                                <td>{index+1}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button onClick={() =>handleDelete(user?.id)}>Delete</button>
                                    <button onClick={ () => setEditUser(user) }>Edit</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UsersList