import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Image,
    useToast,
  } from "@chakra-ui/react";
  import axios from "axios";
  import React from "react";
  import { useState } from "react";
  import AdminNavbar from "./AdminNavbar";
  
  const AdminAddProduct = () => {
    const [temp, setTemp]=useState({})
    const [state, setState] = useState({
      type: "",
      name: "",
      image: "",
      desc: "",
      price: "",
    });
  const toast=useToast()
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setState({
        ...state,
        [name]: value,
      });
    };
  
    const handleSubmit = async(e) =>{
      e.preventDefault()
      let data= await axios.post('http://localhost:8179/admin/create-service',state,{
          withCredentials: true,
          headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
      }})
      if(data.status != 200 && data.data.status=== false){
        toast({
            title: data.data.message,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top-right",
            
          })
          
      }
      else{
        toast({
            title: data.data.message,
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top-right",
            
          })
          
          setTemp(data.data.new)
      }
  }
  
    return (
      <Box>
        <AdminNavbar />
        <Flex
        mt={"70px"}
          minH={"100vh"}
          align={"center"}
          justify={"space-around"}
        >
          <Stack spacing={8} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} textAlign={"center"}>
                Create Product
              </Heading>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <HStack>
                    <Box>
                      <FormControl id="Name" isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input
                          type="text"
                          autoComplete='off'
                          onChange={handleChange}
                          name="name"
                          value={state.name}
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="type" isRequired>
                        <FormLabel>Type</FormLabel>
                        <Input
                          type="text"
                          autoComplete='off'
                          onChange={handleChange}
                          name="type"
                          value={state.type}
                        />
                      </FormControl>
                    </Box>
                  </HStack>
                  <FormControl id="image" isRequired>
                    <FormLabel>Service Logo Url</FormLabel>
                    <Input
                      type="text"
                      autoComplete='off'
                      onChange={handleChange}
                      name="image"
                      value={state.image}
                    />
                  </FormControl>
                 
                  <FormControl id="desc" isRequired>
                    <FormLabel>Description</FormLabel>
  
                    <Input
                      type="text"
                      autoComplete='off'
                      onChange={handleChange}
                      name="desc"
                      value={state.desc}
                    />
                  </FormControl>
                  <FormControl id="price" isRequired>
                    <FormLabel>Price</FormLabel>
  
                    <Input
                      type="number"
                      autoComplete='off'
                      onChange={handleChange}
                      name="price"
                      value={state.price}
                    />
                  </FormControl>
                  
                  <Stack spacing={10} pt={2}>
                    <Button
                      
                      size="lg"
                      bg={"blue.400"}
                      color={"white"}
                      type="submit"
                    >
                      Add Product
                    </Button>
                  </Stack>
                </Stack>
              </form>
            </Box>
          </Stack>
  
          {/* new added service */}
  
         {temp !== null && (<Box
              role={"group"}
              p={6}
              maxW={"330px"}
              w={"full"}
              boxShadow={"2xl"}
              rounded={"lg"}
              bg="gray.100"
            >
              <Box rounded={"lg"}>
                <Image
                  rounded={"lg"}
                  width={"100%"}
                  objectFit={"cover"}
                  src={temp.image}
                />
              </Box>
              <Stack pt={10} align={"center"}>
                <Text
                  color={"gray.500"}
                  fontSize={"xl"}
                  textTransform={"uppercase"}
                >
                  {temp.name}
                </Text>
                <Heading fontSize={"lg"} fontFamily={"body"} fontWeight={500}>
                  {temp.installs}
                </Heading>
                <Stack align={"center"}>
                  <Text fontWeight={800} fontSize={"md"}>
                    {temp.type}
                  </Text>
                  <Text color={"gray.600"}>{temp.rating} </Text>
                </Stack>
              </Stack>
            </Box>)}
        </Flex>
      </Box>
    );
  };
  
  export default AdminAddProduct;
  