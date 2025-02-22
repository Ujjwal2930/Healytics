import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 10 }}>
      <Typography variant="h3" color="primary" gutterBottom>
        Welcome to Healytics
      </Typography>
      <Typography variant="body1" gutterBottom>
        Track your health journey with AI-powered insights.
      </Typography>
      <Box mt={4}>
        <Button variant="contained" color="secondary" component={Link} to="/dashboard">
          Get Started
        </Button>
      </Box>
    </Container>
  );
}