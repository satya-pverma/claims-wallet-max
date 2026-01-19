import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/Juice-2024-Logo-2000x800.png"
        alt="Juice"
        width={80}
        height={29}
        priority
      />
    </Link>
  );
}
