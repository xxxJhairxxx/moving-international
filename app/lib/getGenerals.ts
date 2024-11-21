import { General, Multilanguage } from "../interfaces";
import { baseApi } from "./baseApi";

export const getGenerals = async (locale: string | undefined) => {
   try {
      const [{ data: general }, { data: multilanguage }] = await Promise.all([
         baseApi.get<General>("/general?populate=deep"),
         baseApi.get<Multilanguage>(`/multilanguage?locale=${locale}&populate=deep`),
      ]);
      return { general: general.data, multilanguage: multilanguage.data };
   } catch (error: any) {
      throw new Error(error.message);
   }
};
