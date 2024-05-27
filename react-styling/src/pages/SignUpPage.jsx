import Heading from '../components/Heading';
import InputField from '../components/InputField';
import RedirectBtn from '../components/RedirectBtn';
import SubmitBtn from '../components/SubmitBtn';
import style from './SignUpPage.module.css';

function SignUpPage() {
  return (
    <>
      <Heading title="Sign Up 👍" />
      <div className={style.container}>
        <InputField type="text" placeholder="Enter your full name" />
        <InputField type="email" placeholder="Input your Email Address" />
        <InputField type="password" placeholder="Input your Password" />
        <InputField type="password" placeholder="Confirm Password" />
      </div>
      <div className={style.container}>
        <SubmitBtn title="Sign Up" />
        <RedirectBtn>Already Registered? Login</RedirectBtn>
      </div>
    </>
  );
}

export default SignUpPage;
