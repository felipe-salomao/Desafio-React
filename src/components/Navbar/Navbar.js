import React, { useState } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from '@mui/material'

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const Click = (event) => {
    setAnchorEl(event.currentTarget)
  };

  const Close = () => {
    setAnchorEl(null)
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={Click}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={Close}
          >
            <MenuItem component={Link} href="/Home">Home</MenuItem>
            <MenuItem component={Link} href="/Login">Login</MenuItem>
            <MenuItem component={Link} href="/Register">Register</MenuItem>
            <MenuItem component={Link} href="/Fee">Frete</MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 5 }}>
            PEITASTORE
          </Typography>
          <Link href='/Login' underline='none'><Button variant='contained' color="inherit">Login</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar