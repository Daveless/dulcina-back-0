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
        <Script type="text/javascript">
          {`
            (function(c,l,a,r,i,t,y){
           c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "m29v7h0dg2");
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
