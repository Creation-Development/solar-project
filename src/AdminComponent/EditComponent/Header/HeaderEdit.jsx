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
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../../Header/AdminHeader';

const theme = createTheme();

export default function HeaderEdit() {
    const navigation = useNavigate()
    // if (localStorage.getItem("user_token")) {
    //     navigation('/admin/all-pages')
    // }
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget);
        const value = {
            email: data.get('email'),
            password: data.get('password'),
        }
        axios.post(`http://localhost:5000/api/user/login`, value)
            .then((res) => {
                localStorage.setItem("user_id", res.data.id)
                localStorage.setItem("user_token", res.data.token)
                navigation('/admin/all-pages')
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        <>
            <AdminHeader />
            <ThemeProvider theme={theme}>
                {/* <AdminRedirect /> */}
                {/* <Typography variant="h4" className='admin-title'>Admin Panel</Typography> */}
                <Container className='card' component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </> 
    );
}