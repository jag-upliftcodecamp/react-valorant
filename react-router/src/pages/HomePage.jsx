import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nisi,
        deleniti tempore id impedit deserunt dolores non dignissimos quasi
        repellat pariatur, velit nemo recusandae laboriosam sit. Consequuntur in
        reiciendis aspernatur!
      </p>
      <p>🎂🍾🥂🙌🥳</p>
      <a href="http://google.com">➡️ Google</a><br />
      <Link to="/about-page">➡️ Go to About Page (using Link)</Link><br />
    </>
  );
}

export default HomePage;
