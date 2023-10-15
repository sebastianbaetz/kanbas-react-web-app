import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {
  FaBook,
  FaCalendar,
  FaCircleArrowRight,
  FaCircleQuestion,
  FaCircleUser,
  FaClock,
  FaEnvelopeOpenText,
  FaGauge,
  FaMicrochip,
} from "react-icons/fa6";

function KanbasNavigation() {
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];

  const icons = [
    <FaCircleUser className={"text-secondary"} />,
    <FaGauge />,
    <FaBook />,
    <FaCalendar />,
    <FaEnvelopeOpenText />,
    <FaClock />,
    <FaMicrochip />,
    <FaCircleArrowRight />,
    <FaCircleQuestion />,
  ];

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-nav-list" style={{ width: 80 }}>
      <Link to={"#"}>
        <img
          src={"../images/northeastern.png"}
          alt={"Northeastern Logo"}
          height={"80px"}
          width={"80px"}
        />
      </Link>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item text-center text-wrap px-0 border-0 wd-nav-list-group-item ${
            pathname.includes(link) && "wd-nav-active"
          }`}
        >
          <div>{icons[index]}</div>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
