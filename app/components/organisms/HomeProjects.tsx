import { Container } from "../globals";
import SectionTitle from "../atoms/SectionTitle";
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, SwiperOptions } from "swiper";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Images } from "../../interfaces";
import { Picture } from "../../interfaces/shared";
interface HomeProjectsProps {
   title: string;
   subtitle: string;
   image_icon: Picture;
   images: Images[];
}

const swiperOptions: SwiperOptions = {
   speed: 700,
   slidesPerView: 1,
   navigation: {
      prevEl: ".HomeProjects-prev",
      nextEl: ".HomeProjects-next",
   },
   breakpoints: {
      414: {
         slidesPerView: 1,
         spaceBetween: 10,
      },
      768: {
         slidesPerView: 2,
         spaceBetween: 10,
      },
      1024: {
         slidesPerView: 3,
         spaceBetween: 15,
      },
      1200: {
         slidesPerView: 4,
         spaceBetween: 15,
      },
   },
   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
   },
   modules: [Autoplay, Navigation],
};

export const HomeProjects = ({ image_icon, images, subtitle, title }: HomeProjectsProps) => {
   const [lightboxController, setLightboxController] = useState({
      toggler: false,
      slide: 1,
   });
   const imageListFull: string[] = useMemo(() => {
      return images.map((item) => item.image.url);
   }, [images]);

   const openLightBoxOnSlide = (number: number): void => {
      setLightboxController((prevState) => {
         return {
            toggler: !prevState.toggler,
            slide: number,
         };
      });
   };

   const [isMobile, setIsMobile] = useState(false);
   const MOBILE_BREAKPOINT = 1200;
   const [itemsLoop, setItemsLoop] = useState<boolean>();

   useEffect(() => {
      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      // setItemsLoop(!isMobile && galleryList.length > 3);
   };

   useEffect(() => {
      // setItemsLoop(!isMobile && galleryList.length > 3);
   }, [isMobile, images]);

   return (
      <section className="HomeProjects" data-section="/projects">
         <SectionTitle className="HomeProjects-title" title={title} subtitle={subtitle} />
         <Container className="HomeProjects-container">
            <div className="HomeProjects-container-list">
               <Swiper {...swiperOptions}>
                  {images.map(({ id, image_small }, index) => (
                     <SwiperSlide key={id}>
                        <picture
                           className="HomeProjects-container-list-img"
                           onClick={() => openLightBoxOnSlide(index + 1)}
                        >
                           <Image src={image_small.url} width={500} height={500} alt={title} />
                           <div className="HomeProjects-container-list-icon">
                              <Image src={image_icon.url} width={50} height={50} alt="" />
                           </div>
                        </picture>
                     </SwiperSlide>
                  ))}
               </Swiper>
               <div
                  className={`HomeProjects-arrow HomeProjects-prev icon-arrow ${images.length <= 4 && "isDisplayBtn"}`}
               ></div>
               <div
                  className={`HomeProjects-arrow HomeProjects-next icon-arrow ${images.length <= 4 && "isDisplayBtn"}`}
               ></div>
            </div>

            <FsLightbox toggler={lightboxController.toggler} sources={imageListFull} slide={lightboxController.slide} />
         </Container>
      </section>
   );
};

export default HomeProjects;
