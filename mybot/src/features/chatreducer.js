// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { store } from '../store';

// import {
//     INPUT_SUCCESS,
//     INPUT_FAIL,
//     // SESSION_SUCCESS,
//     // SESSION_FAIL,
//     MESSAGE_SUCCESS,
//     MESSAGE_FAIL,
//   } from "../actions/types";

// //initial state
// const initialState = {
//     messages: [],
// };

// // Update state
// export default (state = initialState, action) => {
//     const { type, payload } = action;
//     let { messages } = state;

//     switch(type){
//         case INPUT_SUCCESS:
//             messages = [...messages, { message: payload, type: 'user' }];
//             return {
//                 ...state
//             };
//         case INPUT_FAIL:
//             return {
//                 ...state,
//             };
//         case MESSAGE_SUCCESS:
//             messages = [...messages, { message: payload, type: 'bot' }];
//             return {
//                 ...state,
//                 messages,
//             };
//         case MESSAGE_FAIL:
//             return {
//                 ...state,
//             };
//         default:
//             return {
//                 ...state,
//             };
//     }
// };

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    messages: [ ],
}

const chatSlice = createSlice({
    name: 'chat',
    initialState ,
    reducers: {
        inputSuccess(state=initialState, action){
            // action has 2 parameters -> type & payload
            console.log('Printing Initial state')
            console.log(state)
            
            console.log('Inside input Success function')
            let { temp } = state;
            console.log('Printing Initial state after assigning to temp')
            console.log(temp)
            console.log(action.payload)
            temp = [...temp, { message: action.payload, type: 'user' }];
            console.log(state.action.payload)
            console.log(state.messages.message)
              return {
                 ...state,
                 temp,
              };
        }, 
        inputFail(state, action){
            return {
                ...state
             };
        },
        messageSuccess(state, action){
            // action has 2 parameters -> type & payload
            let { messages } = state;
            messages = [...messages, { message: action.payload, type: 'bot' }];
              return {
                 ...state
              };
        }, 
        messageFail(state, action){
            return {
                ...state
             };
        },
        
    }
})



export const { inputSuccess, inputFail, messageSuccess, messageFail } = chatSlice.actions

export default chatSlice.reducer