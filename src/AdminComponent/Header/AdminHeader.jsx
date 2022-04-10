import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import LayersIcon from '@mui/icons-material/Layers';
import EditIcon from '@mui/icons-material/Edit';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';





const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function AdminHeader() {
    const [openSubMenu, setOpenSubMenu] = React.useState(true);

    const handleClick = () => {
        setOpenSubMenu(!openSubMenu);
    };
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const MenuItem = ['All Pages', 'Edit Details', 'Services', 'Contact Form', 'Logout']
    const MenuItemIcon = [<LayersIcon />, <EditIcon />, <MiscellaneousServicesIcon />, <ContactPageIcon />, <LogoutIcon />]

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Soleos Admin Panel
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {MenuItem.map((text, index) => (
                        <>
                            {
                                text === "Services" ?
                                    <>
                                        <ListItemButton onClick={handleClick}>
                                            <ListItemIcon>
                                                {MenuItemIcon[index]}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                            {openSubMenu ? <ExpandLess onClick={handleClick} /> : <ExpandMore onClick={handleClick} />}
                                        </ListItemButton>
                                        <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                <Link className='text-decoration-none text-dark' to="/admin/services/ev-charger">
                                                    <ListItemButton sx={{ pl: 4 }}>
                                                        <ListItemIcon>
                                                            <ElectricalServicesIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="EV Charger" />
                                                    </ListItemButton>
                                                </Link>
                                                <Link className='text-decoration-none text-dark' to="/admin/services/solar">
                                                    <ListItemButton sx={{ pl: 4 }}>
                                                        <ListItemIcon>
                                                            <SolarPowerIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Solar" />
                                                    </ListItemButton>
                                                </Link>
                                            </List>
                                        </Collapse>
                                    </>
                                    :
                                    <Link className='text-decoration-none text-dark' to={`/admin/${text.replace(/\s/g, '-').toLowerCase()}`}>
                                        <ListItem button key={text}>
                                            <ListItemIcon>
                                                {MenuItemIcon[index]}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItem>
                                    </Link>
                            }
                        </>
                    ))}
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
            </Main>
        </Box>
    );
}