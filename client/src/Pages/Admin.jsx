import { Box, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminNavbar from "../Components/AdminNavbar";
import AdminProduct from "../Components/AdminProduct";
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
const Admin = () => {
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState(false);
  const [newText, setNewText] = useState({
    name: "",
    price: "",
    image: "",
  });

  const toast = useToast();

  useEffect(() => {
    getProducts().then((res) => setData(res.data));
  }, [temp]);

  const editProduct = async (productId) => {
    if (!newText.name || !newText.price || !newText.image) {
      return toast({
        title: "Please filled all the fields!",
        status: "Info",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
    try {
      let body = {
        id: productId,
        name: newText.name,
        price: newText.price,
        image: newText.image,
      };
      let { data } = await axios.patch(
        "https://ecommerceproject-ln4v.onrender.com/admin/edit-service",
        body,
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
        setTemp(!temp);
      }
    } catch (error) {
      console.log(error);
      toast({
        title: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const deleteProduct = async (delId) => {
    try {
      let { data } = await axios.delete(
        `https://ecommerceproject-ln4v.onrender.com/admin/delete-service/${delId}`,
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
        setTemp(!temp);
      }
    } catch (e) {
      toast({
        title: e.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };
  return (
    <>
      <AdminNavbar />
      <Box w="50%" m="auto" mb={"70px"} border="1px solid red"></Box>
      <Box
        w="100%"
        p={5}
        gap={10}
        display={"grid"}
        gridTemplateColumns="repeat(4, 1fr)"
      >
        {data?.map((ele) => (
          <AdminProduct
            data={ele}
            newText={newText}
            setNewText={setNewText}
            editProduct={editProduct}
            deleteProduct={deleteProduct}
          />
        ))}
      </Box>
    </>
  );
};

export default Admin;
