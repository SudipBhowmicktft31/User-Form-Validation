import React, { useState } from "react";
import Card from "../../UI/Card";
import Gender from "../Gender/Gender";
import Hobbies from "../Hobbies/Hobbies";
import InputField from "../Input Field/InputField";
import Profession from "../Profession/Profession";
import "./Profile.css";
import Skills from "../Skills/Skills";
import eye from "../../Asset/eye.png";
import invisible from "../../Asset/invisible.png";
import {
  validateConfirmPassword,
  validateEmail,
  validateGender,
  validateHobbies,
  validateName,
  validateNumber,
  validatePassword,
  validateProfession,
  validateSkills,
  validateUserName,
} from "../Validation/Validation";
const Profile = () => {
  const [enteredValue, setEnteredValue] = useState({
    name: "",
    user_name: "",
    email: "",
    number: "",
    password: "",
    confirm_pwd: "",
    profession: "",
    catagory: "",
    gender: "",
  });
  const [enteredHobbies, setEnteredHobbies] = useState([]);
  const [enteredSkills, setEnteredSkills] = useState([]);

  // const [buttonDisable, setButtonDisable] = useState(false);

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

  const items = [
    {
      label: "Name",
      type: "text",
      id: "name",
      onChange: changeHandler,
      value: enteredValue.name,
      className: "",
      errorMsg: validateName(enteredValue.name),
      showPasswordIcon: "",
      hidePasswordIcon: "",
    },
    {
      label: "User Name",
      type: "text",
      id: "user_name",
      onChange: changeHandler,
      value: enteredValue.user_name,
      className: "",
      errorMsg: validateUserName(enteredValue.user_name),
      showPasswordIcon: "",
      hidePasswordIcon: "",
    },
    {
      label: "Email",
      type: "email",
      id: "email",
      onChange: changeHandler,
      value: enteredValue.email,
      className: "",
      errorMsg: validateEmail(enteredValue.email),
      showPasswordIcon: "",
      hidePasswordIcon: "",
    },
    {
      label: "Number",
      type: "number",
      id: "number",
      onChange: changeHandler,
      value: enteredValue.number,
      className: "",
      errorMsg: validateNumber(enteredValue.number),
      showPasswordIcon: "",
      hidePasswordIcon: "",
    },
    {
      label: "Password",
      type: "password",
      id: "password",
      onChange: changeHandler,
      value: enteredValue.password,
      className: "password",
      errorMsg: validatePassword(enteredValue.password),
      showPasswordIcon: eye,
      hidePasswordIcon: invisible,
    },
    {
      label: "Confirm Password",
      type: "password",
      id: "confirm_pwd",
      onChange: changeHandler,
      value: enteredValue.confirm_pwd,
      className: "password",
      errorMsg: validateConfirmPassword(
        enteredValue.password,
        enteredValue.confirm_pwd
      ),
      showPasswordIcon: eye,
      hidePasswordIcon: invisible,
    },
  ];

  const submitHandler = (event) => {
    event.preventDefault();
    // setEnteredValue({ ...enteredValue, enteredHobbies, enteredSkills });
    // console.log({ ...enteredValue, enteredHobbies, enteredSkills });
    if (
      enteredValue.name &&
      enteredValue.user_name &&
      enteredValue.email &&
      enteredValue.number &&
      enteredValue.password &&
      enteredValue.confirm_pwd
    ) {
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
        catagory: "",
        gender: "",
      });
      setEnteredHobbies([]);
      setEnteredSkills([]);
    } else {
      alert("Please Fill all the details");
    }
  };
  const buttonDisable =
    enteredValue.name &&
    enteredValue.user_name &&
    enteredValue.email &&
    enteredValue.number &&
    enteredValue.password &&
    enteredValue.confirm_pwd;
  return (
    <div>
      <Card>
        <h2>User Form</h2>
        <form className="profile" autoComplete="off" onSubmit={submitHandler}>
          <div className="name">
            {items.map((item, index) => (
              <div id="input_div" key={index}>
                <InputField
                  key={index}
                  label={item.label}
                  type={item.type}
                  id={item.id}
                  className={item.className}
                  onChange={item.onChange}
                  value={item.value}
                  errorMsg={item.errorMsg}
                  showPasswordIcon={eye}
                  hidePasswordIcon={invisible}
                />
              </div>
            ))}
          </div>

          <div className="prof_gen">
            <Profession
              onChange={changeHandler}
              value={enteredValue.profession}
              valueCatagory={enteredValue.catagory}
              errorMsg={validateProfession(enteredValue.profession)}
            />
            <Gender
              onChange={changeHandler}
              errorMsg={validateGender(enteredValue.gender)}
            />
          </div>

          <div className="hobby_skill">
            <Hobbies
              label="Hobbies"
              onChange={hobbyChangeHandler}
              name="hobbies"
              value={enteredHobbies}
              errorMsg={validateHobbies(enteredHobbies)}
            />

            <Skills
              onChange={skillChangeHandler}
              name="skills"
              value={enteredSkills}
              errorMsg={validateSkills(enteredSkills)}
            />
          </div>
          <div className="button">
            <input type="submit" id="submit" disabled={!buttonDisable} />
          </div>
        </form>
      </Card>
    </div>
  );
};
export default Profile;
