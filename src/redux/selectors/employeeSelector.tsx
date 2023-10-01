/*get employee*/
export const selectEmployeeList = (state: any) => state.data.employee;
export const selectretRievingEmployeeLoading = (state: any) => state.data.getEmployeeLoading;
export const selectretRievingEmployeeError = (state: any) => state.data.getEmployeeError;

/*add employee*/
export const selectAddedEmployee = (state: any) => state.data.addedEmployee;
export const selectretAddingEmployeeLoading = (state: any) => state.data.addEmployeeLoading;
export const selectretAddingEmployeeError = (state: any) => state.data.addEmployeeError;

/*get employee by id*/
export const selectEmployeeById = (state: any) => state.data.employeeById;
export const selectretRievingEmployeeByIdLoading = (state: any) => state.data.getEmployeeByIdLoading;
export const selectretRievingEmployeeByIdError = (state: any) => state.data.getEmployeeByIdError;

/*update employee*/
export const selectUpdatedEmployee = (state: any) => state.data.updatedEmployee;
export const selectretUpdatingEmployeeLoading = (state: any) => state.data.updateEmployeeLoading;
export const selectretUpdatingEmployeeError = (state: any) => state.data.updateEmployeeError;

/*delete employee*/
export const selectDeletedEmployee = (state: any) => state.data.deletedEmployee;
export const selectretDeletingEmployeeLoading = (state: any) => state.data.deleteEmployeeLoading;
export const selectretDeletingEmployeeError = (state: any) => state.data.deleteEmployeeError;