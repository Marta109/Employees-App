import "./app-filter.css";
const AppFilter = (props) => {
  const updateFilter = (filter) => {
    props.onFilter(filter);
  };

  const buttonsData = [
    {name: "all", label: "All employees"},
    {name: "enhance", label: "To enhance"},
    {name: "salery", label: "salary of more than 1000$"},
  ];

  const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={label}
        onClick={() => {
          updateFilter(name);
        }}>
        {label}
      </button>
    );
  });
  return (
    <div className="btn-group">
      {buttons}
      {/* <button
        className="btn  btn-light"
        type="button"
        onClick={() => {
          updateFilter("all");
        }}>
        All employees
      </button>
      <button
        className="btn btn-outline-light"
        type="button"
        onClick={() => {
          updateFilter("enhance");
        }}>
        To enhance
      </button>
      <button
        className="btn btn-outline-light"
        type="button"
        onClick={() => {
          updateFilter("salery");
        }}>
        salary of more than 1000$
      </button> */}
    </div>
  );
};

export default AppFilter;
