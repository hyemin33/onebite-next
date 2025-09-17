import { ReactNode } from "react";
import style from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";

export default function Home() {
  return <h1 className={style.h1}>index</h1>;
}

Home.getLaout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
