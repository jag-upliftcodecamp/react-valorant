import style from './RedirectBtn.module.css';


function RedirectBtn({ children }) {
  return (
    <>
      <div className={style.redirect}>{children}</div>
    </>
  );
}

export default RedirectBtn;
