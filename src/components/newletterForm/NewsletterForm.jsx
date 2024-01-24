import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import './NewsletterForm.css'; 

export default function NewsletterSubscription() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("userEmail", email);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      setEmail('');
    }, 3000);
  };

  return (
    <div>
      <h3>Subscribe to Resources Newsletter!</h3>
      <form onSubmit={handleSubmit}>
        <div className="formContainer">
        <TextField 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          id="exampleInputEmail1"
          label="Enter your email" 
          margin="normal"
        />
        <Button className="subscribeButton" color="primary" type="submit">
          Subscribe
        </Button>
        </div>
      </form>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className="modalStyle">
            <Typography id="transition-modal-title" variant="h4" component="h2" sx={{ textDecoration: 'underline' }}>
              Resources Subscription
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Thank you for subscribing!
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
