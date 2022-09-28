import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({key, onDelate, onToggleProp, data}) => {
  const newEmployeeslist = data.map((employees) => {
    return (
      <EmployeesListItem
        key={key}
        onDelate={() => {
          onDelate(employees.key);
        }}
        onToggleProp={(e) => {
          onToggleProp(
            employees.key,
            e.currentTarget.getAttribute("data-toggle")
          );
        }}
        {...employees}
        // name={employees.name}
        // salary={employees.salary}
      />
    );
  });
  return (
    <ul className="app-list list-group">
      {newEmployeeslist}
      {/* <EmployeesListItem name="John M." salary={300} />
      <EmployeesListItem name="Ann K." salary={1000} />
      <EmployeesListItem name="David L ." salary={800} /> */}
    </ul>
  );
};

export default EmployeesList;
