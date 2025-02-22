import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
// import theme from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Login from "./Pages/Login";
import Signup from "./Pages/Signup"; // Import Signup page



function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures consistent background */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> {/* Add Signup Route */}
        </Routes>
      </Router>
      
    </ThemeProvider>
  );
}



const theme = createTheme({
  components: {
      MuiCssBaseline: {
          styleOverrides: {
              body: {
                  backgroundImage: "url('./public/bgImg.jpg')", // Path relative to public folder
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "100vh",
                  margin: 0,
                  padding: 0,
              },
          },
      },
  },
});


export default App;

