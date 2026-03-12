/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/sticker-supplier-malaysia",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/sticker-supplier-malaysia/",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/custom-stickers-for-packaging",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/custom-stickers-for-packaging/",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/label-printing-company-in-johor-bahru",
        destination: "/",
        permanent: true,
      },
      {
        source: "/label-printing-company-in-johor-bahru/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/services/",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/shop",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/shop/",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/product/adhesive-label",
        destination: "/products#self-adhesive",
        permanent: true,
      },
      {
        source: "/product/adhesive-label/",
        destination: "/products#self-adhesive",
        permanent: true,
      },
      {
        source: "/product/shrink-label",
        destination: "/products#shrink-sleeve",
        permanent: true,
      },
      {
        source: "/product/shrink-label/",
        destination: "/products#shrink-sleeve",
        permanent: true,
      },
      {
        source: "/product/peel-reveal-labels",
        destination: "/products#peel-reveal",
        permanent: true,
      },
      {
        source: "/product/peel-reveal-labels/",
        destination: "/products#peel-reveal",
        permanent: true,
      },
      {
        source: "/product/pop-up-label",
        destination: "/products#pop-up",
        permanent: true,
      },
      {
        source: "/product/pop-up-label/",
        destination: "/products#pop-up",
        permanent: true,
      },
      {
        source: "/product/variable-data-printing",
        destination: "/products#variable-data",
        permanent: true,
      },
      {
        source: "/product/variable-data-printing/",
        destination: "/products#variable-data",
        permanent: true,
      },
      {
        source: "/product/other-products",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/product/other-products/",
        destination: "/products",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
