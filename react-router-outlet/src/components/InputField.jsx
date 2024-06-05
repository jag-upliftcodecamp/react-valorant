import style from './InputField.module.css';

function InputField({ placeholder, type, value, onChange }) {
  return (
    <>
      <input
        className={style.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default InputField;
