import React, { useReducer } from "react";
import { Container } from "../globals";
import { Socials } from "../atoms";
import { useGenerals } from "../../context/generals.context";
import { useRouter } from "next/router";

export const Footer = () => {
   const { general } = useGenerals();

   const { locale } = useRouter();

   const partes = general.schedule.split("/");
   const primeraParte = partes[0];
   const segundaParte = partes[1];
   const lbl_schedule = locale === "en" ? primeraParte : segundaParte;

   return (
      <footer className="Footer" id="footer">
         <Container className="Footer-ctn">
            <ul className="Footer-ctn-list">
               <li className="Footer-ctn-list-item">
                  <i className="icon-phone"></i>
                  <a href={`tel:${general.phone_firts}`} target="_blank" rel="noopener noreferrer">
                     {general.phone_firts}
                  </a>
                  <span className="font-bold xl:text-[2rem]"> - </span>
                  <a href={`tel:${general.phone_second}`} target="_blank" rel="noopener noreferrer">
                     {general.phone_second}
                  </a>
               </li>
               <li className="Footer-ctn-list-item">
                  <a href={general.map_url} target="_blank" rel="noopener noreferrer">
                     <i className="icon-gps"></i> {general.address}
                  </a>
               </li>
               <li className="Footer-ctn-list-item ">
                  <a>
                     <i className="icon-schedule"></i> {lbl_schedule}
                  </a>
               </li>

               <li className="Footer-ctn-list-item">
                  <Socials className={`Footer-ctn-list-item-social ${locale === "es" ? "spanish" : ""}`}></Socials>
               </li>
            </ul>
         </Container>
      </footer>
   );
};
