import { DestinationType } from "../types";
import kolamAbadi from "/public/kolam-abadi.jpg";
import jungleTracking from "/public/jungle-tracking.jpg";
import sungaiBahorok from "/public/sungai-bahorok.jpg"
import bukitLawang from "/public/bukit-lawang.jpg"
import pantaiCermin from "/public/pantai-cermin.png"
import airTerjunSiluman from "/public/airterjun-siluman.jpg"

export const destination: DestinationType[] = [
    { src: kolamAbadi, alt: "Kolam Abadi Langkat", placeKode: "KAL", placeName: "Kolam Abadi Langkat" },
    { src: jungleTracking, alt: "Jungle Tracking", placeKode: "JT", placeName: "Jungle Tracking" },
    { src: bukitLawang, alt: "Bukit Lawang", placeKode: "BL", placeName: "Bukit Lawang" },
    { src: sungaiBahorok, alt: "Sungai Bahorok", placeKode: "SB", placeName: "Sungai Bahorok" },
    { src: pantaiCermin, alt: "Pantai Cermin", placeKode: "PC", placeName: "Pantai Cermin" },
    { src: airTerjunSiluman, alt: "Air Terjun Siluman", placeKode: "ATS", placeName: "Air Terjun Siluman" },
  ];
  