import { useState, useEffect } from "react";

export const StudentForm = ({ onSubmitForm }) => {
  const [formFields, setFormFields] = useState({
    fname: "",
    lname: "",
    email: "",
    gender: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newStudent = {
      student_first_name: formFields.fname,
      student_last_name: formFields.lname,
      email: formFields.email,
      gender: formFields.gender,
      password: "hello",
    };
    onSubmitForm(newStudent);
    setFormFields({
      fname: "",
      lname: "",
      email: "",
      gender: "",
    });
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
            onChange={handelChange}
            // onChange={(e) => setFname(e.target.value.replace(/[^a-zA-Z /]/g, ""))}
            //allowing only letters and space. ON FOCUS ^ means not whaen its inside the [].
          />
        </p>
        <p>
          <lable htmlFor="lname">Last Name </lable>
          <input
            type="text"
            id="lname"
            name="lname"
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
          <lable htmlFor="gender">Gender </lable>
          <input
            type="text"
            id="gender"
            name="gender"
            value={formFields.gender}
            // onChange={(e) => setGender(e.target.value)}
            onChange={handelChange}
          />
        </p>
        <input type="submit" value="Submit" id="submit" />
      </form>
    </div>
  );
};
