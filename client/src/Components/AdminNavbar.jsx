import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <>
      <Box
        w="100%"
        bg={useColorModeValue("rgb(224 242 216)", "white")}
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        h="60px"
        position={"fixed"}
        overflow="hidden"
        top="0"
        left="0"
        zIndex={"99"}
      >
        <Box fontSize="xl" color="red" w="40%" m="auto">
          Admin Dashboard
        </Box>

        <Box display="flex" justifyContent={"space-around"} alignItems="center">
          <Link to="/admin">Home</Link>
          <Link to="/admin/createproduct">Add Product</Link>
          <Link to="/admin/dashboard">User Details</Link>
        </Box>
      </Box>
    </>
  );
};

export default AdminNavbar;
