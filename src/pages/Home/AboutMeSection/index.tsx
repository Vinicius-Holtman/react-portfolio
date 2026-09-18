import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import { about } from "../../../data/content";
import { useT } from "../../../i18n";
import { Section } from "../../../components/Section";
import { SectionTitle } from "../../../components/SectionTitle";
import {
  Reveal,
  RevealGroup,
  revealItemVariants,
} from "../../../components/motion/Reveal";
import { CountUp } from "../../../components/motion/CountUp";

export function AboutMeSection() {
  const t = useT();
  const reduced = useReducedMotion();
  const paragraphs = t(about.paragraphs);

  return (
    <Section id="about">
      <SectionTitle title={t(about.title)} kicker={t(about.kicker)} />

      <Grid container spacing={{ xs: 3, md: 5 }} alignItems="flex-start">
        <Grid item xs={12} md={5}>
          <RevealGroup>
            <Box display="flex" flexDirection="column" gap={2}>
              {about.stats.map((stat) => (
                <Card
                  key={stat.label.en}
                  component={motion.div}
                  variants={revealItemVariants}
                  whileHover={reduced ? undefined : { y: -4 }}
                  sx={{
                    backgroundColor: "background.paper",
                    transition: "border-color .25s ease",
                    "&:hover": { borderColor: "primary.main" },
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 2,
                      py: 2.5,
                    }}
                  >
                    <Typography
                      variant="h2"
                      color="primary"
                      fontWeight={800}
                      sx={{ minWidth: 72, fontSize: { xs: 32, md: 40 } }}
                    >
                      <CountUp to={stat.value} suffix={stat.suffix} />
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {t(stat.label)}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </RevealGroup>
        </Grid>

        <Grid item xs={12} md={7}>
          <Box display="flex" flexDirection="column" gap={2.5}>
            {paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={index * 0.08} direction="left">
                <Typography
                  variant="h6"
                  sx={{ color: "text.secondary", lineHeight: 1.85 }}
                >
                  {paragraph}
                </Typography>
              </Reveal>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}
