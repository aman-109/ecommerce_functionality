import { Box } from '@chakra-ui/react';
import React from 'react'

const Contact = ({handleChange,state}) => {
  return (
    <Box style={fieldset}>
    <legend style={legend}>Contact</legend>
    <div>
      <label for="contact-email-address" />
      <input
        id="contact-email-address"
        style={inputField}
        value={state.contact}
        type="text"
        name="contact"
        onChange={handleChange}
        placeholder="Email"
      />
    </div>
  </Box>
  )
}

const fieldset = {
    textAlign: "initial",
    marginBottom: "20px",
    paddingBottom: "15px"
  };
  
  const legend = {
    fontSize: "20px",
    textAlign: "initial"
  };
  
  const inputField = {
    boxSizing: "border-box",
    fontSize: "14px",
    letterSpacing: "1px",
    padding: "12px 20px",
    width: "100%",
    border:"1px solid"
  };
  

export default Contact