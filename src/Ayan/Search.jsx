import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      Empdata: [
        { Id: '1', name: 'Ayan', loc: 'Howrah', dept: 'CSE', desig: 'Student' },
        { Id: '2', name: 'Arpan', loc: 'Bongaon', dept: 'ECE', desig: 'HOD' },
        { Id: '3', name: 'Sakil', loc: 'Barasat', dept: 'CSE', desig: 'Clerk' },
        { Id: '4', name: 'Anirban', loc: 'Kolkata', dept: 'IT', desig: 'Clerk' },
      ],

      searchResults: [],
      designation: '',
      location: ''
    };
  }

  desigChange = (e) => {
    this.setState({ designation: e.target.value });
  };

  locChange = (e) => {
    this.setState({ location: e.target.value });
  };

  searchClicked = () => {
    const { Empdata, location, designation } = this.state;
    const searchResults = Empdata.filter(
      (emp) =>
        emp.loc.toLowerCase() === location.toLowerCase() &&
        emp.desig.toLowerCase() === designation.toLowerCase()
    );
    this.setState({ searchResults });
  };

  render() {
    const { location, designation, searchResults } = this.state;

    return (
      <div>
        <h3>Search Employees</h3>
        <div>
          <label>
            Location:
            <input type="text" name='Location' value={location} onChange={this.locChange}/>
          </label>
        </div>
        <div>
          <label>
            Designation:
            <input type="text" name='Designation' value={designation} onChange={this.desigChange}/>
          </label>
        </div>
        <button onClick={this.searchClicked}>Search</button>

        <h4>Search Results:</h4>
        <ul>
          {searchResults.length > 0 ? (
            searchResults.map((emp) => (
              <li key={emp.Id}>
                {emp.name} - {emp.loc} - {emp.dept} - {emp.desig}
              </li>
            ))
          ) : (
            <p>No results found</p>
          )}
        </ul>
      </div>
    );
  }
}

export default Search;