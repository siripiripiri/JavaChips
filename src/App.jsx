import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="login">Login</Link>
        <Link to="profile">Profile</Link>
      </header>
      <Routes>
        <Route path="login" element={<LoginForm/>} /> 
        <Route path="signup" element={<SignUpForm/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="*" element={
          <>
          <h1>404</h1>
          </>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App