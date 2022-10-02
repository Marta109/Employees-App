import React from "react";
import "./employees-list-item.css";

const EmployeesListItem = ({
  name,
  salary,
  rise,
  increase,
  onDelate,
  onChangeSalary,
  onToggleProp,
}) => {
  let clazName = "list-group-item d-flex justify-content-between ";
  if (increase) {
    clazName += " increase";
  }
  if (rise) {
    clazName += " like";
  }

  const chageSalary = (e) => {
    if (e.target.value) {
      onChangeSalary(name, e.target.value);
    }
  };
  return (
    <li className={clazName}>
      <span
        className="list-group-item-label"
        onClick={onToggleProp}
        data-toggle="rise">
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={`${salary} $`}
        onChange={chageSalary}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          onClick={onToggleProp}
          data-toggle="increase">
          <i className="fas fa-medal"></i>
        </button>
        <button
          type="button"
          className="btn-trash btn-sm "
          onClick={onDelate}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas  fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
