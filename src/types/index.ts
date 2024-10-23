import { StaticImageData } from "next/image";

export type PlaceKodeType  = "KAL" | "NSS" | "PC" | "SB" | "JT" | "BL" | "ATS";
export type PlaceNameType = "Kolam Abadi Langkat" | "Namu Sira Sira" | "Pantai Cermin" | "Sungai Bahorok" | "Jungle Tracking" | "Bukit Lawang" | "Air Terjun Siluman"

export type AccommodationType = {
  type: string;
  price: number;
};
  
export type ActivityType = {
  name: string;
  price: number;
};
  
export type ContactType = {
  phone: string;
  email: string;
};
  

export type DestinationType = {
    src: StaticImageData;
    alt: PlaceNameType;
    placeKode: PlaceKodeType;
    placeName: PlaceNameType;
  };
  
export type DestinationInformationType = {
  placeKode: PlaceKodeType;
  placeName: PlaceNameType;
  description: string;
  accommodations: AccommodationType[];
  activities: ActivityType[];
  ticketPrice: string;
  contact: ContactType;
}