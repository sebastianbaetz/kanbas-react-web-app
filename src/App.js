import Labs from "./labs";
import HelloWorld from "./labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import {HashRouter, Navigate} from "react-router-dom";
import {Route, Routes} from "react-router";
import Project from "./project";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/labs" />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/project/*" element={<Project />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;
