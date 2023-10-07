import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import BooleanVariables from "./BooleanVariables";
import WorkingWithFunctions from "./WorkingWithFunctions";
import WorkingWithArrays from "./WorkingWithArrays";
import TemplateLiterals from "./TemplateLiterals";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructuring";
import FunctionDestructing from "./FunctionDestructuring";

function JavaScript() {
  console.log("Hello World!");
  return (
    <div>
      <h1>JavaScript</h1>

      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <TernaryOperator />
      <WorkingWithFunctions />
      <WorkingWithArrays />
      <TemplateLiterals />
      <House />
      <Spread />
      <Destructing />
      <FunctionDestructing />
    </div>
  );
}
export default JavaScript;
