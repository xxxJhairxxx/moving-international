import Image from "next/image";
import { Picture } from "../../interfaces/shared";

interface AboutCardProps {
   image_icon: Picture;
   title: string;
   text: string;
}
const AboutCard = ({ image_icon, title, text }: AboutCardProps) => {
   return (
      <div className="aboutCard">
         <div className="aboutCard__thumb">
            <Image src={image_icon.url} width={50} height={50} alt="" />
         </div>
         <div className="aboutCard__description">
            <h2 className="aboutCard__description-title">{title}</h2>
            <p className="aboutCard__description-text">{text}</p>
         </div>
      </div>
   );
};

export default AboutCard;
