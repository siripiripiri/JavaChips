
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


  return (
  <div>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={signIn}>Submit</button>
          <button onClick={signInWithGoogle}>Google SignIn Button LMAOOOA AHAHHAHAHAHA LOL</button>
          <button onClick={logout}>Log Out</button>
      
  </div>
)
}


export default SignUpForm