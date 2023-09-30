import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDeletedEmployee, selectEmployeeList } from '../../redux/selectors/employeeSelector';
import { useEffect, useState } from 'react';
import { fetchEmployee, setDeleteEmployee } from '../../redux/actions/employeeAction';
import { Box, CircularProgress } from '@mui/material';
import dataGridStyles from './DataGrid.module.css'
import DataCard from '../dataCard/DataCard';
import Pagination from '@mui/material/Pagination';

const DataGrid = () => {

  const deletedData = useSelector(selectDeletedEmployee)
  const dataList = useSelector(selectEmployeeList)

  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch(fetchEmployee({ page: pageNumber, search: null }))
  }, [pageNumber])

  useEffect(() => {
    if (deletedData) {
      dispatch(setDeleteEmployee(null))
      dispatch(fetchEmployee(1))
    }
  }, [deletedData])

  const handleChange = (event: any, value: any) => {
    setPageNumber(value)
  };

  if (!dataList?.data) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <>
      <div className={dataGridStyles.root}>
        {dataList?.data?.map((employeeData: any) => {
          return (
            <DataCard employeeData={employeeData} />
          )
        })}
      </div>
      <Pagination count={dataList?.totalPages} page={pageNumber} onChange={handleChange} sx={{ marginTop: '20px', display: 'flex', justifyContent: 'end' }} />
    </>
  );
}

export default DataGrid