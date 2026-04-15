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
        <div className="max-w-5xl mx-auto mt-10 px-4">
            <h3 className="text-2xl font-bold mb-6 text-gray-700 text-center">
                Users List
            </h3>

            <div className="overflow-x-auto bg-white shadow-lg rounded-2xl">
                <table className="min-w-full text-sm text-left">
                    <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                        <tr>
                        <th className="px-6 py-3">ID</th>
                        <th className="px-6 py-3">First Name</th>
                        <th className="px-6 py-3">Last Name</th>
                        <th className="px-6 py-3">Email</th>
                        <th className="px-6 py-3 text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody className="text-gray-700">
                        {users.length > 0 ? (
                        users.map((user, index) => (
                            <tr
                            key={user.id}
                            className="border-b hover:bg-gray-50 transition"
                            >
                                <td className="px-6 py-3">{index + 1}</td>
                                <td className="px-6 py-3">{user.first_name}</td>
                                <td className="px-6 py-3">{user.last_name}</td>
                                <td className="px-6 py-3">{user.email}</td>
                                <td className="px-6 py-3 flex justify-center gap-3">
                                    
                                    <button
                                    onClick={() => setEditUser(user)}
                                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg text-xs font-semibold transition"
                                    >
                                    Edit
                                    </button>

                                    <button
                                    onClick={() => handleDelete(user?.id)}
                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs font-semibold transition"
                                    >
                                    Delete
                                    </button>

                                </td>
                            </tr>
                        ))
                        ) : (
                        <tr>
                            <td
                            colSpan="5"
                            className="text-center py-6 text-gray-400"
                            >
                            No users found
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UsersList