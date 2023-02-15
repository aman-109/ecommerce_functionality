import {
    Badge,
    Box,
    Circle,
    chakra,
    Flex,
    Icon,
    Image,
    Tooltip,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { RiDeleteBin6Line } from "react-icons/ri";
  import { FaRegEdit } from "react-icons/fa";
import EditProduct from "./EditProduct";
  
  function AdminProduct({ data ,editProduct,deleteProduct,newText, setNewText}) {
    
    return (
      <Box w="100%">
        <Box
          bg={useColorModeValue("white", "gray.800")}
          w="100%"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Image
            w="100%"
            h="300px"
            src={data.image}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
          />
  
          <Box p="4" lineHeight={8}>
            <Box textAlign={"start"}>
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                {data.type}
              </Badge>
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="lg"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {data.name}
              </Box>
                <EditProduct newText={newText} setNewText={setNewText} prodId={data._id} editProduct={editProduct}/>
                <chakra.a href={"#"} display={"flex"} >
                  <Icon color="red" as={RiDeleteBin6Line} h={7} w={7} alignSelf={"center"} onClick={()=>deleteProduct(data._id)}/>
                </chakra.a>
              
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize="lg" color={useColorModeValue("gray.800", "white")}>
                <Box as="span" color={"gray.600"} fontSize="lg">
                  ₹
                </Box>
                {data.price}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    );
  }
  
  export default AdminProduct;
  