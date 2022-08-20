export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Delivery App",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Delivery is an on-demand delivery service that lets you deliver food and drinks from restaurants in your area.",
      },
      { name: "format-detection", content: "telephone=no" },
      { name: "keywords", content: "delivery,online delivery" },
      { name: "robots", content: "index,follow" },
      { name: "language", content: "English" },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Delivery App",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Delivery is an on-demand delivery service that lets you deliver food and drinks from restaurants in your area.",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content:
          "https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png",
      },
      {
        hid: "twitter:image:alt",
        name: "twitter:image:alt",
        content: "Delivery App Logo",
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "localhost:3000",
      },
      {
        hid: "og:type",
        name: "og:type",
        content: "website",
      },
      {
        hid: "og:url",
        name: "og:url",
        content: "localhost:3000",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Delivery App",
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "Delivery is an on-demand delivery service that lets you deliver food and drinks from restaurants in your area.",
      },
      {
        hid: "og:image",
        name: "og:image",
        content:
          "https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/main.css", "@fortawesome/fontawesome-svg-core/styles.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/fontawesome.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};