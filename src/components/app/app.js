import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";
import React from "react";

// const data = [
//   {name: "John6 M.", salary: 1000, key: "as5", increase: false},
//   {name: "David K.", salary: 800, key: "5a6s", increase: true},
//   {name: "Ann L.", salary: 700, key: "as6", increase: false},
// ];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "John6 M.",
          salary: 1100,
          key: "as5",
          increase: false,
          rise: false,
        },
        {
          name: "David K.",
          salary: 800,
          key: "5a6s",
          increase: true,
          rise: true,
        },
        {
          name: "Ann L.",
          salary: 700,
          key: "as6",
          increase: false,
          rise: false,
        },
      ],
      term: "",
      filter: "all",
    };
  }
  delateEmployee = (id) => {
    let newData = this.state.data.filter((el) => {
      return el.key !== id;
    });

    this.setState(({data}) => ({
      data: newData,
    }));
  };

  addNewEmployee = (name, salary) => {
    if (name !== "" && name !== " " && salary > 0) {
      const newEmployee = {
        name: name,
        salary: salary,
        increase: false,
        rise: false,
        key: String(Math.random()),
      };
      this.setState(({data}) => {
        const newArry = [...data, newEmployee];
        return {data: newArry};
      });
    }
  };

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map((el) => {
        if (el.key === id) {
          return {...el, [prop]: !el[prop]};
        }
        return el;
      }),
    }));
  };

  filterData = (item, term) => {
    return item.filter((el) => {
      return el.name.toLowerCase().includes(term.toLowerCase());
    });
  };

  filterItem = (item, filter, term) => {
    switch (filter) {
      case "enhance":
        return item.filter((el) => el.rise);
      case "salery":
        return item.filter((el) => el.salary >= 1000);
      default:
        return this.filterData(item, term);
    }
  };
  searchEmployees = (item, term, filter) => {
    if (term.length <= 0 && filter.length <= 0) {
      return item;
    }
    if (term === "") {
      return this.filterItem(item, filter, term);
    } else {
      const filterItem = this.filterItem(item, filter, term);
      return this.filterData(filterItem, term);
    }
  };

  onUpdateFilter = (filter) => {
    this.setState({filter});
  };

  onUpdateSearch = (term) => {
    this.setState({term});
  };

  onChangeSalary = (name, newSalary) => {
    newSalary = parseInt(newSalary);
    if (!newSalary) {
      return null;
    }

    this.setState(({data}) => ({
      data: data.map((el) => {
        if (el.name === name) {
          return {...el, salary: newSalary};
        }
        return el;
      }),
    }));
  };

  render() {
    const {data, term, filter} = this.state;
    const visibleData = this.searchEmployees(data, term, filter);

    return (
      <div className="app">
        <AppInfo
          employeesCount={data.length}
          receivedCount={data.filter((el) => el.rise === true).length}
        />

        <div className="search-panel">
          <SearchPanel onSearch={this.onUpdateSearch} />
          <AppFilter onFilter={this.onUpdateFilter} filter={filter} />
        </div>

        <EmployeesList
          data={visibleData}
          onDelate={this.delateEmployee}
          onToggleProp={this.onToggleProp}
          onChangeSalary={this.onChangeSalary}
        />
        <EmployeesAddForm onAdd={this.addNewEmployee} />
      </div>
    );
  }
}

export default App;
