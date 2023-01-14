import { Box, Typography, Card, CardContent, styled, useTheme, TextField, Grid, Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { BackgroundParticle } from "../../../lib/BackgroundParticle";
import ambient from "../../../assets/ambient.svg"
import { tokens } from "../../../styles/theme";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { Icon } from "@iconify/react";
import SendIcon from '@mui/icons-material/Send';
import { BackgroundSky } from "../../../lib/BackgroundSky";
import { Footbar } from "../../../components/Footbar";


export function ContactSection() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <>
      <Box sx={{
        width: "100%",
        height: "585px",
        mt: 15,

        display: "flex",
        justifyContent: "center",
        position: "relative"
      }}>
        <BackgroundParticle height="100%" />
        <BackgroundSky height="100%" />

        <Box sx={{
          width: "1120px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 5,
        }}>
          <Typography variant="h2" color="primary">
            Entre em contato
          </Typography>

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Typography variant="h5" color={colors.grey[300]}>
                Fique a vontade para escolher uma forma de contato 😊. Irei responder o mais breve possivel!
              </Typography>
              <Box display="flex" flexDirection="column" gap={3} mt={4}>
                <Box display="flex" alignItems="center" gap={2}>
                  <LocalPhoneIcon sx={{ width: "30px", height: "30px" }} color="secondary" /> {/* Phone */}
                  <Typography color={colors.grey[300]}>
                    +55 (41)99214-8498
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={2}>
                  <EmailIcon sx={{ width: "30px", height: "30px" }} color="secondary" />{/* Email */}
                  <Typography color={colors.grey[300]}>
                    vinicius.holt.dev@gmail.com
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center" gap={2}>
                  <GitHubIcon sx={{ width: "30px", height: "30px" }} color="secondary" />
                  <Icon color="#00875f" icon="mdi:linkedin" width={30} height={30} />
                  <Icon color="#00875f" icon="ic:baseline-discord" width={30} height={30} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Box display="flex" flexDirection="column" gap={1}>
                    <Typography variant="h4" color="secondary">Send Me a Message</Typography>
                    <TextField id="name" label="Your Name" variant="filled" sx={{ mt: "15px" }} />
                    <TextField id="email" label="Your Email" variant="filled" />
                    <TextField
                      id="message"
                      label="Menssage"
                      variant="filled"
                      multiline
                      maxRows={4}
                    />

                    <Button sx={{ mt: 3 }} startIcon={<SendIcon />} variant="contained">Send</Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Footbar bottom={-7} />
      </Box>
    </>
  )
}