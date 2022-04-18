import React from "react";
import styles from "./Skills.module.css";
const Skills = (props) => {
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
  const skillsInputClass = !props.errorMsg ? styles.skills : styles.invalid;
  return (
    <div className={skillsInputClass}>
      <label className={styles.label}>
        {props.errorMsg ? <div>Skills*</div> : <div>Skills</div>}
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
            />
            {skill}
          </label>
        ))}
      </div>
      {props.errorMsg && <p className={styles.error}>{props.errorMsg}</p>}
    </div>
  );
};
export default Skills;
