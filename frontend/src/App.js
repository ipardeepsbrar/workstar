import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlertDialog from "./components/shared/Dialog";
import AboutUs from "./pages/AboutUs";
import Apply from "./pages/Apply";
import AuthPage from "./pages/AuthPage";
import Candidates from "./pages/Candidates";
import FindJobs from "./pages/FindJobs";
import MyProfile from "./pages/MyProfile";
import ProvideJobs from "./pages/ProvideJobs";
import { authActions } from "./store/authSlice";


function App() {
  const alertMessage = useSelector(state => state.alert.alertMessage)
  // const token = useSelector(state => state.auth.token)
  const dispatch = useDispatch();
  
  
  useEffect(()=>{
    const storedToken = localStorage.getItem('token');
    if(storedToken){
      dispatch(authActions.setToken(storedToken))
    }
  }, [])

  return (
    <div className="wrapper">
    <BrowserRouter>
      <AlertDialog/>
      <Routes>
        <Route path="/" element={<FindJobs/>}/>
        <Route path="/provide-jobs/*" element={<ProvideJobs/>}/>
        <Route path="/my-profile/*" element={<MyProfile/>}/>
        <Route path="/authenticate/*" element={<AuthPage/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/apply/:jobId" element={<Apply/>}/>
        <Route path="/candidates/:jobId" element={<Candidates/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
