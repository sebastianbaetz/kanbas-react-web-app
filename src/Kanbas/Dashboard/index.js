import { Link } from "react-router-dom";
import db from "../Database";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { FaEllipsisVertical, FaFilePen } from "react-icons/fa6";

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
                  <div className={"float-end px-3 py-4"}>
                    <FaEllipsisVertical
                      className={"fa-xl text-white "}
                    ></FaEllipsisVertical>
                  </div>
                </div>
                <div className={"card-body"}>
                  <h6 className={"card-title"}>{course.number}</h6>
                  <p className={"card-text"}>{course.name}</p>
                  <p className={"card-text"}>{course._id}</p>
                  <FaFilePen className={"text-secondary"}></FaFilePen>
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
