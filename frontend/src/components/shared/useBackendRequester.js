import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorActions } from "../../store/errorSlice";

// import styles from './backendRequester.module.css';

const useBackendRequester = (props) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(state => state.error.errorMessage);
  
  const sendRequest = async (url, method = "GET", headers = {}, body = null) => {
    try {
      const response = await fetch(url, {
        method,
        headers,
        body
      });
      if(!response.ok){
        throw new Error(response.json().message)
      }
      const data = response.json();
      console.log(data);
      return data;

    } catch (error){
      console.log('in catch');
      console.log(error.message);
      dispatch(errorActions.setError(error.message));
      // throw error
    }
  };

  return { sendRequest };
};

export default useBackendRequester;
