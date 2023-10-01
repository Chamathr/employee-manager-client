import { employeeTypes } from "../types/employeeType";

/*get employees*/
export const fetchEmployee = (payload: any) => {
  return {
    type: employeeTypes.GET_EMPLOYEE,
    payload,
  };
};

export const setGetEmployee = (payload: any) => {
  return {
    type: employeeTypes.SET_GET_EMPLOYEE,
    payload,
  };
};

export const setGetEmployeeError = (payload: any) => {
  return {
    type: employeeTypes.SET_GET_EMPLOYEE_ERROR,
    payload,
  };
};

export const setGetEmployeeLoading = (payload: any) => {
  return {
    type: employeeTypes.SET_GET_EMPLOYEE_LOADING,
    payload,
  };
};

/*add employee*/
export const addEmployee = (payload: any) => {
  return {
    type: employeeTypes.ADD_EMPLOYEE,
    payload,
  };
};

export const setAddEmployee = (payload: any) => {
  return {
    type: employeeTypes.SET_ADD_EMPLOYEE,
    payload,
  };
};

export const setAddEmployeeError = (payload: any) => {
  return {
    type: employeeTypes.SET_ADD_EMPLOYEE_ERROR,
    payload,
  };
};

export const setAddEmployeeLoading = (payload: any) => {
  return {
    type: employeeTypes.SET_ADD_EMPLOYEE_LOADING,
    payload,
  };
};

/*get employee by id*/
export const fetchEmployeeById = (payload: any) => {
  return {
    type: employeeTypes.GET_EMPLOYEE_BY_ID,
    payload,
  };
};

export const setGetEmployeeById = (payload: any) => {
  return {
    type: employeeTypes.SET_GET_EMPLOYEE_BY_ID,
    payload,
  };
};

export const setGetEmployeeByIdError = (payload: any) => {
  return {
    type: employeeTypes.SET_GET_EMPLOYEE_BY_ID_ERROR,
    payload,
  };
};

export const setGetEmployeeByIdLoading = (payload: any) => {
  return {
    type: employeeTypes.SET_GET_EMPLOYEE_BY_ID_LOADING,
    payload,
  };
};

/*update employee*/
export const updateEmployee = (payload: any) => {
  return {
    type: employeeTypes.UPDATE_EMPLOYEE,
    payload,
  };
};

export const setUpdateEmployee = (payload: any) => {
  return {
    type: employeeTypes.SET_UPDATE_EMPLOYEE,
    payload,
  };
};

export const setUpdateEmployeeError = (payload: any) => {
  return {
    type: employeeTypes.SET_UPDATE_EMPLOYEE_ERROR,
    payload,
  };
};

export const setUpdateEmployeeLoading = (payload: any) => {
  return {
    type: employeeTypes.SET_UPDATE_EMPLOYEE_LOADING,
    payload,
  };
};

/*delete employee*/
export const deleteEmployee = (payload: any) => {
  return {
    type: employeeTypes.DELETE_EMPLOYEE,
    payload,
  };
};

export const setDeleteEmployee = (payload: any) => {
  return {
    type: employeeTypes.SET_DELETE_EMPLOYEE,
    payload,
  };
};

export const setDeleteEmployeeError = (payload: any) => {
  return {
    type: employeeTypes.SET_DELETE_EMPLOYEE_ERROR,
    payload,
  };
};

export const setDeleteEmployeeLoading = (payload: any) => {
  return {
    type: employeeTypes.SET_DELETE_EMPLOYEE_LOADING,
    payload,
  };
};