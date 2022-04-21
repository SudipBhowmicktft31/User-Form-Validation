import React, { useState } from "react";
import styles from "./Gender.module.css";
const Gender = (props) => {
  const [isError, setIsError] = useState(false);
  const genders = ["Male", "Female", "Others"];
  const showErrorHandler = () => {
    if (props.errorMsg) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  const genderInputClass = !isError ? styles.gender : styles.invalid;

  return (
    <div className={genderInputClass}>
      <label>{!isError ? <div>Gender</div> : <div>Gender*</div>}</label>
      <div className={styles.radioBox}>
        {genders.map((gender) => (
          <div key={gender}>
            <input
              type="radio"
              id={gender}
              name="gender"
              value={gender}
              key={gender}
              onChange={props.onChange}
              onBlur={showErrorHandler}
            />
            <div className={styles.type} htmlFor={gender}>
              {gender}
            </div>
          </div>
        ))}
      </div>
      {isError && <p className={styles.error}>{props.errorMsg}</p>}
    </div>
  );
};
export default Gender;
