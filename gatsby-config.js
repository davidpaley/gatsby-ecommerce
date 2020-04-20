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
        'https://facebook.com',
        'https://instagram.com',
        'https://pinterest.com',
        'https://twitter.com',
        'https://youtube.com',
      ],
      payments: ['visa', 'mastercard', 'amex', 'discover', 'shopify', 'paypal'],
      // For available social share buttons see: https://github.com/nygardk/react-share
      shareButtons: [
        'Facebook',
        'Pinterest',
        'Twitter',
        'Tumblr',
        'Whatsapp',
        'Line',
        'Viber',
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
              name: 'Almacen',
              type: 'collection',
              handle: 'elalmacendecoco',
              textColor: 'black',
              textBgColor: 'white',
            },
            {
              name: 'mercadopago',
              type: 'colecction',
              handle: 'mercadopago',
              textColor: 'black',
              textBgColor: 'primary',
            },
            {
              name: 'Bebidas',
              type: 'collection',
              handle: 'bebidas-sin-alcohol',
              textColor: 'black',
              textBgColor: 'primary',
              link: '/collection/bebidas-sin-alcohol',
            },
          ],
        },
        {
          name: 'Galletitas',
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
          name: 'Fiambre',
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
            handle: 'almacen',
            link: '/collection/almacen',
            children: [
              {
                name: 'Almacen',
                type: 'collection',
                handle: 'almacen',
                link: '/collection/almacen',
              },
              {
                name: 'Galletitas',
                type: 'collection',
                handle: 'variedadgalletitas',
                link: '/collection/variedadgalletitas',
              },
              {
                name: 'Lacteos',
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
                handle: 'bebidas-con-alcohol',
                link: '/collection/bebidas-con-alcohol',
              },
              {
                name: 'Bebidas Sin Alcohol',
                type: 'collection',
                handle: 'bebidas-sin-alcohol',
                link: '/collection/bebidas-sin-alcohol',
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
          name: 'Políticas de Envío',
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
