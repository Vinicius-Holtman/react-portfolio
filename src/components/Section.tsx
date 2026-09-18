import { ReactNode } from "react";
import { Box, Container, SxProps, Theme } from "@mui/material";

interface SectionProps {
  id: string;
  children: ReactNode;
  sx?: SxProps<Theme>;
  disableGutterTop?: boolean;
}

/** Container responsivo padrão das seções, com âncora para o menu. */
export function Section({
  id,
  children,
  sx,
  disableGutterTop = false,
}: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        width: "100%",
        scrollMarginTop: "84px",
        pt: disableGutterTop ? 0 : { xs: 8, md: 14 },
        pb: { xs: 8, md: 14 },
        ...sx,
      }}
    >
      <Container maxWidth="lg" disableGutters={false}>
        {children}
      </Container>
    </Box>
  );
}
