import { createSlice } from "@reduxjs/toolkit";

export const profileReducer = createSlice({
    name: 'profile',
    initialState: {
        jwtToken: ''
    },
    reducers: {
        login: state => {
            return state
        }
    }
});

export const {login} = profileReducer.actions;

export default profileReducer.reducer