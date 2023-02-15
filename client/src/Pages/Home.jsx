import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import ProductCard from '../Components/ProductCard'
import axios from 'axios'
import { Box, useToast } from '@chakra-ui/react'
async function getProducts(){
    let res= await axios("http://localhost:8179/products", {
        withCredentials: true,
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
    }})

    return res
}


const Home = () => {
    const [data,setData]=useState([])
    const toast=useToast()

    useEffect(()=>{
        getProducts().then(res=>setData(res.data))
    },[])

    const addToCart= async(id)=>{
        
        try {
           let {data}=await axios(`http://localhost:8179/products/add-product/${id}`,{
            withCredentials: true,
            headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
        }})
        if (data.status) {
            toast({
              title: data.message,
              status: "success",
              duration: 5000,
              isClosable: true,
              position: "top-right",
            });
        }
            
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <>
    <Navbar/>
    <Box  w="50%" m="auto" mb={"70px"} border="1px solid red"></Box>
    <Box  w="100%" p={5} gap={10} display={"grid"} gridTemplateColumns="repeat(4, 1fr)">

    {
        data?.map((ele)=>(

            <ProductCard data={ele} addToCart={addToCart}/>
        ))
    }
    </Box>

    </>
  )
}

export default Home