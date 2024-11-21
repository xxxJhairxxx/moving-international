import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { getGenerals } from "../lib/getGenerals";
import { baseApi } from "../lib/baseApi";
import { Home, HomeData } from "../interfaces";
import { useObserver } from "../hooks/useObserver";
import { useNavbarContext } from "../context/navbar.context";
import { useEffect } from "react";
import { goToSection } from "../lib/utils";

import { SeoEngine } from "../components/globals";
import HomeBanner from "../components/organisms/HomeBanner";
import HomeSkills from "../components/organisms/HomeSkills";
import HomeServices from "../components/organisms/HomeServices";
import HomeMiddle from "../components/organisms/HomeMiddle";
import HomeChoose from "../components/organisms/HomeChoose";
import { subtle } from "crypto";
import HomeProjects from "../components/organisms/HomeProjects";
import HomeAbout from "../components/organisms/HomeAbout";

interface HomeProps {
   home: HomeData;
}

const Home: NextPage<HomeProps> = ({ home }) => {
   const { setActiveSection, scrolltoSectionFromOtherPage } = useNavbarContext();
   const { setElements, entries } = useObserver({ rootMargin: "-13% 0px -80% 0px" });

   useEffect(() => {
      const elements = document.querySelectorAll("[data-section]");
      setElements(elements);
   }, [setElements]);

   useEffect(() => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            const section = entry.target.getAttribute("data-section");

            setActiveSection(String(section));
         }
      });
   }, [entries, setActiveSection]);

   useEffect(() => {
      if (scrolltoSectionFromOtherPage) {
         goToSection(scrolltoSectionFromOtherPage);
      }
   }, [scrolltoSectionFromOtherPage]);
   return (
      <main className="main-page">
         <HomeBanner
            subtitle={home.home_banner.subtitle}
            title={home.home_banner.title}
            title_post={home.home_banner.titlepost}
            text={home.home_banner.text}
            bg_video={home.home_banner.bg_video}
         />
         <HomeSkills skill_card={home.home_skills.skill_card} />

         <HomeServices
            title={home.home_services.title}
            subtitle={home.home_services.subtitle}
            service_card={home.home_services.service_card}
         ></HomeServices>

         <HomeMiddle title={home.home_middle.title} text={home.home_middle.text} />

         <HomeChoose
            title={home.home_choose.title}
            subtitle={home.home_choose.subtitle}
            text={home.home_choose.text}
            choose_card={home.home_choose.choose_card}
            image={home.home_choose.image}
         />

         <HomeProjects
            title={home.home_projects.title}
            subtitle={home.home_projects.subtitle}
            image_icon={home.home_projects.image_icon}
            images={home.home_projects.images}
         />

         <HomeAbout
            title={home.home_about.title}
            subtitle={home.home_about.subtitle}
            text={home.home_about.text}
            image={home.home_about.image}
         />

         <SeoEngine seo={home.seo} />
      </main>
   );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
   const generals = await getGenerals(locale);

   const [{ data: home }] = await Promise.all([baseApi.get<Home>(`/home?locale=${locale}&populate=deep`)]);

   return {
      props: {
         home: home.data,
         generals,
      },
      revalidate: 1,
   };
};
