import { useDispatch } from "react-redux";
import { alertActions } from "../../store/alertSlice";

const useBackendRequester = (props) => {
  const dispatch = useDispatch();

  const sendRequest = async (
    url,
    method = "GET",
    headers = {},
    body = null
  ) => {
    try {
      const response = await fetch(url, {
        method,
        headers,
        body,
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      return data;
    } catch (error) {
      dispatch(alertActions.setAlert(error.message));
      throw error;
    }
  };

  return { sendRequest };
};

export default useBackendRequester;
