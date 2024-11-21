import Link from "next/link";
import { FC, MouseEventHandler, PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
   url?: string;
   icon?: string;
   onClick?: MouseEventHandler<HTMLButtonElement>;
   className?: string;
}

export const Button: FC<ButtonProps> = ({ icon, url, onClick, children, className }) => {
   return (
      <>
         {url ? (
            <Link href={url} className={`button ${className}`}>
               <div>
                  <span> {children} </span>
                  {icon && <i className="icon-arrows"></i>}
               </div>
            </Link>
         ) : (
            <button onClick={onClick} className={`button ${className}`}>
               <span> {children} </span>
               {icon && <i className={icon}></i>}
            </button>
         )}
      </>
   );
};
