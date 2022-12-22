import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Apply from "./pages/Apply";
import AuthPage from "./pages/AuthPage";
import FindJobs from "./pages/FindJobs";
import MyProfile from "./pages/MyProfile";
import OpenPosition from "./pages/OpenPosition";
import ProvideJobs from "./pages/ProvideJobs";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FindJobs/>}/>
        <Route path="/provide-jobs" element={<ProvideJobs/>}/>
        <Route path="/my-profile" element={<MyProfile/>}/>
        <Route path="/auth-page" element={<AuthPage/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/open-position" element={<OpenPosition/>}/>
        <Route path="/apply/:applyId" element={<Apply/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
