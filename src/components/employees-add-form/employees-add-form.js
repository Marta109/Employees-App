import React from "react";
import "./employees-add-form.css";

export default class EmployeesAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      selary: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    let {name, selary} = this.state;
    if (name.length > 3 && selary > 0) {
      this.props.onAdd(name, selary);
      this.setState({
        name: "",
        selary: "",
      });
    }
  };

  addNewEmployeeData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="app-add-form">
        <h3>Add a new employee</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="name"
            className="form-control new-post-label"
            placeholder="What's his name?"
            onChange={this.addNewEmployeeData}
            value={this.state.name}
          />
          <input
            type="number"
            name="selary"
            className="form-control new-post-label"
            placeholder="S/R in $?"
            onChange={this.addNewEmployeeData}
            value={this.state.selary}
          />
          <button type="submit" className="btn btn-outline-light">
            Add
          </button>
        </form>
      </div>
    );
  }
}
// const EmployeesAddForm = () => {
//   return (
//     <div className="app-add-form">
//       <h3>Add a new employee</h3>
//       <form className="add-form d-flex">
//         <input
//           type="text"
//           className="form-control new-post-label"
//           placeholder="What's his name?"
//         />
//         <input
//           type="number"
//           className="form-control new-post-label"
//           placeholder="S/R in $?"
//         />
//         <button type="submit" className="btn btn-outline-light">
//           Add
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EmployeesAddForm;
