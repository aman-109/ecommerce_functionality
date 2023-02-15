import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
  chakra,
  Icon
} from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";

const EditProduct = ({ newText, setNewText,prodId, editProduct }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hanldeChange=(e)=>{
    let {value,name}=e.target
    setNewText({
      ...newText,
      [name]:value
    })
  }
  return (
    <>
      <chakra.a href={"#"} display={"flex"} >
                  <Icon color="blue.600" as={FaRegEdit} h={7} w={7} alignSelf={"center"} onClick={onOpen}/>
                </chakra.a>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                editProduct(prodId);
                setNewText({
                  name:"",
                  price:"",
                  image:""
                });
                onClose();
              }}
            >
                 <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              type="text"
              value={newText.name}

              placeholder="Enter New Name"
              onChange={hanldeChange}
            />
          </FormControl>
                 <FormControl id="price" isRequired>
            <FormLabel>Price</FormLabel>
            <Input
              name="price"
              type="number"
              value={newText.price}

              placeholder="Enter New Price"
              onChange={hanldeChange}
            />
          </FormControl>
                 <FormControl id="image" isRequired>
            <FormLabel>Image URL</FormLabel>
            <Input
              name="image"
              type="text"
              value={newText.image}

              placeholder="Enter New Image Url"
              onChange={hanldeChange}
            />
          </FormControl>
              
              <Button type="submit">Edit</Button>

       
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditProduct;
