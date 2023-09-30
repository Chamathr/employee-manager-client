import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import dataCardStyles from './DataCard.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployee, fetchEmployee, setDeleteEmployee } from '../../redux/actions/employeeAction';
import { selectDeletedEmployee } from '../../redux/selectors/employeeSelector';
import { useRouter } from 'next/router';

const DataCard = (props: any) => {

    const { employeeData } = props

    const deletedData = useSelector(selectDeletedEmployee)

    const router = useRouter();

    const dispatch = useDispatch();

    useEffect(() => {
        if (deletedData) {
            dispatch(setDeleteEmployee(null))
            dispatch(fetchEmployee(1))
        }
    }, [deletedData])

    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={employeeData?.photo}
                    alt="green iguana"
                />
                <div className={dataCardStyles.root}>
                    <CardContent sx={{ width: '50%' }}>
                        <Typography variant="body2" color="#000000" sx={{ fontSize: '12px', fontWeight: 600, marginBottom: '2px' }}>
                            {`${employeeData?.first_name} ${employeeData?.last_name}`}
                        </Typography>
                        <Typography variant="body2" color="#000000" sx={{ fontSize: '12px', fontWeight: 600, marginBottom: '2px' }}>
                            {employeeData?.email}
                        </Typography>
                        <Typography variant="body2" color="#000000" sx={{ fontSize: '12px', fontWeight: 600, marginBottom: '2px' }}>
                            {employeeData?.number}
                        </Typography>
                        <Typography variant="body2" color="#000000" sx={{ fontSize: '12px', fontWeight: 600, marginBottom: '2px' }}>
                            {employeeData?.gender}
                        </Typography>
                    </CardContent>
                    <CardContent className={dataCardStyles.buttonSection}>
                        <Button variant="contained" style={{ background: "#CE2029", borderRadius: '50%', width: '25px', minWidth: 'unset', height: '30px' }} onClick={() => dispatch(deleteEmployee(employeeData?._id))}>
                            <DeleteIcon style={{ width: '15px' }} />
                        </Button>
                        <Button variant="contained" style={{ background: "#32de84", borderRadius: '50%', width: '25px', minWidth: 'unset', height: '30px', marginLeft: '5px' }} onClick={() => router.push(`/employee/edit/${employeeData?._id}`)}>
                            <ManageAccountsIcon style={{ width: '15px' }} />
                        </Button>
                    </CardContent>
                </div>
            </CardActionArea>
        </Card>
    );
}

export default DataCard