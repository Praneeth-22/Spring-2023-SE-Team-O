import React,{useState}from 'react';
import '../Chat/style.scss';
import { auth } from "../../firebase_service";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";



const ChatLogin=()=> {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  }
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Group chat</span>
            <span className='title'>Login</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="email"/>
                <input type ="password" placeholder="password"/>
                <button>Sign In</button>
                {err && <span>Something went wrong</span>}
                  </form>
                 <p>You don't have  an account?  <Link to="/chat-register">Register</Link></p>
        </div>   
    </div>
  )
}

export default ChatLogin
