import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../features/users/userSlice";

function UserForm({editUser, setEditUser}){

    const [form, setForm] = useState({
        first_name:'',
        last_name:'',
        email:'',
        password:'',
    });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(editUser){
            dispatch(updateUser({id:editUser.id, data:form}));
            setEditUser(null);
        }else{
            dispatch(addUser(form));
        }
        
        //reset form
        setForm({
            first_name:'',
            last_name:'',
            email:'',
            password:'',
        });
    }

    //When click on edit button
    useEffect(() => {
    if (editUser) {
      setForm(editUser);
    }
  }, [editUser]);

    return(
    <form onSubmit={handleSubmit} className="mt-4">
        <input className="border rounded-sm" type="text" placeholder="Enter first name" value={form.first_name} onChange={(e) => setForm({...form, first_name:e.target.value})}/>
        <input className="border rounded-sm" type="text" placeholder="Enter last name" value={form.last_name} onChange={ (e) => setForm({...form, last_name: e.target.value}) }/>
        <input className="border rounded-sm" type="text" placeholder="Enter email" value={form.email} onChange={ (e) => setForm( {...form, email: e.target.value}) }/>
        <input className="border rounded-sm" type="password" placeholder="******" value={form.password} onChange={ (e) => setForm( {...form, password: e.target.value} ) }/><br/>
        <button className="border rounded-sm bg-green-300 mt-4 p-2" type="submit">{ editUser ? "Update User" : "Add User"}</button>
    </form>
    )
}
export default UserForm