import React, { useEffect, useState } from 'react';
import DataForm from '../../../components/form/Form';
import { setAddEmployeeError, setGetEmployeeById } from '../../../redux/actions/employeeAction';
import { useDispatch, useSelector } from 'react-redux';
import { selectretAddingEmployeeError } from '../../../redux/selectors/employeeSelector';
import { Alert, Snackbar } from '@mui/material';

const AddData: React.FC = () => {

  const dispatch = useDispatch()
  const addEmployeeError = useSelector(selectretAddingEmployeeError)

  useEffect(() => {
    dispatch(setGetEmployeeById(null))
  }, [])

  useEffect(() => {
  }, [addEmployeeError])

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    dispatch(setAddEmployeeError(null))
  };

  return (
    <>
      <Snackbar open={addEmployeeError} onClose={handleClose} style={{position: 'unset'}}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {addEmployeeError}
        </Alert>
      </Snackbar>
      <DataForm id={null} />
    </>
  )
}

export default AddData;

