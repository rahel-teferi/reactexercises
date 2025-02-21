import { useState, useEffect, useRef } from "react";
const emptyStudent = {
  fname: "",
  lastName: "",
  email: "",
  birthdate: "",
  gender: null,
  otherGender: "",
  password: "",
};

export const StudentForm = ({ onSubmitForm, cleanForm }) => {
  const [formFields, setFormFields] = useState({
    fname: "",
    lname: "",
    email: "",
    gender: "",
    genderOther: "",
    password: "",
    confirmPassword: "",
  });
  // const otherGender = useRef(null);
  // const [passwordError, setPasswordError] = useState("");
  // const [firstNameError, setFirstNameError] = useState("");

  const [errors, setErrors] = useState({
    firstNameError: "",
    comparePasswordError: "",
  });

  const [disabledGenderOther, setDisabledGenderOther] = useState(true);
  const [focusGenderOther, setFocusGenderOther] = useState(false);
  const otherGenderField = useRef(null);
  useEffect(() => {
    if (cleanForm) {
      setFormFields({
        fname: "",
        lname: "",
        email: "",
        birthdate: "",
        gender: "",
        genderOther: "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [cleanForm]);

  useEffect(() => {
    if (focusGenderOther) {
      otherGenderField.current.focus();
    }
  }, [focusGenderOther]);

  const handleFirstNameBlur = (e) => {
    // const firstNameValidation = /^[a-zA-Z ]*$/;
    const firstNameValidation = /^[a-zA-Z ]{3,}$/;
    if (!firstNameValidation.test(e.target.value)) {
      setErrors({
        ...errors,
        firstNameError: "You can only use letters and spaces.",
      });
    } else {
      setErrors({
        ...errors,
        firstNameError: "",
      });
    }
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    if (name === "gender") {
      if (value === "O") {
        // enable the genderOther field
        setDisabledGenderOther(false);
        // trigger the focus event
        setFocusGenderOther(true);
        setFormFields({
          ...formFields,
          gender: "",
        });
      } else {
        // disable the genderOther field
        setDisabledGenderOther(true);
        setFocusGenderOther(false);
        // cleaning the content of the otherGender field
        setFormFields({
          ...formFields,
          gender: value,
          otherGender: "",
        });
      }
    } else {
      setFormFields({
        ...formFields,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formFields);
    // if (error===false)
    let isThereErrors = false;
    for (let property in errors) {
      if (errors[property] !== "") {
        isThereErrors = true;
      }
    }
    // if (!error) {
    if (!isThereErrors) {
      if (formFields.gender === "O" && formFields.otherGender === "") {
        alert("You need to select or specify a gender!");
      } else {
        let newStudent = {
          student_first_name: formFields.fname,
          student_last_name: formFields.lname,
          email: formFields.email,
          gender: formFields.gender,
          gender_other: formFields.genderOther,
          password: formFields.password,
        };
        onSubmitForm(newStudent);
      }
    } else {
      alert("There are still some errors.");
    }
  };

  const comparePassword = () => {
    if (formFields.confirmPassword !== "") {
      if (formFields.confirmPassword !== formFields.password) {
        // console.log("Different passwords");
        // setComparePasswordError("Both passwords must be equal!");
        setErrors({
          ...errors,
          comparePasswordError: "Both passwords must be equal!",
        });
        // setError(true);
      } else {
        // setComparePasswordError("");
        setErrors({
          ...errors,
          comparePasswordError: "",
        });
        // setError(false);
      }
    }
  };
  return (
    <div>
      <form id="formPerson" onSubmit={handleSubmit}>
        <p>
          <lable htmlFor="id">Student Id </lable>
          <input
            type="number"
            name="student_id"
            value={formFields.id}
            // onChange={(e) => setId(e.target.value)}
            onChange={handelChange}
            id="id"
          />
        </p>
        <p>
          <lable htmlFor="fname">First Name </lable>
          <input
            type="text"
            id="fname"
            name="fname"
            value={formFields.fname}
            onBlur={handleFirstNameBlur}
            onChange={handelChange}
            // onChange={(e) => setFname(e.target.value.replace(/[^a-zA-Z /]/g, ""))}
            //allowing only letters and space. ON FOCUS ^ means not whaen its inside the [].
          />
          {errors.firstNameError && <small>{errors.firstNameError}</small>}
        </p>
        <p>
          <lable htmlFor="lname">Last Name </lable>
          <input
            type="text"
            id="lname"
            name="lname"
            patern="^[a-zA-Z]{3-5}$"
            // errormessage="enter correct name"
            value={formFields.lname}
            // onChange={(e) => setLname(e.target.value)}
            onChange={handelChange}
          />
        </p>

        <p>
          <lable htmlFor="email">Email </lable>
          <input
            type="text"
            id="email"
            name="email"
            value={formFields.email}
            // onChange={(e) => setEmail(e.target.value)}
            onChange={handelChange}
          />
        </p>
        <p>
          <lable>
            <input
              type="radio"
              value="M"
              name="gender"
              checked={formFields.gender === "M"}
              onChange={handelChange}
            />
            Male
          </lable>
          <lable>
            <input
              type="radio"
              value="F"
              name="gender"
              checked={formFields.gender === "F"}
              onChange={handelChange}
            />
            Female
          </lable>
          <lable>
            <input
              type="radio"
              value="O"
              name="gender"
              checked={formFields.gender === "O"}
              onChange={handelChange}
              // onChange={() => otherGender.current.focus()}
            />
            Others
          </lable>

          <input
            type="text"
            id="genderOther"
            name="genderOther"
            value={formFields.genderOther}
            // onChange={(e) => setGender(e.target.value)}
            onChange={handelChange}
            disabled={disabledGenderOther}
            ref={otherGenderField}
          />
        </p>
        <br />
        <p>
          <label>
            password
            <input
              type="password"
              name="password"
              value={formFields.password}
              onChange={handelChange}
              onBlur={comparePassword}
              autoComplete="false"
            />
          </label>
        </p>
        <p>
          <label>
            conform password
            <input
              type="password"
              name="confirmPassword"
              value={formFields.confirmPassword}
              onChange={handelChange}
              autoComplete="false"
              // pattern={formFields.password}
              onBlur={comparePassword}
            />
          </label>
        </p>
        {errors.comparePasswordError && (
          <small>{errors.comparePasswordError}</small>
        )}
        <p>
          {" "}
          <input type="submit" value="Submit" id="submit" />
        </p>
      </form>
    </div>
  );
};
