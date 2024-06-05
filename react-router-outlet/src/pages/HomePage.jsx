import Header from '../components/Header';
import LinkBtn from '../components/LinkBtn';
import SubmitBtn from '../components/SubmitBtn';

function HomePage() {
  return (
    <>
      <h1>Welcome</h1>
      <div className="buttons">
        <LinkBtn title="Sign Up" to="/signup" />
        <LinkBtn title="Login" to="/login" />
      </div>
    </>
  );
}

export default HomePage;
