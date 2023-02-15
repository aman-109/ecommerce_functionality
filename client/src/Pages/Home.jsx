import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";
import axios from "axios";
import { Box, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
async function getProducts() {
  let res = await axios("https://ecommerceproject-ln4v.onrender.com/products", {
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });

  return res;
}

const Home = () => {
  const [data, setData] = useState([]);
  const toast = useToast();
  const navigate=useNavigate()
  useEffect(() => {
    let token= JSON.parse(localStorage.getItem("token"))
    if(token){
      getProducts().then((res) => setData(res.data));
      navigate("/")
    }
    else{
      navigate("/auth")
    }
  }, [navigate]);

  const addToCart = async (id) => {
    try {
      let { data } = await axios(
        `https://ecommerceproject-ln4v.onrender.com/products/add-product/${id}`,
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      if (data.status) {
        toast({
          title: data.message,
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <Box w="50%" m="auto" mb={"70px"} border="1px solid red"></Box>
      <Box
        w="100%"
        p={5}
        gap={10}
        display={"grid"}
        gridTemplateColumns="repeat(4, 1fr)"
      >
        {data?.map((ele) => (
          <ProductCard data={ele} addToCart={addToCart} />
        ))}
      </Box>
    </>
  );
};

export default Home;
