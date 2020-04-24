import React from 'react';
import { useEffect } from 'react';
import Helmet from 'react-helmet';
import { Flex, Box, Text } from 'rebass';
import GatsbyLink from 'gatsby-link';
import Layout from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/components/Layout';

function Thanks() {
  useEffect(() => {     
    localStorage.removeItem('shopifyCheckout');
  },[]);

  return (
    <Layout>
      <Helmet title="Thanks You!" defer={false} />
      <Flex mt={6} px={[3, null, 4]} justifyContent="center">
        <Box>
          <Text
            as="h1"
            fontSize={4}
            fontFamily="sans"
            color="primary"
            lineHeight={1}
          >
            <span role="img" aria-label="smile">
              😃
            </span>{' '}
            Muchas Gracias por elegir al almacén de coco
            <span role="img" aria-label="smile">
              🛒
            </span>{' '}
          </Text>

          <Text as="p" fontFamily="sans" py={3} color="primary" lineHeight={1}>
            Quieres volver a visitar nuestra pagina,{' '}
            <Text as={GatsbyLink} to="/">
              Click Aqui!
            </Text>
            ?
          </Text>
        </Box>
      </Flex>
    </Layout>
  );
}

export default Thanks;
