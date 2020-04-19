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
              name: 'almacen',
              type: 'product',
              handle: 'almacen',
              textColor: 'black',
              textBgColor: 'white',
            },
            {
              name: 'mercadopago',
              type: 'product',
              handle: 'mercadopago',
              textColor: 'black',
              textBgColor: 'primary',
            },
            {
              name: 'drinksgaseosas',
              type: 'collection',
              handle: 'drinksgaseosas',
              textColor: 'black',
              textBgColor: 'primary',
              link: '/collection/drinksgaseosas',
            },
          ],
        },
        {
          name: 'variedadgalletitas',
          type: 'collection',
          handle: 'variedadgalletitas',
          textColor: 'white',
          textBgColor: 'primary',
        },
        {
          name: 'lacteos',
          type: 'collection',
          handle: 'lacteos',
          textColor: 'black',
          textBgColor: 'white',
        },
        {
          name: 'fiambre',
          type: 'collection',
          handle: 'fiambre',
          textColor: 'white',
          textBgColor: 'primary',
        },
        {
          name: 'limpiezaart',
          type: 'collection',
          handle: 'limpiezaart',
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
              {
                name: 'lacteos',
                type: 'collection',
                handle: 'lacteos',
                link: '/collection/lacteos',
              },
              
            ],
          },
          {
            name: "Fiambrería",
            type: 'collection',
            handle: 'fiambre',
            link: '/collection/fiambre', 
          },
          {
            name: "Bebidas",
            type: 'header',
            handle: '',
            children: [
              {
                name: 'Bebidas Con Alcohol',
                type: 'collection',
                handle: 'vinos  ',
                link: '/collection/vinos',
              },
              {
                name: 'Bebidas Sin Alcohol',
                type: 'collection',
                handle: 'drinksgaseosas',
                link: '/collection/drinksgaseosas',
              },
            ],
          },
          {
            name: "Limpieza",
            type: 'collection',
            handle: 'limpiezaart',
            link: '/collection/limpiezaart',
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
