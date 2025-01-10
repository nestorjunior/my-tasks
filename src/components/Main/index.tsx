"use client";
import Image from "next/image";
import Button from "@/components/Button";

export function Main() {
  return (
    <>
      <Image
        src="/hero.svg"
        alt="Hero Image Description"
        width={580}
        height={350}
      ></Image>
      <h1 className="text-4xl font-bold text-white text-center max-w-[625px] pt-10 pb-10">
        System made for you to organize your studies and tasks
      </h1>

      <div>
        <Button
          text="Contact us"
          secondary
          onClick={() => console.log("Botão de contato clicado")}
        />
      </div>
    </>
  );
}
