/*
 component type 
  1. class component
  2. functional component
  imrc - import React & Component
  cc - create class component
  ccc - create class component with constructor
*/

import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      colors: ["red", "orange"],
      employees: [
        { empId: 10001, empName: "Raj" },
        { empId: 10002, empName: "Anu" },
        { empId: 10003, empName: "Sam" },
      ],
    };
  }
  render() {
    return (
      <div className="home">
        <h1>Home Page</h1>
        <h3>{this.state.count}</h3>
        <p>{10 + 20}</p>
        {this.state.colors.map((c) => (
          <h5>{c.toUpperCase()}</h5>
        ))}
        <table className="table w-50 mx-auto" >
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>Employee Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((emp) => (
              <tr>
                <td>{emp.empId}</td>
                <td>{emp.empName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;