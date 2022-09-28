import "./app-info.css";

const AppInfo = ({employeesCount, receivedCount}) => {
  return (
    <div className="app-info">
      <h1>Accounting of employees in the company N</h1>
      <h2>Total number of employees: {employeesCount}</h2>
      <h2>The award will be received: {receivedCount}</h2>
    </div>
  );
};

export default AppInfo;
