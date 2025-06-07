import "@/styles/globals.scss";
import { Plus_Jakarta_Sans } from "next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-Plus_Jakarta_Sans",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${plusJakartaSans.variable} font-body`}>
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
