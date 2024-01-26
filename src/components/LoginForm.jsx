import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useContext, useState } from "react";
import { MyContext } from "../context";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const LoginForm = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth,email,password);
    } catch (err) {
      console.error(err);
    }
}


  return (
  <div>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={signIn}>Submit</button>
      
  </div>
)
}


export default LoginForm