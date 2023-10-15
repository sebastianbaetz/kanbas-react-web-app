import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {
  FaCircleCheck,
  FaEllipsisVertical,
  FaFilePen,
  FaGripVertical,
  FaPlus,
} from "react-icons/fa6";

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
          <FaPlus className={"text-black"}></FaPlus>Group
        </button>

        <button className="btn btn-danger float-end col-2">
          <FaPlus className={"text-white"}></FaPlus>Assignment
        </button>

        <button className="btn btn-light float-end col-1">
          <FaEllipsisVertical className={"text-secondary"}></FaEllipsisVertical>
        </button>
      </div>
      <button className={"btn btn-light btn-dropdown w-100 text-start"}>
        ASSIGNMENTS
        <button className="float-end btn btn-light">
          <FaEllipsisVertical className={"text-secondary"}></FaEllipsisVertical>
        </button>
        <button className="btn btn-light float-end">
          <FaPlus className={"text-secondary"}></FaPlus>
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
            <FaGripVertical className={"text-secondary"}></FaGripVertical>
            <FaFilePen
              className={"fa-file-pen fa-xl mx-3 pt-2 text-success"}
            ></FaFilePen>

            <span className={""}>
              {assignment.title} | 100 Points | Not available until September
              15th, 2023
            </span>
            <button className="btn btn-light float-end">
              <FaEllipsisVertical
                className={"text-secondary"}
              ></FaEllipsisVertical>
            </button>
            <button className="btn btn-light float-end">
              <FaCircleCheck className={"text-success"}></FaCircleCheck>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
