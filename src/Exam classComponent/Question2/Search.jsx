import React, { Component } from "react";
import '../Common.css'


class EmployeeSearch extends Component {
  constructor() {
    super();
    this.locationRef = React.createRef();
    this.designationRef = React.createRef();
    this.state = {
      ExamleData: [
        {
          Id: "1",
          name: "Ayan",
          loc: "Medinipur",
          dept: "IT",
          desig: "Manager",
        },
        {
          Id: "2",
          name: "Sakil",
          loc: " ",
          dept: "Frontend",
          desig: "Analyst",
        },
        {
          Id: "3",
          name: "Anirban",
          loc: "Kolkata",
          dept: "Backend",
          desig: "Developer",
        },
        {
          Id: "4",
          name: "Sattik",
          loc: "Kolkata",
          dept: "Backend",
          desig: "Developer",
        },
        {
          Id: "5",
          name: "Abhishikta",
          loc: "Kolkata",
          dept: "Backend",
          desig: "Developer",
        },
        {
          Id: "6",
          name: "Partha",
          loc: "Kolkata",
          dept: "Backend",
          desig: "Developer"
        },
        {
          Id: "7",
          name: "Sourav",
          loc: "Kolkata",
          dept: "Ejob",
          desig: "Developer"
        }
      ],
      searchResults: [],
    };
  }

  handleSearch = () => {
    const { ExamleData } = this.state;
    const location = this.locationRef.current.value;
    const designation = this.designationRef.current.value;

    const searchResults = ExamleData.filter(
      (example) =>
        example.loc.toLowerCase() === location.toLowerCase() && example.desig.toLowerCase() === designation.toLowerCase()
    );
    this.setState({
      searchResults: searchResults,
    });
  };

  render() {
    const { searchResults } = this.state;

    return (
      <div>
        <h1>Search exampleloyees</h1>
        <div>
          <label>Location:</label>
          <input type="text" ref={this.locationRef} />
        </div>
        <div>
          <label>Designation:</label>
          <input type="text" ref={this.designationRef} />
        </div>
        <button onClick={this.handleSearch}>Search</button>

        <h4>Search Results:</h4>
        <ol>
          {searchResults.map((example) => {
            return (
              <li key={example.Id}>
                {example.name} - {example.loc} - {example.dept} -{" "}
                {example.desig}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default EmployeeSearch;
