import Image from "next/image";
import { Picture } from "../../interfaces/shared";

interface IconDecorationProp {
   image: Picture;
   className?: string;
}

const IconDecoration = ({ image, className }: IconDecorationProp) => {
   return (
      <div className={`iconDecoration ${className}`}>
         <Image src={image.url} width={100} height={100} alt="" />
      </div>
   );
};

export default IconDecoration;
