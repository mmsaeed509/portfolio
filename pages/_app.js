import Header from "../components/Header/";
import "../styles/reset.css";
import "../styles/globals.css";
import Footer from "../components/Footer";
import ThemeContextProvider from "../contexts/ThemeContexts";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeContextProvider>
  );
}

export default MyApp;
