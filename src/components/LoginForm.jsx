import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { googleProvider } from "../config/firebase";
import { useState } from "react";

const SignUpForm = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(auth?.currentUser?.email)

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth,email,password);
    } catch (err) {
      console.error(err);
    }
}

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth,googleProvider)
    } catch (err) {
      console.error(err)
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
    } catch (err) {
      console.error(err)
    }
  }

  let navigate = useNavigate();

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid" alt="Sample image" />
        </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <div className="form-outline mb-4">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" id="email" className="form-control form-control-lg" placeholder="Enter a valid email address" onChange={(e) => setEmail(e.target.value)}/><br />
              </div>
              <div className="form-outline mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" id="password" className="form-control form-control-lg" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} /><br />
              </div>
              <div className="d-flex justify-content-between align-items-center">
              <a href="#!" className="text-body">Forgot password?</a>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="button" className="btn btn-primary btn-lg login" onClick={signIn}>Login</button>
                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <span onClick={() => navigate('/signup')}
                  className="link-danger">Register</span></p>
              </div>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button type="button" className="btn btn-floating mx-1" onClick={signInWithGoogle}>
                  <img src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png" width="25" height="25" />
                </button>
              </div>
              {/* <button onClick={logout}>Log Out</button> */}
            </div>
      </div>
      </div>
    </section>
)
}


export default SignUpForm