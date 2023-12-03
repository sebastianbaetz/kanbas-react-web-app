import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";

function Assignment5() {
  const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000";
  const API = `${API_BASE}/a5`;
  const APIWelcome = `${API_BASE}/a5/welcome`;

  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a href={APIWelcome} className="list-group-item">
          Welcome
        </a>
      </div>
      {/*<SimpleAPIExamples />*/}
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
    </div>
  );
}
export default Assignment5;
