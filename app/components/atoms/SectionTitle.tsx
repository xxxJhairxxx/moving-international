import { FC } from "react";

interface SectionTitleProps {
   subtitle?: string;
   title: string;
   className?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ subtitle, title, className }) => {
   return (
      <div className={`sectionTitle ${className}`}>
         {subtitle && <h3>{subtitle}</h3>}
         <h2>{title}</h2>
      </div>
   );
};

export default SectionTitle;
