import { Box, IconButton, Modal, Typography } from "@mui/material";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useLang } from "../i18n";

export interface LightboxContent {
  image: string;
  title: string;
  caption?: string;
  url?: string;
}

interface CertificateLightboxProps {
  item: LightboxContent | null;
  onClose: () => void;
}

/**
 * Abre a imagem do certificado em tela cheia, sem sair do site.
 * O filho direto do Modal precisa ser um elemento que aceite ref
 * (motion.div aceita) — senão o MUI não move o foco e o Esc não fecha.
 */
export function CertificateLightbox({ item, onClose }: CertificateLightboxProps) {
  const { lang } = useLang();
  const openLabel =
    lang === "pt" ? "Abrir credencial oficial" : "Open official credential";
  const closeLabel = lang === "pt" ? "Fechar" : "Close";

  return (
    <Modal
      open={Boolean(item)}
      onClose={onClose}
      sx={{
        display: "grid",
        placeItems: "center",
        p: { xs: 2, md: 4 },
        "& .MuiBackdrop-root": { backgroundColor: "rgba(5,6,8,0.92)" },
      }}
    >
      <Box
        component={motion.div}
        tabIndex={-1}
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        sx={{
          outline: "none",
          maxWidth: "min(1080px, 100%)",
          maxHeight: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        {item && (
          <>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              gap={2}
            >
              <Typography variant="h5" sx={{ color: "#E1E1E6" }}>
                {item.title}
              </Typography>
              <IconButton
                onClick={onClose}
                aria-label={closeLabel}
                sx={{ color: "#E1E1E6", flexShrink: 0 }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            <Box
              component="img"
              src={item.image}
              alt={item.title}
              sx={{
                width: "100%",
                maxHeight: "72vh",
                objectFit: "contain",
                borderRadius: 3,
                border: "1px solid rgba(255,255,255,0.10)",
                backgroundColor: "#0D0D10",
              }}
            />

            <Box
              display="flex"
              flexWrap="wrap"
              alignItems="center"
              justifyContent="space-between"
              gap={1.5}
            >
              {item.caption && (
                <Typography variant="caption" sx={{ color: "#8D8D99" }}>
                  {item.caption}
                </Typography>
              )}
              {item.url && (
                <Box
                  component="a"
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.7,
                    color: "#00B37E",
                    fontSize: 13,
                    fontWeight: 600,
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  <OpenInNewIcon sx={{ fontSize: 16 }} />
                  {openLabel}
                </Box>
              )}
            </Box>
          </>
        )}
      </Box>
    </Modal>
  );
}
