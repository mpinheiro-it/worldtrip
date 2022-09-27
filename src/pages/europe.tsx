import {Flex, Box, Img, Text} from '@chakra-ui/react' 

export default function europe() {
    return(
        //Top Logo and flex that involves all items
    <Flex w="100vw" justify={"center"} alignItems={"center"} flexDir="column"> 
    <Box>
      <Img src='..\..\logo.png' alt='Logo' m={4} w={100} />
    </Box> 

    <Flex w="100vw" h="36" background={"url('../../europe_page.png')"} alignItems="center" justifyContent="center">
        <Text           
          color="#F5F8FA" 
          fontSize={"3xl"}
          fontWeight={"600"}
          >
            Europa
        </Text>        
      </Flex>

    <Flex w="100vw" justify={"center"} alignItems={"center"} alignContent="center">
        <Text color="#47585B" fontWeight="400" fontSize="xl" textAlign="justify" mx={4} my={6}>
        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, 
        a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio,
        o Cáucaso, e o mar Negro a sudeste
      </Text>
    </Flex>
      

    </Flex>
    )
}