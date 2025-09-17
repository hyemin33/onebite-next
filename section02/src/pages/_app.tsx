import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    router.push("/book");
  };
  
  return (
    <>
      <header>
        <Link href={"/"}>index</Link> &nbsp;
        <Link href={"/search"}>search</Link> &nbsp;
        <Link href={"/book"}>book</Link> &nbsp;
        <div>
          <button type="button" onClick={onClickButton}>
            /book 페이지로 이동
          </button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
