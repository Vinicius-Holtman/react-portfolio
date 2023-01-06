import { Card, CardContent, Typography } from "@mui/material";
import { ReactNode } from "react";

interface AboutCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

export function AboutCard({ icon, title, subtitle }: AboutCardProps) {
  return (
    <Card sx={{
      borderRadius: "10px"
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
        <Typography >{subtitle}</Typography>
      </CardContent>
    </Card>

  )
}