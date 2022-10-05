import { Flex, Img, Box, Text, Divider, useBreakpointValue, HStack  } from '@chakra-ui/react'
import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,  Scrollbar, A11y } from 'swiper';
import NextLink from "next/link"
import Slider from './slider';


export default function Home() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
})


  return (       
  
    <Flex w="100vw" justify={"center"} alignItems={"center"} flexDir="column"> 
      <Box>
        <Img src='..\..\logo.png' alt='Logo' m={4} w={[100, , , 160]} />
      </Box> 

      
  
      <Flex w="100vw" h={["40", , , "335px"]} background={"url('../../background.png')"} backgroundSize={"100%"} backgroundRepeat={"no-repeat"} alignItems={"center"} justifyContent={"center"}>
        <Flex flexDirection={"row"}>
          <Box>
            <Text 
                mt={[4, , , 16]}
                ml={[5, , , 36]}
                color="#F5F8FA" 
                fontSize={["2xl", , ,"4xl"]}
                fontWeight={"500"}
                >
                  5 Continentes, <br/>
              infinitas possibilidades.
              </Text>
              
              <Text 
                color="#DADADA"
                mt={1} 
                ml={[5, , , 36]}
                w={["auto", ,  "40%"]}
                fontWeight={"400"} 
                fontSize={["md", , ,"2xl"]}>
                  Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>  
          </Box>            

          {isWideVersion && <Img src="..\..\airplane.png" mt={20}  />}
        </Flex>
      </Flex>

      


      {!isWideVersion &&
        <Box w={"80vw"}mt={10} color={"#47585B"} fontSize={"2xl"} fontWeight={"500"}>
          
        <Flex alignItems={"center"} mb={6}>
          <Img src='..\..\ellipse.png' w={2} h={2} mr={3} /><Text mr={20}>vida noturna </Text>
          <Img src='..\..\ellipse.png' w={2} h={2} mr={3} /><Text>praia</Text>
        </Flex>

        <Flex alignItems={"center"} mb={6}>
          <Img src='..\..\ellipse.png' w={2} h={2} mr={3} /><Text mr={20}>moderno </Text>
          <Img src='..\..\ellipse.png' w={2} h={2} mr={3} /><Text>clássico</Text>
        </Flex>
        
      <Flex alignItems={"center"} justifyContent={"center"} mb={8}>
        <Img src='..\..\ellipse.png' w={2} h={2} mr={3} /><Text>e mais...</Text>
      </Flex>

        <Flex alignItems={"center"} justifyContent={"center"} flexDir={"column"}>
          <Divider borderWidth={"1px"} borderStyle={"solid"} borderColor={"black"} w={20} mb={8}  />          
          <Text>Vamos nessa? </Text>
          <Text>Então escolha seu continente </Text>
        </Flex>      
      </Box>
    }

    {isWideVersion &&
            <Box w={"80vw"}mt={10} color={"#47585B"} fontSize={"2xl"} fontWeight={"500"}>
              
            <HStack spacing={40} my={20} alignContent={"center"} justifyContent={"center"}>

              <Flex alignItems={"center"} flexDirection={"column"}>
                <Img src='..\..\cocktail.png' />
                <Text>vida noturna </Text>                
              </Flex>

              <Flex alignItems={"center"} flexDirection={"column"}>
                <Img src='..\..\surf.png' />
                <Text>praia</Text>    
              </Flex>

              <Flex alignItems={"center"} flexDirection={"column"}>
                <Img src='..\..\building.png' />
                <Text>moderno</Text>                
              </Flex>

              <Flex alignItems={"center"} flexDirection={"column"}>
                <Img src='..\..\museum.png' />
                <Text>clássico</Text>    
              </Flex>

              <Flex alignItems={"center"} flexDirection={"column"}>
                <Img src='..\..\earth.png' />
                <Text>e mais...</Text>    
              </Flex>


            </HStack>

            <Flex alignItems={"center"} justifyContent={"center"} flexDir={"column"}>
              <Divider borderWidth={["1px", , "2px"]} borderStyle={"solid"} borderColor={"black"} w={20} mb={8}  />          
              <Text fontSize={[16, , 34]}>Vamos nessa? </Text>
              <Text fontSize={[16, , 34]}>Então escolha seu continente </Text>
            </Flex>      
          </Box>
        }

      <Slider />
      

      
    </Flex>       
    
    )
}