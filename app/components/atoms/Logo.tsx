import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useGenerals } from "../../context/generals.context";

interface LogoProps {
   className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => {
   const { general } = useGenerals();
   return (
      <Link href={"/"} legacyBehavior>
         <picture className={`logoCont ${className}`}>
            {general.logo.url && <Image priority src={general.logo.url} width={2000} height={2000} alt=""></Image>}
         </picture>
      </Link>
   );
};
