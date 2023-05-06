import {auth,provider} from '../config/firebase';
import {signInWithPopup} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
export const Login = () => {
    const navigate = useNavigate();

    const signwithgoogle = async () => {
        const result = await signInWithPopup(auth,provider);
        console.log(result);
        navigate('/');
    };
  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signwithgoogle}>
        Sign in with Google
      </button>
    </div>
  );
};
