import style from './InputField.module.css';

function InputField({ placeholder, type, value }) {
  return (
    <>
      <input
        className={style.input}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
}

export default InputField;
