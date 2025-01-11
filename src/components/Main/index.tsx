"use client";
import Image from "next/image";
import Link from "next/link";

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
        <Link
          href="/account"
          className="px-5 py-2 transition-colors duration-300 ease-in-out text-black bg-white hover:bg-black hover:text-white rounded-md border"
        >
          Contact us
        </Link>
      </div>
    </>
  );
}
