import React, { useState } from "react";
import { MenuIcon } from "../atoms/MenuIcon";
import { Logo } from "../atoms/Logo";
import { Container } from "../globals";
import { Navbar } from "../molecules/Navbar";
import NumberButton from "../atoms/NumberButton";
import { useNavbarContext } from "../../context/navbar.context";
import { Socials } from "../atoms";
import { SwitchLanguage } from "../atoms/SwitchLanguage";

export const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
   const { isTopZero } = useNavbarContext();

   const toggleMenu = () => {
      setIsMenuOpen((prevState) => !prevState);
      document.body.classList.toggle("no-scroll");
   };

   const closeMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      document.body.classList.remove("no-scroll");
   };

   return (
      <header className={`Header ${isTopZero ? "background-white" : "background-transparent"}`}>
         {/* menuActive={isMenuOpen} */}

         <Container className="Header-ctn">
            <Logo className="Header-Logo" />
            <SwitchLanguage className={`Header-Switch absolute right-[13rem] ${isMenuOpen && "opacity-0"} xl:hidden`} />
            <Socials className="socials"></Socials>
            <div className={`Header-menuIcon ${isMenuOpen && "isActive"}`}>
               <MenuIcon setIsActive={toggleMenu} isActive={isMenuOpen} />
            </div>
            <Navbar isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
            <div className={`Header-overlay ${isMenuOpen && "isActive"}`} onClick={closeMenu} />
         </Container>
      </header>
   );
};
