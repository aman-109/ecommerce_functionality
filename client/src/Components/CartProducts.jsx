import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

const CartProducts = ({ name, price, image }) => {
  return (
    <>
      <Box
        w="100%"
        bg="gray.100"
        display={"flex"}
        justifyContent={"space-around"}
        alignItems="center"
        mb={3}
      >
        <Box w="40%">
          <Image w="100%" src={image} alt={name} />
        </Box>

        <Box w="55%">
          <Text>{name}</Text>
          <Text> $ {price}</Text>
        </Box>
      </Box>
    </>
  );
};

export default CartProducts;
