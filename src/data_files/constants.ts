import ogImageSrc from "@images/social.png";
import suiLogo from "@images/sui logo.png";
import byBitLogo from "@images/bybit.png";
import okxLogo from "@images/okx logo.png";
import mariBlock from "@images/mariblock logo.png";
import mojaLogo from "@images/moja logo.png";



export const SITE = {
  title: "Decentrix Africa",
  tagline: "Web3 Marketing & Acquisition Agency",
  description: "Decentrix Africa is a marketing and user acquisition agency helping businesses scale across Africa by acquiring new customers, leveraging our expertise in African market dynamics and Web3 technologies.",
  description_short: "Revolutionizing Africa's digital future by unlocking the transformative potential of Web 3.0.",
  url: "https://decentrix.africa",
  author: "Decentrix Africa",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Web3 Marketing & User Acquisition Across Africa`,
  description: "Decentrix Africa helps businesses scale across Africa through innovative Web3 marketing strategies, user acquisition campaigns, and deep expertise in African market dynamics. Empowering communities and creating sustainable opportunities across the continent.",
  image: ogImageSrc,
};

export const partnersData = [
    {
        icon: `<img src="${suiLogo.src}" alt="Sui" />`,
        name: "Sui",
        href: "https://sui.io",
    },
    {
        icon: `<img src="${byBitLogo.src}" alt="ByBit" />`,
        name: "ByBit",
        href: "https://www.bybit.com",
    },
    {
        icon: `<img src="${okxLogo.src}" alt="OKX" />`,
        name: "OKX",
        href: "https://www.okx.com",
    },
    {
        icon: `<img src="${mariBlock.src}" alt="MariBlock" />`,
        name: "MariBlock",
        href: "https://www.mariblock.com",
    },
    {
        icon: `<img src="${mojaLogo.src}" alt="Moja" />`,
        name: "Moja",
        href: "https://www.moja.com",
    },
]