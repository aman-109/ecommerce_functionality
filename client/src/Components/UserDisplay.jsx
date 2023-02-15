import { Td, Tr } from "@chakra-ui/react";
import React from "react";

const UserDisplay = ({ ele }) => {
  return (
    <>
      {ele.purchased_product?.map((el) => (
        <Tr key={ele._id}>
          <Td>{ele.email}</Td>
          <Td>{el.product_id.name}</Td>
          <Td> ₹ {el.product_id.price}</Td>
        </Tr>
      ))}
    </>
  );
};

export default UserDisplay;
