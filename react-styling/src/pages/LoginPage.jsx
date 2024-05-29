import Heading from '../components/Heading';
import InputField from '../components/InputField';
import SubmitBtn from '../components/SubmitBtn';
import RedirectBtn from '../components/RedirectBtn';
import style from './SignUpPage.module.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import ProfileContext from '../contexts/ProfileContext';

function LoginPage() {
  // STATES: email, password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { setDisplayName } = useContext(ProfileContext);

  // Handle the submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const basicPayload = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    const basicResponse = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBiv6emXr1gWqJpaxF8y-wTG--yXdum_kQ',
      {
        method: 'POST', // Make a POST request instead of GET
        body: JSON.stringify(basicPayload), // Convert Object to string
      }
    );
    const basicJson = await basicResponse.json();
    console.log('Basic JSON: ', basicJson);
    setDisplayName(basicJson.displayName);
    navigate('/profile');
  };

  return (
    <>
      <Heading title="Login 🔒" />
      <form onSubmit={handleSubmit}>
        <div className={style.container}>
          <InputField
            placeholder="Input your Email address"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            placeholder="Input your Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={style.container}>
          <SubmitBtn title="Log In" />
          <RedirectBtn>Need to Register? 
          <Link to="/signup">Signup</Link>
          </RedirectBtn>
        </div>
      </form>
    </>
  );
}

export default LoginPage;
