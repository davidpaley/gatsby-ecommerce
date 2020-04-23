/** @jsx jsx */
/*eslint no-unused-vars: 0*/
import React from 'react';
import GatsbyImage from 'gatsby-image';
import { Link as GatsbyLink } from 'gatsby';
import { jsx } from 'theme-ui';
import styled from '@emotion/styled/macro';
import { Flex, Box, Text, Heading } from 'rebass';

import substrDescription from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/utils/substrDescription';

const Image = styled(GatsbyImage)``;

const StyledBox = styled(Box)`
  & ${Image} {
    transition-property: all;
    transition-duration: 0.6s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
  }

  &:hover ${Image} {
    transform: scale(1.05);
    transition-property: all;
    transition-duration: 0.6s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
  }
`;

const MainPageCollectionBlock = (props) => {
  const {
    title,
    description,
    image,
    fields: { shopifyThemePath },
  } = props.collection;
  const { textColor = 'primary', textBgColor = 'white' } = props;
//   console.log({shopifyThemePath});
  return (
    <StyledBox sx={{ position: 'relative' }}>
      <GatsbyLink
        to={title === 'Mercado Pago' ? '/' : shopifyThemePath}
        sx={{
          color: textColor,
          textDecoration: 'none',
          ':hover,:focus,.active': {
            color: textColor,
            textDecoration: 'none',
          },
        }}
      >
        <Box sx={{ overflow: 'hidden' }}>
          {image ? (
            <Image fluid={image.localFile.childImageSharp.fluid} alt={title} />
          ) : (
            <Box pt="60%" />
          )}
        </Box>

        <Box
          sx={{
            position: ['absolute'],
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Flex
            sx={{
              flexDirection: ['column'],
              justifyContent: 'flex-end',
              alignItems: ['center', 'flex-start'],
              width: '100%',
              height: '100%',
            }}
          >
            <Box
              sx={{
                ml: [1, '5%'],
                my: ['auto', '5%'],
                backgroundColor: textBgColor,
                opacity: 0.8,
                px: ['3%', 0],
                py: ['2%', 0],
              }}
            >
              {' '}
              {title && (
                <Heading
                  as="h2"
                  fontSize={[30, 36, 42]}
                  textAlign={['center', 'left']}
                >
                  {title}
                </Heading>
              )}
              {description && (
                <Text fontSize={[1, 2, 3]} sx={{ display: ['none', 'block'] }}>
                  {substrDescription(description, 80)}
                </Text>
              )}
            </Box>
          </Flex>
        </Box>
      </GatsbyLink>
    </StyledBox>
  );
};

export default MainPageCollectionBlock;
