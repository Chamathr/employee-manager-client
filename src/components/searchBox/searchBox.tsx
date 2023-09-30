import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import searchStyles from './SearchBox.module.css'

const SearchBox = ({ value, onChange, onSearch }: any) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
            <TextField
                variant="outlined"
                value={value}
                onChange={onChange}
                sx={{
                    '& .MuiInputBase-input': {
                        height: '2px',
                        borderRadius: '20px',
                        background: '#0ffffff',
                    },
                    '& .MuiInputBase-root': {
                        borderRadius: '20px',
                        border: '1px solid rgb(97, 18, 171)'
                    },
                    '& .MuiSvgIcon-root': {
                        color: 'red'
                    },
                    width: '60%'
                }}
            />
            <IconButton color="primary" onClick={onSearch}>
                <SearchIcon sx={{ color: 'rgb(97, 18, 171)' }} />
            </IconButton>
        </div>
    );
};

export default SearchBox;
