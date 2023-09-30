import { put, all, fork, call, takeEvery, delay } from "redux-saga/effects";
import { IEmployee } from "../../interfaces/Employee";
import {
  employeeTypes
} from "../types/employeeType";
import {
  setAddEmployee,
  setAddEmployeeError,
  setAddEmployeeLoading,
  setDeleteEmployee,
  setDeleteEmployeeError,
  setDeleteEmployeeLoading,
  setGetEmployee,
  setGetEmployeeById,
  setGetEmployeeByIdError,
  setGetEmployeeByIdLoading,
  setGetEmployeeError,
  setGetEmployeeLoading,
  setUpdateEmployee,
  setUpdateEmployeeError,
  setUpdateEmployeeLoading
} from "../actions/employeeAction";
import {
  addDataApi,
  deleteDataApi,
  getDataApi,
  getDataByIdApi,
  updateDataApi,
} from "../services/employeeService";

/*get employee*/
export function* fetchDetails(): Generator<any, void, unknown> {
  yield takeEvery(employeeTypes.GET_EMPLOYEE, function* (payload: any) {
    try {
      yield put(setGetEmployeeLoading('loading'));
      const data: IEmployee = yield call(getDataApi, payload?.payload);
      yield put(setGetEmployeeLoading('idle'));
      yield put(setGetEmployee(data?.data?.data));
    } catch (error: any) {
      yield put(setGetEmployeeLoading('idle'));
      yield put(setGetEmployeeError(error.message));
    }
  });
}

/*add employee*/
export function* addDetails(): Generator<any, void, unknown> {
  yield takeEvery(employeeTypes.ADD_EMPLOYEE, function* (payload: any) {
    try {
      yield put(setAddEmployeeLoading('loading'));
      const data: IEmployee = yield call(addDataApi, payload?.payload);
      yield put(setAddEmployeeLoading('idle'));
      yield put(setAddEmployee(data?.data?.data));
    } catch (error: any) {
      yield put(setAddEmployeeLoading('idle'));
      yield put(setAddEmployeeError(error.message));
    }
  });
}

/*get employee by id*/
export function* getDetailsById(): Generator<any, void, unknown> {
  yield takeEvery(employeeTypes.GET_EMPLOYEE_BY_ID, function* (payload: any) {
    try {
      yield put(setGetEmployeeByIdLoading('loading'));
      const data: IEmployee = yield call(getDataByIdApi, payload?.payload);
      yield put(setGetEmployeeByIdLoading('idle'));
      yield put(setGetEmployeeById(data?.data?.data));
    } catch (error: any) {
      yield put(setGetEmployeeByIdLoading('idle'));
      yield put(setGetEmployeeByIdError(error.message));
    }
  });
}

/*update employee*/
export function* updateDetails(): Generator<any, void, unknown> {
  yield takeEvery(employeeTypes.UPDATE_EMPLOYEE, function* (payload: any) {
    try {
      yield put(setUpdateEmployeeLoading('loading'));
      const data: IEmployee = yield call(updateDataApi, { id: payload?.payload?.id, body: payload?.payload?.payload });
      yield put(setUpdateEmployeeLoading('idle'));
      yield put(setUpdateEmployee(data?.data?.data));
    } catch (error: any) {
      yield put(setUpdateEmployeeLoading('idle'));
      yield put(setUpdateEmployeeError(error.message));
    }
  });
}

/*delete employee*/
export function* deleteDetails(): Generator<any, void, unknown> {
  yield takeEvery(employeeTypes.DELETE_EMPLOYEE, function* (payload: any) {
    try {
      yield put(setDeleteEmployeeLoading('loading'));
      const data: IEmployee = yield call(deleteDataApi, payload?.payload);
      yield put(setDeleteEmployeeLoading('idle'));
      yield put(setDeleteEmployee(data?.data?.data));
    } catch (error: any) {
      yield put(setDeleteEmployeeLoading('idle'));
      yield put(setDeleteEmployeeError(error.message));
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(fetchDetails),
    fork(addDetails),
    fork(getDetailsById),
    fork(updateDetails),
    fork(deleteDetails)
  ]);
}
