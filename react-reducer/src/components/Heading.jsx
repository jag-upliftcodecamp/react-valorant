import style from './Heading.module.css'

function Heading({ title }) {
  return (
    <header className={style.heading}>
      <h1>{title}</h1>
    </header>
  );
}

export default Heading;
