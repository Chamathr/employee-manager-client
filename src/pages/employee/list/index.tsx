import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchEmployee } from "../../../redux/actions/employeeAction";
import DataTable from "../../../components/table/Table";
import { Box, Button, Card } from "@mui/material";
import { useRouter } from "next/router";
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import DataGrid from "../../../components/dataGrid/DataGrid";
import SearchBox from "../../../components/searchBox/Searchbox";

const Table = () => {

    const router = useRouter();

    const dispatch = useDispatch();
    const [page, setPage] = useState(1)
    const [view, setView] = useState('list')
    const [search, setSearch] = useState('');

    const handleSearchChange = (event: any) => {
        setSearch(event.target.value);
    };

    const handleSearch = () => {
        dispatch(fetchEmployee({ page, search }))
    };

    useEffect(() => {
        dispatch(fetchEmployee({ page, search }))
    }, [page])

    const iconButton = view === 'list' ?
        <Button variant="contained" style={{ background: "rgb(97, 18, 171)", borderRadius: '50%', width: '40px', minWidth: 'unset', height: '40px' }} onClick={() => setView('grid')}><ViewModuleIcon /></Button>
        :
        <Button variant="contained" style={{ background: "rgb(97, 18, 171)", borderRadius: '50%', width: '40px', minWidth: 'unset', height: '40px' }} onClick={() => setView('list')}><ViewListIcon /></Button>

    return (
        <>
            <Card sx={{ paddingTop: '2rem', paddingLeft: { xs: '2.5rem', md: '5rem' }, paddingRight: { xs: '2.5rem', md: '5rem' }, height: { sm: '500vh', md: '100vh' } }}>
                <Box sx={{ display: { md: 'flex' }, justifyContent: 'end', alignItems: 'center', marginBottom: '30px' }}>
                    <Box sx={{ marginRight: { md: '10px' }, marginBottom: { xs: '15px', sm: 'unset' }, textAlign: 'end' }}>
                        <SearchBox
                            value={search}
                            onChange={handleSearchChange}
                            onSearch={handleSearch}
                        />
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'unset' }, justifyContent: { xs: 'space-between', md: 'unset' }, marginTop: { xs: '15px', md: 'unset' } }}>
                        <Button variant="contained" sx={{ background: "rgb(97, 18, 171)", borderRadius: '20px', marginRight: '20px' }} onClick={() => router.push('/employee/add')}>ADD EMPLOYEE</Button>
                        {iconButton}
                    </Box>
                </Box>
                {view === 'list' ?
                    <DataTable />
                    :
                    <DataGrid />
                }
            </Card>
        </>
    )
}

export default Table