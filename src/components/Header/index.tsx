import Image from "next/image";
import Button from "@/components/Button";

export function Header() {
  return (
    <>
      <Image src="/logo.svg" alt="logo" width={50} height={50}></Image>
      <Button text="My Account" primary />
    </>
  );
}
