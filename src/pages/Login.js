import React from "react";
import { auth, provider } from "../config/firebase";
import { signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  const navigate = useNavigate(); // it isused to redirect page from one to another
  const signInwithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  return (
    <div className="">
      <p>SignIn With Google</p>
      <button className="login-with-google-btn" onClick={signInwithGoogle}>
        SingnIn with Google
      </button>
    </div>
  );
}

export default Login;
