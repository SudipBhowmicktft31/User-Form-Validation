import React from "react";
import styles from "./Gender.module.css";
const Gender = (props) => {
  const genders = ["Male", "Female", "Others"];
  const genderInputClass = !props.errorMsg ? styles.gender : styles.invalid;

  return (
    <div className={genderInputClass}>
      <label>{props.errorMsg ? <div>Gender*</div> : <div>Gender</div>}</label>
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
            />
            <div className={styles.type} htmlFor={gender}>
              {gender}
            </div>
          </div>
        ))}
      </div>
      {props.errorMsg.trim() !== 0 && (
        <p className={styles.error}>{props.errorMsg}</p>
      )}
    </div>
  );
};
export default Gender;
