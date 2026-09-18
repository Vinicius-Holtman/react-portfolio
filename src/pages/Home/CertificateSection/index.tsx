import { ChangeEvent, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Pagination as MuiPagination,
  Stack,
  Typography,
} from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import VerifiedIcon from "@mui/icons-material/Verified";
import {
  CertificateLightbox,
  LightboxContent,
} from "../../../components/CertificateLightbox";
import { certificates } from "../../../data/data-certificate";
import { certificatesSection, featuredCertificates } from "../../../data/content";
import { useT } from "../../../i18n";
import { Section } from "../../../components/Section";
import { SectionTitle } from "../../../components/SectionTitle";
import {
  Reveal,
  RevealGroup,
  revealItemVariants,
} from "../../../components/motion/Reveal";

const PER_PAGE = 6;

export function CertificateSection() {
  const t = useT();
  const reduced = useReducedMotion();
  const [page, setPage] = useState(1);
  const [lightbox, setLightbox] = useState<LightboxContent | null>(null);

  const pageCount = Math.ceil(certificates.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const visible = certificates.slice(start, start + PER_PAGE);

  const openCertificate = (certificate: (typeof certificates)[number]) =>
    setLightbox({
      image: certificate.certificateImage,
      title: certificate.certificateName,
      caption: `${certificate.company} · ${t(certificatesSection.issued)} ${
        certificate.issueDate
      }`,
      url: certificate.credentialUrl || undefined,
    });

  const handleChangePage = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    document
      .getElementById("certificates")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Section id="certificates">
      <SectionTitle
        title={t(certificatesSection.title)}
        kicker={t(certificatesSection.kicker)}
      />

      {/* Certificações oficiais em destaque */}
      <RevealGroup stagger={0.12}>
        <Grid container spacing={3} justifyContent="center">
          {featuredCertificates.map((cert) => (
            <Grid
              item
              xs={12}
              md={featuredCertificates.length >= 3 ? 4 : 6}
              key={cert.code}
              sx={{ display: "flex" }}
            >
              <Card
                component={motion.div}
                variants={revealItemVariants}
                whileHover={reduced ? undefined : { y: -6 }}
                sx={{
                  width: "100%",
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: "background.paper",
                  borderColor: "rgba(0,179,126,0.30)",
                  transition: "box-shadow .3s ease, border-color .3s ease",
                  "&:hover": {
                    borderColor: "primary.main",
                    boxShadow: "0 24px 50px -30px rgba(0,179,126,0.9)",
                  },
                }}
              >
                <Box
                  aria-hidden
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(circle at 88% 6%, ${cert.accent}26 0%, transparent 55%)`,
                    pointerEvents: "none",
                  }}
                />
                <CardContent
                  sx={{
                    p: { xs: 2.5, md: 3.5 },
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.4,
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <Box display="flex" alignItems="center" gap={1}>
                    <VerifiedIcon sx={{ color: cert.accent, fontSize: 20 }} />
                    <Typography
                      variant="caption"
                      sx={{
                        color: "primary.main",
                        fontWeight: 700,
                        letterSpacing: 1.1,
                        textTransform: "uppercase",
                      }}
                    >
                      {t(certificatesSection.featuredLabel)}
                    </Typography>
                  </Box>

                  <Typography variant="h4" color="text.primary" lineHeight={1.35}>
                    {t(cert.name)}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", lineHeight: 1.7, flex: 1 }}
                  >
                    {t(cert.blurb)}
                  </Typography>

                  <Box
                    display="flex"
                    flexWrap="wrap"
                    alignItems="center"
                    gap={1}
                    sx={{ color: "text.secondary", fontSize: 12.5, mt: 0.5 }}
                  >
                    <Box
                      component="span"
                      sx={{
                        px: 1.1,
                        py: 0.4,
                        borderRadius: 999,
                        border: "1px solid",
                        borderColor: "divider",
                        fontFamily: "monospace",
                        letterSpacing: 0.4,
                        color: "primary.light",
                      }}
                    >
                      {cert.code}
                    </Box>
                    <span>
                      {t(certificatesSection.issued)} {t(cert.issued)}
                      {cert.expires
                        ? ` · ${t(certificatesSection.validUntil)} ${t(
                            cert.expires
                          )}`
                        : ` · ${t(certificatesSection.noExpiry)}`}
                    </span>
                  </Box>

                  <Box mt={1.5}>
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<ZoomInIcon />}
                      onClick={() =>
                        setLightbox({
                          image: cert.image,
                          title: t(cert.name),
                          caption: `${cert.code} · ${t(
                            certificatesSection.issued
                          )} ${t(cert.issued)}`,
                          url: cert.url,
                        })
                      }
                    >
                      {t(certificatesSection.verify)}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </RevealGroup>

      {/* Demais certificados */}
      <Reveal>
        <Box mt={{ xs: 7, md: 10 }} mb={3} textAlign="center">
          <Typography variant="h3" color="text.primary">
            {t(certificatesSection.othersTitle)}
          </Typography>
          <Typography variant="h6" color="text.secondary" mt={0.5}>
            {t(certificatesSection.othersKicker)}
          </Typography>
        </Box>
      </Reveal>

      {/* Anima na montagem (e a cada troca de página) em vez de whileInView:
          ao paginar, o container não remonta e os cards ficavam invisíveis. */}
      <Box
        key={page}
        component={motion.div}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.05 } },
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          {visible.map((certificate) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={certificate.credentialCod}
              sx={{ display: "flex" }}
            >
              <Card
                component={motion.div}
                variants={revealItemVariants}
                whileHover={reduced ? undefined : { y: -5 }}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "background.paper",
                  transition: "border-color .3s ease",
                  "&:hover": { borderColor: "primary.main" },
                }}
              >
                <CardMedia
                  onClick={() => openCertificate(certificate)}
                  sx={{
                    height: 148,
                    backgroundSize: "cover",
                    cursor: "zoom-in",
                    transition: "opacity .25s ease",
                    "&:hover": { opacity: 0.82 },
                  }}
                  image={certificate.certificateImage}
                  title={certificate.certificateName}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.6,
                    flex: 1,
                  }}
                >
                  <Typography variant="h5" color="primary" lineHeight={1.4}>
                    {certificate.certificateName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {certificate.company}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ mt: "auto", pt: 1 }}
                  >
                    {t(certificatesSection.issued)} {certificate.issueDate}
                    {" · "}
                    {certificate.isExpired
                      ? certificate.expiredDate
                      : t(certificatesSection.noExpiry)}
                  </Typography>
                  <Button
                    size="small"
                    variant="text"
                    onClick={() => openCertificate(certificate)}
                    startIcon={<ZoomInIcon fontSize="small" />}
                    sx={{ alignSelf: "flex-start", px: 0, mt: 0.5 }}
                  >
                    {t(certificatesSection.verify)}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Stack alignItems="center" mt={4}>
        <MuiPagination
          count={pageCount}
          color="primary"
          page={page}
          onChange={handleChangePage}
        />
      </Stack>

      <CertificateLightbox item={lightbox} onClose={() => setLightbox(null)} />
    </Section>
  );
}
