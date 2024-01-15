import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async () => {

    const response = await axios.get('http://localhost:3005/users');
    // DEV only!!
    await pause(2000);
    return response.data;
});

// DEV only!!
const pause = (duration) => {
    return new Promise( (resolve) => {
        setTimeout(resolve, duration);
    })
}

export { fetchUsers };