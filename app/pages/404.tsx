import Link from "next/link";
import type { NextPage } from "next";
import { getGenerals } from "../lib/getGenerals";

const NotFound: NextPage = () => {
   return (
      <>
         <h1>404 - Page Not Found</h1>
         <Link href="/" className="text-gray-500">
            Go back Home
         </Link>
      </>
   );
};

export default NotFound;

export const getStaticProps = async ({ locale }: any) => {
   const generals = await getGenerals(locale);

   return {
      props: {
         generals,
      },
      revalidate: 1,
   };
};
