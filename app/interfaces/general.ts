import { Picture } from "./shared";

export interface General {
   data: GeneralData;
}

export interface GeneralData {
   id: number;
   phone_firts: string;
   phone_second: string;
   schedule: string;
   address: string;
   createdAt: string;
   updatedAt: string;
   publishedAt: string;
   map_url: string;
   pixel_facebook: string;
   tag_manager: string;
   facebook_id: string;
   social_network: SocialNetwork[];
   icons_decoration: IconsDecoration[];
   logo: Logo;
}
export interface Logo {
   id: number;
   name: string;
   alternativeText: string;
   caption: string;
   width: number;
   height: number;
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

export interface IconsDecoration {
   id: number;
   image: Picture;
}

export interface SocialNetwork {
   id: number;
   type: string;
   url: string;
}
