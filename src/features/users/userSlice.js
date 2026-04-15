//1.
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { usersAPI, addUserAPI, deleteUserAPI, updateUserAPI } from "./userAPI";

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await usersAPI();
    return response.data.data;
});

export const addUser = createAsyncThunk('users/add', async (data) => {
    const response = await addUserAPI(data);
    return response.data.data;
})

export const deleteUser = createAsyncThunk('users/delete', async (id) => {
    await deleteUserAPI(id);
    return id;
})

export const updateUser = createAsyncThunk('users/update', async ({id, data}) => {
    const response = await updateUserAPI(id, data);
    return response.data.data;
})

//2.initialState
const initialState ={
    list: [],
}

//3. create slice
const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.list = action.payload
        })
        .addCase(addUser.fulfilled, (state, action)=>{
            state.list.push(action.payload)
        })
        .addCase(deleteUser.fulfilled, (state, action)=>{
            state.list = state.list.filter( (user) => user.id != action.payload )
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            state.list = state.list.map( (user) => user.id == action.payload.id ? action.payload : user)
        })
    }
});

export default userSlice.reducer;

