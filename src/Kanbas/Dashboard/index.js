import { Link } from "react-router-dom";
import db from "../Database";
import "bootstrap/dist/css/bootstrap.min.css";
import "https://kit.fontawesome.com/5f3a9d19bd.js";
import "./index.css";

function Dashboard() {
  const colors = [
    "bg-primary",
    "bg-success",
    "bg-danger",
    "bg-warning",
    "bg-info",
  ];
  return (
    <div className={"px-3"}>
      <h1>Dashboard</h1>
      <hr />
      <div className={"px-4"}>
        <h4> Published Courses ({db.courses.length})</h4>
        <hr />
        <div className="list-group d-flex flex-row flex-wrap">
          {db.courses.map((course, index) => (
            <Link
              key={course._id}
              to={`/Kanbas/Courses/${course._id}`}
              className="list-group-item border-0"
            >
              <div className={"card wd-dashboard-course-card"}>
                <div
                  className={`card-img wd-card-img ${
                    colors[index % colors.length]
                  }`}
                >
                  <i className="fa-solid fa-ellipsis-vertical text-white fa-xl float-end px-3 py-4"></i>
                </div>
                <div className={"card-body"}>
                  <h6 className={"card-title"}>{course.number}</h6>
                  <p className={"card-text"}>{course.name}</p>
                  <p className={"card-text"}>{course._id}</p>
                  <i className="fa-solid fa-file-pen text-secondary"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
