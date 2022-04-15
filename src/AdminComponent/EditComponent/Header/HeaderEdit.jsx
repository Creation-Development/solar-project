import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import AdminHeader from '../../Header/AdminHeader';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const theme = createTheme();

export default function HeaderEdit() {
    const [HeaderData, setHeaderData] = useState([]);
    const [listItem, setListItem] = useState([]);
    const [image, setImage] = useState({});
    const { id } = useParams()
    const navigation = useNavigate()
    if (!localStorage.getItem("user_token")) {
        navigation('/admin/login')
    }
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/component/${id}`)
            .then((res) => {
                setHeaderData(res.data.data)
                setListItem(res.data.data.listItem)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const handleState = (e, i) => {
        e.preventDefault()
        listItem[i] = e.target.value
        setListItem(listItem)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget);
        data.append("listItem", listItem)
        data.append("logo", image)

        axios.post(`${process.env.REACT_APP_SERVER_URL}/component/header/${id}`, {listItem:listItem})
            .then((res) => {
                toast.success("Update successfully")
                navigation('/admin/all-pages')
            })
            .catch((err) => {
                toast.error("Something want wrong")
                console.log(err);
            })
    };

    return (
        <>
            <AdminHeader />
            <ThemeProvider theme={theme}>
                {/* <AdminRedirect /> */}
                <Typography variant="h4" className='component-title'>Header</Typography>
                <Container className='card-edit' component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <Typography component="h1" variant="h6">
                                Logo
                            </Typography>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                onChange={(e) => (setImage(e.target.files[0]))}
                                type='file'
                                id="logo"
                                autoFocus
                            />
                            {/* <img style={{ marginBottom: "30px" }} src={HeaderData.logo} alt="" height={70} width={170} /> */}
                            <Typography component="h1" variant="h6">
                                Header List Item
                            </Typography>
                            {
                                HeaderData.listItem?.map((value, index) => (
                                    <TextField
                                        key={index}
                                        margin="normal"
                                        defaultValue={value}
                                        required
                                        onChange={(e) => (handleState(e, index))}
                                        fullWidth
                                        id={`listItem-${index}`}
                                        autoComplete="current-password"
                                    />
                                ))
                            }
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Add
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
}