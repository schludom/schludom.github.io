import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu'; // Import Menu
import MenuItem from '@mui/material/MenuItem'; // Import MenuItem
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Link } from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
            light: '#E9DB5D',
            dark: '#A29415',
            contrastText: '#818181',
        },
    },
    typography: {
        "fontFamily": "font-family: Didot, serif",
        "fontSize": 12,
       }
});

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ThemeProvider theme={theme}>

            <AppBar position="fixed" className='navbar' >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem component={Link} to="/" onClick={handleClose}>Save the Date</MenuItem>
                        <MenuItem component={Link} to="/zeitplan" onClick={handleClose}>Zeitplan der Hochzeit</MenuItem>
                        <MenuItem component={Link} to="/location" onClick={handleClose}>Location & Anfahrt</MenuItem>
                        <MenuItem component={Link} to="/uebernachtung" onClick={handleClose}>Übernachtungsoptionen</MenuItem>
                        <MenuItem component={Link} to="/geschenke" onClick={handleClose}>Geschenkeliste</MenuItem>
                    </Menu>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Team Schlüter
                    </Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default Navbar;

