require('dotenv').config({ path: `.env` });
const flattenMenu = require('@gatsbystorefront/gatsby-theme-storefront-shopify/src/utils/flattenMenu');

module.exports = {
  plugins: [
    {
      resolve: '@gatsbystorefront/gatsby-theme-storefront-shopify',
      options: {
        shopName: process.env.GATSBY_SHOP_NAME,
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        basePath: '/',
        shopifyLite: true,
        enableWebp: true,
        imageQuality: '95',
      },
    },
  ],
  siteMetadata: {
    siteUrl: 'https://demo.gatsbystorefront.com',
    gatsbyStorefrontConfig: {
      storeName: 'Almacen COCO',
      storeDescription: 'Demo store description',
      email: '',
      company: 'Almacen COCO',
      location: 'Ciudad Autónoma de Buenos Aires, CABA, Argentina',
      address: 'Gándara 3035.',
      phone: '45230921',
      workingDays: 'Lun - Sab',
      workingHours: '8AM - 13AM / 17PM - 21PM',
      socialNetworks: [
      ],
      payments: ['Mercado Pago', 'Efectivo'],
      // For available social share buttons see: https://github.com/nygardk/react-share
      shareButtons: [
      ],
      googleAnalyticsId: 'UA-141525658-5',
      //
      // carousel, collection, product
      //
      mainPage: [
        {
          type: 'carousel',
          children: [
            {
              name: 'fotoalmacen',
              type: 'product',
              handle: 'fotoalmacen',
              textColor: 'black',
              textBgColor: 'white',
            },
            {
              name: 'limpiezaart',
              type: 'collection',
              handle: 'limpiezaart',
              textColor: 'black',
              textBgColor: 'primary',
              link: '/collection/limpieza',
            },
            {
              name: 'galletitas',
              type: 'collection',
              handle: 'galletitas',
              textColor: 'white',
              textBgColor: 'primary',
            },
          ],
        },
        {
          name: 'fotoalmacen',
          type: 'product',
          handle: 'fotoalmacen',
          textColor: 'white',
          textBgColor: 'primary',
        },

        {
          name: 'limpieza',
          type: 'collection',
          handle: 'limpiezaart',
          textColor: 'black',
          textBgColor: 'white',
          link: '/collection/limpieza',
        },

        {
          name: 'bebidasalcoholicas',
          type: 'collection',
          handle: 'bebidasalcoholicas',
          textColor: 'black',
          textBgColor: 'white',
        },
        {
          name: 'fiambreria',
          type: 'collection',
          handle: 'fiambreria',
          textColor: 'white',
          textBgColor: 'primary',
        },
        {
          name: 'galletitas',
          type: 'collection',
          handle: 'galletitas',
          textColor: 'white',
          textBgColor: 'primary',
        },
        {
          name: 'bebidassa',
          type: 'collection',
          handle: 'bebidassa',
          textColor: 'white',
          textBgColor: 'primary',
        },
      ],
      // Menu types: "header", "collection", "product", "link"
      menu: flattenMenu({
        name: 'Menu',
        type: 'top',
        children: [
          {
            name: "Almacen",
            type: 'header',
            handle: '',
            link: '/collection/almacen',
            children: [
              {
                name: 'Galletitas',
                type: 'collection',
                handle: 'galletitas',
                link: '/collection/galletitas',
              },
            ],
          },
          {
            name: "Fiambrería",
            type: 'header',
            handle: '',
            link: '/collection/fiambreria',
            children: [
              {
/*                 name: 'Fiambres',
                type: 'collection',
                handle: 'galletitas',
                link: '/collection/fiambreria', */
              },
            ],
          },
          {
            name: "Bebidas",
            type: 'header',
            handle: '',
            children: [
              {
                name: 'Bebidas Con Alcohol',
                type: 'collection',
                handle: 'bebidasca',
                link: '/collection/bebicas-alcoholicas',
              },
              {
                name: 'Bebidas Sin Alcohol',
                type: 'collection',
                handle: 'bebidas',
                link: '/collection/bebidas',
              },
            ],
          },
          {
            name: "Limpieza",
            type: 'header',
            link: '/collection/limpiezaart',
            children: [
              {
                name: 'Detegergente',
                type: 'collection',
                handle: 'limpieza',
                link: '/collection/limpieza',
              },
              {
                name: 'Garden',
                type: 'collection',
                handle: 'garden',
              },
              {
                name: 'Apparel',
                type: 'collection',
                handle: 'apparel',
              },
              {
                name: 'External links',
                type: 'header',
                children: [
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                ],
              },
            ],
          },
          //{ name: 'Blog', type: 'blog', handle: 'news' },
        ],
      }),
      footerLinks: [
        {
          name: 'About us',
          link: '/pages/about',
        },
        {
          name: 'Terms of Service',
          link: '/policy/termsOfService',
        },
        {
          name: 'Privacy policy',
          link: '/policy/privacyPolicy',
        },
        {
          name: 'Refunds',
          link: '/policy/refundPolicy',
        },
        {
          name: 'External',
          link: 'https://amazon.com',
        },
      ],
      locales: 'en-US',
      currency: 'USD',
      productsPerCollectionPage: '9',
      articlesPerBlogPage: '6',
    },
  },
};
