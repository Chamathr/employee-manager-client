import React from 'react';
import DataForm from '../../../components/form/Form';
import { useRouter } from 'next/router';

const UpdateData: React.FC = () => {

  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <DataForm id={id} />
    </>
  )
}

export default UpdateData;

