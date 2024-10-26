"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import logo from "/public/logo.png";
import Link from "next/link";
import { addDoc, getDocs, query, where } from "firebase/firestore";
import { pengunjungCollection } from "@/src/firebase";
import { SignUpFormData } from "@/src/types";


const SignUp: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const onSubmit = async (data: SignUpFormData) => {
    const qEmail = query(pengunjungCollection, where("email", "==", data.email));
    const qPhone = query(pengunjungCollection, where("contact", "==", data.contact));

    const checkEmail = await getDocs(qEmail);
    const checkPhone = await getDocs(qPhone);

    if((!checkEmail.empty && !checkPhone.empty) || (!checkEmail.empty || !checkPhone.empty)){
      toast.info(`Akun dengan email: ${data.email} atau nomor hp: ${data.contact} sudah terdaftar!`)
      return
    }

    toast.promise(addDoc(pengunjungCollection, data), {
      loading: "Membuat Akun..",
      success() {
        router.push("/signin");
        return "Akun berhasil dibuat, mengarahkan ke Halaman Signin";
      },
      error: "Gagal, Akun gagal dibuat atau Akun sudah tersedia",
    });


  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full sm:w-1/3 max-w-screen-sm mx-auto mt-8 p-4 rounded-md text-white"
    >
      <div className=" h-52 relative overflow-hidden mx-auto border rounded-md">
        <Image src={logo} alt="Logo Aplikasi" objectFit="cover" fill />
      </div>
      <h1 className="text-2xl text-white font-bold">Login</h1>

      <div>
        <label className="block">Nama Lengkap</label>
        <input
          type="text"
          {...register("name", { required: "Nama Lengkap is required" })}
          className="border p-2 py-1 mt-2 w-full rounded-sm text-slate-900"
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </div>

      <div>
        <label className="block">Nomor HP</label>
        <input
          type="number"
          {...register("contact", { required: "Nomor HP is required" })}
          className="border p-2 py-1 mt-2 w-full rounded-sm text-slate-900"
        />
        {errors.contact && (
          <span className="text-red-500">{errors.contact.message}</span>
        )}
      </div>

      <div>
        <label className="block">Email</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="border p-2 py-1 mt-2 w-full rounded-sm text-slate-900"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div>
        <label className="block">Password</label>
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
          className="border p-2 py-1 mt-2 w-full rounded-sm text-slate-900"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>
      <button
        type="submit"
        className="bg-slate-800 text-white p-2 rounded-sm w-full"
      >
        Sign Up
      </button>
      <Link
        href={"/signin"}
        className="underline text-center text-white p-2 rounded-sm w-full inline-block"
      >
        Sudah ada akun? masuk disini
      </Link>
    </form>
  );
};

export default SignUp;
