import Head from "next/head";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Contact from "../components/Contact";
import * as SKILLS from "../constants/techStacks";

const mySkills = Object.values(SKILLS)
  .map((skill) => skill.name)
  .sort((a, b) => (a > b ? 1 : 0))
  .join(", ");

const structuredData = {
  "@context": "https://exodia-os.github.io/exodia-website/",
  "@type": "Person",
  name: "Wolf",
  alternateName: "Özil",
  nationality: "Egyptian",
  email: "mmsaeed509@gmail.com",
  image: "profile.png",
  birthPlace: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressRegion: "EG",
      addressCountry: "Egypt",
    },
  },
  birthDate: "2000-1-20",
  // telephone: "+20",
  gender: "Male",
  Description: "Jr. Penetration Tester based in Egypt",
  disambiguatingDescription: "Founder of Exodia OS",
  jobTitle: "Jr. Penetration Tester",
  worksFor: [
    {
      "@type": "Organization",
      name: "Exodia OS.",
      sameAs: [
        "https://exodia-os.github.io/exodia-website/",
        "https://exodia-os.github.io/team/",
      ],
    },
  ],
  url: process.env.NEXT_PUBLIC_HOST,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressRegion: "EG",
    addressCountry: "Egypt",
  },
  sameAs: [

    "https://github.com/mmsaeed509",
    "https://www.linkedin.com/in/mahmoud-mohamed-a934b21a5/",
    "https://twitter.com/Mahmoudzil4",
    "https://www.instagram.com/mmsaeed509/",
    "https://www.facebook.com/engrody.linux.5",
    "https://www.reddit.com/user/mmsaeed509",
    "https://www.youtube.com/@mahmoudmohammed00xwolf88/videos",
    "https://discordapp.com/users/528010173403365377",
    
  ],
};

const Home = () => (
  <>
    <Head>
      <title> 00xWolf </title>
      <meta
        name="title"
        content="Wolf - Jr. Penetration Tester based in Egypt"
      />
      <meta
        name="description"
        content={`Wolf - Jr. Penetration Tester based in Egypt, my top skills: ${mySkills}`}
      />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
      />
      <meta name="theme-color" content="#7287fd" />
      <meta
        name="keywords"
        content="jR. PenTesting, PenTester in Egypt, Wolf"
      />
      <link
        rel="shortcut icon"
        href="profile.png"
        type="image/x-icon"
      />
      <meta name="robots" content="index, follow" />

      <meta
        property="og:title"
        content="Wolf - jR. PenTesting From Egypt"
      />
      <meta
        property="og:description"
        content={`Wolf - jR. PenTesting From Egypt, my top skills: ${mySkills}`}
      />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_HOST}/profile.png`}
      />
      <meta property="og:site_name" content="Wolf" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_HOST} />

      <meta
        name="twitter:description"
        content={`Wolf - jR. PenTesting From Egypt, my top skills: ${mySkills}`}
      />
      <meta
        name="twitter:image"
        content="profile.png"
      />
      <meta property="twitter:url" content="https://exodia-os.github.io/team/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Wolf - jR. PenTesting From Egypt"
      />

      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </Head>

    <main>
      <Hero />
      <Work />
      <Skills />
      <Contact />
    </main>
  </>
);

export default Home;
