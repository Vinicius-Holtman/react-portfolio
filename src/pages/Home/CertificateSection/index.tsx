import { Box, Typography, Card, CardContent, Grid, Button, CardActions, CardMedia } from "@mui/material";
import { BackgroundParticle } from "../../../lib/BackgroundParticle";
import ComoGerenciarEstadodasAplicaçõescomRedux from "../../../assets/certificates/Como_Gerenciar_o_Estado_das_Aplicacoes_com_Redux.png"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

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


        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140, objectFit: "cover" }}
            image={ComoGerenciarEstadodasAplicaçõescomRedux}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Como Gerenciar o Estado das Aplicações com Redux
            </Typography>
            <Typography variant="body2" color="text.secondary">
              DIO
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Emitido em jan 2023 - Sem data de expiracao
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Codigo da credencial 4eDDqwe3
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button sx={{ ml: 0.90 }} variant="outlined" startIcon={<OpenInNewIcon />}>
              Exibir Credential
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  )
}