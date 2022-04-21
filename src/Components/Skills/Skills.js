import React, { useState } from "react";
import styles from "./Skills.module.css";
const Skills = (props) => {
  const [isError, setIsError] = useState(false);
  const showErrorHandler = () => {
    if (props.errorMsg) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Node JS",
    "Java",
    "Angular",
    "AI & ML",
    "Golang",
    "Android",
    ".Net",
  ];
  const skillsInputClass = !isError ? styles.skills : styles.invalid;
  return (
    <div className={skillsInputClass}>
      <label className={styles.label}>
        {!isError ? <div>Skills</div> : <div>Skills*</div>}
      </label>
      <div className={styles.checkbox}>
        {skills.map((skill) => (
          <label key={skill}>
            <input
              value={skill}
              key={skill}
              type="checkbox"
              name={skill}
              id={skill}
              onChange={props.onChange}
              onBlur={showErrorHandler}
            />
            {skill}
          </label>
        ))}
      </div>
      {isError && <p className={styles.error}>{props.errorMsg}</p>}
    </div>
  );
};
export default Skills;
