import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/logoImg.png'
import { Container, Header } from '../styles/pages/app';

import Image from 'next/image';

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <Container>
      <Header>
        <Image src={logoImg} width={200} height={200} alt="" />
        <h1>tree shop</h1>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}