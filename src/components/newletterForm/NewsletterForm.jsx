import React, { useState } from 'react';
import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import './NewsletterForm.css'; 

export default function NewsletterSubscription() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('http://127.0.0.1:3001/subscribe', { email: email });

      console.log("Success:", response.data);
      if (response.data.message === 'Subscription successful') {
        setOpen(true); // modal opens if succesfull
        console.log("Subscribed:", email);
        setTimeout(() => {
          setOpen(false);
          setEmail(''); 
        }, 3000); 
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="newsletter">
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
          <Button className="subscribeButton" style={{ backgroundColor: "#0F6466", color: "white" }} type="submit">
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
              Subscription Successful
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Thank you for subscribing to our newsletter!
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
