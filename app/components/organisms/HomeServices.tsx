import { useGenerals } from "../../context/generals.context";
import { ServiceCards } from "../../interfaces";
import IconDecoration from "../atoms/IconDecoration";
import SectionTitle from "../atoms/SectionTitle";
import { Container } from "../globals";
import ServiceCard from "../molecules/ServiceCard";

interface HomeServices {
   subtitle: string;
   title: string;
   service_card: ServiceCards[];
}

const HomeServices = ({ subtitle, title, service_card }: HomeServices) => {
   const { general } = useGenerals();
   const array = title.split("/");

   return (
      <section className="homeServices" data-section="/service">
         <IconDecoration className="homeServices_icon" image={general.icons_decoration[1].image} />
         <div className="homeServices__ctn">
            <SectionTitle className="homeServices__ctn__title" title={`${array[0]}`} subtitle={subtitle} />
            <SectionTitle className="homeServices__ctn__title" title={`${array[1]}`} />
         </div>

         <Container className="homeServices__container">
            {service_card.map(({ image, image_icon, title, text }, index) => (
               <ServiceCard image={image} image_icon={image_icon} title={title} text={text} key={index} />
            ))}
         </Container>
      </section>
   );
};

export default HomeServices;
