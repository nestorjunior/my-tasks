import Image from "next/image";
import Button from "../Button";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between h-28">
        <Image src="/logo.svg" alt="logo" width={166} height={46}></Image>
        <Button />
      </header>
    </>
  );
}
