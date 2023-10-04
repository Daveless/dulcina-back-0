import "./globals.css";
import { Inter } from "next/font/google";
import { ReduxProvider } from "@/redux/provider";
import { FooterContainer } from "./components";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
