"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/src/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import { PlaceKodeType } from "@/src/types";
import { destinationInformation } from "@/src/stataic";
import { Checkbox } from "@/src/components/ui/checkbox";
import { toast } from "sonner";
import { addDoc } from "firebase/firestore";
import { ticketCollection } from "@/src/firebase";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const formSchema = z.object({
  accommodation: z.array(
    z
      .object({
        type: z.string(),
        price: z.number().positive(),
      })
      .optional()
  ),
  activity: z.array(
    z
      .object({
        name: z.string(),
        price: z.number().positive(),
      })
      .optional()
  ),
  contact: z.string().optional(),
  person: z.string(),
  placeKode: z.string(),
  status: z.boolean(),
  email: z.string().email(),
  date: z.date(),
});

type FormValues = z.infer<typeof formSchema>;

export default function FormOrder({
  placeKode,
  email,
}: {
  placeKode: PlaceKodeType;
  email: string | undefined;
}) {
  const session = useSession();
  const router = useRouter();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      accommodation: [],
      contact: "",
      activity: [],
      person: "",
      placeKode: placeKode,
      status: false,
      email,
      date: new Date(),
    },
  });

  const { accommodations, activities } = destinationInformation.find(
    (des) => des.placeKode == placeKode
  )!;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    data.contact = session.data?.user?.contact as string;
    try {
      await addDoc(ticketCollection, data);

      toast.success("Berhasil Melakukan Reservasi");

      router.push("/ticket");
    } catch (error) {
      toast.success("Gagal Melakukan Reservasi");
      // @ts-expect-error "eror"
      throw new Error(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full bg-white p-4 rounded-md text-black max-w-lg mx-auto"
      >
        <FormField
          control={form.control}
          name="accommodation"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Akomodasi</FormLabel>
                <FormDescription>
                  Pilih setidaknya 1 Akomodasi atau lebih
                </FormDescription>
              </div>
              {accommodations.map((accommodation) => (
                <FormField
                  key={accommodation.type}
                  control={form.control}
                  name="accommodation"
                  render={({ field }) => {
                    // Pastikan field.value adalah array
                    const valueArray = field.value || [];

                    return (
                      <FormItem
                        key={accommodation.type}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={valueArray.some(
                              (item) => item?.type === accommodation.type
                            )}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...valueArray, accommodation])
                                : field.onChange(
                                    valueArray.filter(
                                      (item) =>
                                        item?.type !== accommodation.type
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {accommodation.type} - Rp{" "}
                          {accommodation.price.toLocaleString()}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Bagian Activity yang bisa diaktifkan nanti */}
        <FormField
          control={form.control}
          name="activity"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Aktivitas</FormLabel>
                <FormDescription>
                  Pilih setidaknya 1 Aktivitas atau lebih
                </FormDescription>
              </div>
              {activities.map((item) => (
                <FormField
                  key={item.name}
                  control={form.control}
                  name="activity"
                  render={({ field }) => {
                    const fieldValue = field.value || [];
                    return (
                      <FormItem
                        key={item.name}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={fieldValue.some(
                              (i) => i?.name === item.name
                            )}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...fieldValue, item])
                                : field.onChange(
                                    field.value?.filter(
                                      (i) => i?.name !== item.name
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.name} - Rp {item.price.toLocaleString()}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="person"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Jumlah Orang</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="w-full bg-slate-900" type="submit">
          Reservasi
        </Button>
      </form>
    </Form>
  );
}
