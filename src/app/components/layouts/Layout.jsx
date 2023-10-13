import Head from "next/head";
import { Navbar } from "../ui";

const Layout = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
  padding
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
        <main className={`${padding == true ? "py-[40px]": null} text-[#222222]`}>{children}</main>
    </>
  );
};
export default Layout;
