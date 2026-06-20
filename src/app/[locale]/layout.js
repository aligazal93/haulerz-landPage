import "../globals.css";
import Header from "../components/Header";
import localFont from "next/font/local";
import ScrollToTop from "../components/ScrollToTop";
import Script from "next/script";

const fontZagel = localFont({
  src: "../../../public/fonts/ZagelArabicITF-Regular.otf",
  variable: "--font-zagel",
  display: "swap",
});

export const metadata = {
  title: "Haulerz",
  description: "Haulerz Website",
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  const isArabic = locale === "ar";
  const dir = isArabic ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body className={fontZagel.variable} dir={dir}>
        <ScrollToTop />
        <Header locale={locale} />
        {children}
      </body>
    </html>
  );
}