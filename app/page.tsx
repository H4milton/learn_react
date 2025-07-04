import { title, subtitle } from "@/components/primitives";
import MyListBox from "@/components/home/MyListBox";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({ size: "lg" })}>APRENDIENDO&nbsp;</span>
        <span className={title({ color: "violet", size: "lg" })}>
          REACT & NEXT.JS&nbsp;
        </span>
        <br />
        <span className={title({ size: "sm" })}>Desarrollado con amor</span>
        <div className={subtitle({ class: "mt-4" })}>
          <h1 className="text-2xl font-bold">Links de documentación</h1>
          <br />
          <MyListBox />
        </div>
      </div>
    </section>
  );
}
