import { Box, Typography, Card, CardContent, Grid, Button, CardActions, CardMedia, Link, styled } from "@mui/material";
import { BackgroundParticle } from "../../../lib/BackgroundParticle";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { certificates } from "../../../data/data-certificate";

export function CertificateSection() {
  return (
    <Box sx={{
      width: "100%",
      height: "895px",

      display: "flex",
      justifyContent: "center",
    }}>
      <BackgroundParticle />

      <Box sx={{
        width: "1120px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 2,
      }}>
        <Typography variant="h2" color="primary">
          Certificate
        </Typography>

        <Grid container spacing={2}>
          {certificates.map((certificate) => (
            <Grid item xs={2} sm={4} md={4} key={certificate.credentialCod}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140, objectFit: "cover" }}
                  image={certificate.certificateImage}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color="primary">
                    {certificate.certificateName}
                  </Typography>
                  <Typography variant="h6" color="secondary">
                    {certificate.company}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Emitido em {certificate.issueDate} - {certificate.isExpired ? certificate.expiredDate : "Sem data de expiração"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Codigo da credencial: {certificate.credentialCod}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Link href={certificate.credentialUrl} underline="hover">
                    <Button sx={{ ml: 0.90 }} variant="outlined" startIcon={<OpenInNewIcon />}>
                      Exibir Credential
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}