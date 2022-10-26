import type { AppProps } from 'next/app'
import Script from 'next/script'
import Layout from 'src/components/common/Layout'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from 'src/styles/global/globalStyle'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import theme from 'src/styles/global/theme'
import paths from 'src/constants/paths'

import '../styles/global/globals.css'
import { NextRouter, useRouter } from 'next/router'

const styledTheme: DefaultTheme = {
  colors: {},
}

export default function AppPage({ Component, pageProps }: AppProps) {
  const router: NextRouter = useRouter()
  const path: string = router?.pathname

  if (path !== '/') {
    router.push('/')
    return null
  }

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='keywords'
          content='Porfolio React Portfolio React and Typescript Website Frontend JavaScript mrLuisFer Luis Alvarez Github'
        />
        <meta name='author' content='mrLuisFer' />
      </Head>
      <ChakraProvider theme={theme}>
        <ThemeProvider theme={styledTheme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ChakraProvider>
      <Script src='https://kit.fontawesome.com/0b9946e474.js' crossOrigin='anonymous' />
    </>
  )
}
