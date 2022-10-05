import { Flex, Img, Box, Text } from '@chakra-ui/react'
import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,  Scrollbar, A11y } from 'swiper';
import NextLink from "next/link"



export default function Slider(){
    return (
        <Box w="100vw" maxWidth={"1240px"} maxHeight={"450px"} mt={[5, , , 10]} mb={8}>
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
              <SwiperSlide > 
                  <Flex alignItems={"center"} justifyContent={"center"} flexDir={"column"} className="swiper-button-white">
                  <NextLink href='/europe' passHref>                  
                    <Text color="#F5F8FA" position="absolute" alignSelf={"center"} justifySelf={"center"} fontWeight={"700"} fontSize={["2xl", , "5xl"]}> Europa </Text>
                  </NextLink>
                  <Text color="#F5F8FA" position="absolute" alignSelf={"center"} justifySelf={"center"} fontWeight={"700"} fontSize={["lg", , "3xl"]} mt={[16, 24, , 36]}> O continente mais antigo. </Text>
                  
                    
                    <Img src='..\..\europe.png' w="100vw" maxWidth={"1240px"} maxHeight={"450px"} />
                  </Flex>
              </SwiperSlide>

              <SwiperSlide> 
                  <Flex alignItems={"center"} justifyContent={"center"} flexDir={"column"}>
                    <Text color="#F5F8FA" position="absolute" alignSelf={"center"} justifySelf={"center"} fontWeight={"700"} fontSize={["2xl", , "5xl"]}> Asia </Text>
                    <Text color="#F5F8FA" position="absolute" alignSelf={"center"} justifySelf={"center"} fontWeight={"700"} fontSize={["lg", , "3xl"]} mt={[16, 24, , 36]}> Um novo mundo a explorar </Text>
                    <Img src='..\..\asia.jpg' w="100vw" maxWidth={"1240px"} maxHeight={"450px"} />
                  </Flex>
              </SwiperSlide>

              <SwiperSlide> 
                  <Flex alignItems={"center"} justifyContent={"center"} flexDir={"column"}>
                    <Text color="#F5F8FA" position="absolute" alignSelf={"center"} justifySelf={"center"} fontWeight={"700"} fontSize={["2xl", , "5xl"]}> Africa </Text>
                    <Text color="#F5F8FA" position="absolute" alignSelf={"center"} justifySelf={"center"} fontWeight={"700"} fontSize={["lg", , "3xl"]} mt={[16, 24, , 36]}> Riqueza natural sem igual </Text>
                    <Img src='..\..\africa.jpg' w="100vw" maxWidth={"1240px"} maxHeight={"450px"} />
                  </Flex>
              </SwiperSlide>
              
              <SwiperSlide> 
                  <Flex alignItems={"center"} justifyContent={"center"} flexDir={"column"}>
                    <Text color="#F5F8FA" position="absolute" alignSelf={"center"} justifySelf={"center"} fontWeight={"700"} fontSize={["2xl", , "5xl"]}> Oceania </Text>
                    <Text color="#F5F8FA" position="absolute" alignSelf={"center"} justifySelf={"center"} fontWeight={"700"} fontSize={["lg", , "3xl"]} mt={[16, 24, , 36]}> O empolgante mundo do Surf e dos Cangurus! </Text>
                    <Img src='..\..\oceania.jpg' w="100vw" maxWidth={"1240px"} maxHeight={"450px"} />
                  </Flex>
              </SwiperSlide>

              <SwiperSlide> 
                  <Flex alignItems={"center"} justifyContent={"center"} flexDir={"column"}>
                    <Text color="#F5F8FA" position="absolute" alignSelf={"center"} justifySelf={"center"} fontWeight={"700"} fontSize={["2xl", , "5xl"]}> America </Text>
                    <Text color="#F5F8FA" position="absolute" alignSelf={"center"} justifySelf={"center"} fontWeight={"700"} fontSize={["lg", , "3xl"]} mt={[16, 24, , 36]}> A fascinante e animada cultura latino americana </Text>
                    <Img src='..\..\america.jpg' w="100vw" maxWidth={"1240px"} maxHeight={"450px"} />
                  </Flex>
              </SwiperSlide>
             
              
          </Swiper>
       </Box> 
    )
}