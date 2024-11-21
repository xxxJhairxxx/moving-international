import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from "react";

import { useRouter } from "next/router";
import { GeneralData } from "../interfaces/general";
import { MultilanguageData } from "../interfaces/multilanguage";

export interface ControllerState {
   general: GeneralData;
   multilanguage: MultilanguageData;
}

const useGeneralsController = ({ general, multilanguage }: ControllerState): ControllerState => {
   const { locale } = useRouter();
   const [generals, setGenerals] = useState({ general, multilanguage });

   useEffect(() => {
      setGenerals({
         general,
         multilanguage,
      });
   }, [locale]);
   return { general: generals.general, multilanguage: generals.multilanguage };
};

const InitialImageValue = {
   id: 20,
   name: "",
   alternativeText: null,
   caption: null,
   width: 15,
   height: 15,
   formats: null,
   hash: "",
   ext: null,
   mime: null,
   size: 10,
   url: "",
   previewUrl: null,
   provider: null,
   provider_metadata: null,
   createdAt: null,
   updatedAt: null,
};

const initialState: ControllerState = {
   general: {
      id: 1,
      phone_firts: "",
      phone_second: "",
      schedule: "",
      address: "",
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
      map_url: "",
      pixel_facebook: "",
      tag_manager: "",
      facebook_id: "",
      social_network: [],
      icons_decoration: [],
      logo: {
         id: 27,
         name: "",
         alternativeText: "",
         caption: "",
         width: 0,
         height: 0,
         formats: null,
         hash: "",
         ext: "",
         mime: "",
         size: 0,
         url: "",
         previewUrl: null,
         provider: "",
         provider_metadata: null,
         createdAt: "",
         updatedAt: "",
      },
   },
   multilanguage: {
      id: 22,
      lbl_btn_quote: "",
      lbl_btn_contact: "",
      lbl_see_more: "",
      lbl_send: "",
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
      lbl_see_services: "",
      menu: [],
      delivered_card: {
         id: 40,
         number: 10,
         image: InitialImageValue,
         text: "",
      },
      immediacy_card: {
         id: 21,
         image: InitialImageValue,
         title: "",
         text: "",
      },
   },
};

const GeneralsContext = createContext<ReturnType<typeof useGeneralsController>>(initialState);

interface GeneralsProviderProps extends PropsWithChildren {
   generals: ControllerState;
}

export const GeneralsProvider: FC<GeneralsProviderProps> = ({ children, generals }) => {
   return <GeneralsContext.Provider value={useGeneralsController(generals)}>{children}</GeneralsContext.Provider>;
};

export const useGenerals = () => useContext(GeneralsContext);
