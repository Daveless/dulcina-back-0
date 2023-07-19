import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dulcina",
  description: "Arreglos frutales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      ></link>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
