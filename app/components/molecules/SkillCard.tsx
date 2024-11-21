import Image from "next/image";
import React, { FC } from "react";
import { Picture } from "../../interfaces/shared";

interface SkillCardProps {
   image: Picture;
   title: string;
}

export const SkillCard = ({ image, title }: SkillCardProps) => {
   return (
      <div className="skillsCard">
         <div className="skillsCard__thumb">
            <Image src={image.url} width={500} height={500} alt={title} />
         </div>
         <h2 className="skillsCard__title">{title}</h2>
      </div>
   );
};
