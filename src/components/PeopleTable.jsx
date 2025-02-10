import "./PeopleTable.css";
import peopleInfo from "../data/people.json";
import React from "react";

//let peopleInfo = [];
export const PeopleTable = () => {
  let test = 0;
  return (
    <>
      {peopleInfo.length > 0 && (
        <table className="dataTable">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>City</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {peopleInfo.map((person) => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name.toUpperCase()}</td>
                <td>{person.city}</td>
                <td>
                  {person.country}
                  {person.country === "Ethiopia" ? " *" : ""}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4">Total {peopleInfo.length}</td>
            </tr>
          </tfoot>
        </table>
      )}
      {peopleInfo.length === 0 && <p>no people in the DB</p>}
      {peopleInfo.length === 0 ? <p>no people in the DB</p> : ""}
      {!!test && <p>error</p>}
      {/* the above operator "!!" will change the variable to boolean. */}
    </>
  );
};
