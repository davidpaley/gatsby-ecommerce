import React from 'react';
import { useEffect } from 'react';
import Helmet from 'react-helmet';
import { Flex, Box, Text, Image } from 'rebass';
import GatsbyLink from 'gatsby-link';
import Layout from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/components/Layout';

function Thanks() {
  useEffect(() => {
    localStorage.removeItem('shopifyCheckout');
  }, []);

  return (
    <Layout>
      <Helmet title="Gracias!" defer={false} />
      <Flex mt={6} px={[3, null, 4]} justifyContent="center">
        <Box>
          <Text
            as="h1"
            fontSize={4}
            fontFamily="sans"
            color="primary"
            textAlign="center"
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
          <Flex mt={4} mb={4} justifyContent="center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/1200px-Check_green_icon.svg.png"
              sx={{
                width: ['20%', '20%'],
              }}
            />
          </Flex>
          <Text
            as="h2"
            fontSize={3}
            fontFamily="sans"
            color="primary"
            textAlign="center"
            py={4}
            pb={2}
          >
            Tu pedido está confirmado ✔
          </Text>
          <Text
            as="p"
            fontFamily="sans"
            py={3}
            color="primary"
            lineHeight={1}
            fontSize={3}
            textAlign="center"
          >
            Hemos aceptado tu pedido y estamos preparándolo. 👏
          </Text>
          <Text
            as="p"
            fontFamily="sans"
            py={3}
            color="primary"
            lineHeight={1}
            fontSize={3}
            textAlign="center"
          >
            Recibirás actualizaciones del envío y entrega de tu pedido por
            correo electrónico o celular.
          </Text>
          <Text
            as="p"
            fontFamily="sans"
            py={3}
            color="primary"
            lineHeight={1}
            textAlign="center"
          >
            Si quieres seguir comprando:{' '}
            <Text as={GatsbyLink} to="/">
              Click Aqui! 👈
            </Text>
          </Text>
        </Box>
      </Flex>
    </Layout>
  );
}

export default Thanks;
