import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import CartProducts from "../Components/CartProducts";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [data, setData] = useState([]);
  const [qty, setQty] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8179/cart", {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((res) => setData(res.data.cart));
    handleQty();
  }, []);

  const handleQty = () => {
    let x = data.reduce((acc, cur) => (acc += Number(cur.product_id.price)), 0);
    setQty(x);
    localStorage.setItem("cartTotal", JSON.stringify(x));
  };

  return (
    <>
      <Navbar />
      <Box w="50%" m="auto" mb={"70px"} border="1px solid "></Box>
      <Box bg="white" p={5} m="auto" w="60%">
        <Text fontSize={"xl"}>Product Cart</Text>
        <Box w="100%" display={"flex"} justifyContent="space-between">
          {/* Cart Products */}
          <Box w="50%">
            {data?.map((ele) => (
              <CartProducts
                name={ele.product_id.name}
                price={ele.product_id.price}
                image={ele.product_id.image}
              />
            ))}
          </Box>

          {/* Cart Total */}
          <Box
            w="50%"
            display="flex"
            justifyContent={"center"}
            alignItems="center"
          >
            Cart Total : $ {qty}
          </Box>
        </Box>
        {/* Checkout */}

        <Box
          mt="10px"
          onClick={() => navigate("/checkout")}
          p={5}
          fontSize="2xl"
          bg="rgb(224 242 216)"
          color="black"
          _hover={{ bg: "blue.300", color: "red" }}
          w="100%"
          border={"2px solid blue"}
        >
          Proceed to Chekout
        </Box>
      </Box>
    </>
  );
};

export default Cart;
