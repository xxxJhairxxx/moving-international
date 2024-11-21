import { subscribe } from "diagnostics_channel";
import SectionTitle from "../atoms/SectionTitle";
import { Container } from "../globals";
import { ChooseCards } from "../../interfaces";
import { Autoplay, Pagination, SwiperOptions } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ChooseCard from "../molecules/CardChoose";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Picture } from "../../interfaces/shared";
import IconDecoration from "../atoms/IconDecoration";
import { useGenerals } from "../../context/generals.context";

interface HomeChooseProps {
   title: string;
   subtitle: string;
   text: string;
   choose_card: ChooseCards[];
   image: Picture;
}

const swiperOptions: SwiperOptions = {
   speed: 700,
   slidesPerView: "auto",
   breakpoints: {
      300: {
         slidesPerView: 1,
         spaceBetween: 30,
      },
      768: {
         slidesPerView: 2,
         spaceBetween: 30,
      },
      1024: {
         slidesPerView: 3,
         spaceBetween: 2,
         slidesPerGroup: 2,
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

const HomeChoose = ({ title, subtitle, text, choose_card, image }: HomeChooseProps) => {
   const [width, setWith] = useState<number>(100);

   const { general } = useGenerals();

   const handleResize = () => {
      setWith(window.innerWidth);
   };
   useEffect(() => {
      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   });
   return (
      <section className="homeChoose">
         <IconDecoration className="homeChoose_icon1" image={general.icons_decoration[2].image} />
         <IconDecoration className="homeChoose_icon2" image={general.icons_decoration[3].image} />
         <Container className="homeChoose__container">
            <SectionTitle className="homeChoose__container__title" title={title} subtitle={subtitle}></SectionTitle>
            <p className="homeChoose__container__text">{text}</p>

            {width < 1025 ? (
               <div className="homeChoose__container__swiper">
                  <Swiper {...swiperOptions} className="mySwiper">
                     {choose_card.map(({ id, image, title, text }) => (
                        <SwiperSlide key={id} className="px-5 py-10">
                           <ChooseCard title={title} text={text} image={image}></ChooseCard>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            ) : (
               <div className="homeChoose__container__cards">
                  {choose_card.map(({ id, image, title, text }) => (
                     <ChooseCard key={id} title={title} text={text} image={image} />
                  ))}
                  <div className="homeChoose__container__cards-thumb">
                     <Image src={image.url} width={800} height={800} alt={title} />
                  </div>
               </div>
            )}
         </Container>
      </section>
   );
};

export default HomeChoose;
