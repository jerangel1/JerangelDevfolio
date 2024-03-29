import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { History } from 'lucide-react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 200,  // Añadido: ajusta la altura según tus necesidades
  border: '2px solid #000',
  boxShadow: 34,
  p: 4,
};

const mobileStyle = {
  '@media (max-width: 600px)': {
    ...style,
    width: '70%',
    height: 'auto',  // Añadido: ajusta la altura según tus necesidades
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Looking for a different site?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Go back in time?...<History />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}