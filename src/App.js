import React from "react";
import './App.css';
import {Toolbar} from "./components/Toolbar/Toolbar";
import {ListEmpoyees} from "./components/ListEmployees/ListEmployees";
import {EmployeeCard} from "./components/EmployeeCard/EmployeeCard";

function App() {
  return (
    <div className="App">
        <Toolbar />
        <div className="container">
            <ListEmpoyees />
            <EmployeeCard />
        </div>
    </div>
  );
}

export default App;
