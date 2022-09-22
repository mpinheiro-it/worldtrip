import { Flex, Img, Box, Text, Divider  } from '@chakra-ui/react'
import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,  Scrollbar, A11y } from 'swiper';


export default function Home() {
  return (
   
  //Top Logo and flex that involves all items
    <Flex w="100vw" justify={"center"} alignItems={"center"} flexDir="column"> 
      <Box>
        <Img src='..\..\logo.png' alt='Logo' m={4} w={100} />
      </Box> 

      
  
      <Box w="100vw" h="40" background={"url('../../background.png')"}>
        <Text 
          mt={4}
          ml={5}
          color="#F5F8FA" 
          fontSize={"2xl"}
          fontWeight={"500"}
          >
            5 Continentes, <br/>
         infinitas possibilidades.
        </Text>
        
        <Text 
          color="#DADADA"
          mt={1} 
          ml={5}
          fontWeight={"400"} >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>      
      </Box>

      

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


      <Box w="100vw" h="400px" mt={5} >
          <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              navigation 
              pagination  
              className="mySwiper"
              slidesPerView={1}      
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              
              
            >
              <SwiperSlide> Europa <Img src='..\..\europe.png' w="100vw" /> </SwiperSlide>
              <SwiperSlide> <Img src='..\..\asia.jpg' w="100vw" /> </SwiperSlide>
              <SwiperSlide> <Img src='..\..\africa.jpg' w="100vw" /> </SwiperSlide>
              <SwiperSlide> <Img src='..\..\oceania.jpg' w="100vw" /> </SwiperSlide>
              <SwiperSlide> <Img src='..\..\america.jpg' w="100vw" /> </SwiperSlide>
              
          </Swiper>
       </Box> 
    </Flex>       
    
    )
}