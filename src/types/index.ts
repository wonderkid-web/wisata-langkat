import { StaticImageData } from "next/image";

export type PlaceKodeType  = "KAL" | "NSS" | "PC" | "SB" | "JT" | "BL" | "ATS";
export type PlaceNameType = "Kolam Abadi Langkat" | "Namu Sira Sira" | "Pantai Cermin" | "Sungai Bahorok" | "Jungle Tracking" | "Bukit Lawang" | "Air Terjun Siluman"

export type DestinationType = {
    src: StaticImageData;
    alt: PlaceNameType;
    placeKode: PlaceKodeType;
    placeName: PlaceNameType;
  };
  