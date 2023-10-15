import db from "../../Kanbas/Database";
import { Link, Navigate, useParams } from "react-router-dom";
import { Route, Routes } from "react-router";
import CourseNavigation from "./CourseNavigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import "./index.css";
import { FaBars } from "react-icons/fa6";

function Courses() {
  const pathName = window.location.href.split("/").pop();
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div className={"mt-4 mx-4"}>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <div className={"d-inline px-2"}>
            <FaBars className={"fa-xl text-danger"}></FaBars>
          </div>
          <li className="breadcrumb-item d-inline px-2 text-danger">
            <Link to="Home">
              {course.number} {course._id}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {pathName}
          </li>
        </ol>
      </nav>
      <h5 className={"d-inline px-2 text-danger"}>
        {course.number} {course._id}
      </h5>
      <hr />
      <p className={"mx-2"}>
        {course.number} {course._id}
      </p>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
