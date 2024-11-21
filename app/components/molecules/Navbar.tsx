import Link from "next/link";
import { FC } from "react";
import { useGenerals } from "../../context/generals.context";
import { goToSection } from "../../lib/utils";
import { useNavbarContext } from "../../context/navbar.context";
import { useRouter } from "next/router";
import { Container } from "../globals";

interface NavbarProps {
   isMenuOpen: boolean;
   closeMenu: () => void;
}

export const Navbar: FC<NavbarProps> = ({ isMenuOpen, closeMenu }) => {
   const { multilanguage } = useGenerals();
   const { activeSection, setScrolltoSectionFromOtherPage } = useNavbarContext();
   const { asPath } = useRouter();

   const handleGoToSection = (url: string) => {
      goToSection(url);
      closeMenu();
   };

   const handleGoToSectionFromOtherPage = (url: string) => {
      setScrolltoSectionFromOtherPage(url);

      closeMenu();
   };

   const half = 4;
   const menuPartOne = [...multilanguage.menu].slice(0, half);
   const menuPartTwo = [...multilanguage.menu].slice(half);

   return (
      <nav className={`Navbar ${isMenuOpen ? "isActive" : ""}`}>
         <div className="Navbar-ctn ">
            <ul className="Navbar-ul">
               {menuPartOne.map(({ id, label, url }) =>
                  asPath !== "/" ? (
                     <li
                        key={id}
                        className={`Navbar-li  ${url === asPath && "isActive"}`}
                        onClick={() => handleGoToSectionFromOtherPage(url)}
                     >
                        <Link href={"/"} onClick={closeMenu}>
                           {label}
                        </Link>
                     </li>
                  ) : (
                     <li
                        key={id}
                        className={`Navbar-li ${url === activeSection && asPath === "/" ? "isActive" : ""}`}
                        onClick={() => handleGoToSection(url)}
                     >
                        {label}
                     </li>
                  )
               )}
               {menuPartTwo.map(({ id, label, url }) => (
                  <li
                     key={id}
                     className={`Navbar-li ${url === asPath && "isActive"} ${url === "/contact"}`}
                     onClick={() => handleGoToSectionFromOtherPage(url)}
                  >
                     <Link href={url} onClick={closeMenu}>
                        {label}
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </nav>
   );
};
