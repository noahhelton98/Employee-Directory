
import React from 'react';
//import Header from './components/header/header';
import API from './utils/API';
//import Search from './components/search/search';
import EmployeeTable from './components/Table/EmployeeTable';

class App extends React.Component {
  state = {
    employees: [],
    employeeSort: [],
    search: '',
  };

  componentDidMount() {
    API.getRandomUser()
      .then(res => {
        this.setState({ 
          employees: res.data.results, 
          employeeSort: res.data.results
        })
      })
  }

  sortEmployee = () => {
    let { employees, search } = this.state;
    let employeeSort = employees.filter((sorted) => {
      return (
        sorted.name.first.toLowerCase().includes(search.toLowerCase()) ||
        sorted.name.last.toLowerCase().includes(search.toLowerCase()) ||
        sorted.email.toLowerCase().includes(search.toLowerCase())
      );
    });
    this.setState({ employeeSort });
  }

  startSort = (event) => {
    event.preventDefault();

    this.setState({ search: event.target.value }, () => {
      this.sortEmployee();
      this.setState({ sorted: true });
    });
  };

  
  render() {
    return (
      <div>
       {/*  <Header/>
        <Search 
        startSort={this.startSort}
        />
        <div className="emp-header d-flex justify-content-around">
          <div>Photo</div>
          <div>Name</div>
          <div>Age</div>
          <div>E-mail</div>
          <div>Phone</div>
          <div>Address</div>
        </div> */}

        {
          this.state.employeeSort.map((item) => (

            <EmployeeTable
              picture={item.picture.large}
              title={item.name.title}
              first={item.name.first}
              last={item.name.last}
              age={item.dob.age}
              phone={item.cell}
              email={item.email}
              city={item.location.city}
              state={item.location.state}
              postcode={item.location.postcode}
            />
          ))
        }
      </div>
    )
  }
}

export default App;
