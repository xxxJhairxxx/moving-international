import type { NextPage } from "next";
import { getGenerals } from "../lib/getGenerals";

const Error: NextPage = () => {
   return <div>_error</div>;
};

export default Error;

export const getStaticProps = async ({ locale }: any) => {
   const generals = await getGenerals(locale);

   return {
      props: {
         generals,
      },
      revalidate: 1,
   };
};
