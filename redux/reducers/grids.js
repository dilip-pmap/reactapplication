import {
ADD_EMPLOYEE,
DELETE_EMPLOYEE,
EDIT_EMPLOYEE,
} from '../constants/grid-constants';

let Employees = [];

function gridReducer(state = Employees, action) {
  switch (action.type) {
  case ADD_EMPLOYEE:
    return [
      ...state,
      {
        id: action.empid,
        firstname: action.empfirstname,
        lastname: action.emplastname,
        designation: action.designation,
        active: action.active
      }
    ];
  case DELETE_EMPLOYEE:
    return state.filter(Employee => Employee.id !== action.empid);
  case EDIT_EMPLOYEE:
    return state.map(Employee =>
          Employee.id === action.empid ?
            {
              Employee,
              id: action.empid,
              firstname: action.empfirstname,
              lastname: action.emplastname,
              designation: action.designation,
              active: action.active
            } :
          Employee
      );
  default:
    return state;
  }
}

export default gridReducer;
