import { NumericLiteral } from "typescript";
import { MetaSEO, Picture } from "./shared";
import { INTERNALS } from "next/dist/server/web/spec-extension/request";
import { Middleware } from "next/dist/lib/load-custom-routes";

export interface Home {
   data: HomeData;
}

export interface HomeData {
   id: number;
   createdAt: string;
   updatedAt: string;
   publishedAt: string;
   home_banner: HomeBanner;
   home_skills: HomeSkills;
   home_services: HomeServices;
   home_middle: HomeMiddle;
   home_choose: HomeChoose;
   home_projects: HomeProjects;
   home_about: HomeAbout;
   seo: MetaSEO;
}

//++++++HOMEBANNER INTERFACES+++++++++++++//

export interface HomeBanner {
   id: number;
   subtitle: string;
   title: string;
   titlepost: string;
   text: string;
   bg_video: Media;
}

export interface Media {
   id: number;
   name: string;
   alternativeText: null;
   caption: null;
   width: null;
   height: null;
   formats: null;
   hash: string;
   ext: string;
   mime: string;
   size: number;
   url: string;
   previewUrl: null;
   provider: string;
   provider_metadata: null;
   createdAt: string;
   updatedAt: string;
}

//++++++HOMESERVICES_INTERFACES+++++++++++++//

export interface HomeSkills {
   id: number;
   skill_card: SkillCards[];
}

export interface SkillCards {
   id: number;
   title: string;
   image: Picture;
}

//++++++HOMESERVICES_INTERFACES+++++++++++++//

export interface HomeServices {
   id: number;
   title: string;
   subtitle: string;
   service_card: ServiceCards[];
}

export interface ServiceCards {
   id: number;
   title: string;
   text: string;
   image: Picture;
   image_icon: Picture;
}

//++++++HOMEMIDDLE_INTERFACES+++++++++++++//

export interface HomeMiddle {
   id: number;
   title: string;
   text: string;
}

//++++++HOME PROJECTS_INTERFACES+++++++++++++//

export interface HomeProjects {
   id: number;
   subtitle: string;
   title: string;
   image_icon: Picture;
   images: Images[];
}

export interface Images {
   id: number;
   image: Picture;
   image_small: Picture;
}

//++++++HOMEBENEFITS_INTERFACES+++++++++++++//

export interface HomeChoose {
   id: number;
   subtitle: string;
   title: string;
   text: string;
   image: Picture;
   choose_card: ChooseCards[];
}
export interface ChooseCards {
   id: number;
   title: string;
   text: string;
   image: Picture;
}
//++++++HOMEABOUT_INTERFACES+++++++++++++//

export interface HomeAbout {
   id: number;
   subtitle: string;
   title: string;
   text: string;
   image: Picture;
}
