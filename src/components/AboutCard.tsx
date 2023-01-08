import { Card, CardContent, Typography, useTheme } from "@mui/material";
import { ReactNode } from "react";
import { tokens } from "../styles/theme";

interface AboutCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

export function AboutCard({ icon, title, subtitle }: AboutCardProps) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Card sx={{
      borderRadius: "10px",
    }}>
      <CardContent sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1
      }}>
        {icon}

        <Typography color="primary" variant="h6" fontWeight="bold">{title}</Typography>
        <Typography color={colors.grey[300]}>{subtitle}</Typography>
      </CardContent>
    </Card>
  )
}