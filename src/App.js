import React from "react";
import './App.css';
import {ToolbarConnected} from "./components/Toolbar/Toolbar";
import {ListEmployeesConnected} from "./components/ListEmployees/ListEmployees";
import {EmployeeCard} from "./components/EmployeeCard/EmployeeCard";

function App() {
  return (
    <div className="App">
        <ToolbarConnected />
        <div className="container">
            <ListEmployeesConnected />
            <EmployeeCard />
        </div>
    </div>
  );
}

export default App;
