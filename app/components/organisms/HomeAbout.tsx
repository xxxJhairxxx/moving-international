import Image from "next/image";
import { Picture } from "../../interfaces/shared";
import { Container } from "../globals";
import SectionTitle from "../atoms/SectionTitle";
import ReactMarkdown from "react-markdown";
import AboutCard from "../atoms/AboutCard";
import { useGenerals } from "../../context/generals.context";
import { Button } from "../atoms/Button";
import IconDecoration from "../atoms/IconDecoration";

interface HomeAboutProps {
   image: Picture;
   title: string;
   subtitle: string;
   text: string;
}

const HomeAbout = ({ image, title, subtitle, text }: HomeAboutProps) => {
   const { general, multilanguage } = useGenerals();

   return (
      <section className="homeAbout" data-section="/about">
         <IconDecoration className="homeAbout_iconbox" image={general.icons_decoration[0].image} />
         <Container className="homeAbout__container">
            <div className="homeAbout__container__thumb">
               <Image src={image.url} width={500} height={500} alt="as" />
               <div className="homeAbout__container__thumb__tarjet">
                  <div className="homeAbout__container__thumb__tarjet-iconThumb">
                     <Image src={multilanguage.delivered_card.image.url} width={300} height={300} alt="" />
                  </div>
                  <h2 className="homeAbout__container__thumb__tarjet-number">{multilanguage.delivered_card.number}</h2>
                  <h3 className="homeAbout__container__thumb__tarjet-text">{multilanguage.delivered_card.text}</h3>
               </div>
            </div>
            <div className="homeAbout__container__description">
               <SectionTitle
                  className="homeAbout__container__description__title"
                  title={title}
                  subtitle={subtitle}
               ></SectionTitle>
               <ReactMarkdown className="homeAbout__container__description__text">{text}</ReactMarkdown>
               <AboutCard
                  title={multilanguage.immediacy_card.title}
                  text={multilanguage.immediacy_card.text}
                  image_icon={multilanguage.immediacy_card.image}
               />
               <Button className="homeAbout__container__button" icon="icon-arrows" url="/contact">
                  {multilanguage.lbl_btn_contact}
               </Button>
            </div>
         </Container>
      </section>
   );
};

export default HomeAbout;
