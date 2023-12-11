import { Box, Typography, Card, CardContent, styled, useTheme, TextField, Grid, Button, Link, Snackbar, SnackbarOrigin, Alert } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { BackgroundParticle } from "../../../lib/BackgroundParticle";
import { tokens } from "../../../styles/theme";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { Icon } from "@iconify/react";
import SendIcon from '@mui/icons-material/Send';
import { Footbar } from "../../../components/Footbar";
import { useState } from "react";
import emailjs from '@emailjs/browser'
import React from "react";

interface State extends SnackbarOrigin {
  open: boolean;
}

export function ContactSection() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successSendEmail, setSuccessSendEmail] = useState(false);

  const [checkForm, setCheckForm] = React.useState<State>({
    open: false,
    vertical: 'bottom',
    horizontal: 'center',
  });

  const [openSnackbarSendEmail, setOpenSnackbarSendEmail] = React.useState<State>({
    open: false,
    vertical: 'bottom',
    horizontal: 'center',
  });

  const [errorSendEmail, setErrorSendEmail] = React.useState<State>({
    open: false,
    vertical: 'bottom',
    horizontal: 'center',
  });

  const handleName = (event: any) => {
    setName(event.target.value);
  };

  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };
  
  const handleSendMessage = (event: any) => {
    setMessage(event.target.value);
  };

  function HandleSendEmail() {
    console.log('cheguei aqui')
    if (name === '' || email === '' || message === '') {
      setCheckForm({ ...checkForm, open: true });
    } else {
      const templateParams = {
        from_name: name,
        email: email,
        message: message
      }

      emailjs.send('service_uts0hgf', 'template_lqtr0ae', templateParams, 'APpzSATRJEoaP-hPo')
      .then((res) => {
        setSuccessSendEmail(true)
        setName('')
        setEmail('')
        setMessage('')

        setOpenSnackbarSendEmail({ ...openSnackbarSendEmail, open: true });
      }).catch((err) => {
        setErrorSendEmail({ ...errorSendEmail, open: true });
      });
    }
  }

  const handleCloseSnackbar = () => {
    setOpenSnackbarSendEmail({ ...openSnackbarSendEmail, open: false });
    setCheckForm({ ...checkForm, open: false });
    setErrorSendEmail({ ...errorSendEmail, open: false });
  };

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

        <Box sx={{
          width: "1120px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 5,
        }}>
          {checkForm && (
            <>
              <Snackbar open={checkForm.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="warning" sx={{ width: '100%' }}>
                  Informe todos os dados para envio do formulário!
                </Alert>
              </Snackbar>
            </>
          )}

          {successSendEmail && (
            <>
              <Snackbar open={openSnackbarSendEmail.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                  Email enviado com sucesso!
                </Alert>
              </Snackbar>
            </>
          )}

          {errorSendEmail && (
            <>
              <Snackbar open={errorSendEmail.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                  Ocorreu um erro ao enviar o email. Por favor, tente novamente mais tarde.
                </Alert>
              </Snackbar>
            </>
          )}

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
                    +55 (41)99199-6195
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={2}>
                  <EmailIcon sx={{ width: "30px", height: "30px" }} color="secondary" />{/* Email */}
                  <Typography color={colors.grey[300]}>
                    vinicius.holt.dev@gmail.com
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center" gap={2}>
                  <Link href="https://github.com/Vinicius-Holtman">
                    <GitHubIcon sx={{ width: "40px", height: "40px" }} color="secondary" />
                  </Link>
                  <Link href="https://linkedin.com/in/vinicius-holtman-9b014a208">
                    <Icon color="#00875f" icon="mdi:linkedin" width={40} height={40} />
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Box display="flex" flexDirection="column" gap={1}>
                    <Typography variant="h4" color="secondary">Send Me a Message</Typography>
                    <TextField id="name" label="Your Name" variant="filled" sx={{ mt: "15px" }} onChange={handleName} value={name} />
                    <TextField id="email" label="Your Email" variant="filled" onChange={handleEmail} value={email} />
                    <TextField
                      id="message"
                      label="Message"
                      variant="filled"
                      multiline
                      maxRows={4}
                      value={message}
                      onChange={handleSendMessage}
                    />

                    <Button sx={{ mt: 3 }} startIcon={<SendIcon />} variant="contained" onClick={() => HandleSendEmail()}>Send</Button>
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