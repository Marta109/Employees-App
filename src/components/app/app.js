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
          salary: 1000,
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

  addNewEmployee = (name, selary) => {
    // e.preventDefault();

    // let {name, selary} = state;
    if (name !== "" && name !== " " && selary > 0) {
      const newEmployee = {
        name: name,
        selary: selary,
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

  // onToggleRise = (id) => {
  //   // let newData = this.state.data.map((item) => {
  //   //   if (item.key === id) {
  //   //     return {...item, rise: !item.rise};
  //   //   }
  //   //   return item;
  //   // });

  //   this.setState(({data}) => ({
  //     data: data.map((item) => {
  //       if (item.key === id) {
  //         return {...item, rise: !item.rise};
  //       }
  //       return item;
  //     }),
  //   }));
  // };

  render() {
    let {data} = this.state;
    return (
      <div className="app">
        <AppInfo
          employeesCount={data.length}
          receivedCount={data.filter((el) => el.rise === true).length}
        />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={data}
          onDelate={this.delateEmployee}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addNewEmployee} />
      </div>
    );
  }
}

export default App;
