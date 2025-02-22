import { Container, Typography, Card, CardContent } from '@mui/material';

export default function Dashboard() {
  const healthData = [
    { month: 'January', score: 80 },
    { month: 'February', score: 85 },
    { month: 'March', score: 78 },
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Healytics Dashboard
      </Typography>
      {healthData.map((item) => (
        <Card sx={{ mb: 2 }} key={item.month}>
          <CardContent>
            <Typography variant="h6">{item.month}</Typography>
            <Typography variant="body1">Health Score: {item.score}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}