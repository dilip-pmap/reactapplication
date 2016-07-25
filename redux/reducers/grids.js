import {
ADD_EMPLOYEE,
DELETE_EMPLOYEE,
EDIT_EMPLOYEE,
} from '../constants/grid-constants';

let Employees = [{"id":"1","firstname":"Dilip","lastname":"Gudivada","designation":"Software Engineer","active":true},
{"id":"2","firstname":"Ramesh","lastname":"Kodam","designation":"Software Engineer","active":false},
{"id":"3","firstname":"Marcelo","lastname":"Paiva","designation":"Director","active":true},
{"id":"4","firstname":"Alessandro","lastname":"Barroso","designation":"Font-end Developer","active":false},
{"id":"5","firstname":"Michel","lastname":"Marrache","designation":"Font-end Developer","active":true},
{"id":"6","firstname":"Joann","lastname":"Kim","designation":"Font-end Developer","active":false},
{"id":"7","firstname":"Jessica","lastname":"Nace","designation":"Font-end Developer","active":true}];


function gridReducer(state = Employees, action) {
  switch (action.type) {
  case ADD_EMPLOYEE:
  return [
    ...state,
    {
      id:action.empid,
      firstname:action.empfirstname,
      lastname:action.emplastname,
      designation:action.designation,
      active:action.active
    }
  ]
  case DELETE_EMPLOYEE:
  return state.filter(Employees => Employees.id !== action.empid);
  case EDIT_EMPLOYEE:
  return   state.map(Employees =>
        Employees.id === action.empid ?
        {
        Employees ,
          id:action.empid,
          firstname: action.empfirstname,
          lastname:action.emplastname,
          designation:action.designation,
          active: action.active
        } :
          Employees
      );
  default:
    return state;
  }
}

export default gridReducer;
