import Image from "next/image";
import Button from "../Button";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between h-28">
        <Image src="/logo.svg" alt="logo" width={50} height={50}></Image>
        <Button />
      </header>
    </>
  );
}
