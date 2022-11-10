import React from "react";
import "./css/login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";

function Login() {

  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth.signInWithPopup(provider).then(result => {
      var credential = result.credential;

      const photoURL = `${result.user.photoURL}?access_token=${credential.accessToken}`
      
      dispatch({
        type:"SET_USER",
        user:{
          displayName:result.user.displayName,
          photoURL:photoURL
        }
      })
    }).catch(error => console.log(error))
  }
  return (
    <div className="login__wrapper">
      <div className="login">
        <img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png" alt="" />
        <h2>Sign in with Facebook</h2>
        <button onClick={signIn}>Login with Facebook</button>
      </div>
    </div>
  );
}

export default Login;
