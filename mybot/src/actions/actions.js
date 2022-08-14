// import {
//     INPUT_SUCCESS,
//     INPUT_FAIL,
//     // SESSION_SUCCESS,
//     // SESSION_FAIL,
//     MESSAGE_SUCCESS,
//     MESSAGE_FAIL,
//   } from "./types";

//  import axios from 'axios';

//  export const userMessage = (message) => async(dispatch) => {
    
//     try {
//         dispatch({ type: INPUT_SUCCESS, payload: message });
//     }catch(err) {
//         dispatch({ type: INPUT_FAIL })
//     }
//  }

//  export const botMessage = (message) => async(dispatch) => {
//     try{
//         const responseMessage = message;
//         dispatch({ type: MESSAGE_SUCCESS, payload: responseMessage })
//     }catch(err){
//         dispatch({ type: MESSAGE_FAIL })
//     }
//  }


// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// // import { inputSuccess, inputFail, messageSuccess, messageFail } from '../features/chatreducer/chatSlice';

// import { inputSuccess, inputFail, messageSuccess, messageFail } from '../features/chatreducer';





// export const  userMessage = (message) => async() => {

// // export function userMessage(message) {

//     const dispatch = useDispatch();
//     console.log('Inside actions')
//     try {
//         dispatch(inputSuccess(message));
//     }catch(err) {
//         dispatch(inputFail(message))
//     }
//  }

//  export const botMessage = (message) => async() => {

//     const dispatch = useDispatch();
//     try{
//         const responseMessage = message;
//         dispatch(messageSuccess(message))
//     }catch(err){
//         dispatch(messageFail(message))
//     }
//  }

