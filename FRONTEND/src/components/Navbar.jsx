// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';
// import Box from '@mui/material/Box';

// export default function Navbar() {
//   return (
//     <AppBar position="static" sx={{backgroundColor: '#5dc18d', padding: '5px'}}>
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//         <Box
//             component="img"
//             src="/Logo.jpg" // Image path (public folder)
//             alt="Example"
//             sx={{
//                 width: "5%",        // Responsive width
//                 height: "auto",       // Maintain aspect ratio
//                 borderRadius: "1px",  // Optional: Rounded corners
//                 boxShadow: 3          // Optional: Material UI shadow
//       }}
//         /> Healytics
//         </Typography>
//         <Button color="inherit" component={Link} to="/">Home</Button>
//         <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
//         <Button color="inherit" component={Link} to="/profile">Profile</Button>
//       </Toolbar>
//     </AppBar>
//   );
// }

// import { AppBar, Toolbar, Typography, Button, Box, Stack } from '@mui/material';
// import { Link } from 'react-router-dom';

// export default function Navbar() {
//   return (
//     <AppBar position="static" sx={{ backgroundColor: '#5dc18d', padding: '5px' }}>
//       <Toolbar>
//         {/* Logo and Title Container */}
//         <Stack direction="row" alignItems="center" spacing={2} sx={{ flexGrow: 1 }}>
//           {/* Logo Image */}
//           <Box
//             component="img"
//             src="/Logo.jpg"  // Correct path for images in the public folder
//             alt="Logo"
//             sx={{
//               width: '5%',      // Adjusted width
//               height: "auto", // Maintain aspect ratio
//               borderRadius: "4px",
//               boxShadow: 3,
//             }}
//           />
          
//           {/* App Title */}
//           <Typography variant="h6">Healytics</Typography>
//         </Stack>

//         {/* Navigation Buttons */}
//         <Button color="inherit" component={Link} to="/">Home</Button>
//         <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
//         <Button color="inherit" component={Link} to="/profile">Profile</Button>
//       </Toolbar>
//     </AppBar>
//   );
// }


import { AppBar, Toolbar, Typography, Button, Box, Stack, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; // For the responsive menu
import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#5dc18d', padding: '5px' }}>
      <Toolbar>
        {/* Logo and Title */}
        <Stack direction="row" alignItems="center" spacing={1} sx={{ flexGrow: 1 }}>
          <Box
            component="img"
            src="/Logo.jpg"
            alt="Logo"
            sx={{
              width: { xs: 30, sm: 40, md: 50 }, // Responsive size
              height: "auto",
              borderRadius: "4px",
              boxShadow: 3,
            }}
          />
          <Typography variant={{ xs: "subtitle1", md: "h6" }}>Healytics</Typography>
        </Stack>

        {/* Desktop Menu */}
        <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
          <Button color="inherit" component={Link} to="/profile">Profile</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          {/* <Button
          variant="contained"
          sx={{ backgroundColor: '#fff', color: '#5dc18d', fontWeight: 'bold', ml: 2 }}
          component={Link}
          to="/signup"
        >
          Sign Up
        </Button> */}
        </Stack>

        {/* Mobile Menu Icon */}
        <IconButton
          color="inherit"
          aria-label="open menu"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer (Sidebar) */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <List sx={{ width: 200 }}>
            <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/dashboard" onClick={handleDrawerToggle}>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/profile" onClick={handleDrawerToggle}>
              <ListItemText primary="Profile" />
            </ListItem>
               {/* Login Button inside Drawer */}
            <ListItem button component={Link} to="/login" onClick={handleDrawerToggle}>
              <ListItemText primary="Login" />

            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
