import ReactMarkdown from "react-markdown";
import { useGenerals } from "../../context/generals.context";
import { Media } from "../../interfaces";
import { goToSection } from "../../lib/utils";
import { Button } from "../atoms/Button";
import { Container } from "../globals";
import NumberButton from "../atoms/NumberButton";

interface HomeBannerProps {
   subtitle: string;
   title: string;
   bg_video: Media;
   title_post: string;
   text: string;
}
const HomeBanner = ({ subtitle, title, bg_video, title_post, text }: HomeBannerProps) => {
   const handleGoToSection = (url: string) => {
      goToSection(url);
   };
   const { multilanguage, general } = useGenerals();
   return (
      <section className="homeBanner" data-section="/">
         <video className="homeBanner-video" src={bg_video.url} autoPlay muted loop playsInline />

         <Container className="homeBanner__container">
            <NumberButton className={`homeBanner__container-Number`} phone={general.phone_firts} />
            <NumberButton className={`homeBanner__container-Number2`} phone={general.phone_second} />
            <ReactMarkdown className="homeBanner__container-subtitle">{subtitle}</ReactMarkdown>
            <h1 className="homeBanner__container-title">{title}</h1>
            <h3 className="homeBanner__container-titlepost">{title_post}</h3>

            <p className="homeBanner__container-text">{text}</p>

            <Button className="homeBanner__container-button" icon="icon-arrows" url={"/contact"}>
               {multilanguage.lbl_btn_contact}
            </Button>
         </Container>
      </section>
   );
};

export default HomeBanner;
