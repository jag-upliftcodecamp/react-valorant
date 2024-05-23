import { Link } from 'react-router-dom';

function ScandinavianPage() {
  return (
    <>
      <h1>Welcome!</h1>
      <p>
        You want more....Click my picture
        <img  src="https://img.freepik.com/premium-photo/portrait-photography-scandinavian-girl-by-sea_162944-3140.jpg" />
      </p>
      
      <p>you want money? marry a scandinavian women and get 50k Usd from the Government
        WHAT ARE YOU WAITING FOR, Click this <a href="https://www.scandinaviastandard.com/scandinavian-women-30-icons-and-innovators-to-know/" target="blank">link</a> 
      </p>
      <Link to="/">🏠 Home Page</Link>
      <Link to="/about-page">➡️ Go to About Page</Link> <br />
      <Link to="/about-page">➡️ Go to Projects Page</Link> <br />
      <Link to="/about-page">➡️ Go to Contact Us Page</Link> <br />

    </>
  );
}

export default ScandinavianPage;