import { useRef, useState } from "react";
export const StudentsTable = ({
  data,
  onRowToDelete,
  onHandleRowClick,
  onSorting,
}) => {
  const order = useRef("ASC");
  const sortingColumn = useRef("");
  const handleSortingByName = (e) => {
    // console.log(e.target.className);
    onSorting(e.target.className, order);
  };
  return (
    <div>
      {data && (
        <table className="dataTable">
          <thead>
            <tr>
              <th
                onClick={handleSortingByName}
                className="student_id"
                ref={sortingColumn}
                ref2={order}
              >
                Student_id
              </th>
              <th
                onClick={handleSortingByName}
                className="student_first_name"
                ref={sortingColumn}
              >
                First name
              </th>
              <th
                onClick={handleSortingByName}
                className="student_last_name"
                ref={sortingColumn}
              >
                Last name
              </th>
              <th
                onClick={handleSortingByName}
                className="email"
                ref={sortingColumn}
              >
                email
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, index) => (
              <tr
                key={student.student_id}
                onClick={(e) => onHandleRowClick(student.student_id, e)}
              >
                <td>{student.student_id}</td>
                <td>{student.student_first_name}</td>
                <td>{student.student_last_name}</td>
                <td>{student.email}</td>
                <td>
                  <button
                    type="button"
                    onClick={(e) => onRowToDelete(student.student_id, e)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">
                Total
                <span id="total">{data.length}</span> Posts
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};
