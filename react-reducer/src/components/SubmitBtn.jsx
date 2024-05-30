import style from './SubmitBtn.module.css'

function SubmitBtn({ title }) {
  return (
    <>
    
      <button type="submit" className={style.submit}>{title}</button>
    </>
  );
}

export default SubmitBtn;
