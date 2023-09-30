import React, { useEffect } from 'react';
import DataForm from '../../../components/form/Form';
import { setGetEmployeeById } from '../../../redux/actions/employeeAction';
import { useDispatch } from 'react-redux';

const AddData: React.FC = () => {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(setGetEmployeeById(null))
  },[])

  return (
    <>
      <DataForm id={null} />
    </>
  )
}

export default AddData;

