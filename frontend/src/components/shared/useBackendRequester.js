import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { alertActions } from "../../store/alertSlice";

const useBackendRequester = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // const activeHttpRequests = useRef([])

  // useEffect(()=>{
  //   return ()=>{
  //     activeHttpRequests.current.forEach(req => req.abort());
  //   }
  // },[])

  const sendRequest = useCallback(async (
    url,
    method = "GET",
    headers = {},
    body = null
  ) => {
        // const currentReqController = new AbortController()
        // activeHttpRequests.current.push(currentReqController);
        setLoading(true);
    try {
      const response = await fetch(url, {
        method,
        headers,
        body,
        // signal: currentReqController.signal
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
  },[dispatch]);

  return { sendRequest, loading };
};

export default useBackendRequester;
