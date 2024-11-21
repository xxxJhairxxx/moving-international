import { Picture } from "./shared";

export interface Multilanguage {
   data: MultilanguageData;
}

export interface MultilanguageData {
   id: number;
   lbl_btn_quote: string;
   lbl_btn_contact: string;
   lbl_see_more: string;
   lbl_send: string;
   createdAt: string;
   updatedAt: string;
   publishedAt: string;
   lbl_see_services: string;
   menu: Menu[];
   delivered_card: DeliveredCard;
   immediacy_card: ImmediacyCard;
}

export interface Menu {
   id: number;
   label: string;
   url: string;
   sitemap: boolean;
}

export interface DeliveredCard {
   id: number;
   number: number;
   image: Picture;
   text: string;
}

export interface ImmediacyCard {
   id: number;
   image: Picture;
   title: string;
   text: string;
}
