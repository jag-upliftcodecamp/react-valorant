import { Link } from 'react-router-dom';
import Heading from '../components/Heading';
import InputField from '../components/InputField';
import RedirectBtn from '../components/RedirectBtn';
import SubmitBtn from '../components/SubmitBtn';
import style from './SignUpPage.module.css';
import { useState } from 'react';

function SignUpPage() {
  // CREATE states: fullName, email, password, confirmPassword
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // CREATE submit handler
  // Log the states
  const handleSubmit = async (e) => {
    e.preventDefault(); // To prevent the default behavior of submitting form
    // console.log('fullName: ', fullName);
    // console.log('email: ', email);
    // console.log('password: ', password);
    // console.log('confirmPassword: ', confirmPassword);

    // Basic Sign Up: Email & Password
    const basicPayload = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    const basicResponse = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBiv6emXr1gWqJpaxF8y-wTG--yXdum_kQ',
      {
        method: 'POST', // Make a POST request instead of GET
        body: JSON.stringify(basicPayload), // Convert JSON to string
      }
    );
    const basicJson = await basicResponse.json();
    console.log('Basic JSON: ', basicJson);

    // Update profile: Full Name
    const updatePayload = {
      idToken: basicJson.idToken,
      displayName: fullName,
    };
    const updateResponse = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBiv6emXr1gWqJpaxF8y-wTG--yXdum_kQ',
      {
        method: 'POST', // Make a POST request instead of GET
        body: JSON.stringify(updatePayload), // Convert JSON to string
      }
    );
    const updateJson = await updateResponse.json();
    console.log('Update JSON: ', updateJson);
    // SEND email & password to API with API KEY using fetch
    // LOG response (temp)
  };

  return (
    <>
      <Heading title="Sign Up 👍" />
      <form onSubmit={handleSubmit}>
        <div className={style.container}>
          <InputField
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <InputField
            type="email"
            placeholder="Input your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Input your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className={style.container}>
          <SubmitBtn title="Sign Up" />
          <RedirectBtn>
            Already Registered?
            <Link to="/login">Login</Link>
          </RedirectBtn>
        </div>
      </form>
    </>
  );
}

export default SignUpPage;
