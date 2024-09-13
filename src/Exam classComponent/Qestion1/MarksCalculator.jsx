import React, { Component, createRef } from 'react';
import '../Common.css'

export default class MarksCalculator extends Component {
  constructor() {
    super();
    this.state = {
      studentInfo: []
    };
    
    this.nameRef = createRef();
    this.departmentRef = createRef();
    this.physicsMarksRef = createRef();
    this.chemistryMarksRef = createRef();
    this.biologyMarksRef = createRef();
  }

  addResult = () => {
    const newObject = {
      name: this.nameRef.current.value,
      department: this.departmentRef.current.value,
      physics: Number(this.physicsMarksRef.current.value),
      chemistry: Number(this.chemistryMarksRef.current.value),
      biology: Number(this.biologyMarksRef.current.value)
    };

    this.setState({
      studentInfo: [...this.state.studentInfo, newObject]
    });

    this.nameRef.current.value = '';
    this.departmentRef.current.value = '';
    this.physicsMarksRef.current.value = '';
    this.chemistryMarksRef.current.value = '';
    this.biologyMarksRef.current.value = '';
  };

  delete = (index) => {
    const updatedStudentInfo = this.state.studentInfo.filter((i) => i !== index);
    this.setState({ studentInfo: updatedStudentInfo });
  };

  render() {
    return (
      <div>
        <h1>Marks Calculator</h1>
        <div className="container">
          <label>Name</label>
          <input type="text"  placeholder="Enter your name" ref={this.nameRef}
          />
          <br />
          <label>Department:</label>
          <input type="text" placeholder="Enter your department" ref={this.departmentRef}
          />
          <br />
          <label>Physics Marks</label>
          <input type="number" placeholder="Enter your Physics marks" ref={this.physicsMarksRef}
          />
          <br />
          <label>Chemistry Marks</label>
          <input type="number"  placeholder="Enter your Chemistry marks" ref={this.chemistryMarksRef}
          />
          <br />
          <label>Biology Marks</label>
          <input type="number" placeholder="Enter your Biology marks" ref={this.biologyMarksRef}
          />
          <br />
          <button onClick={this.addResult}>Add result</button>
        </div>
        <div className="resultOutput">
          <h2>Result</h2>
          <table border="1" cellSpacing="0" cellPadding="5">
            <thead>
              <tr>
                <th>Name</th>
                <th>Dept</th>
                <th>Total marks</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.studentInfo.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.department}</td>
                  <td>{student.physics + student.chemistry + student.biology}</td>
                  <td><button onClick={() => this.delete(index)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
