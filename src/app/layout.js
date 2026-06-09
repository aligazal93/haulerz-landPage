import "./globals.css";
import Header from "./components/Header";
import localFont from "next/font/local";
import ScrollToTop from "./components/ScrollToTop";

const fontZagel = localFont({
  src: "../../public/fonts/ZagelArabicITF-Regular.otf",
  variable: "--font-zagel",
  display: "swap",
});

export const metadata = {
  title: "Haulerz",
  description: "Haulerz Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${fontZagel.variable} font-zagel overflow-x-hidden`}>
        <ScrollToTop />
        <Header />
        {children}
      </body>
    </html>
  );
}
