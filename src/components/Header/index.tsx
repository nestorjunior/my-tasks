import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <>
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={50} height={50}></Image>
      </Link>

      <Link
        href="/account"
        className="px-5 py-2 border transition-colors duration-300 ease-in-out text-white hover:text-black hover:bg-white rounded-full border-white"
      >
        My Account
      </Link>
    </>
  );
}
