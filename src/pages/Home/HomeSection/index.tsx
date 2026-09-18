import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import curriculo from "../../../assets/CV_Vinicius_Holtman_2026.pdf";
import RocketseatIcon from "../../../assets/RocketseatIcon.svg";
import { hero, contactChannels } from "../../../data/content";
import { useT } from "../../../i18n";
import { Typewriter } from "../../../components/motion/Typewriter";

const socials = [
  {
    href: contactChannels.github,
    icon: <GitHubIcon fontSize="small" />,
    label: "GitHub",
  },
  {
    href: contactChannels.linkedin,
    icon: <LinkedInIcon fontSize="small" />,
    label: "LinkedIn",
  },
];

/** Bolha luminosa animada ao fundo. */
function Orb({
  size,
  color,
  top,
  left,
  right,
  bottom,
  delay = 0,
}: {
  size: number;
  color: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <Box
      component={motion.div}
      aria-hidden
      animate={
        reduced
          ? undefined
          : { y: [0, -26, 0], x: [0, 16, 0], scale: [1, 1.08, 1] }
      }
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      sx={{
        position: "absolute",
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color} 0%, transparent 68%)`,
        filter: "blur(38px)",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

export function HomeSection() {
  const t = useT();
  const reduced = useReducedMotion();

  const roles = hero.roles.map((role) => t(role));

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: "relative",
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        pt: { xs: 14, md: 10 },
        pb: { xs: 10, md: 6 },
      }}
    >
      <Orb size={420} color="rgba(0,179,126,0.30)" top="-6%" left="-6%" />
      <Orb
        size={360}
        color="rgba(0,135,95,0.24)"
        bottom="-10%"
        right="-4%"
        delay={3}
      />

      {/* malha sutil ao fundo */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.55,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at 50% 40%, black 30%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 40%, black 30%, transparent 78%)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          component={motion.div}
          variants={container}
          initial="hidden"
          animate="visible"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "flex-start", md: "center" },
            textAlign: { xs: "left", md: "center" },
            gap: 2,
          }}
        >
          <Typography
            component={motion.p}
            variants={item}
            variant="h6"
            sx={{ color: "text.secondary", m: 0 }}
          >
            {t(hero.greeting)}
          </Typography>

          <Typography
            component={motion.h1}
            variants={item}
            sx={{
              m: 0,
              fontWeight: 800,
              lineHeight: 1.05,
              fontSize: { xs: 38, sm: 52, md: 68 },
              background:
                "linear-gradient(120deg, #E1E1E6 0%, #00B37E 55%, #66b79f 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {hero.name}
          </Typography>

          <Box
            component={motion.div}
            variants={item}
            sx={{
              minHeight: { xs: 30, md: 38 },
              fontSize: { xs: 17, sm: 21, md: 26 },
              fontWeight: 600,
              color: "primary.main",
            }}
          >
            <Typewriter words={roles} />
          </Box>

          <Typography
            component={motion.p}
            variants={item}
            variant="h6"
            sx={{
              color: "text.secondary",
              maxWidth: 680,
              lineHeight: 1.75,
              mt: 1,
            }}
          >
            {t(hero.summary)}
          </Typography>

          <Box
            component={motion.div}
            variants={item}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              justifyContent: { xs: "flex-start", md: "center" },
              mt: 2,
              maxWidth: 780,
            }}
          >
            {hero.keywords.map((keyword, index) => (
              <Chip
                key={keyword}
                component={motion.div}
                animate={
                  reduced ? undefined : { y: [0, -5, 0] }
                }
                transition={{
                  duration: 4 + (index % 4),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.22,
                }}
                label={keyword}
                size="small"
                sx={{
                  borderRadius: 999,
                  border: "1px solid",
                  borderColor: "rgba(0,179,126,0.34)",
                  backgroundColor: "rgba(0,179,126,0.08)",
                  color: "primary.light",
                }}
              />
            ))}
          </Box>

          <Stack
            component={motion.div}
            variants={item}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 4, width: { xs: "100%", sm: "auto" } }}
          >
            <Button
              variant="contained"
              href={curriculo}
              download="CV-Vinicius-Holtman.pdf"
              startIcon={<DownloadIcon />}
              sx={{
                boxShadow: "0 10px 30px -12px rgba(0,179,126,0.8)",
                color: "#06120D",
              }}
            >
              {t(hero.ctaCv)}
            </Button>
            <Button
              variant="outlined"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t(hero.ctaContact)}
            </Button>
          </Stack>

          <Stack
            component={motion.div}
            variants={item}
            direction="row"
            spacing={1.5}
            sx={{ mt: 3 }}
          >
            {socials.map((social) => (
              <Box
                key={social.label}
                component={motion.a}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                whileHover={reduced ? undefined : { y: -4, scale: 1.08 }}
                sx={{
                  display: "grid",
                  placeItems: "center",
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  border: "1px solid",
                  borderColor: "divider",
                  color: "primary.main",
                  transition: "border-color .25s ease",
                  "&:hover": { borderColor: "primary.main" },
                }}
              >
                {social.icon}
              </Box>
            ))}
            <Box
              component={motion.a}
              href={contactChannels.rocketseat}
              target="_blank"
              rel="noreferrer"
              aria-label="Rocketseat"
              whileHover={reduced ? undefined : { y: -4, scale: 1.08 }}
              sx={{
                display: "grid",
                placeItems: "center",
                width: 42,
                height: 42,
                borderRadius: "50%",
                border: "1px solid",
                borderColor: "divider",
                transition: "border-color .25s ease",
                "&:hover": { borderColor: "primary.main" },
              }}
            >
              <img src={RocketseatIcon} alt="" width={20} height={20} />
            </Box>
          </Stack>
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            alignItems: "center",
            gap: 0.5,
            mt: 7,
            color: "text.secondary",
          }}
        >
          <Typography variant="caption" letterSpacing={1.4}>
            {t(hero.scroll).toUpperCase()}
          </Typography>
          <Box
            component={motion.div}
            animate={reduced ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            sx={{ display: "flex" }}
          >
            <KeyboardArrowDownIcon color="primary" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
