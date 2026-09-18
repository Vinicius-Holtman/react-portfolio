import { Box, Typography } from "@mui/material";
import { Reveal } from "./motion/Reveal";

interface SectionTitleProps {
  title: string;
  kicker?: string;
  align?: "center" | "left";
}

export function SectionTitle({
  title,
  kicker,
  align = "center",
}: SectionTitleProps) {
  return (
    <Reveal>
      <Box
        display="flex"
        flexDirection="column"
        alignItems={align === "center" ? "center" : "flex-start"}
        gap={1}
        mb={{ xs: 4, md: 6 }}
      >
        <Typography
          variant="h2"
          color="primary"
          fontWeight={700}
          textAlign={align}
          sx={{ fontSize: { xs: 28, sm: 34, md: 40 } }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            width: 64,
            height: 3,
            borderRadius: 3,
            background: (theme) =>
              `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`,
          }}
        />

        {kicker && (
          <Typography
            variant="h6"
            textAlign={align}
            sx={{ color: "text.secondary", maxWidth: 620, mt: 0.5 }}
          >
            {kicker}
          </Typography>
        )}
      </Box>
    </Reveal>
  );
}
