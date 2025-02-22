import { Container, Typography, Paper, Box } from '@mui/material';

export default function Profile() {
  const user = { name: 'John Doe', email: 'john@example.com' };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Healytics Profile
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Box>
          <Typography variant="h6">Name: {user.name}</Typography>
          <Typography variant="body1">Email: {user.email}</Typography>
        </Box>
      </Paper>
    </Container>
  );
}