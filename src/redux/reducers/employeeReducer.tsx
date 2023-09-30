import { employeeTypes } from "../types/employeeType";

const initialState = {
    employee: [],
    getEmployeeLoading: 'idle',
    getEmployeeError: null,

    addedEmployee: null,
    addEmployeeLoading: 'idle',
    addEmployeeError: null,

    employeeById: {},
    getEmployeeByIdLoading: 'idle',
    getEmployeeByIdError: null,

    updatedEmployee: null,
    updateEmployeeLoading: 'idle',
    updateEmployeeError: null,

    deletedEmployee: null,
    deleteEmployeeLoading: 'idle',
    deleteEmployeeError: null,
};

export const employeeReducer = (state = initialState, action: any) => {

    switch (action.type) {
        /*get employee*/
        case employeeTypes.SET_GET_EMPLOYEE:
            return {
                ...state,
                employee: action.payload,
            };
        case employeeTypes.SET_GET_EMPLOYEE_LOADING:
            return {
                ...state,
                getEmployeeLoading: action.payload,
            };
        case employeeTypes.SET_GET_EMPLOYEE_ERROR:
            return {
                ...state,
                getEmployeeError: action.payload,
            };

        /*add employee*/
        case employeeTypes.SET_ADD_EMPLOYEE:
            return {
                ...state,
                addedEmployee: action.payload,
            };
        case employeeTypes.SET_ADD_EMPLOYEE_LOADING:
            return {
                ...state,
                addEmployeeLoading: action.payload,
            };
        case employeeTypes.SET_ADD_EMPLOYEE_ERROR:
            return {
                ...state,
                addEmployeeError: action.payload,
            };

        /*get employee by id*/
        case employeeTypes.SET_GET_EMPLOYEE_BY_ID:
            return {
                ...state,
                employeeById: action.payload,
            };
        case employeeTypes.SET_GET_EMPLOYEE_BY_ID_LOADING:
            return {
                ...state,
                getEmployeeByIdLoading: action.payload,
            };
        case employeeTypes.SET_GET_EMPLOYEE_BY_ID_ERROR:
            return {
                ...state,
                getEmployeeByIdError: action.payload,
            };

        /*update employee*/
        case employeeTypes.SET_UPDATE_EMPLOYEE:
            return {
                ...state,
                updatedEmployee: action.payload,
            };
        case employeeTypes.SET_UPDATE_EMPLOYEE_LOADING:
            return {
                ...state,
                updateEmployeeLoading: action.payload,
            };
        case employeeTypes.SET_UPDATE_EMPLOYEE_ERROR:
            return {
                ...state,
                updateEmployeeError: action.payload,
            };

        /*delete employee*/
        case employeeTypes.SET_DELETE_EMPLOYEE:
            return {
                ...state,
                deletedEmployee: action.payload,
            };
        case employeeTypes.SET_DELETE_EMPLOYEE_LOADING:
            return {
                ...state,
                deleteEmployeeLoading: action.payload,
            };
        case employeeTypes.SET_DELETE_EMPLOYEE_ERROR:
            return {
                ...state,
                deleteEmployeeError: action.payload,
            };

        default:
            return state;
    }
}
