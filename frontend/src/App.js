import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Apply from "./pages/Apply";
import AuthPage from "./pages/AuthPage";
import Candidates from "./pages/Candidates";
import FindJobs from "./pages/FindJobs";
import MyProfile from "./pages/MyProfile";
import ProvideJobs from "./pages/ProvideJobs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FindJobs/>}/>
        <Route path="/provide-jobs/*" element={<ProvideJobs/>}/>
        <Route path="/my-profile/*" element={<MyProfile/>}/>
        <Route path="/authenticate" element={<AuthPage/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/apply/:jobId" element={<Apply/>}/>
        <Route path="/candidates/:jobId" element={<Candidates/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
