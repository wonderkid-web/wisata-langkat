"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import logo from "/public/logo.png";
import Link from "next/link";
import { SignInFormData } from "@/src/types";

const SignIn: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const onSubmit = async (data: SignInFormData) => {
    try {
      const result = await signIn("credentials", { ...data, redirect: false });
      if (result?.error) {
        throw new Error(result.error); // Lempar error jika ada
      }
      toast.success("Berhasil Masuk, mengarahkan ke landing page");
      if (data.email == "admin") return router.push("/admin");
      router.push("/");
    } catch (error: any) {
      toast.warning(`Email atau Password kamu salah!, info error: ${error}`);
    }
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
        <label className="block">Email</label>
        <input
          type="text"
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
        Sign In
      </button>

      <Link
        href={"/signup"}
        className="underline text-center text-white p-2 rounded-sm w-full inline-block"
      >
        Belum ada akun? daftar disini
      </Link>
    </form>
  );
};

export default SignIn;
