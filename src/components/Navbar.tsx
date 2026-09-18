import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import Logo from "../assets/logo.png";
import { navLinks } from "../data/content";
import { useLang, useT } from "../i18n";

const SECTION_IDS = navLinks.map((link) => link.id);

export function Navbar() {
  const theme = useTheme();
  const t = useT();
  const { lang, toggle } = useLang();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Marca o item do menu correspondente à seção visível.
  useEffect(() => {
    if (!isHome) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.01, 0.25, 0.5] }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  const goToSection = (id: string) => {
    setOpen(false);
    if (!isHome) {
      navigate("/");
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 120);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const LanguageToggle = (
    <Box
      role="group"
      aria-label="Language"
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 999,
        overflow: "hidden",
        ml: 1,
      }}
    >
      {(["pt", "en"] as const).map((code) => (
        <Box
          key={code}
          component="button"
          onClick={() => code !== lang && toggle()}
          aria-pressed={lang === code}
          sx={{
            border: "none",
            cursor: "pointer",
            px: 1.4,
            py: 0.6,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 0.6,
            fontFamily: "inherit",
            color: lang === code ? "#07110D" : "text.secondary",
            backgroundColor: lang === code ? "primary.main" : "transparent",
            transition: "background-color .25s ease, color .25s ease",
          }}
        >
          {code.toUpperCase()}
        </Box>
      ))}
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: scrolled ? "rgba(13,13,16,0.82)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid" : "1px solid transparent",
        borderColor: "divider",
        transition: "background-color .3s ease, border-color .3s ease",
        backgroundImage: "none",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box
          component={Link}
          to="/"
          onClick={() => isHome && goToSection("home")}
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <Box component="img" src={Logo} alt="Vinicius Holtman" width={42} />
        </Box>

        {!isMobile && (
          <Box display="flex" alignItems="center" gap={0.5}>
            {navLinks.map((link) => (
              <Button
                key={link.id}
                onClick={() => goToSection(link.id)}
                sx={{
                  position: "relative",
                  color:
                    isHome && active === link.id
                      ? "primary.main"
                      : "text.secondary",
                  fontWeight: isHome && active === link.id ? 700 : 500,
                  "&:hover": { color: "primary.main", transform: "none" },
                }}
              >
                {t(link.label)}
                {isHome && active === link.id && (
                  <Box
                    component={motion.span}
                    layoutId="nav-underline"
                    sx={{
                      position: "absolute",
                      left: 14,
                      right: 14,
                      bottom: 4,
                      height: 2,
                      borderRadius: 2,
                      backgroundColor: "primary.main",
                    }}
                  />
                )}
              </Button>
            ))}

            <Button
              component={Link}
              to="/projects"
              sx={{
                color: !isHome ? "primary.main" : "text.secondary",
                fontWeight: !isHome ? 700 : 500,
                "&:hover": { color: "primary.main", transform: "none" },
              }}
            >
              {lang === "pt" ? "Repositórios" : "Repos"}
            </Button>

            {LanguageToggle}
          </Box>
        )}

        {isMobile && (
          <Box display="flex" alignItems="center">
            {LanguageToggle}
            <IconButton
              onClick={() => setOpen(true)}
              aria-label="Menu"
              sx={{ ml: 1, color: "primary.main" }}
            >
              <MenuOutlinedIcon />
            </IconButton>
          </Box>
        )}
      </Toolbar>

      {/* Barra de progresso do scroll */}
      <motion.div
        style={{
          scaleX: progress,
          transformOrigin: "0%",
          height: 2,
          backgroundColor: theme.palette.primary.main,
          opacity: scrolled ? 1 : 0,
          transition: "opacity .3s ease",
        }}
      />

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { width: 260, backgroundColor: "background.paper", p: 1 },
        }}
      >
        <Box display="flex" justifyContent="flex-end" p={1}>
          <IconButton onClick={() => setOpen(false)} aria-label="Fechar menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItemButton key={link.id} onClick={() => goToSection(link.id)}>
              <ListItemText
                primary={
                  <Typography
                    color={active === link.id ? "primary" : "text.primary"}
                    fontWeight={active === link.id ? 700 : 500}
                  >
                    {t(link.label)}
                  </Typography>
                }
              />
            </ListItemButton>
          ))}
          <ListItemButton
            component={Link}
            to="/projects"
            onClick={() => setOpen(false)}
          >
            <ListItemText
              primary={
                <Typography color="text.primary" fontWeight={500}>
                  {lang === "pt" ? "Repositórios" : "Repos"}
                </Typography>
              }
            />
          </ListItemButton>
        </List>
      </Drawer>
    </AppBar>
  );
}
