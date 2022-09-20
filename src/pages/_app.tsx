import { AppProps } from "next/app"
import { theme } from "../styles/theme";
import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'



function MyApp({ Component, pageProps } : AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
  

}

export default MyApp
