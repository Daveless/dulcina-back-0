import Head from "next/head";
import { LandingNavbar } from "../ui";
import style from "../layouts/LandingLayout.css"

export const LandingLayout = ({
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
      <div className={`  bg-[url('https://res.cloudinary.com/dccvupp4x/image/upload/v1696201147/dulcina/landing/f91ampavytnzbwncvssl.jpg')] bg-no-repeat bg-fixed bg-cover `}>
      <div className={` bg-black/[0.4] backdrop-brightness-75`}>
        <nav>
          <LandingNavbar />
        </nav>
        {/* sidebar */}
        <main>{children}</main>
      </div>
      </div>
    </>
  );
};
