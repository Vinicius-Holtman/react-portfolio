import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import {
  contactChannels,
  projectsSection,
  sapProjects,
} from "../../../data/content";
import { useT } from "../../../i18n";
import { Section } from "../../../components/Section";
import { SectionTitle } from "../../../components/SectionTitle";
import {
  Reveal,
  RevealGroup,
  revealItemVariants,
} from "../../../components/motion/Reveal";

export function ProjectsSection() {
  const t = useT();
  const reduced = useReducedMotion();

  return (
    <Section id="projects">
      <SectionTitle
        title={t(projectsSection.title)}
        kicker={t(projectsSection.kicker)}
      />

      <RevealGroup stagger={0.07}>
        <Grid container spacing={3}>
          {sapProjects.map((project) => (
            <Grid item xs={12} sm={6} lg={4} key={project.id} sx={{ display: "flex" }}>
              <Card
                component={motion.div}
                variants={revealItemVariants}
                whileHover={reduced ? undefined : { y: -8 }}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "background.paper",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color .3s ease, box-shadow .3s ease",
                  "&:hover": {
                    borderColor: "primary.main",
                    boxShadow: "0 22px 46px -30px rgba(0,179,126,0.95)",
                  },
                  "&:hover .project-glow": { opacity: 1 },
                }}
              >
                <Box
                  className="project-glow"
                  aria-hidden
                  sx={{
                    position: "absolute",
                    top: -70,
                    right: -70,
                    width: 190,
                    height: 190,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(0,179,126,0.30) 0%, transparent 70%)",
                    opacity: 0,
                    transition: "opacity .35s ease",
                    pointerEvents: "none",
                  }}
                />

                <CardContent
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.2,
                    height: "100%",
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={1}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: "primary.main",
                        fontWeight: 700,
                        letterSpacing: 1,
                        textTransform: "uppercase",
                      }}
                    >
                      {project.client}
                    </Typography>
                    <Chip
                      label={t(project.sector)}
                      size="small"
                      sx={{
                        height: 22,
                        fontSize: 11,
                        borderRadius: 999,
                        backgroundColor: "rgba(255,255,255,0.05)",
                        color: "text.secondary",
                      }}
                    />
                  </Box>

                  <Typography variant="h4" color="text.primary">
                    {t(project.title)}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", lineHeight: 1.75, flex: 1 }}
                  >
                    {t(project.description)}
                  </Typography>

                  <Box display="flex" flexWrap="wrap" gap={0.7} mt={1.5}>
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          height: 24,
                          fontSize: 11,
                          borderRadius: 999,
                          border: "1px solid",
                          borderColor: "rgba(0,179,126,0.28)",
                          backgroundColor: "rgba(0,179,126,0.07)",
                          color: "primary.light",
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </RevealGroup>

      <Reveal delay={0.1}>
        <Box
          sx={{
            mt: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="h6" color="text.secondary" textAlign="center">
            {t(projectsSection.reposNote)}
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button component={Link} to="/projects" variant="outlined">
              {t(projectsSection.reposCta)}
            </Button>
            <Button
              variant="contained"
              href={contactChannels.github}
              target="_blank"
              rel="noreferrer"
              startIcon={<GitHubIcon />}
              sx={{ color: "#06120D" }}
            >
              {t(projectsSection.githubCta)}
            </Button>
          </Stack>
        </Box>
      </Reveal>
    </Section>
  );
}
