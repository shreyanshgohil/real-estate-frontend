import "@/styles/globals.scss";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Script
        src="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
        crossOrigin="anonymous"
        strategy="beforeInteractive" // ensures it's loaded early
      />
      <Component {...pageProps} />
    </div>
  );
}
