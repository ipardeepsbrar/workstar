import { useState } from "react";
import { useDispatch } from "react-redux";
import { alertActions } from "../../store/alertSlice";

const useBackendRequester = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const sendRequest = async (
    url,
    method = "GET",
    headers = {},
    body = null
  ) => {
        setLoading(true);
    try {
      const response = await fetch(url, {
        method,
        headers,
        body
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      setLoading(false)
      return data;
    } catch (error) {
      setLoading(false)
      dispatch(alertActions.setAlert(error.message));
      throw error;
    }
  };

  return { sendRequest, loading };
};

export default useBackendRequester;
