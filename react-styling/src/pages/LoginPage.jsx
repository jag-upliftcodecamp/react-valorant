import Heading from '../components/Heading';
import InputField from '../components/InputField';
import SubmitBtn from '../components/SubmitBtn';
import RedirectBtn from '../components/RedirectBtn';
import style from './SignUpPage.module.css';

function LoginPage() {
  return (
    <>
      <Heading title="Login 🔒" />
      <div className={style.container}>
        <InputField placeholder="Input your Email address" type="text" />
        <InputField placeholder="Input your Password" type="password" />
      </div>
      <div className={style.container}>
        <SubmitBtn title="Log In" />
        <RedirectBtn>Need to Register? Sign Up</RedirectBtn>
      </div>
    </>
  );
}

export default LoginPage;
