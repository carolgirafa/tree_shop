import { GetServerSideProps } from "next";
import Link from "next/link";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";
import Head from "next/head";

interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  }
}

export default function Success({ customerName, product }: SuccessProps) {
  return (
    <>
      <Head>  
        <title>Purchase completed | tree shop</title>

        <meta name="robots" content="noindex" />
      </Head>
    
      <SuccessContainer>
        <h1>Purchase completed!</h1>

        <ImageContainer>

        </ImageContainer>

        <p>Uhuuu <strong>CLiente</strong> voce comprou uhuu</p>

        <Link href="/">
          Back to shop
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query, params }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id);
  
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details?.name;
  const product = session.line_items?.data[0].price?.product as Stripe.Product;

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      }
    }
  }
}