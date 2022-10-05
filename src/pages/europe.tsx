import {Flex, Box, Img, Text, Heading, Image, VStack, Avatar, useBreakpointValue, HStack} from '@chakra-ui/react' 
import { property } from './cities'

export default function europe() {
  
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
})

    return (
        
    <Flex w="100vw" justify={"center"} alignItems={"center"} flexDir="column"> 
      <Box>
        <Img src='..\..\logo.png' alt='Logo' m={4} w={[100, , , 160]} />
      </Box> 

      <Flex w={"100vw"} minHeight={["150px", "200px", "300px", "500px"]} background={"url('../../europe_page.png')"} backgroundSize={"100%"} backgroundRepeat={"no-repeat"}  alignItems={["center",,, "left"]} justifyContent={["center",,, "left"]}>
          <Text           
            color="#F5F8FA" 
            fontSize={["3xl", "5xl"]}
            fontWeight={"600"} 
            mt= {[,,, 120, 320]} 
            ml= {[,,, 20, 32]}                    
            >
              Europa
          </Text>        
        </Flex>

      {!isWideVersion && 
      // MOBILE VERSION
        <><Flex w="100vw" justify={"center"} alignItems={"center"} alignContent="center">
            <Text color="#47585B" fontWeight="400" fontSize={["lg", "2xl"]} textAlign="justify" mx={4} my={6}>
              A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia,
              a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio,
              o Cáucaso, e o mar Negro a sudeste
            </Text>
          </Flex><Flex w="100vw" justifyContent="space-around">
              <Box>
                <Text color="#FFBA08" fontWeight="600" fontSize="3xl" mb={-2}>50</Text>
                <Text color="#47585B" fontWeight="400" fontSize="2xl">países</Text>
              </Box>
              <Box>
                <Text color="#FFBA08" fontWeight="600" fontSize="3xl" mb={-2}>60</Text>
                <Text color="#47585B" fontWeight="400" fontSize="2xl">línguas</Text>
              </Box>
              <Box>
                <Text color="#FFBA08" fontWeight="600" fontSize="3xl" mb={-2}>24</Text>
                <Text color="#47585B" fontWeight="400" fontSize="2xl">cidades +100</Text>
              </Box>
            </Flex></>
      }

      {isWideVersion && 
      // LAPTOP VERSION
            <Flex w={"100vw"} my={16} >
                <Flex ml={32} w="45vw" justify={"Left"} alignItems={"center"} alignContent="center">
                  <Text color="#47585B" fontWeight="400" fontSize={["lg", "2xl"]} textAlign="justify" mx={4} my={6}>
                    A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia,
                    a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio,
                    o Cáucaso, e o mar Negro a sudeste
                  </Text>
                </Flex>
                
                <HStack spacing={20} ml={20}>
                    <Box>
                      <Text align={"center"} color="#FFBA08" fontWeight="600" fontSize="5xl" mb={-2}>50</Text>
                      <Text color="#47585B" fontWeight="500" fontSize="2xl">países</Text>
                    </Box>
                    <Box>
                      <Text align={"center"} color="#FFBA08" fontWeight="600" fontSize="5xl" mb={-2}>60</Text>
                      <Text color="#47585B" fontWeight="500" fontSize="2xl">línguas</Text>
                    </Box>
                    <Box>
                      <Text align={"center"} color="#FFBA08" fontWeight="600" fontSize="5xl" mb={-2}>24</Text>
                      <Text color="#47585B" fontWeight="500" fontSize="2xl">cidades +100</Text>
                    </Box>
                  </HStack>
              </Flex>
          }

      
        
      <Flex w="100vw" justify={"center"} flexDir="column">
        <Heading ml={[6,,,32]} my={8} as='h3' size={['xl',"2xl"]} fontWeight="500" color="#47585B" >Cidades +100</Heading>

      </Flex>


      {!isWideVersion &&
      
          <VStack spacing={4}>

            <Box className='London' maxW='80%' borderWidth='1px' borderRadius='lg' borderColor="#FFBA0880" overflow='hidden'>
              <Image src={property.london.imageUrl} alt={property.london.imageAlt} />

              <Flex p='6' justifyContent={"space-between"}>     

                <Box
                  mt='1'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'                     
                >
                  <Text color="#47585B" fontSize={"2xl"} fontWeight="600" mb={4} > {property.london.title} </Text>
                  <Text color="#999999" fontSize={"2xl"} fontWeight="500" > {property.london.subtitle} </Text>
                </Box>

                <Avatar alignSelf={"center"} name={property.london.title} src={property.london.countryLogo}  />
              
              </Flex>
            </Box>

            <Box className='Paris' maxW='80%' borderWidth='1px' borderRadius='lg' borderColor="#FFBA0880" overflow='hidden'>
              <Image src={property.paris.imageUrl} alt={property.paris.imageAlt} />

              <Flex p='6' justifyContent={"space-between"}>     

                <Box
                  mt='1'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'                     
                >
                  <Text color="#47585B" fontSize={"2xl"} fontWeight="600" mb={4} > {property.paris.title} </Text>
                  <Text color="#999999" fontSize={"2xl"} fontWeight="500" > {property.paris.subtitle} </Text>
                </Box>

                <Avatar alignSelf={"center"} name={property.paris.title} src={property.paris.countryLogo}  />
              
              </Flex>
            </Box>

            <Box className='Munich' maxW='80%' borderWidth='1px' borderRadius='lg' borderColor="#FFBA0880" overflow='hidden'>
                    <Image src={property.munich.imageUrl} alt={property.munich.imageAlt} />

                    <Flex p='6' justifyContent={"space-between"}>     
              
                      <Box
                          mt='1'
                          fontWeight='semibold'
                          as='h4'
                          lineHeight='tight'                     
                        >
                          <Text color="#47585B" fontSize={"2xl"} fontWeight="600" mb={4} > {property.munich.title} </Text>
                          <Text color="#999999" fontSize={"2xl"} fontWeight="500" > {property.munich.subtitle} </Text>
                        </Box>

                        <Avatar alignSelf={"center"} name={property.munich.title} src={property.munich.countryLogo}  />
                      </Flex>
            </Box>

            <Box className='Rome' maxW='80%' borderWidth='1px' borderRadius='lg' borderColor="#FFBA0880" overflow='hidden'>
                    <Image src={property.rome.imageUrl} alt={property.rome.imageAlt} />

                    <Flex p='6' justifyContent={"space-between"}>     

                      <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'                     
                      >
                        <Text color="#47585B" fontSize={"2xl"} fontWeight="600" mb={4} > {property.rome.title} </Text>
                        <Text color="#999999" fontSize={"2xl"} fontWeight="500" > {property.rome.subtitle} </Text>
                      </Box>

                      <Avatar alignSelf={"center"} name={property.rome.title} src={property.rome.countryLogo} /> 
                    </Flex>
            </Box>

            <Box className='Porto' maxW='80%' borderWidth='1px' borderRadius='lg' borderColor="#FFBA0880" overflow='hidden'>
                    <Image src={property.porto.imageUrl} alt={property.porto.imageAlt} />

                    <Flex p='6' justifyContent={"space-between"}>     

                      <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'                     
                      >
                        <Text color="#47585B" fontSize={"2xl"} fontWeight="600" mb={4} > {property.porto.title} </Text>
                        <Text color="#999999" fontSize={"2xl"} fontWeight="500" > {property.porto.subtitle} </Text>
                      </Box>

                      <Avatar alignSelf={"center"} name={property.porto.title} src={property.porto.countryLogo}  />
                    
                    </Flex>
            </Box>            

          </VStack>
      }

      {isWideVersion &&

        <>
          <HStack w={"100vw"} spacing={12} ml={64}>

            <Box className='London' w='18vw' borderWidth='1px' borderRadius='lg' borderColor="#FFBA0880" overflow='hidden'>
              <Image src={property.london.imageUrl} alt={property.london.imageAlt} />

              <Flex p='6' justifyContent={"space-between"}>

                <Box
                  mt='1'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                >
                  <Text color="#47585B" fontSize={"2xl"} fontWeight="600" mb={4}> {property.london.title} </Text>
                  <Text color="#999999" fontSize={"2xl"} fontWeight="500"> {property.london.subtitle} </Text>
                </Box>

                <Avatar alignSelf={"center"} name={property.london.title} src={property.london.countryLogo} />

              </Flex>
            </Box>

            <Box className='Paris' w='18vw' borderWidth='1px' borderRadius='lg' borderColor="#FFBA0880" overflow='hidden'>
              <Image src={property.paris.imageUrl} alt={property.paris.imageAlt} />

              <Flex p='6' justifyContent={"space-between"}>

                <Box
                  mt='1'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                >
                  <Text color="#47585B" fontSize={"2xl"} fontWeight="600" mb={4}> {property.paris.title} </Text>
                  <Text color="#999999" fontSize={"2xl"} fontWeight="500"> {property.paris.subtitle} </Text>
                </Box>

                <Avatar alignSelf={"center"} name={property.paris.title} src={property.paris.countryLogo} />

              </Flex>
            </Box>

            <Box className='Munich' w='18vw' borderWidth='1px' borderRadius='lg' borderColor="#FFBA0880" overflow='hidden'>
              <Image src={property.munich.imageUrl} alt={property.munich.imageAlt} />

              <Flex p='6' justifyContent={"space-between"}>

                <Box
                  mt='1'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                >
                  <Text color="#47585B" fontSize={"2xl"} fontWeight="600" mb={4}> {property.munich.title} </Text>
                  <Text color="#999999" fontSize={"2xl"} fontWeight="500"> {property.munich.subtitle} </Text>
                </Box>

                <Avatar alignSelf={"center"} name={property.munich.title} src={property.munich.countryLogo} />
              </Flex>
            </Box>

            <Box className='Rome' w='18vw' borderWidth='1px' borderRadius='lg' borderColor="#FFBA0880" overflow='hidden'>
              <Image src={property.rome.imageUrl} alt={property.rome.imageAlt} />

              <Flex p='6' justifyContent={"space-between"}>

                <Box
                  mt='1'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                >
                  <Text color="#47585B" fontSize={"2xl"} fontWeight="600" mb={4}> {property.rome.title} </Text>
                  <Text color="#999999" fontSize={"2xl"} fontWeight="500"> {property.rome.subtitle} </Text>
                </Box>

                <Avatar alignSelf={"center"} name={property.rome.title} src={property.rome.countryLogo} />
              </Flex>
            </Box>

          </HStack>

          <HStack w={"100vw"} spacing={12} ml={64} mt={8}>
              <Box className='Porto' w='18vw' borderWidth='1px' borderRadius='lg' borderColor="#FFBA0880" overflow='hidden'>
                <Image src={property.porto.imageUrl} alt={property.porto.imageAlt} />

                <Flex p='6' justifyContent={"space-between"}>

                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                  >
                    <Text color="#47585B" fontSize={"2xl"} fontWeight="600" mb={4}> {property.porto.title} </Text>
                    <Text color="#999999" fontSize={"2xl"} fontWeight="500"> {property.porto.subtitle} </Text>
                  </Box>

                  <Avatar alignSelf={"center"} name={property.porto.title} src={property.porto.countryLogo} />

                </Flex>
              </Box>
            </HStack>
      </>
           
      
      }
      
      
     

   
    
    </Flex>
    )

}