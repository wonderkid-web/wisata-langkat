import { DestinationInformationType, DestinationType } from "../types";
import kolamAbadi from "/public/kolam-abadi.jpg";
import jungleTracking from "/public/jungle-tracking.jpg";
import sungaiBahorok from "/public/sungai-bahorok.jpg";
import bukitLawang from "/public/bukit-lawang.jpg";
import pantaiCermin from "/public/pantai-cermin.png";
import airTerjunSiluman from "/public/airterjun-siluman.jpg";

export const destination: DestinationType[] = [
  {
    src: kolamAbadi,
    alt: "Kolam Abadi Langkat",
    placeKode: "KAL",
    placeName: "Kolam Abadi Langkat",
  },
  {
    src: jungleTracking,
    alt: "Jungle Tracking",
    placeKode: "JT",
    placeName: "Jungle Tracking",
  },
  {
    src: bukitLawang,
    alt: "Bukit Lawang",
    placeKode: "BL",
    placeName: "Bukit Lawang",
  },
  {
    src: sungaiBahorok,
    alt: "Sungai Bahorok",
    placeKode: "SB",
    placeName: "Sungai Bahorok",
  },
  {
    src: pantaiCermin,
    alt: "Pantai Cermin",
    placeKode: "PC",
    placeName: "Pantai Cermin",
  },
  {
    src: airTerjunSiluman,
    alt: "Air Terjun Siluman",
    placeKode: "ATS",
    placeName: "Air Terjun Siluman",
  },
];

export const destinationInformation : DestinationInformationType[] = [
  {
    placeKode: "KAL",
    placeName: "Kolam Abadi Langkat",
    description:
      "Nikmati keindahan alam yang memukau di Kolam Abadi Langkat, sebuah kolam alami dengan air yang jernih dan menyegarkan, dikelilingi oleh hutan tropis.",
    accommodations: [
      { type: "Kamar Standar", price: 1500000 },
      { type: "Kamar Deluxe", price: 2500000 },
      { type: "Vila Hutan", price: 4000000 },
    ],
    activities: [
      { name: "Tur Hutan", price: 500000 },
      { name: "Snorkeling", price: 750000 },
      { name: "Spa dan Relaksasi", price: 1200000 },
    ],
    ticketPrice: "Rp 100.000 per orang",
    contact: {
      phone: "+62 (555) 987-6543",
      email: "pemesanan@kolamabadilangkat.com",
    },
  },
  {
    placeKode: "JT",
    placeName: "Jungle Tracking",
    description:
      "Nikmati relaksasi tertinggi di Jungle Tracking kami yang berada di tepi pantai Crystal Bay. Rasakan perpaduan sempurna antara alam dan kenyamanan modern.",
    accommodations: [
      { type: "Kamar Standar", price: 2000000 },
      { type: "Kamar Deluxe Pemandangan Laut", price: 3500000 },
      { type: "Vila Tepi Pantai", price: 7000000 },
    ],
    activities: [
      { name: "Tur Snorkeling", price: 700000 },
      { name: "Perjalanan Menyelam", price: 1400000 },
      { name: "Perawatan Spa", price: 1100000 },
    ],
    ticketPrice: "Termasuk dalam biaya menginap",
    contact: {
      phone: "+62 (555) 123-4567",
      email: "pemesanan@surgatropis.com",
    },
  },
  {
    placeKode: "BL",
    placeName: "Bukit Lawang",
    description:
      "Destinasi terkenal untuk melihat orangutan di habitat aslinya. Bukit Lawang menawarkan pengalaman trekking yang tak terlupakan di jantung hutan Sumatera.",
    accommodations: [
      { type: "Kamar Standar", price: 1800000 },
      { type: "Kamar Deluxe Pemandangan Hutan", price: 3000000 },
      { type: "Vila Hutan", price: 5500000 },
    ],
    activities: [
      { name: "Trekking Orangutan", price: 850000 },
      { name: "Jelajah Gua", price: 600000 },
      { name: "Arung Jeram", price: 900000 },
    ],
    ticketPrice: "Rp 150.000 per orang",
    contact: {
      phone: "+62 (555) 876-5432",
      email: "pemesanan@bukitlawang.com",
    },
  },
  {
    placeKode: "SB",
    placeName: "Sungai Bahorok",
    description:
      "Sungai Bahorok, tempat arung jeram yang populer, mengalir di sepanjang hutan tropis yang rimbun, menawarkan petualangan air yang mendebarkan.",
    accommodations: [
      { type: "Kamar Standar", price: 1700000 },
      { type: "Kamar Deluxe", price: 2800000 },
      { type: "Vila Sungai", price: 5200000 },
    ],
    activities: [
      { name: "Arung Jeram", price: 750000 },
      { name: "Trekking Hutan", price: 700000 },
      { name: "Relaksasi di Sungai", price: 500000 },
    ],
    ticketPrice: "Rp 80.000 per orang",
    contact: {
      phone: "+62 (555) 765-4321",
      email: "pemesanan@sungaibahorok.com",
    },
  },
  {
    placeKode: "PC",
    placeName: "Pantai Cermin",
    description:
      "Pantai Cermin menawarkan pantai berpasir putih yang luas dengan pemandangan matahari terbenam yang memukau. Tempat sempurna untuk bersantai dan menikmati angin laut.",
    accommodations: [
      { type: "Kamar Standar", price: 1600000 },
      { type: "Kamar Deluxe Pemandangan Laut", price: 2800000 },
      { type: "Vila Tepi Pantai", price: 6000000 },
    ],
    activities: [
      { name: "Snorkeling", price: 500000 },
      { name: "Perjalanan Kapal", price: 900000 },
      { name: "Spa Pantai", price: 1000000 },
    ],
    ticketPrice: "Rp 50.000 per orang",
    contact: {
      phone: "+62 (555) 234-5678",
      email: "pemesanan@pantaicermin.com",
    },
  },
  {
    placeKode: "ATS",
    placeName: "Air Terjun Siluman",
    description:
      "Terletak di tengah hutan belantara, Air Terjun Siluman menawarkan pemandangan air terjun yang memukau dan kesempatan trekking yang menantang.",
    accommodations: [
      { type: "Kamar Standar", price: 1400000 },
      { type: "Kamar Deluxe Pemandangan Air Terjun", price: 2600000 },
      { type: "Vila Hutan", price: 4800000 },
    ],
    activities: [
      { name: "Trekking ke Air Terjun", price: 600000 },
      { name: "Camping di Hutan", price: 800000 },
      { name: "Fotografi Alam", price: 400000 },
    ],
    ticketPrice: "Rp 70.000 per orang",
    contact: {
      phone: "+62 (555) 345-6789",
      email: "pemesanan@airterjunsiluman.com",
    },
  },
];
