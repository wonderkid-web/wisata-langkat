import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey!);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 0.3,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export async function POST(request: Request) {
  const { text } = await request.json();

  const parts = [
    { text: "input: langkat" },
    { text: "output: tempat wisata kabupaten langkat sumut" },
    { text: "input: wisata langkat" },
    {
      text: "output: kolam abadi langkat, sungai bahorok, air terjun siluman, 🏞️ #liburan",
    },
    { text: "input: pantai" },
    {
      text: "output: pantai cermin, vila tepi pantai, 🏖️ #relaksasi",
    },
    { text: "input: hutan" },
    {
      text: "output: bukit lawang, kolam abadi langkat, air terjun siluman, 🏕️ #petualangan",
    },
    { text: "input: snorkeling" },
    {
      text: "output: kolam abadi langkat, pantai cermin, jungle tracking, 🐠 #aktivitasair",
    },
    { text: "input: orangutan" },
    {
      text: "output: bukit lawang, 🦧 #satwa",
    },
    { text: "input: arung jeram" },
    {
      text: "output: sungai bahorok, 🏄‍♂️ #petualanganair",
    },
    { text: "input: harga tiket langkat" },
    {
      text: "output: Rp 100.000 per orang untuk Kolam Abadi Langkat",
    },
    { text: "input: harga tiket bukit lawang" },
    {
      text: "output: Rp 150.000 per orang untuk Bukit Lawang",
    },
    { text: "input: harga tiket sungai bahorok" },
    {
      text: "output: Rp 80.000 per orang untuk Sungai Bahorok",
    },
    { text: "input: harga tiket pantai cermin" },
    {
      text: "output: Rp 50.000 per orang untuk Pantai Cermin",
    },
    { text: "input: harga tiket air terjun siluman" },
    {
      text: "output: Rp 70.000 per orang untuk Air Terjun Siluman",
    },
    { text: "input: harga tiket jungle tracking" },
    {
      text: "output: termasuk dalam biaya menginap untuk Jungle Tracking",
    },
    {
      text: "input: Tau gak harga untuk 2 orang pada destinasi air terjun siluman?",
    },
    { text: "input: harga aktivitas kolam abadi" },
    {
      text: "output: Tur Hutan: Rp 500.000, Snorkeling: Rp 750.000, Spa dan Relaksasi: Rp 1.200.000",
    },
    { text: "input: harga aktivitas jungle tracking" },
    {
      text: "output: Tur Snorkeling: Rp 700.000, Perjalanan Menyelam: Rp 1.400.000, Perawatan Spa: Rp 1.100.000",
    },
    { text: "input: harga aktivitas bukit lawang" },
    {
      text: "output: Trekking Orangutan: Rp 850.000, Jelajah Gua: Rp 600.000, Arung Jeram: Rp 900.000",
    },
    { text: "input: harga aktivitas sungai bahorok" },
    {
      text: "output: Arung Jeram: Rp 750.000, Trekking Hutan: Rp 700.000, Relaksasi di Sungai: Rp 500.000",
    },
    { text: "input: harga aktivitas pantai cermin" },
    {
      text: "output: Snorkeling: Rp 500.000, Perjalanan Kapal: Rp 900.000, Spa Pantai: Rp 1.000.000",
    },
    { text: "input: harga aktivitas air terjun siluman" },
    {
      text: "output: Trekking ke Air Terjun: Rp 600.000, Camping di Hutan: Rp 800.000, Fotografi Alam: Rp 400.000",
    },
    { text: "input: harga akomodasi kolam abadi" },
    {
      text: "output: Kamar Standar: Rp 1.500.000, Kamar Deluxe: Rp 2.500.000, Vila Hutan: Rp 4.000.000",
    },
    { text: "input: harga akomodasi jungle tracking" },
    {
      text: "output: Kamar Standar: Rp 2.000.000, Kamar Deluxe Pemandangan Laut: Rp 3.500.000, Vila Tepi Pantai: Rp 7.000.000",
    },
    { text: "input: harga akomodasi bukit lawang" },
    {
      text: "output: Kamar Standar: Rp 1.800.000, Kamar Deluxe Pemandangan Hutan: Rp 3.000.000, Vila Hutan: Rp 5.500.000",
    },
    { text: "input: harga akomodasi sungai bahorok" },
    {
      text: "output: Kamar Standar: Rp 1.700.000, Kamar Deluxe: Rp 2.800.000, Vila Sungai: Rp 5.200.000",
    },
    { text: "input: harga akomodasi pantai cermin" },
    {
      text: "output: Kamar Standar: Rp 1.600.000, Kamar Deluxe Pemandangan Laut: Rp 2.800.000, Vila Tepi Pantai: Rp 6.000.000",
    },
    { text: "input: harga akomodasi air terjun siluman" },
    {
      text: "output: Kamar Standar: Rp 1.400.000, Kamar Deluxe Pemandangan Air Terjun: Rp 2.600.000, Vila Hutan: Rp 4.800.000",
    },
    { text: "input: kontak kolam abadi" },
    {
      text: "output: Telepon: +62 (555) 987-6543, Email: pemesanan@kolamabadilangkat.com",
    },
    { text: "input: kontak jungle tracking" },
    {
      text: "output: Telepon: +62 (555) 123-4567, Email: pemesanan@surgatropis.com",
    },
    { text: "input: kontak bukit lawang" },
    {
      text: "output: Telepon: +62 (555) 876-5432, Email: pemesanan@bukitlawang.com",
    },
    { text: "input: kontak sungai bahorok" },
    {
      text: "output: Telepon: +62 (555) 765-4321, Email: pemesanan@sungaibahorok.com",
    },
    { text: "input: kontak pantai cermin" },
    {
      text: "output: Telepon: +62 (555) 234-5678, Email: pemesanan@pantaicermin.com",
    },
    { text: "input: kontak air terjun siluman" },
    {
      text: "output: Telepon: +62 (555) 345-6789, Email: pemesanan@airterjunsiluman.com",
    },
  ];

  const result = await model.generateContent({
    contents: [
      {
        role: "user",
        parts: [
          ...parts,
          {
            text,
          },
        ],
      },
    ],
    generationConfig,
  });

  return NextResponse.json({
    response: result.response.text(),
  });
}
