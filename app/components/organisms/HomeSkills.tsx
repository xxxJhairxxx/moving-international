import Image from "next/image";
import { Picture } from "../../interfaces/shared";
import { Autoplay, Pagination, SwiperOptions } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "../globals";
import { SkillCards } from "../../interfaces";
import { SkillCard } from "../molecules";

interface HomeSkillsProps {
   skill_card: SkillCards[];
}

const swiperOptions: SwiperOptions = {
   speed: 700,
   slidesPerView: "auto",
   breakpoints: {
      300: {
         slidesPerView: 2,
         spaceBetween: 10,
         slidesPerGroup: 2,
      },
      768: {
         slidesPerView: 4,
         spaceBetween: 10,
         slidesPerGroup: 2,
      },
      1024: {
         slidesPerView: 4,
         spaceBetween: 30,
         slidesPerGroup: 3,
      },
      1200: {
         slidesPerView: 4,
         spaceBetween: 5,
         slidesPerGroup: 4,
      },
   },
   pagination: {
      // el: ".homeBanner-pagination",
      clickable: true,
      type: "bullets",
   },
   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
   },
   modules: [Autoplay, Pagination],
};

const HomeSkills = ({ skill_card }: HomeSkillsProps) => {
   return (
      <section className="homeSkills">
         <Container className="homeSkills_container">
            <Swiper {...swiperOptions} className="mySwiper mx-auto">
               {skill_card.map(({ image, title }, index) => (
                  <SwiperSlide key={index} className="SwiperSlide">
                     <SkillCard title={title} image={image} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </Container>
         <div className="swiper-pagination"></div>
      </section>
   );
};

export default HomeSkills;
