import {
  Typography,
  Box,
  Button,
  Tooltip,
  Paper,
  styled,
  Modal,
  Snackbar,
  Alert
} from "@mui/material";
import { dateFormatter } from "../../utils/formatter";
import { tokens } from "../../styles/theme";
import { Repository } from ".";
import { useState } from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Item = styled(Paper)(({ theme }) => {
  const colors = tokens(theme.palette.mode)

  return {
    backgroundColor: colors.grey[800],
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  }
});

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

interface CardProjectProps {
  repository: Repository
}

export function CardProject({ repository }: CardProjectProps) {
  const [openModal, setOpenModal] = useState(false)
  const [openMessageCopy, setOpenMessageCopy] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCopySSHClone = () => {
    setOpenMessageCopy(true)
    navigator.clipboard.writeText(repository.ssh_url);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={2000}
        onClose={() => setOpenMessageCopy(false)}
        open={openMessageCopy}
      >
        <Alert onClose={() => setOpenMessageCopy(false)} severity="success" sx={{ width: '100%' }}>
          Copied SSH Clone
        </Alert>
      </Snackbar>
      <Item>
        <Tooltip title={repository.name}>
          <Typography sx={{
            whiteSpace: "nowrap",
            width: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}
            gutterBottom
            variant="h3"
            component="div"
            color="primary"
          >
            {repository.name}
          </Typography>
        </Tooltip>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} gap={4}>
          <Typography variant="h6" color="secondary">
            {repository.language}
          </Typography>
          <Button
            color="secondary"
            variant="outlined"
            size="small"
            onClick={handleOpenModal}
          >
            SSH Clone
          </Button>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" gap={4} mt={2}>
          <Typography variant="body2" color="text.secondary">
            Created: {dateFormatter.format(new Date(repository.created_at))}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Last_updated: {dateFormatter.format(new Date(repository.updated_at))}
          </Typography>
        </Box>
      </Item>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="h3">Clone This Repository</Typography>
          </Box>
          <Button onClick={handleCopySSHClone} variant="outlined" endIcon={<ContentCopyIcon />} sx={{ mt: 3 }}>
            <Typography variant="caption" color="secondary">
              {repository.ssh_url}
            </Typography>
          </Button>
        </Box>
      </Modal>
    </>
  )
}