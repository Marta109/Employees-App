import "./search-panel.css";

const SearchPanel = ({onSearch}) => {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Find an employee"
      onChange={(e) => {
        onSearch(e.target.value);
      }}
    />
  );
};

export default SearchPanel;
