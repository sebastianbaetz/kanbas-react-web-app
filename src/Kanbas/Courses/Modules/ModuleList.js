import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCircleCheck, FaEllipsisVertical, FaPlus } from "react-icons/fa6";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules.filter((module) => module.course === courseId);
  return (
    <div>
      <div>
        <ul className="list-group">
          <li className={""}>
            <div className={"align-items-end"}>
              <button className="btn btn-light ">Collapse All</button>
              <button className="btn btn-light ">View Progress</button>
              <div className="dropdown d-inline">
                <button
                  className={"btn dropdown-toggle btn-light "}
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FaCircleCheck className={"text-success"}></FaCircleCheck>
                  Publish All
                </button>
                <div
                  className={"dropdown-menu"}
                  aria-labelledby="dropdownMenuButton"
                >
                  {/*// <!--          <a class="dropdown-item" href="#">Action</a>-->*/}
                  {/*// <!--          <a class="dropdown-item" href="#">Another action</a>-->*/}
                  {/*// <!--          <a class="dropdown-item" href="#">Something else here</a>-->*/}
                </div>
              </div>

              <button className={"btn btn-danger "}>
                <FaPlus className={"text-white"}></FaPlus>
                Module
              </button>

              <button className={"btn btn-light "}>
                <FaEllipsisVertical
                  className={"text-secondary"}
                ></FaEllipsisVertical>
              </button>
            </div>
          </li>
          {modules.map((module, index) => (
            <li key={index} className="list-group-item">
              <h3>{module.name}</h3>
              <p>{module.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ModuleList;
