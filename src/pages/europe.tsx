import {Flex, Box, Img, Text, Heading, Image, VStack, Avatar} from '@chakra-ui/react' 

export default function europe() {
  const property = {
    imageUrl: 'https://www.globalactivestudy.com/wp-content/uploads/2018/05/london-848x548.jpg',
    imageAlt: 'London City in a rainy day - a red telephone cabine at front and the famous clock tower in the back',
    title: 'Londres',
    subtitle: 'Reino Unido',    
    countryLogo: 'https://w7.pngwing.com/pngs/837/247/png-transparent-flag-of-the-united-kingdom-flag-of-the-united-states-sms-higher-education-group-united-states-flag-london-united-states.png' 
  }

    return (
        
    <Flex w="100vw" justify={"center"} alignItems={"center"} flexDir="column"> 
      <Box>
        <Img src='..\..\logo.png' alt='Logo' m={4} w={100} />
      </Box> 

      <Flex w="100vw" h={[200 , 350]} background={"url('../../europe_page.jpg')"} backgroundSize={"100%"} backgroundRepeat={"no-repeat"}  alignItems={["center", "left"]} justifyContent={["center", "left"]}>
          <Text           
            color="#F5F8FA" 
            fontSize={"3xl"}
            fontWeight={"600"} 
            mt= {["auto", 250]} 
            ml= {["auto", 35]}           
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

      <Flex w="100vw" justifyContent="space-around">
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
      </Flex>
        
      <Flex w="100vw" justify={"center"} flexDir="column">
        <Heading ml={6} my={8} as='h3' size='2xl' fontWeight="500" color="#47585B" >Cidades +100</Heading>

      </Flex>

      <VStack spacing={4}>

          <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={property.imageUrl} alt={property.imageAlt} />

            <Flex p='6' justifyContent={"space-between"}>     

              <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'                     
              >
                <Text color="#47585B" fontSize={"2xl"} fontWeight="600" mb={4} > {property.title} </Text>
                <Text color="#999999" fontSize={"2xl"} fontWeight="500" > {property.subtitle} </Text>
              </Box>

              <Avatar alignSelf={"center"} name={property.title} src="https://w7.pngwing.com/pngs/837/247/png-transparent-flag-of-the-united-kingdom-flag-of-the-united-states-sms-higher-education-group-united-states-flag-london-united-states.png"  />
            
            </Flex>
          </Box>

          <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={property.imageUrl} alt={property.imageAlt} />

            <Flex p='6' justifyContent={"space-between"}>     

              <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'                     
              >
                <Text color="#47585B" fontSize={"2xl"} fontWeight="600" mb={4} > {property.title} </Text>
                <Text color="#999999" fontSize={"2xl"} fontWeight="500" > {property.subtitle} </Text>
              </Box>

              <Avatar alignSelf={"center"} name={property.title} src="https://w7.pngwing.com/pngs/837/247/png-transparent-flag-of-the-united-kingdom-flag-of-the-united-states-sms-higher-education-group-united-states-flag-london-united-states.png"  />
            
            </Flex>
          </Box>

                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image src={property.imageUrl} alt={property.imageAlt} />

                <Flex p='6' justifyContent={"space-between"}>     
          
                  <Box
                      mt='1'
                      fontWeight='semibold'
                      as='h4'
                      lineHeight='tight'                     
                    >
                      <Text color="#47585B" fontSize={"2xl"} fontWeight="600" mb={4} > {property.title} </Text>
                      <Text color="#999999" fontSize={"2xl"} fontWeight="500" > {property.subtitle} </Text>
                    </Box>

                    <Avatar alignSelf={"center"} name={property.title} src="https://w7.pngwing.com/pngs/837/247/png-transparent-flag-of-the-united-kingdom-flag-of-the-united-states-sms-higher-education-group-united-states-flag-london-united-states.png"  />
                  
                  </Flex>
                </Box>

                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                  <Image src={property.imageUrl} alt={property.imageAlt} />

                  <Flex p='6' justifyContent={"space-between"}>     

                    <Box
                      mt='1'
                      fontWeight='semibold'
                      as='h4'
                      lineHeight='tight'                     
                    >
                      <Text color="#47585B" fontSize={"2xl"} fontWeight="600" mb={4} > {property.title} </Text>
                      <Text color="#999999" fontSize={"2xl"} fontWeight="500" > {property.subtitle} </Text>
                    </Box>

                    <Avatar alignSelf={"center"} name={property.title} src="https://w7.pngwing.com/pngs/837/247/png-transparent-flag-of-the-united-kingdom-flag-of-the-united-states-sms-higher-education-group-united-states-flag-london-united-states.png"  />
                  
                  </Flex>
                </Box>

                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                  <Image src={property.imageUrl} alt={property.imageAlt} />

                  <Flex p='6' justifyContent={"space-between"}>     

                    <Box
                      mt='1'
                      fontWeight='semibold'
                      as='h4'
                      lineHeight='tight'                     
                    >
                      <Text color="#47585B" fontSize={"2xl"} fontWeight="600" mb={4} > {property.title} </Text>
                      <Text color="#999999" fontSize={"2xl"} fontWeight="500" > {property.subtitle} </Text>
                    </Box>

                    <Avatar alignSelf={"center"} name={property.title} src="https://w7.pngwing.com/pngs/837/247/png-transparent-flag-of-the-united-kingdom-flag-of-the-united-states-sms-higher-education-group-united-states-flag-london-united-states.png"  />
                  
                  </Flex>
                </Box>  

          

      </VStack>

      
    
    </Flex>
    )

}