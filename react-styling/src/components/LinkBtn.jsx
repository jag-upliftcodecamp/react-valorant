import { Link } from 'react-router-dom';
import style from './LinkBtn.module.css';f elyts t

// Add Props: title, to
// <LinkBtn to="/signup" title="Sign Up" />
function LinkBtn({ title, to }) {
  return (
    <>
      <Link to={to} className={style.linkBtn>
        {title}
      </Link>
    </>
  );
}

export default LinkBtn;
