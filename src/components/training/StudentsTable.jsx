export const StudentsTable = ({ data, onRowToDelete, onHandleRowClick }) => {
  return (
    <div>
      {data && (
        <table className="dataTable">
          <thead>
            <tr>
              <th>Student_Id</th>
              <th>Student First Name</th>
              <th>Student last Name</th>
              <th>Email</th>
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
