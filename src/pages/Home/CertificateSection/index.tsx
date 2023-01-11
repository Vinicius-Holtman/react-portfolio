import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  CardActions,
  CardMedia,
  Link,
  Pagination as MuiPagination,
  Stack
} from "@mui/material";
import { BackgroundParticle } from "../../../lib/BackgroundParticle";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { certificates } from "../../../data/data-certificate";
import { ChangeEvent, useState } from "react";

export function CertificateSection() {
  const [page, setPage] = useState(1)

  const countPages = () => {
    const totalCertificates = certificates.length
    const quantityPage = totalCertificates / 6
    const roundPage = Math.ceil(quantityPage)
    return roundPage
  }

  const handleChangePage = (
    event: ChangeEvent<unknown>,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const countInitalPagination = (page * 6) - 6
  const certificatePagination = certificates.slice(countInitalPagination, countInitalPagination + 6)

  return (
    <Box sx={{
      width: "100%",
      mt: 20,

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
          {certificatePagination.map((certificate) => (
            <Grid item xs={12} sm={6} md={4} key={certificate.credentialCod}>
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

        <Stack spacing={2}>
          <MuiPagination
            count={countPages()}
            color="secondary"
            onChange={handleChangePage}
            page={page}
          />
        </Stack>
      </Box>
    </Box>
  )
}