import { combineReducers } from "redux";
import { employeeReducer } from "./employeeReducer";
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
const createNoopStorage = () => {
   return {
      getItem(_key: any) {
         return Promise.resolve(null);
      },
      setItem(_key: any, value: any) {
         return Promise.resolve(value);
      },
      removeItem(_key: any) {
         return Promise.resolve();
      },
   };
};
const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  data: employeeReducer
});

export { rootPersistConfig, rootReducer };
