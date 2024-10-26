import { firebaseDate } from "../types";
import { format} from "date-fns"
import {id} from "date-fns/locale"

export const showCurrency = (number: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};


export const showFormattedDate = (date: firebaseDate) => format(+date.seconds * 1000, "eeee, yyyy-MM-dd HH:mm", { locale: id });

