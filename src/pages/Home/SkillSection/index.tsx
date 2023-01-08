import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { CardSkill } from "../../../components/CardSkill";
import { tools, frontendSkills, backendSkills } from "../../../data/data-skill";
import { BackgroundParticle } from "../../../lib/BackgroundParticle";

export function SkillSection() {
  return (
    <Box sx={{
      width: "100%",
      height: "895px",
    
      display: "flex",
      justifyContent: "center",
    }}>
      <BackgroundParticle />

      <Box sx={{
        width: "1120px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 2,
      }}>
        <Typography variant="h2" color="primary">
          Technical Skills
        </Typography>

        <Box display="flex" gap={4} width="80%" mt={3}>
          <Card>
            <CardContent>
              <Typography variant="h4" color="secondary">Tools Developer</Typography>
              <Grid container rowSpacing={1} mt="20px">
                {tools.map((tool) => (
                  <Grid key={tool.name} item xs={3}>
                    <CardSkill name={tool.name} icon={tool.icon} />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Box>

        <Box display="flex" gap={4} width="80%">
          <Card>
            <CardContent>
              <Typography variant="h4" color="secondary">Frotend Developer</Typography>
              <Grid container rowSpacing={1} mt="20px">
                {frontendSkills.map((skill) => (
                  <Grid key={skill.name} item xs={6}>
                    <CardSkill name={skill.name} icon={skill.icon} />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h4" color="secondary">Backend Developer</Typography>
              <Grid container rowSpacing={1} mt="20px">
                {backendSkills.map((skill) => (
                  <Grid key={skill.name} item xs={6}>
                    <CardSkill name={skill.name} icon={skill.icon} />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  )
}