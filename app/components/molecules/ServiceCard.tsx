import Image from "next/image";
import { Picture } from "../../interfaces/shared";
import { useGenerals } from "../../context/generals.context";
import { Button } from "../atoms/Button";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { limitText } from "../../lib/utils";
import { useNavbarContext } from "../../context/navbar.context";

interface ServiceCardProps {
   image: Picture;
   image_icon: Picture;
   title: string;
   text: string;
}

const ServiceCard = ({ image, image_icon, title, text }: ServiceCardProps) => {
   const { multilanguage } = useGenerals();
   const { serviceSelected, setServiceSelected } = useNavbarContext();

   // ServiceCard
   const handleCategoryClick = (service: string) => {
      setServiceSelected(service);
   };

   const [toggle, setToggle] = useState<boolean>(true);

   return (
      <div className="serviceCard">
         <div className="serviceCard__thumb" onClick={() => setToggle(!toggle)}>
            <Image src={image.url} width={500} height={500} alt={title} />
            <div className="serviceCard__thumb__icon">
               <Image src={image_icon.url} width={500} height={500} alt={title}></Image>
            </div>
         </div>
         <div className={`serviceCard__description ${toggle ? "deploy" : ""}`}>
            <h2 className="serviceCard__description-title">{title}</h2>
            <ReactMarkdown className={`serviceCard__description-text  ${toggle ? "deploytext" : ""}`}>
               {text}
            </ReactMarkdown>

            <Link href={"/contact"} className={`serviceCard__description-btn ${toggle && "invisible2"}`}>
               <div onClick={() => handleCategoryClick(title)}>{multilanguage.lbl_btn_quote}</div>
            </Link>
         </div>

         <button className="serviceCard__btnSee" onClick={() => setToggle(!toggle)}>
            <div className={`serviceCard__btnSee-text ${!toggle && "invisible2"}`}>{multilanguage.lbl_see_more}</div>
            <div className={`serviceCard__btnSee-thumbIcon ${toggle ? "" : "rotar"}`}>
               <Image src="/images/arrow-down.svg" width={10} height={10} alt="arrow-down" />
            </div>
         </button>
      </div>
   );
};

export default ServiceCard;
