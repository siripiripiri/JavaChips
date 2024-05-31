import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import LoginForm from "./components/LoginForm";
import Map from "./components/Map";
import Profile from "./components/Profile";
import Questionaire from "./components/Questionaire";
import SignUpForm from "./components/SignUpForm";
import YourComponent from "./components/YourComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignUpForm/>} />
        <Route path="profile" element={<Profile />} />
        <Route path="questionaire" element={<Questionaire/>} />
        <Route path="home" element={<HomePage/>} />
        <Route path="about" element={<About/>} />
        <Route path="map" element={<Map/>} />
        <Route path="/" element={<LandingPage/>} />
        <Route path="*" element={<>
          <h1>404, Page Not Found</h1>
        </>} />
        <Route path ="yourcomponent/" element ={<YourComponent />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App