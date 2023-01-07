import { Box, Typography, Card, CardContent } from "@mui/material";
import { BoxContainer } from "../../../utils/BoxContainer";

export function ProjectsSection() {
  return (
    <BoxContainer>
      <Box sx={{
        width: "1120px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 5,
      }}>
        <Typography variant="h2" color="primary">
          Projects
        </Typography>
        <Typography variant="h4">
          Esses são alguns dos meus projetos já desenvolvidos. Os demais projetos estão no Github e na sessao projects!
        </Typography>

        <Box display="flex" gap={4} width="80%">
          <Card>
            <CardContent>
              <Typography variant="h4" color="secondary">Corrousel</Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </BoxContainer>
  )
}
