import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import UserDisplay from "./UserDisplay";

const UserDetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://ecommerceproject-ln4v.onrender.com/admin/dashboard", {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }).then((res) => setData(res.data));
  }, []);
  return (
    <>
      <AdminNavbar />
      <Box w="50%" m="auto" mb={"70px"} border="1px solid red"></Box>

      <TableContainer w="80%" m="auto" mt="10px" bg="white">
        <Table size="md">
          <Thead>
            <Tr>
              <Th>User</Th>
              <Th>Product Name</Th>
              <Th>Product Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((ele) =>
              ele.role === "user" ? (
                <>
                  <UserDisplay ele={ele} />
                </>
              ) : (
                <></>
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserDetails;
