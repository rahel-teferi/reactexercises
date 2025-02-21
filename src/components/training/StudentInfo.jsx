import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const StudentInfo = () => {
  const [student, setStudent] = useState([]);

  //const { studentId } = useParams();

  const params = useParams();
  const studentId = Number(params.studentId);

  const fetchStudent = async (id) => {
    const baseURL = "http://localhost:3000/students";

    console.log(id);
    //console.log(`${baseURL}/${studentId}`);
    try {
      const response = await fetch(`${baseURL}/${id}`);
      if (!response.ok) {
        throw error("not found");
      }
      //console.log(`response: ${response}`);
      const result = await response.json();
      setStudent(result[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchStudent(studentId);
  }, [studentId]);

  const navigate = useNavigate();
  return (
    <div>
      <p>id: {student.student_id}</p>
      <p>First name: {student.student_first_name}</p>
      <p>Last name: {student.student_last_name}</p>
      <p>Email: {student.email}</p>
      <p>
        Go back to the
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            // navigate(-1);
            navigate(`/students/${student.student_id + 1}`);
          }}
        >
          students list
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            // navigate(-1);
            navigate(`/students/${student.student_id - 1}`);
          }}
        >
          Prev
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            // navigate(-1);
            navigate(`/students/${student.student_id + 1}`);
          }}
        >
          Next
        </a>
      </p>
    </div>
  );
};
