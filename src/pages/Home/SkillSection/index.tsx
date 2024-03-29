import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { CardSkill } from "../../../components/CardSkill";
import { tools, frontendSkills, backendSkills, sapTools } from "../../../data/data-skill";
// import { BackgroundParticle } from "../../../lib/BackgroundParticle";
// import SAPIcon from '../../../assets/skills/sap_icon.svg'
import SAPIcon from '../../../assets/skills/node.svg'

export function SkillSection() {
  return (
    <Box sx={{
      width: "100%",
      marginTop: 20,
    
      display: "flex",
      justifyContent: "center",
    }}>
      {/* <BackgroundParticle /> */}

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
              <Typography variant="h4" color="secondary">SAP Tools Developer</Typography>
              <Grid container spacing={1.5} mt="20px">
                {sapTools.map((tool) => (
                  <Grid key={tool.name} item xs={6} sm={4}>
                    <CardSkill name={tool.name} icon={''} />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Box>
        
        <Box display="flex" gap={4} width="80%" mt={1}>
          <Card>
            <CardContent>
              <Typography variant="h4" color="secondary">Tools Developer</Typography>
              <Grid container spacing={1.5} mt="20px">
                {tools.map((tool) => (
                  <Grid key={tool.name} item xs={6} sm={4}>
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
              <Grid container spacing={1.5} mt="20px">
                {frontendSkills.map((skill) => (
                  <Grid key={skill.name} item xs={12} md={6}>
                    <CardSkill name={skill.name} icon={skill.icon} />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h4" color="secondary">Backend Developer</Typography>
              <Grid container spacing={1.5} mt="20px">
                {backendSkills.map((skill) => (
                  <Grid key={skill.name} item xs={12} md={6}>
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