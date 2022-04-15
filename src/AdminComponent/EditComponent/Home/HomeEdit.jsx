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

export default function HomeEdit() {
    const [title, setTitle] = useState('');
    const [paragraph, setParagraph] = useState('');
    const { id } = useParams()
    const navigation = useNavigate()
    if (!localStorage.getItem("user_token")) {
        navigation('/admin/login')
    }
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/component/${id}`)
            .then((res) => {
                console.log(res.data.data);
                setTitle(res.data.data.title)
                setParagraph(res.data.data.paragraph)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    const handleSubmit = (event) => {
        event.preventDefault()

        axios.post(`${process.env.REACT_APP_SERVER_URL}/component/home/${id}`, { title: title, paragraph: paragraph })
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
                <Typography variant="h4" className='component-title'>Home</Typography>
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
                                Title
                            </Typography>
                            <TextField
                                margin="normal"
                                required
                                value={title}
                                fullWidth
                                onChange={(e) => (setTitle(e.target.value))}
                                id="title"
                            />
                            <Typography component="h1" variant="h6">
                                Paragraph
                            </Typography>
                            <TextField
                                margin="normal"
                                value={paragraph}
                                required
                                onChange={(e) => (setParagraph(e.target.value))}
                                fullWidth
                                id='paragraph'
                            />
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