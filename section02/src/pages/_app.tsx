import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    router.push("/book");
  };

  // 마운트될때 프리패칭을 해주고 싶다면 router.prefetch를 사용한다.
  useEffect(() => {
    router.prefetch("/book");
  }, []);

  return (
    <>
      <header>
        <Link href={"/"}>index</Link> &nbsp;
        <Link href={"/search"} prefetch={false}>
          search
        </Link>
        &nbsp;
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
