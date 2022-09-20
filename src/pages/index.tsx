import { Flex, Img, Box, Text } from '@chakra-ui/react'


export default function Home() {
  return (
   
    <Flex w="100vw" justify={"center"} alignItems={"center"} flexDir="column"> 
      <Box>
        <Img src='..\..\logo.png' alt='Logo' m={4} w={100} />
      </Box> 

      

      <Box w="100vw" h="150px" backgroundImage="url('..\..\logo.png')" bg={"lightblue"}>
        <Text >5 Continentes,infinitas possibilidades.</Text>
        <Text>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
      
      </Box>
    </Flex>       
    
    )
}
