import {
ADD_EMPLOYEE,
DELETE_EMPLOYEE,
EDIT_EMPLOYEE,
} from '../constants/grid-constants';

export function addemployee(empid, empfirstname, emplastname, designation, active) {
  return {type: ADD_EMPLOYEE, empid, empfirstname, emplastname, designation, active};
}

export function deleteemployee(empid) {
  return {type: DELETE_EMPLOYEE, empid};
}

export function editemployee(empid, empfirstname, emplastname, designation, active) {
  return {type: EDIT_EMPLOYEE, empid, empfirstname, emplastname, designation, active};
}
