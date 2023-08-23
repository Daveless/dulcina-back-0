import Head from "next/head";
import { Navbar } from "../ui";

const Layout = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>
        <nav>
          <Navbar />
        </nav>
        {/* sidebar */}
        <main className="py-[40px] pl-[85px] text-[#222222]">{children}</main>
      <footer></footer>
    </>
  );
};
export default Layout


