import React, { useState } from "react";
import styles from "./Hobbies.module.css";
const Hobbies = (props) => {
  const [isShow, setIsShow] = useState(false);
  const [isClicked, setIsCliked] = useState(false);
  const hobbies = [
    "Football",
    "Cricket",
    "Swimming",
    "Drawing",
    "Reading",
    "Cooking",
    "Singing",
    "Gardening",
    "Writting",
    "Coding",
    "Gaming",
  ];

  const optionShowHandler = () => {
    setIsShow(true);
    setIsCliked(true);
  };

  const optionHideHandler = () => {
    setIsShow(false);
    setIsCliked(false);
  };
  const hobbiesInputClass = !props.errorMsg ? styles.dropdown : styles.invalid;
  return (
    <div className={hobbiesInputClass}>
      <label className={styles.label}>
        {props.errorMsg ? <div>{props.label}*</div> : <div>{props.label}</div>}
      </label>
      <div className={styles.select_field}>
        Choose options
        {!isClicked && (
          <button onClick={optionShowHandler}>
            <span>&#x25B2;</span>
          </button>
        )}
        {isClicked && (
          <button onClick={optionHideHandler}>
            <span>&#x25BC;</span>
          </button>
        )}
      </div>
      {isShow && (
        <div className={styles.options}>
          {hobbies.map((hobby) => (
            <label key={hobby}>
              <input
                value={hobby}
                key={hobby}
                type="checkbox"
                name={hobby}
                id={hobby}
                onChange={props.onChange}
              />
              {hobby}
            </label>
          ))}
        </div>
      )}
      {props.errorMsg && <p className={styles.error}>{props.errorMsg}</p>}
    </div>
  );
};

export default Hobbies;
