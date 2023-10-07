import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId,
  );
  return (
    <div className={"mt-5"}>
      <h2>Assignments for course {courseId}</h2>
      <div className={"row container"}>
        <input
          id="search-asignment-name-entry"
          type="text"
          className="form-control float-end col"
          placeholder="Search for assignment"
        />

        <button className="btn btn-light float-end col-2">
          <i className="fa-solid fa-plus text-black"></i> Group
        </button>

        <button className="btn btn-danger float-end col-2">
          <i className="fa-solid fa-plus text-white"></i> Assignment
        </button>

        <button className="btn btn-light float-end col-1">
          <i className="fa-solid fa-ellipsis-vertical text-secondary"></i>
        </button>
      </div>
      <button className={"btn btn-light btn-dropdown w-100 text-start"}>
        ASSIGNMENTS
        <button className="float-end btn btn-light">
          <i className="fa-solid fa-ellipsis-vertical text-secondary"></i>
        </button>
        <button className="btn btn-light float-end">
          <i className="fa-solid fa-plus text-secondary"></i>
        </button>
        <span className="text-black float-end mx-3 px-1 mt-1 border rounded-pill border-dark">
          40% of total
        </span>
      </button>
      <div id={"assignments-list"} className="list-group">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
          >
            <i className="fa-solid fa-grip-vertical text-secondary"></i>
            <i className="fa-solid fa-file-pen fa-xl mx-3 pt-2 text-success"></i>
            <span className={""}>
              {assignment.title} | 100 Points | Not available until September
              15th, 2023
            </span>
            <button className="btn btn-light float-end">
              <i className="fa-solid fa-ellipsis-vertical text-secondary"></i>
            </button>
            <button className="btn btn-light float-end">
              <i className="fa-solid fa-circle-check text-success"></i>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
