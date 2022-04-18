import React from "react";
import styles from "./InputField.module.css";
const InputField = (props) => {
  const inputClass = !props.errorMsg ? styles.input : styles.invalid;
  return (
    <div className={inputClass}>
      <label htmlFor={props.id}>
        {props.errorMsg ? <div>{props.label}*</div> : <div>{props.label}</div>}
        {/* <div className={styles.star}>{props.errorMsg && <p>*</p>}</div> */}
      </label>
      <input
        type={props.type}
        id={props.id}
        name={props.id}
        value={props.value}
        onChange={props.onChange}
      />
      {props.errorMsg && <p className={styles.error}>{props.errorMsg}</p>}
    </div>
  );
};
export default InputField;
