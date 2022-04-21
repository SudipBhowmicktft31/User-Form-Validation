import React, { useState } from "react";
import styles from "./Profession.module.css";
const Profession = (props) => {
  const [isShow, setIsShow] = useState(false);
  const [isError, setIsError] = useState(false);
  const professions = [
    "Choose an option",
    "Data Engineer",
    "Software Developer",
    "Data Scientist",
    "UI & UX Designer",
    "Software Engineer",
    "Data Analyst",
  ];
  const showErrorHandler = () => {
    if (props.errorMsg) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };
  const catagories = ["Trainee", "Junior", "Senior"];
  const showCatagoryHandler = () => {
    setIsShow(true);
  };
  const professionInput = !isError ? styles.profession : styles.invalid;

  return (
    <div className={professionInput}>
      <label>
        {!isError ? <div>Profession</div> : <div>Profession*</div>}
      </label>
      <select
        className={styles.dropdown}
        onChange={props.onChange}
        name="profession"
        value={props.value}
        onClick={showCatagoryHandler}
      >
        {professions.map((profession) => (
          <option key={profession} value={profession}>
            {profession}
          </option>
        ))}
      </select>
      {isShow && (
        <div>
          <label>Catagory</label>
          <select
            className={styles.dropdown}
            onChange={props.onChange}
            name="catagory"
            value={props.valueCatagory}
            onBlur={showErrorHandler}
          >
            {catagories.map((catagory) => (
              <option key={catagory} value={catagory}>
                {catagory}
              </option>
            ))}
          </select>
        </div>
      )}
      {isError && <p className={styles.error}>{props.errorText}</p>}
    </div>
  );
};
export default Profession;
