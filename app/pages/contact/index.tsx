import style from "./style.module.css";

import { GetStaticProps } from "next";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import bgcontact from "@/public/images/bg-contact.png";
import { Container, SeoEngine } from "../../components/globals";
import ContactForm from "../../components/molecules/ContactForm";
import { baseApi } from "../../lib/baseApi";
import { Contact, ContactData, Home, HomeData } from "../../interfaces";
import { getGenerals } from "../../lib/getGenerals";
import SectionTitle from "../../components/atoms/SectionTitle";
import { useRef } from "react";
import { useRouter } from "next/router";
import { useGenerals } from "../../context/generals.context";

interface ContactProps {
   contact: ContactData;
   home: HomeData;
}

export default function Index({ contact, home }: ContactProps) {
   const services = home.home_services.service_card.map((item) => item.title);
   return (
      <main className={style.contact}>
         <Container className={style.contact__ctn}>
            <SectionTitle
               className={style.contact__ctn__title}
               title={contact.title}
               subtitle={contact.subtitle}
            ></SectionTitle>
            <ContactForm form={contact.form} messages={contact.messages} services={services}></ContactForm>
         </Container>
         <SeoEngine seo={contact.seo} />
      </main>
   );
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
   const generals = await getGenerals(locale);
   const [{ data: contactData }, { data: home }] = await Promise.all([
      baseApi.get<Contact>(`/contact?locale=${locale}&populate=deep`),
      baseApi.get<Home>(`/home?locale=${locale}&populate=deep`),
   ]);
   return {
      props: {
         contact: contactData.data,
         home: home.data,
         generals,
      },
      revalidate: 1,
   };
};
