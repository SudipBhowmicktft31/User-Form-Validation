import React, { useState } from "react";
import styles from "./InputField.module.css";
const InputField = (props) => {
  const [isToggle, SetIsToggle] = useState(false);
  const [isError, setIsError] = useState(false);
  const toggleHideHandler = () => {
    SetIsToggle(true);
  };
  const toggleShowHandler = () => {
    SetIsToggle(false);
  };
  const showErrorHandler = () => {
    if (props.errorMsg) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  // const errorClass = props.errorMsg && !isError;
  const inputClass = isError ? styles.invalid : styles.input;
  return (
    <div className={inputClass}>
      <div className={styles.toggle}>
        <label htmlFor={props.id}>
          {isError ? `${props.label}*` : props.label}
        </label>
        {props.className === "password" && (
          <div>
            {!isToggle && (
              <img
                onClick={toggleHideHandler}
                className={styles.icon}
                src={props.showPasswordIcon}
                alt="showIcon"
              />
            )}
            {isToggle && (
              <img
                onClick={toggleShowHandler}
                className={styles.icon}
                src={props.hidePasswordIcon}
                alt="hideIcon"
              />
            )}
          </div>
        )}
      </div>

      <input
        type={!isToggle ? props.type : "text"}
        id={props.id}
        name={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={showErrorHandler}
      />

      {isError && <p className={styles.error}>{props.errorMsg}</p>}
    </div>
  );
};
export default InputField;
