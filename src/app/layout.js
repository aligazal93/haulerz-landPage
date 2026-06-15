import "./globals.css";
import Header from "./components/Header";
import localFont from "next/font/local";
import ScrollToTop from "./components/ScrollToTop";
import Script from "next/script";

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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
        >
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TLNGV2RL');
          `}
        </Script>
      </head>

      <body className={fontZagel.variable}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TLNGV2RL"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        <ScrollToTop />
        <Header />
        {children}
      </body>
    </html>
  );
}