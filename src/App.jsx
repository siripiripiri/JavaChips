import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import SignUpForm from "./components/SignUpForm";
import Questionaire from "./components/Questionaire";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Map from "./components/Map";

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
          <h1>404</h1>
        </>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App