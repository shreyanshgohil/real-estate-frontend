import "@/styles/globals.scss";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
export const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export default function App({ Component, pageProps }) {
  return (
    <div>
      <style jsx global>{`
        html {
          font-family: ${plusJakartaSans.style.fontFamily}, ui-sans-serif,
            system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, "Noto Sans", sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
            "Noto Color Emoji";
        }
      `}</style>
      <Script
        src="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
        crossOrigin="anonymous"
        strategy="beforeInteractive" // ensures it's loaded early
      />
      <Component {...pageProps} />
    </div>
  );
}
