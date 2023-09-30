import { apiInstance } from "../../http/apiInstance";

/*get data*/
export const getDataApi: any = async (payload: any) => {
  try {
    const params = payload?.search ? `?page=${payload?.page}&search=${payload?.search}` : `?page=${payload?.page}`
    return Promise.resolve(await apiInstance.get(`/employee${params}`));
  } catch (error) {
    return Promise.reject(error);
  }
};

/*add data*/
export const addDataApi: any = async (payload: any) => {
  try {
    return Promise.resolve(await apiInstance.post(`/employee`, payload));
  } catch (error) {
    return Promise.reject(error);
  }
};

/*get data by id*/
export const getDataByIdApi: any = async (payload: any) => {
  try {
    return Promise.resolve(await apiInstance.get(`/employee/${payload}`, payload));
  } catch (error) {
    return Promise.reject(error);
  }
};

/*update data*/
export const updateDataApi: any = async (payload: any) => {
  try {
    return Promise.resolve(await apiInstance.put(`/employee/${payload?.id}`, payload?.body));
  } catch (error) {
    return Promise.reject(error);
  }
};

/*delete data*/
export const deleteDataApi: any = async (payload: any) => {
  try {
    return Promise.resolve(await apiInstance.delete(`/employee/${payload}`));
  } catch (error) {
    return Promise.reject(error);
  }
};