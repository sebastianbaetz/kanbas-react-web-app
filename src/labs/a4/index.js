import React from "react";
import Add from "./add";
import ClickEvent from "./clickEvent";
import PassingDataOnEvent from "./passingDataOnEvent";
import PassingFunctions from "./passingFunctions";
import EventObject from "./eventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "../../stringStateVariables";
import DateStateVariable from "./dateStateVariable";
import ObjectStateVariable from "./objectStateVariable";
import ArrayStateVariable from "./arrayStateVariable";
import ParentStateComponent from "./parentStateComponent";
import ChildStateComponent from "./childStateComponent";
import ReduxExamples from "./ReduxExamples";
import TodoList from "./ReduxExamples/todos/TodoList";

const Assignment4 = () => {
  function sayHello() {
    alert("Hello");
  }

  return (
    <>
      <h1>Assignment 4</h1>
      <Add a={1} b={2} />
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
      <ChildStateComponent />
      <ReduxExamples />
      <TodoList />
    </>
  );
};
export default Assignment4;
