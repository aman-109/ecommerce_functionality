import { Box, Button, Container } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Contact from '../Components/Checkout/Contact'
import ShippingAddress from '../Components/Checkout/ShippingAddress'
import ShippingMethod from '../Components/Checkout/ShippingMethod'
import Navbar from '../Components/Navbar'

const Checkout = () => {
    const [state,setState]=useState({
        contact:"",
        name:"",
        add:"",
        plot:"",
        company:"",
        city:"",
        states:"",
        postal:"",
    })
    const navigate=useNavigate()
    const handleChange=(e)=>{
        let {name,value}=e.target
        setState({
            ...state,
            [name]:value
        })
    }
    const handleSubmit=()=>{
        localStorage.setItem("userDetails",JSON.stringify(state))
        navigate("/payment")
    }

  return (
    <>
    <Navbar/>
    <Box  w="50%" m="auto" mb={"70px"} border="1px solid red"></Box>

    <Container  bg="white">
    <Contact handleChange={handleChange} state={state}/>
    <ShippingAddress  handleChange={handleChange} state={state} />
    <ShippingMethod />
    <Button mt={3} onClick={handleSubmit} colorScheme={"blue"}  mb={3}>
        Proceed to Payment
    </Button>
  </Container>
    </>
  )
}

export default Checkout