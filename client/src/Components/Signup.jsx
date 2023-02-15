import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Spinner,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  // const dispatch = useDispatch();

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
    if (!state.email || !state.password || !state.name || !state.gender) {
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
        name: state.name,
        email: state.email,
        password: state.password,
        gender: state.gender,
      };

      const { data } = await axios.post(
        "https://ecommerceproject-ln4v.onrender.com/user/signup",
        body,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (data.status) {
        toast({
          title: "Registration Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-left",
        });

        setTimeout(() => {
          toast({
            title: "Please proceed to login",
            status: "info",
            duration: 5000,
            isClosable: true,
            position: "top-left",
          });
        }, 2000);
      }
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      setLoading(false);
    }
  };

  return (
    <>
      <VStack spacing="5px">
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            type="text"
            placeholder="Enter Name"
            onChange={hanldeChange}
          />
        </FormControl>
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
        <FormControl id="gender" isRequired>
          <FormLabel>Gender</FormLabel>
          <Select name="gender" onChange={hanldeChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
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
            "Signup"
          )}
        </Button>
      </VStack>
    </>
  );
};

export default Signup;
