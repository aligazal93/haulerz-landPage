import { Alexandria } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const alexandria = Alexandria({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800", "900"],
});

export const metadata = {
  title: "Haulerz",
  description: "Haulerz Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={alexandria.className + " overflow-x-hidden"}>
        <Header />
        {children}
      </body>
    </html>
  );
}
