import React, { useState } from "react";
import Card from "../UI/Card";
import Gender from "./Gender";
import Hobbies from "./Hobbies";
import InputField from "./InputField";
import Profession from "./Profession";
import "./Profile.css";
import Skills from "./Skills";
const Profile = () => {
  // const [isValid, setIsValid] = useState(false);

  const [nameErrorText, setNameErrorText] = useState("");
  const [userNameErrorText, setUserNameErrorText] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");
  const [numberErrorText, setNumberErrorText] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState("");
  const [professionErrorText, setProfessionErrorText] = useState("");
  const [genderErrorText, setGenderErrorText] = useState("");
  const [hobbiesErrorText, setHobbiesErrorText] = useState("");
  const [skillsErrorText, setSkillsErrorText] = useState("");

  const [enteredValue, setEnteredValue] = useState({
    name: "",
    user_name: "",
    email: "",
    number: "",
    password: "",
    confirm_pwd: "",
    profession: "",
    gender: "",
  });
  const [enteredHobbies, setEnteredHobbies] = useState([]);
  const [enteredSkills, setEnteredSkills] = useState([]);

  const nameRegex = /^[a-zA-Z ]+$/;
  const userNameRegex = /^[a-zA-Z0-9_\\.]+$/;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // const numberRegex = /^[0-9]{10-13}$/;
  const numberRegex = /^\d{10,13}$/g;
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&_*])[a-zA-Z0-9!@#$%^&_*]{6,16}$/;

  // console.log(enteredHobbies);
  // console.log(enteredSkills);
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setEnteredValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const hobbyChangeHandler = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setEnteredHobbies([...enteredHobbies, value]);
    } else {
      const newHobbies = enteredHobbies.filter((hobby) => hobby !== value);
      setEnteredHobbies(newHobbies);
    }
  };
  const skillChangeHandler = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setEnteredSkills([...enteredSkills, value]);
    } else {
      const newSkills = enteredSkills.filter((skill) => skill !== value);
      setEnteredSkills(newSkills);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // setEnteredValue({ ...enteredValue, enteredHobbies, enteredSkills });
    console.log({ ...enteredValue, enteredHobbies, enteredSkills });

    const validateUserForm = (
      name,
      userName,
      email,
      number,
      pwd,
      confirmPwd,
      profession,
      gender,
      hobbies,
      skills
    ) => {
      if (name.length === 0) {
        setNameErrorText("Name Field must not be empty!!");
      } else if (!nameRegex.test(name)) {
        setNameErrorText("Please Provide Valid Name");
      } else if (userName.length === 0) {
        setUserNameErrorText("User Name Field must not be empty!!");
      } else if (!userNameRegex.test(userName)) {
        setUserNameErrorText("Please Provide Valid User Name");
      } else if (email.length === 0) {
        setEmailErrorText("Email Field must not be empty!!");
      } else if (!email.toLowerCase().match(emailRegex)) {
        setEmailErrorText("Please provide Valid Email");
      } else if (number.length === 0) {
        setNumberErrorText("Number Field must not be empty!!");
      } else if (!numberRegex.test(number)) {
        setNumberErrorText("Please provide Valid Phone Number");
      } else if (pwd.length === 0) {
        setPasswordErrorText("Password Field must not be empty!!");
      } else if (!passwordRegex.test(pwd)) {
        setPasswordErrorText(
          "Password must be at least of 8 character and contains at least one Character,one Number and one Special Character"
        );
      } else if (confirmPwd.length === 0) {
        setConfirmPasswordErrorText("Password Field must not be empty!!");
      } else if (confirmPwd !== pwd) {
        setConfirmPasswordErrorText("Password did not matched");
      } else if (profession.length === 0) {
        setProfessionErrorText("Profession Field must not be empty!!");
      } else if (gender.length === 0) {
        setGenderErrorText("Gender Field must not be empty!!");
      } else if (hobbies.length === 0) {
        setHobbiesErrorText("Hobbies Field must not be empty!!");
      } else if (skills.length === 0) {
        setSkillsErrorText("Skills Field must not be empty!!");
      } else {
        return true;
      }
      return false;
    };

    if (
      validateUserForm(
        enteredValue.name,
        enteredValue.user_name,
        enteredValue.email,
        enteredValue.number,
        enteredValue.password,
        enteredValue.confirm_pwd,
        enteredValue.profession,
        enteredValue.gender,
        enteredHobbies,
        enteredSkills
      )
    ) {
      // setIsValid(true);
      alert("Form is Validated and Saved Successfully");
      console.log({ ...enteredValue, enteredHobbies, enteredSkills });
      setEnteredValue({
        name: "",
        user_name: "",
        email: "",
        number: "",
        password: "",
        confirm_pwd: "",
        profession: "",
        gender: "",
      });
    }
  };
  return (
    <div>
      <Card>
        <h2>User Form</h2>
        <form className="profile" autoComplete="off" onSubmit={submitHandler}>
          <div className="name">
            <InputField
              label="Name"
              type="text"
              id="name"
              onChange={changeHandler}
              value={enteredValue.name}
              errorMsg={nameErrorText}
            />
            <InputField
              label="User Name"
              type="text"
              id="user_name"
              onChange={changeHandler}
              value={enteredValue.user_name}
              errorMsg={userNameErrorText}
            />
          </div>
          <div className="contact">
            <InputField
              label="Email"
              type="email"
              id="email"
              onChange={changeHandler}
              value={enteredValue.email}
              errorMsg={emailErrorText}
            />
            <InputField
              label="Number"
              type="number"
              id="number"
              onChange={changeHandler}
              value={enteredValue.number}
              errorMsg={numberErrorText}
            />
          </div>
          <div className="pwd">
            <InputField
              label="Password"
              type="password"
              id="password"
              onChange={changeHandler}
              value={enteredValue.password}
              errorMsg={passwordErrorText}
            />
            <InputField
              label="Confirm Password"
              type="password"
              id="confirm_pwd"
              onChange={changeHandler}
              value={enteredValue.confirm_pwd}
              errorMsg={confirmPasswordErrorText}
            />
          </div>

          <div className="prof_gen">
            <Profession
              onChange={changeHandler}
              value={enteredValue.profession}
              errorText={professionErrorText}
            />
            <Gender onChange={changeHandler} errorMsg={genderErrorText} />
          </div>

          <div className="hobby_skill">
            <Hobbies
              label="Hobbies"
              onChange={hobbyChangeHandler}
              name="hobbies"
              value={enteredHobbies}
              errorMsg={hobbiesErrorText}
            />

            <Skills
              onChange={skillChangeHandler}
              name="skills"
              value={enteredSkills}
              errorMsg={skillsErrorText}
            />
          </div>
          <div className="button">
            <input type="submit" id="submit" />
          </div>
        </form>
      </Card>
    </div>
  );
};
export default Profile;
