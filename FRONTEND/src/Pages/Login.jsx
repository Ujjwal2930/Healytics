
import { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Paper, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', formData);
    // Authentication logic here
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={10} sx={{ p: 4, mt: 8, textAlign: 'center', borderRadius: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
          Welcome Back! 👋
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Login to continue
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button 
            type="submit" 
            variant="contained" 
            fullWidth 
            sx={{ mt: 3, py: 1.5, fontSize: 16, backgroundColor: '#5dc18d', '&:hover': { backgroundColor: '#4cae7e' } }}
          >
            Login
          </Button>
        </Box>

        <Typography sx={{ mt: 2 }}>
          Don't have an account?{' '}
          <Link onClick={() => navigate('/signup')} sx={{ cursor: 'pointer', color: '#5dc18d', fontWeight: 'bold' }}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
}




