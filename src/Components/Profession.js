import React from "react";
import styles from "./Profession.module.css";
const Profession = (props) => {
  const professions = [
    "Choose an option",
    "Data Engineer",
    "Software Developer",
    "Data Scientist",
    "UI & UX Designer",
    "Software Engineer",
    "Data Analyst",
  ];
  const professionInput = !props.errorText ? styles.profession : styles.invalid;

  return (
    <div className={professionInput}>
      <label>
        {props.errorMsg ? <div>Profession*</div> : <div>Profession</div>}
      </label>
      <select
        className={styles.dropdown}
        onChange={props.onChange}
        name="profession"
        value={props.value}
      >
        {professions.map((profession) => (
          <option key={profession} value={profession}>
            {profession}
          </option>
        ))}
      </select>
      {props.errorText.trim() !== 0 && (
        <p className={styles.error}>{props.errorText}</p>
      )}
    </div>
  );
};
export default Profession;
