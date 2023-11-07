import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { FaEllipsisVertical, FaFilePen } from "react-icons/fa6";
import Accordion from "react-bootstrap/Accordion";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  // const [courses, setCourses] = useState(db.courses);
  // const [course, setCourse] = useState({
  //   name: "New Course",
  //   number: "New Number",
  //   startDate: "2023-09-10",
  //   endDate: "2023-12-15",
  // });

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
      <h5>Course</h5>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Course Settings</Accordion.Header>
          <Accordion.Body>
            <input
              value={course.name}
              className="form-control"
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
            <input
              value={course.number}
              className="form-control"
              onChange={(e) => setCourse({ ...course, number: e.target.value })}
            />
            <input
              value={course.startDate}
              className="form-control"
              onChange={(e) =>
                setCourse({ ...course, startDate: e.target.value })
              }
              type="date"
            />
            <input
              value={course.endDate}
              className="form-control"
              onChange={(e) =>
                setCourse({ ...course, endDate: e.target.value })
              }
              type="date"
            />
            <button className={"btn btn-success"} onClick={addNewCourse}>
              Add
            </button>
            <button className={"btn btn-secondary"} onClick={updateCourse}>
              Update
            </button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <hr />
      <div className={"px-4"}>
        <h4> Published Courses ({courses.length})</h4>
        <hr />
        <div className="list-group d-flex flex-row flex-wrap">
          {courses.map((course, index) => (
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

                  <button
                    className={"btn btn-danger float-end"}
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className={"btn btn-secondary float-end"}
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>
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
