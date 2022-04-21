export const validateName = (name) => {
  const nameRegex = /^[a-zA-Z ]+$/;
  if (name.length === 0) {
    return "Name Field must not be empty!!";
  }
  return !nameRegex.test(name) ? "Please Provide Valid Name" : "";
};
export const validateUserName = (user_name) => {
  const userNameRegex = /^[a-zA-Z0-9_\\.]+$/;
  if (user_name.length === 0) {
    return "User Name Field must not be empty!!";
  }
  return !userNameRegex.test(user_name)
    ? "User Name must not contain any special symbol"
    : "";
};
export const validateEmail = (email) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.length === 0) {
    return "Email Field must not be empty!!";
  }
  return !emailRegex.test(email) ? "Please Provide Valid Email" : "";
};
export const validateNumber = (number) => {
  const numberRegex = /^\d{10,13}$/g;
  if (number.length === 0) {
    return "Number Field must not be empty!!";
  } else if (number.trim().length < 10 || number.trim().length > 13) {
    return "Phone Number Must be between 10and 13 digit number";
  }
  return !numberRegex.test(number) ? "Please Provide Valid Phone Number" : "";
};
export const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&_*])[a-zA-Z0-9!@#$%^&_*]{6,16}$/;
  if (password.length === 0) {
    return "Password Field must not be empty!!";
  }
  return !passwordRegex.test(password)
    ? "Password must contain atleas one capitial letter,one small letter,one number and one special symbol"
    : "";
};
export const validateConfirmPassword = (password, confirm_pwd) => {
  if (confirm_pwd.length === 0) {
    return "Password Field must not be empty!!";
  }
  return password !== confirm_pwd ? "Password did not matched" : "";
};
export const validateProfession = (profession) => {
  return profession.length === 0 ? "Profession Field must not be empty!!" : "";
};
export const validateGender = (gender) => {
  return gender.length === 0 ? "Gender Field must not be empty!!" : "";
};
export const validateHobbies = (hobbies) => {
  return hobbies.length === 0 ? "Hobbies Field must not be empty!!" : "";
};
export const validateSkills = (skills) => {
  return skills.length === 0 ? "Skills Field must not be empty!!" : "";
};
