import React from "react";
import "./employees-list-item.css";

// // export default class EmployeesListItem extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       increase: false,
// //       like: false,
// //     };
// //   }

//   // onIncrease = () => {
//   //   this.setState(({increase}) => ({
//   //     increase: !increase,
//   //   }));
//   // };
//   // onLike = () => {
//   //   this.setState(({like}) => ({
//   //     like: !like,
//   //   }));
//   // };
//   render() {
//     const {name, salary, onDelate, onToggleIncrease, onToggleRise} =
//       this.props;
//     let {increase, like} = this.state;
//     const clazName = like
//       ? "list-group-item d-flex justify-content-between like"
//       : "list-group-item d-flex justify-content-between ";
//     let newClassName = increase ? clazName + "increase" : clazName;
//     return (
//       <li className={newClassName}>
//         <span
//           className="list-group-item-label"
//           onClick={onToggleRise}>
//           {name}
//         </span>
//         <input
//           type="text"
//           className="list-group-item-input"
//           defaultValue={`${salary} $`}
//         />
//         <div className="d-flex justify-content-center align-items-center">
//           <button
//             type="button"
//             className="btn-cookie btn-sm "
//             onClick={onToggleIncrease}>
//             <i className="fas fa-medal"></i>
//           </button>
//           <button
//             type="button"
//             className="btn-trash btn-sm "
//             onClick={onDelate}>
//             <i className="fas fa-trash"></i>
//           </button>
//           <i className="fas  fa-star"></i>
//         </div>
//       </li>
//     );
//   }
// }

const EmployeesListItem = ({
  name,
  salary,
  rise,
  increase,
  onDelate,
  onToggleProp,
}) => {
  let clazName = "list-group-item d-flex justify-content-between ";
  if (increase) {
    clazName += " increase";
  }
  if (rise) {
    clazName += " like";
  }

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
