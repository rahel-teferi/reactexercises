// import React from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { StudentForm } from "./StudentForm";
import { StudentsTable } from "./StudentsTable";
export const Students = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [students, setStudents] = useState([]);

  const baseURL = "http://localhost:3000";

  const fetchStudents = async () => {
    try {
      const response = await fetch(`${baseURL}/students`);
      if (!response.ok) {
        throw error("not found");
      }
      const result = await response.json();
      setStudents(result);

      setIsLoading(false);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchStudents(students);
    //console.log(students);
  }, []);

  const handleRowClick = (id, e) => {
    navigate(`/students/${id}`); // json/5
  };

  const deleteStudent = (student_id, e) => {
    e.stopPropagation();
    let idToDelete = student_id;

    console.log(idToDelete);

    fetch(`${baseURL}/students/${idToDelete}`, {
      method: "DELETE",
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject("An error has occurred!");
        }
      })
      .then((data) => {
        alert(data.message);
        fetchStudents();
        //console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addStudent = async (data) => {
    try {
      const response = await fetch(`${baseURL}/students`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json;charset=utf-8" },
      });
      // console.log(response);
      if (!response.ok) {
        if (response.status === 404) {
          alert(error.message);
        }
        throw new Error("db problem");
      }
      const result = await response.json();
      // console.log(error);
      alert(result.message);
      await fetchStudents();
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();

  return (
    <div>
      <h1>Students managment</h1>
      <StudentForm onSubmitForm={addStudent} />
      <StudentsTable
        data={students}
        onHandleRowClick={handleRowClick}
        onRowToDelete={deleteStudent}
      />
      <Outlet />
    </div>
  );
};
