import Image from "next/image";
import { Picture } from "../../interfaces/shared";

interface ChooseCardProps {
   title: string;
   text: string;
   image: Picture;
}

const ChooseCard = ({ title, text, image }: ChooseCardProps) => {
   return (
      <div className="chooseCard">
         <div className="chooseCard__thumb">
            <Image src={image.url} width={50} height={50} alt={title} />{" "}
         </div>

         <div className="chooseCard__description">
            <h2 className="chooseCard__description-title">{title}</h2>
            <p className="chooseCard__description-text">{text}</p>
         </div>
      </div>
   );
};

export default ChooseCard;
