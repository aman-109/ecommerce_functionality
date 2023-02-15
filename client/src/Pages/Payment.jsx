import React, { useEffect, useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Box } from '@chakra-ui/react';
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Payment = () => {
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);
    const navigate=useNavigate()
    const createOrder = (data, actions) => {
        return actions.order
          .create({
            purchase_units: [
              {
                description: "Product",
                amount: {
                  currency_code: "USD",
                  value: JSON.parse(localStorage.getItem("cartTotal")),
                },
              },
            ],
            // not needed if a shipping address is actually needed
            application_context: {
              shipping_preference: "NO_SHIPPING",
            },
          })
          .then((orderID) => {
            setOrderID(orderID);
            return orderID;
          });
      };

      // check Approval
 const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };
  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  useEffect(() => {
    if (success) {
      alert("Payment successful!!");
      navigate("/")
    }
  },
  [success]
);




  return (
    <>
    <Navbar/>
    <Box  w="50%" m="auto" mb={"70px"} border="1px solid red"></Box>

    <Box p={10} m="auto">
         <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_CLIENTID  }}>
           <PayPalButtons style={{ layout: "horizontal" }} createOrder={createOrder}
           onApprove={onApprove} />
       </PayPalScriptProvider>
    </Box>
    </>
  )
}


export default Payment