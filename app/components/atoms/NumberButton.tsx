import Image from "next/image";

interface NumberButtonProps {
   className?: string;
   phone: string;
}

const NumberButton = ({ phone, className }: NumberButtonProps) => {
   return (
      <a href={`tel:${phone}`} className={`numberBotton ${className}`}>
         <div className="numberBotton-thumb">
            <Image src="/images/phone.svg" width={2000} height={2000} alt="phone" />
         </div>
         {phone}
      </a>
   );
};

export default NumberButton;
