import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!state.email || !state.password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      let body = {
        email: state.email,
        password: state.password,
      };

      const { data } = await axios.post(
        "https://ecommerceproject-ln4v.onrender.com/user/login",
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
          title: "Login Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-left",
        });
        localStorage.setItem("token",JSON.stringify(data.token))
        var decoded = jwt_decode(data.token);
        if (decoded.role !== "admin") {
          navigate("/");
        } else {
          navigate("/admin");
        }
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "Invalid Credentials!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      setTimeout(() => {
        toast({
          title: "Enter Details Again!",
          description: error.response.data.message,
          status: "info",
          duration: 5000,
          isClosable: true,
          position: "top-left",
        });
      }, 3000);
      setLoading(false);
    }
  };

  return (
    <>
      <VStack spacing="5px">
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            placeholder="Enter Email"
            onChange={hanldeChange}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="Enter Password"
            onChange={hanldeChange}
          />
        </FormControl>

        <Button
          colorScheme="blue"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={handleSubmit}
        >
          {loading === true ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="md"
            />
          ) : (
            "Login"
          )}
        </Button>
      </VStack>
    </>
  );
};

export default Login;
