import { Card, CardContent, Typography, Box, Button } from "@mui/material";

export function CardProject() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div" color="primary">
          Hoolbook
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} gap={4}>
          <Typography variant="h6" color="text.secondary">
            Typescript
          </Typography>
          <Button color="secondary" variant="outlined" size="small">SSH Clone</Button>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" gap={4} mt={2}>
          <Typography variant="body2" color="text.secondary">
            Created:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Last_updated:
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}