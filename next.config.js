// const withMDX = require('@next/mdx')()
 
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Configure `pageExtensions` to include MDX files
//   pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
//   // Optionally, add any other Next.js config below
// }
 
// module.exports = withMDX(nextConfig)

// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.mdx?$/, // Corrección de la expresión regular
      use: [
        {
          loader: '@mdx-js/loader',
          options: {
            remarkPlugins: [],
            rehypePlugins: [],
          },
        },
      ],
    });

    return config; // ¡Asegúrate de retornar el objeto config!
  },
};
