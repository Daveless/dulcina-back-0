import "./globals.css";
import { Inter } from "next/font/google";
import { ReduxProvider } from "@/redux/provider";
import { FooterContainer } from "./components";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-32V122543H"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-32V122543H');
          `}
        </Script>
      </head>
      <body className={`${inter.className}  bg-[#f8f8f8]`}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
        <footer>
          <FooterContainer />
        </footer>
      </body>
    </html>
  );
}
