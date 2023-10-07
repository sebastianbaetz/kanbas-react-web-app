import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "https://kit.fontawesome.com/5f3a9d19bd.js";
import "./index.css";

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
    "fa-regular fa-circle-user fa-2xl text-secondary",
    "fa-solid fa-gauge fa-2xl",
    "fa-solid fa-book fa-2xl",
    "fa-regular fa-calendar fa-2xl",
    "fa-solid fa-envelope-open-text fa-2xl",
    "fa-regular fa-clock fa-2xl",
    "fa-solid fa-microchip fa-2xl",
    "fa-solid fa-circle-arrow-right fa-2xl",
    "fa-regular fa-circle-question fa-2xl",
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
          <i className={`${icons[index]} "text-center"`}> </i>
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
