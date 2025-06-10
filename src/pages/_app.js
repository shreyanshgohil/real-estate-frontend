import "@/styles/globals.scss";
import { Plus_Jakarta_Sans } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
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

      <Component {...pageProps} />
    </div>
  );
}
