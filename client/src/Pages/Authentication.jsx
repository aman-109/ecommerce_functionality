import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import Login from '../Components/Login'
import Signup from '../Components/Signup'

const Authentication = () => {
  return (
    <>
    <Container pt={20} maxW="xl" textAlign="center" centerContent>
     <Box bg="white" w="100%" p={4} color="black" borderRadius="lg" borderWidth="1px">
        <Tabs variant="enclosed">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {/* login */}
              <Login/>
            </TabPanel>
            <TabPanel>
             {/* signup */}
             <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      </Container>
    </>
  )
}

export default Authentication