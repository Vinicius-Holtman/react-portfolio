import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import SendIcon from "@mui/icons-material/Send";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailjs from "@emailjs/browser";
import { contactChannels, contactSection, footer } from "../../../data/content";
import { useT } from "../../../i18n";
import { Section } from "../../../components/Section";
import { SectionTitle } from "../../../components/SectionTitle";
import { Reveal } from "../../../components/motion/Reveal";

type Feedback = { type: "success" | "error" | "warning"; message: string } | null;

export function ContactSection() {
  const t = useT();
  const reduced = useReducedMotion();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>(null);

  const handleSend = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFeedback({ type: "warning", message: t(contactSection.incomplete) });
      return;
    }

    setSending(true);
    emailjs
      .send(
        "service_uts0hgf",
        "template_lqtr0ae",
        { from_name: name, email, message },
        "APpzSATRJEoaP-hPo"
      )
      .then(() => {
        setFeedback({ type: "success", message: t(contactSection.success) });
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        setFeedback({ type: "error", message: t(contactSection.error) });
      })
      .finally(() => setSending(false));
  };

  const channels = [
    {
      icon: <LocalPhoneIcon color="primary" />,
      value: contactChannels.phone,
      href: `tel:${contactChannels.phone.replace(/[^\d+]/g, "")}`,
    },
    {
      icon: <EmailIcon color="primary" />,
      value: contactChannels.email,
      href: `mailto:${contactChannels.email}`,
    },
    {
      icon: <PlaceIcon color="primary" />,
      value: t(contactSection.location),
    },
  ];

  return (
    <Section id="contact" sx={{ pb: { xs: 6, md: 8 } }}>
      <SectionTitle
        title={t(contactSection.title)}
        kicker={t(contactSection.kicker)}
      />

      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="stretch">
        <Grid item xs={12} md={5}>
          <Reveal direction="right">
            <Box display="flex" flexDirection="column" gap={2.5}>
              {channels.map((channel) => (
                <Box
                  key={channel.value}
                  component={channel.href ? "a" : "div"}
                  href={channel.href}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 2,
                    borderRadius: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    textDecoration: "none",
                    color: "text.primary",
                    transition: "border-color .25s ease, transform .25s ease",
                    "&:hover": {
                      borderColor: "primary.main",
                      transform: channel.href ? "translateX(4px)" : "none",
                    },
                  }}
                >
                  {channel.icon}
                  <Typography variant="h6">{channel.value}</Typography>
                </Box>
              ))}

              <Box display="flex" gap={1.5} mt={0.5}>
                {[
                  {
                    key: "github",
                    href: contactChannels.github,
                    icon: <GitHubIcon />,
                  },
                  {
                    key: "linkedin",
                    href: contactChannels.linkedin,
                    icon: <LinkedInIcon />,
                  },
                ].map((social) => (
                  <Box
                    key={social.key}
                    component={motion.a}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={reduced ? undefined : { y: -4, scale: 1.06 }}
                    sx={{
                      display: "grid",
                      placeItems: "center",
                      width: 46,
                      height: 46,
                      borderRadius: "50%",
                      border: "1px solid",
                      borderColor: "divider",
                      color: "primary.main",
                      "&:hover": { borderColor: "primary.main" },
                    }}
                  >
                    {social.icon}
                  </Box>
                ))}
              </Box>
            </Box>
          </Reveal>
        </Grid>

        <Grid item xs={12} md={7}>
          <Reveal direction="left">
            <Card sx={{ backgroundColor: "background.paper", height: "100%" }}>
              <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
                <Typography variant="h4" color="primary" mb={2.5}>
                  {t(contactSection.formTitle)}
                </Typography>

                <Box display="flex" flexDirection="column" gap={2}>
                  <TextField
                    label={t(contactSection.name)}
                    variant="filled"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    fullWidth
                  />
                  <TextField
                    label={t(contactSection.email)}
                    type="email"
                    variant="filled"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    fullWidth
                  />
                  <TextField
                    label={t(contactSection.message)}
                    variant="filled"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    multiline
                    minRows={4}
                    fullWidth
                  />

                  <Button
                    variant="contained"
                    startIcon={<SendIcon />}
                    onClick={handleSend}
                    disabled={sending}
                    sx={{ alignSelf: "flex-start", mt: 1, color: "#06120D" }}
                  >
                    {sending ? t(contactSection.sending) : t(contactSection.send)}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Reveal>
        </Grid>
      </Grid>

      <Box
        sx={{
          mt: { xs: 7, md: 10 },
          pt: 3,
          borderTop: "1px solid",
          borderColor: "divider",
          textAlign: "center",
        }}
      >
        <Typography variant="caption" color="text.secondary">
          © {new Date().getFullYear()} Vinicius Holtman · {t(footer.rights)}
        </Typography>
      </Box>

      <Snackbar
        open={Boolean(feedback)}
        autoHideDuration={6000}
        onClose={() => setFeedback(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setFeedback(null)}
          severity={feedback?.type ?? "info"}
          sx={{ width: "100%" }}
        >
          {feedback?.message}
        </Alert>
      </Snackbar>
    </Section>
  );
}
