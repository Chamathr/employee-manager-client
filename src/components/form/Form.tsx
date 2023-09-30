// MyForm.js
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
    Button,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Card,
    Box,
    styled,
} from '@mui/material';
import formStyles from './Form.module.css'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { selectAddedEmployee, selectEmployeeById, selectUpdatedEmployee } from '../../redux/selectors/employeeSelector';
import { fetchEmployee, fetchEmployeeById, setAddEmployee, setGetEmployeeById, setUpdateEmployee, updateEmployee, addEmployee } from '../../redux/actions/employeeAction';

const validationSchema = yup.object({
    first_name: yup.string().matches(/^[a-zA-Z]{5,10}$/, 'First name must be 6-12 characters long and contain only alphabets').required('Required field'),
    last_name: yup.string().matches(/^[a-zA-Z]{5,10}$/, 'Last name must be 6-12 characters long and contain only alphabets').required('Required field'),
    email: yup.string().email('Invalid email address').required('Required field'),
    number: yup.string().matches(/^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/, 'Invalid phone number').required('Required field'),
    gender: yup.string().required('Required field'),
});

const genders = ['Male', 'Female'];

const MyForm = (props: any) => {

    const router = useRouter();

    const { id } = props

    const existingData = useSelector(selectEmployeeById)
    const updatedData = useSelector(selectUpdatedEmployee)
    const addedData = useSelector(selectAddedEmployee)

    const changedData = id ? updatedData : addedData

    const defaultValues = {
        first_name: existingData?.first_name || '',
        last_name: existingData?.last_name || '',
        email: existingData?.email || '',
        number: existingData?.number || '',
        gender: existingData?.gender || ''
    }

    useEffect(() => {
        if (id) {
            dispatch(fetchEmployeeById(id))
        }
    }, [id])

    useEffect(() => {
        if (changedData) {
            if (id) {
                dispatch(setGetEmployeeById(null))
                dispatch(setUpdateEmployee(null))
            }
            else {
                dispatch(setAddEmployee(null))
            }
            dispatch(fetchEmployee(1))
            router.push('/employee/list')
        }
    }, [changedData])

    const dispatch = useDispatch()

    useEffect(() => {
        formik.setValues(defaultValues);
    }, [existingData])


    const formik = useFormik({
        initialValues: defaultValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if (id) {
                const { email, ...dataBody } = values
                dispatch(updateEmployee({ id: id, payload: dataBody }))
                formik.resetForm();
            }
            else {
                dispatch(addEmployee(values))
            }
        },
    });

    const firstNameHelperText: any = formik.touched.first_name && formik.errors.first_name
    const lastNameHelperText: any = formik.touched.last_name && formik.errors.last_name
    const emailHelperText: any = formik.touched.email && formik.errors.email
    const numberHelperText: any = formik.touched.number && formik.errors.number
    const genderHelperText: any = formik.touched.gender && formik.errors.gender

    return (
        <>
            <Card sx={{ paddingTop: '2rem', paddingLeft: '5rem', paddingRight: '5rem', height: '100vh' }}>
                <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', marginBottom: '10px' }}>
                    <Button variant="contained" style={{ background: "rgb(97, 18, 171)", borderRadius: '20px', marginRight: '200px' }} onClick={() => router.push('/employee/list')}>List VIEW</Button>
                </div>
                <div className={formStyles.root}>
                    <Card className={formStyles.formCard}>
                        <form onSubmit={formik.handleSubmit} >
                            <div className={formStyles.formRow}>
                                <InputLabel htmlFor="first_name" className={formStyles.label}>First Name</InputLabel>
                                <TextField
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '2px',
                                            borderRadius: 'unset',
                                            background: '#F0F0F0',
                                            borderBottom: '2px solid #808080',
                                        }
                                    }}
                                    fullWidth
                                    id="first_name"
                                    name="first_name"
                                    value={formik.values.first_name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                                    helperText={firstNameHelperText}
                                />
                            </div>

                            <div style={{ marginBottom: '10px' }}>
                                <div className={formStyles.formRow}>
                                    <InputLabel htmlFor="last_name" className={formStyles.label}>Last Name</InputLabel>
                                    <TextField
                                        sx={{
                                            '& .MuiInputBase-input': {
                                                height: '2px',
                                                borderRadius: 'unset',
                                                background: '#F0F0F0',
                                                borderBottom: '2px solid #808080',
                                            }
                                        }}
                                        fullWidth
                                        id="last_name"
                                        name="last_name"
                                        value={formik.values.last_name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                                        helperText={lastNameHelperText}
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: '10px' }}>
                                <div className={formStyles.formRow}>
                                    <InputLabel htmlFor="email" className={formStyles.label}>Email</InputLabel>
                                    <TextField
                                        sx={{
                                            '& .MuiInputBase-input': {
                                                height: '2px',
                                                borderRadius: 'unset',
                                                background: '#F0F0F0',
                                                borderBottom: '2px solid #808080',
                                            }
                                        }}
                                        fullWidth
                                        id="email"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={emailHelperText}
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: '10px' }}>
                                <div className={formStyles.formRow}>
                                    <InputLabel htmlFor="number" className={formStyles.label}>Phone</InputLabel>
                                    <TextField
                                        sx={{
                                            '& .MuiInputBase-input': {
                                                height: '2px',
                                                borderRadius: 'unset',
                                                background: '#F0F0F0',
                                                borderBottom: '2px solid #808080',
                                            }
                                        }}
                                        fullWidth
                                        id="number"
                                        name="number"
                                        value={formik.values.number}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.number && Boolean(formik.errors.number)}
                                        helperText={numberHelperText}
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: '10px' }}>
                                <div className={formStyles.formRow}>
                                    <InputLabel htmlFor="gender" className={formStyles.label}>Gender</InputLabel>
                                    <FormControl
                                        fullWidth
                                        sx={{
                                            '& .MuiInputBase-input': {
                                                height: '5px',
                                                borderRadius: 'unset',
                                                background: '#F0F0F0',
                                                borderBottom: '2px solid #808080',
                                            },
                                        }}
                                    >
                                        <Select
                                            sx={{
                                                '& .MuiInputBase-input': {
                                                    height: '3px !important',
                                                    minHeight: '3px !important'
                                                }
                                            }}
                                            id="gender"
                                            name="gender"
                                            value={formik.values.gender}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.gender && Boolean(formik.errors.gender)}
                                        // helperText={genderHelperText}
                                        >
                                            {genders.map((gender) => (
                                                <MenuItem key={gender} value={gender}>
                                                    {gender}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>

                            <Button type="submit" variant="outlined" color="primary" className={formStyles.submitButton}>
                                {id ? "UPDATE" : "ADD"}
                            </Button>
                        </form>
                    </Card>
                </div>
            </Card>

        </>
    );
};

export default MyForm;
