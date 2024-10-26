import { StaticImport } from "next/dist/shared/lib/get-img-props";


export type PlaceKodeType  = "KAL" | "NSS" | "PC" | "SB" | "JT" | "BL" | "ATS";
export type PlaceNameType = "Kolam Abadi Langkat" | "Namu Sira Sira" | "Pantai Cermin" | "Sungai Bahorok" | "Jungle Tracking" | "Bukit Lawang" | "Air Terjun Siluman"

export type firebaseDate = {
  seconds: string | number
  nanoseconds: string | number
}

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
    src: StaticImport;
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


export interface Accommodation {
  type: string;
  price: number;
}

export interface Activity {
  name: string;
  price: number;
}

export interface TicketUIProps {
  accommodation?: Accommodation[];
  activity?: Activity[];
  placeKode: PlaceKodeType;
  status: boolean;
  id?: string;
  contact?: string;
  email?: string;
  person?: number | string;
  date?: firebaseDate | string | number;
}

export type SignInFormData = {
  email: string;
  password: string;
};

export type SignUpFormData = {
  email: string;
  password: string;
  name: string;
  contact: string | number;
};
