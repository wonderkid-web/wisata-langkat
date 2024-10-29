import { DestinationInformationType, DestinationType } from "../types";
import kolamAbadi from "/public/kolam-abadi.jpg";
import jungleTracking from "/public/jungle-tracking.jpg";
import sungaiBahorok from "/public/sungai-bahorok.jpg";
import bukitLawang from "/public/bukit-lawang.jpg";
import pantaiCermin from "/public/pantai-cermin.png";
import airTerjunSiluman from "/public/airterjun-siluman.jpg";

export const clientPath = ["/", "/galery", "/ticket"];

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

export const destinationInformation: DestinationInformationType[] = [
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

export const trainingData = [
  {
    text: "Apa saja akomodasi di Kolam Abadi Langkat?",
    label: "accommodation_KAL",
  },
  {
    text: "Tipe kamar apa yang tersedia di Kolam Abadi Langkat?",
    label: "accommodation_KAL",
  },
  {
    text: "Berapa harga Kamar Deluxe di Kolam Abadi Langkat?",
    label: "accommodation_KAL",
  },
  {
    text: "Kamar apa saja yang bisa dipesan di Kolam Abadi Langkat?",
    label: "accommodation_KAL",
  },
  {
    text: "Kegiatan apa yang bisa dilakukan di Kolam Abadi Langkat?",
    label: "activities_KAL",
  },
  {
    text: "Apa aktivitas menarik di Kolam Abadi Langkat?",
    label: "activities_KAL",
  },
  {
    text: "Berapa harga tiket masuk Kolam Abadi Langkat?",
    label: "ticket_price_KAL",
  },
  {
    text: "Tiket masuk Kolam Abadi Langkat berapa ya?",
    label: "ticket_price_KAL",
  },
  {
    text: "Apakah ada kontak untuk pemesanan di Kolam Abadi Langkat?",
    label: "contact_KAL",
  },

  { text: "Apa saja akomodasi di Jungle Tracking?", label: "accommodation_JT" },
  {
    text: "Kamar apa yang bisa dipilih di Jungle Tracking?",
    label: "accommodation_JT",
  },
  {
    text: "Berapa harga Vila Tepi Pantai di Jungle Tracking?",
    label: "accommodation_JT",
  },
  {
    text: "Aktivitas apa yang ditawarkan di Jungle Tracking?",
    label: "activities_JT",
  },
  {
    text: "Apa saja kegiatan seru di Jungle Tracking?",
    label: "activities_JT",
  },
  { text: "Tiket masuk ke Jungle Tracking berapa?", label: "ticket_price_JT" },
  {
    text: "Berapa biaya menginap di Jungle Tracking?",
    label: "ticket_price_JT",
  },
  {
    text: "Siapa yang bisa dihubungi untuk pemesanan di Jungle Tracking?",
    label: "contact_JT",
  },

  { text: "Akomodasi di Bukit Lawang?", label: "accommodation_BL" },
  {
    text: "Kamar apa yang tersedia di Bukit Lawang?",
    label: "accommodation_BL",
  },
  {
    text: "Berapa harga Kamar Deluxe di Bukit Lawang?",
    label: "accommodation_BL",
  },
  {
    text: "Kegiatan apa yang bisa dilakukan di Bukit Lawang?",
    label: "activities_BL",
  },
  { text: "Apa aktivitas menarik di Bukit Lawang?", label: "activities_BL" },
  { text: "Berapa tiket masuk ke Bukit Lawang?", label: "ticket_price_BL" },
  {
    text: "Tiket masuk Bukit Lawang harganya berapa?",
    label: "ticket_price_BL",
  },
  {
    text: "Siapa kontak untuk pemesanan di Bukit Lawang?",
    label: "contact_BL",
  },

  {
    text: "Sungai Bahorok menawarkan akomodasi apa?",
    label: "accommodation_SB",
  },
  { text: "Apa saja tipe kamar di Sungai Bahorok?", label: "accommodation_SB" },
  {
    text: "Berapa biaya untuk Kamar Deluxe di Sungai Bahorok?",
    label: "accommodation_SB",
  },
  { text: "Aktivitas yang ada di Sungai Bahorok?", label: "activities_SB" },
  { text: "Apa saja kegiatan seru di Sungai Bahorok?", label: "activities_SB" },
  {
    text: "Berapa harga tiket masuk ke Sungai Bahorok?",
    label: "ticket_price_SB",
  },
  {
    text: "Tiket masuk ke Sungai Bahorok berapa ya?",
    label: "ticket_price_SB",
  },
  { text: "Kontak untuk pemesanan di Sungai Bahorok?", label: "contact_SB" },

  { text: "Akomodasi di Pantai Cermin?", label: "accommodation_PC" },
  {
    text: "Kamar apa yang tersedia di Pantai Cermin?",
    label: "accommodation_PC",
  },
  {
    text: "Berapa harga Kamar Deluxe Pemandangan Laut di Pantai Cermin?",
    label: "accommodation_PC",
  },
  {
    text: "Kegiatan apa yang bisa dilakukan di Pantai Cermin?",
    label: "activities_PC",
  },
  { text: "Apa aktivitas menarik di Pantai Cermin?", label: "activities_PC" },
  { text: "Berapa harga tiket Pantai Cermin?", label: "ticket_price_PC" },
  { text: "Tiket masuk Pantai Cermin berapa?", label: "ticket_price_PC" },
  {
    text: "Siapa kontak untuk pemesanan di Pantai Cermin?",
    label: "contact_PC",
  },

  {
    text: "Apa saja akomodasi di Air Terjun Siluman?",
    label: "accommodation_ATS",
  },
  {
    text: "Kamar apa yang tersedia di Air Terjun Siluman?",
    label: "accommodation_ATS",
  },
  {
    text: "Berapa harga Kamar Deluxe  di Air Terjun Siluman?",
    label: "accommodation_ATS",
  },
  {
    text: "Aktivitas yang bisa dilakukan di Air Terjun Siluman?",
    label: "activities_ATS",
  },
  {
    text: "Apa kegiatan menarik di Air Terjun Siluman?",
    label: "activities_ATS",
  },
  {
    text: "Berapa harga tiket masuk ke Air Terjun Siluman?",
    label: "ticket_price_ATS",
  },
  {
    text: "Tiket ke Air Terjun Siluman harganya berapa?",
    label: "ticket_price_ATS",
  },
  {
    text: "Siapa kontak untuk pemesanan di Air Terjun Siluman?",
    label: "contact_ATS",
  },

  {
    text: "Apakah ada villa di Kolam Abadi Langkat?",
    label: "accommodation_KAL",
  },
  {
    text: "Kamar mana yang paling direkomendasikan di Kolam Abadi Langkat?",
    label: "accommodation_KAL",
  },
  {
    text: "Apa fasilitas di Kamar Deluxe Kolam Abadi Langkat?",
    label: "accommodation_KAL",
  },

  {
    text: "Bagaimana cara melakukan pemesanan di Jungle Tracking?",
    label: "contact_JT",
  },
  {
    text: "Apakah ada paket spesial di Jungle Tracking?",
    label: "activities_JT",
  },
  {
    text: "Apa saja kegiatan petualangan di Jungle Tracking?",
    label: "activities_JT",
  },

  {
    text: "Kapan waktu terbaik untuk berkunjung ke Bukit Lawang?",
    label: "activities_BL",
  },
  { text: "Apakah Bukit Lawang cocok untuk keluarga?", label: "activities_BL" },
  { text: "Berapa lama trek di Bukit Lawang?", label: "activities_BL" },

  { text: "Adakah aktivitas malam di Sungai Bahorok?", label: "activities_SB" },
  { text: "Apa yang membuat Sungai Bahorok unik?", label: "activities_SB" },
  {
    text: "Bisa cerita lebih banyak tentang arung jeram di Sungai Bahorok?",
    label: "activities_SB",
  },

  {
    text: "Adakah penginapan di Pantai Cermin yang ramah anak?",
    label: "accommodation_PC",
  },
  {
    text: "Apa yang bisa dilakukan di Pantai Cermin selain berenang?",
    label: "activities_PC",
  },
  {
    text: "Berapa lama perjalanan dari kota ke Pantai Cermin?",
    label: "activities_PC",
  },

  {
    text: "Apakah Air Terjun Siluman bisa diakses sepanjang tahun?",
    label: "activities_ATS",
  },
  {
    text: "Apakah ada pemandu untuk trekking di Air Terjun Siluman?",
    label: "activities_ATS",
  },
  {
    text: "Apa saja tips untuk berkunjung ke Air Terjun Siluman?",
    label: "activities_ATS",
  },

  // Kolam Abadi Langkat
  {
    text: "Apakah ada kolam renang di Kolam Abadi Langkat?",
    label: "accommodation_KAL",
  },
  {
    text: "Bagaimana cara mencapai Kolam Abadi Langkat dari kota?",
    label: "contact_KAL",
  },
  {
    text: "Adakah paket liburan di Kolam Abadi Langkat?",
    label: "activities_KAL",
  },
  {
    text: "Apa saja fasilitas di Vila Hutan Kolam Abadi Langkat?",
    label: "accommodation_KAL",
  },
  {
    text: "Kapan waktu terbaik untuk mengunjungi Kolam Abadi Langkat?",
    label: "activities_KAL",
  },

  // Jungle Tracking
  {
    text: "Adakah kegiatan petualangan di Jungle Tracking?",
    label: "activities_JT",
  },
  {
    text: "Berapa biaya untuk paket menginap di Jungle Tracking?",
    label: "ticket_price_JT",
  },
  {
    text: "Bagaimana kondisi jalan menuju Jungle Tracking?",
    label: "contact_JT",
  },
  {
    text: "Adakah fasilitas gym di Jungle Tracking?",
    label: "accommodation_JT",
  },
  {
    text: "Apa yang bisa dilakukan di malam hari di Jungle Tracking?",
    label: "activities_JT",
  },

  // Bukit Lawang
  { text: "Apakah ada restoran di Bukit Lawang?", label: "activities_BL" },
  {
    text: "Berapa lama perjalanan dari kota ke Bukit Lawang?",
    label: "contact_BL",
  },
  { text: "Adakah paket tur di Bukit Lawang?", label: "activities_BL" },
  { text: "Apa rekomendasi makanan di Bukit Lawang?", label: "activities_BL" },
  { text: "Kapan festival di Bukit Lawang diadakan?", label: "activities_BL" },

  // Sungai Bahorok
  {
    text: "Adakah tempat istirahat di Sungai Bahorok?",
    label: "activities_SB",
  },
  {
    text: "Bagaimana dengan kondisi cuaca di Sungai Bahorok?",
    label: "activities_SB",
  },
  {
    text: "Apa yang perlu dibawa saat berkunjung ke Sungai Bahorok?",
    label: "activities_SB",
  },
  {
    text: "Adakah panduan arung jeram di Sungai Bahorok?",
    label: "activities_SB",
  },
  {
    text: "Apa saja layanan yang ditawarkan di Sungai Bahorok?",
    label: "activities_SB",
  },

  // Pantai Cermin
  { text: "Apakah Pantai Cermin memiliki tempat parkir?", label: "contact_PC" },
  {
    text: "Adakah tempat penyewaan peralatan di Pantai Cermin?",
    label: "activities_PC",
  },
  { text: "Berapa harga makanan di Pantai Cermin?", label: "activities_PC" },
  {
    text: "Apa yang harus dilakukan jika cuaca buruk di Pantai Cermin?",
    label: "activities_PC",
  },
  { text: "Bagaimana cara reservasi di Pantai Cermin?", label: "contact_PC" },

  // Air Terjun Siluman
  {
    text: "Adakah jembatan di sekitar Air Terjun Siluman?",
    label: "activities_ATS",
  },
  {
    text: "Berapa lama waktu yang dibutuhkan untuk trekking di Air Terjun Siluman?",
    label: "activities_ATS",
  },
  {
    text: "Apa yang membuat Air Terjun Siluman menarik?",
    label: "activities_ATS",
  },
  {
    text: "Adakah spot foto terbaik di Air Terjun Siluman?",
    label: "activities_ATS",
  },
  {
    text: "Bagaimana cara menuju Air Terjun Siluman dari pusat kota?",
    label: "contact_ATS",
  },

  // Tambahan Umum
  { text: "Apakah ada paket grup di semua lokasi?", label: "activities" },
  {
    text: "Bagaimana cara menghubungi semua tempat tersebut?",
    label: "contact",
  },
  {
    text: "Apa saja tips untuk wisatawan di area tersebut?",
    label: "activities",
  },
  {
    text: "Kapan musim ramai pengunjung di lokasi-lokasi ini?",
    label: "activities",
  },
  {
    text: "Adakah diskon untuk siswa atau mahasiswa di lokasi-lokasi tersebut?",
    label: "ticket_price",
  },

  {
    text: "Bagaimana cara mendapatkan informasi lebih lanjut tentang kegiatan?",
    label: "activities",
  },
  {
    text: "Adakah paket akhir pekan di Kolam Abadi Langkat?",
    label: "activities_KAL",
  },
  {
    text: "Apakah ada acara khusus di Jungle Tracking bulan ini?",
    label: "activities_JT",
  },
  {
    text: "Kapan waktu terbaik untuk trekking di Bukit Lawang?",
    label: "activities_BL",
  },
  {
    text: "Apakah ada petunjuk arah untuk menuju Sungai Bahorok?",
    label: "contact_SB",
  },

  {
    text: "Apa saja jenis makanan khas yang bisa dicoba di Pantai Cermin?",
    label: "activities_PC",
  },
  {
    text: "Adakah layanan transportasi dari dan ke Air Terjun Siluman?",
    label: "contact_ATS",
  },
  {
    text: "Apa yang harus dipersiapkan sebelum mengunjungi semua lokasi?",
    label: "activities",
  },
  {
    text: "Adakah acara tahunan yang diadakan di lokasi-lokasi tersebut?",
    label: "activities",
  },
  {
    text: "Bagaimana cara mendapatkan penawaran terbaik untuk menginap?",
    label: "activities",
  },

  { text: "Apakah semua lokasi ini ramah lingkungan?", label: "activities" },
  {
    text: "Berapa jauh masing-masing lokasi dari kota terdekat?",
    label: "contact",
  },
  {
    text: "Apa yang membedakan setiap lokasi satu sama lain?",
    label: "activities",
  },
  {
    text: "Adakah fasilitas untuk orang berkebutuhan khusus di lokasi-lokasi tersebut?",
    label: "activities",
  },
  {
    text: "Bagaimana cara melakukan pembayaran untuk pemesanan?",
    label: "contact",
  },
];

export const responses = {
  accommodation_KAL:
    "Di Kolam Abadi Langkat, tersedia Kamar Standar, Kamar Deluxe, dan Vila Hutan dengan harga mulai dari Rp 1.500.000.",
  activities_KAL:
    "Di Kolam Abadi Langkat, Anda dapat melakukan Tur Hutan, Snorkeling, dan Spa dan Relaksasi.",
  ticket_price_KAL:
    "Harga tiket masuk Kolam Abadi Langkat adalah Rp 100.000 per orang.",
  contact_KAL:
    "Untuk pemesanan, Anda dapat menghubungi +62 (555) 987-6543 atau email pemesanan@kolamabadilangkat.com.",

  accommodation_JT:
    "Jungle Tracking menawarkan Kamar Standar, Kamar Deluxe Pemandangan Laut, dan Vila Tepi Pantai.",
  activities_JT:
    "Di Jungle Tracking, Anda bisa melakukan Tur Snorkeling, Perjalanan Menyelam, dan Perawatan Spa.",
  ticket_price_JT:
    "Tiket masuk ke Jungle Tracking termasuk dalam biaya menginap.",
  contact_JT:
    "Untuk pemesanan, silakan hubungi +62 (555) 123-4567 atau email pemesanan@surgatropis.com.",

  accommodation_BL:
    "Di Bukit Lawang, Anda bisa memilih Kamar Standar, Kamar Deluxe Pemandangan Hutan, atau Vila Hutan.",
  activities_BL:
    "Aktivitas di Bukit Lawang termasuk Trekking Orangutan, Jelajah Gua, dan Arung Jeram.",
  ticket_price_BL:
    "Harga tiket masuk Bukit Lawang adalah Rp 150.000 per orang.",
  contact_BL:
    "Hubungi +62 (555) 876-5432 atau email pemesanan@bukitlawang.com untuk pemesanan.",

  accommodation_SB:
    "Sungai Bahorok memiliki Kamar Standar, Kamar Deluxe, dan Vila Sungai.",
  activities_SB:
    "Di Sungai Bahorok, Anda dapat melakukan Arung Jeram, Trekking Hutan, dan Relaksasi di Sungai.",
  ticket_price_SB:
    "Harga tiket masuk Sungai Bahorok adalah Rp 80.000 per orang.",
  contact_SB:
    "Untuk informasi pemesanan, hubungi +62 (555) 765-4321 atau email pemesanan@sungaibahorok.com.",

  accommodation_PC:
    "Pantai Cermin menawarkan Kamar Standar, Kamar Deluxe Pemandangan Laut, dan Vila Tepi Pantai.",
  activities_PC:
    "Aktivitas yang dapat dilakukan di Pantai Cermin meliputi Snorkeling, Perjalanan Kapal, dan Spa Pantai.",
  ticket_price_PC:
    "Harga tiket masuk Pantai Cermin adalah Rp 50.000 per orang.",
  contact_PC:
    "Silakan hubungi +62 (555) 234-5678 atau email pemesanan@pantaicermin.com untuk pemesanan.",

  accommodation_ATS:
    "Di Air Terjun Siluman, tersedia Kamar Standar, Kamar Deluxe Pemandangan Air Terjun, dan Vila Hutan.",
  activities_ATS:
    "Aktivitas di Air Terjun Siluman termasuk Trekking ke Air Terjun, Camping di Hutan, dan Fotografi Alam.",
  ticket_price_ATS:
    "Harga tiket masuk ke Air Terjun Siluman adalah Rp 70.000 per orang.",
  contact_ATS:
    "Untuk pemesanan, hubungi +62 (555) 345-6789 atau email pemesanan@airterjunsiluman.com.",
};
