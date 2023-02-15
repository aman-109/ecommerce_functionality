import { Box, Icon, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <Box
      w="100%"
      bg={useColorModeValue("rgb(224 242 216)", "white")}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      h="60px"
      display="flex"
      justifyContent={"space-around"}
      alignItems="center"
      position={"fixed"}
      overflow="hidden"
      top="0"
      left="0"
      zIndex={"99"}
      
    >
      <Link to="/">Home</Link>
      <Link to="/login">Logout</Link>
      <Link to="/cart">
        <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
      </Link>
    </Box>
  );
};

export default Navbar;
