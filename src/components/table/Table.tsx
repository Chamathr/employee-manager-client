import * as React from 'react';
import {
    DataGrid,
    GridColDef,
} from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import { Box, Button, Card, CircularProgress, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { selectDeletedEmployee, selectEmployeeList } from '../../redux/selectors/employeeSelector';
import { useEffect, useState } from 'react';
import { deleteEmployee, fetchEmployee, setDeleteEmployee } from '../../redux/actions/employeeAction';
import tableStyles from './Table.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const StyledDataGrid = styled(DataGrid)(() => ({
    '& .MuiDataGrid-cell': {
        borderRight: `1px solid #138808`,
        borderBottom: `1px solid #138808`,
    },
    '& .MuiDataGrid-cell:first-child': {
        borderLeft: `1px solid #138808`,
    },
    '& .MuiDataGrid-columnHeader': {
        borderRight: `1px solid #138808`,
        backgroundColor: `#4CBB17`,
        color: `#ffffff`,
    }
}));

const DataTable = () => {

    const router = useRouter();

    const deletedData = useSelector(selectDeletedEmployee)
    const dataList = useSelector(selectEmployeeList)

    const dataPerPage = 10

    const dispatch = useDispatch();
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        if (deletedData) {
            dispatch(setDeleteEmployee(null))
            dispatch(fetchEmployee(1))
        }
    }, [deletedData])

    useEffect(() => {
        dispatch(fetchEmployee({ page: pageNumber, search: null }))
    }, [pageNumber])

    const CustomPagination = () => {
        return (
            <Pagination
                color="primary"
                variant="outlined"
                shape="rounded"
                page={pageNumber}
                count={dataList?.totalPages}
                onChange={(event: React.ChangeEvent<unknown>, value: number) => {
                    setPageNumber(value)
                }}
            />
        );
    }

    const columns: GridColDef[] = [
        {
            field: 'photo',
            headerName: 'Image',
            renderCell: (params) => params.value ? <img src={params.value} style={{ width: '70%', margin: 'auto' }} /> : <AccountBoxIcon style={{ width: '70%', margin: 'auto' }} />,
            width: 100,
            align: 'left'
        },
        {
            field: 'first_name',
            headerName: 'First name',
            flex: 1,
            align: 'left'
        },
        {
            field: 'last_name',
            headerName: 'Last name',
            flex: 1,
            align: 'left'
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1,
            align: 'left'
        },
        {
            field: 'number',
            headerName: 'Phone Number',
            flex: 1,
            align: 'left'
        },
        {
            field: 'gender',
            headerName: 'Gender',
            flex: 1,
            align: 'left'
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 120,
            sortable: false,

            renderCell: (params) => {
                const onEdit = (e: any) => {
                    const currentRow = params.id;
                    router.push(`/employee/edit/${currentRow}`)
                };

                const onDelete = (e: any) => {
                    const currentRow = params.id;
                    dispatch(deleteEmployee(currentRow))
                };

                return (
                    <div className={tableStyles.buttonSection}>
                        <Button variant="contained" style={{ background: '#808080', textTransform: 'none', height: '30px' }} size="small" onClick={onEdit}>Edit</Button>
                        <IconButton onClick={onDelete}>
                            <DeleteIcon color='error' />
                        </IconButton>
                    </div>
                );
            },
        }
    ];

    const [paginationModel, setPaginationModel] = useState({
        pageSize: dataPerPage,
        page: 0,
    });

    if (!dataList?.data) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        )
    }

    return (

        <div className={tableStyles.root}>
            <StyledDataGrid
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                pageSizeOptions={[dataPerPage]}
                slots={{
                    pagination: CustomPagination,
                }}
                rows={dataList?.data}
                columns={columns}
                getRowId={(row) => row._id}
            />
        </div>
    );
}

export default DataTable