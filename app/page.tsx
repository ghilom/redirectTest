import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/one">One</Link>
      <Link href="/two">Two</Link>
      <Link href="/three">Three</Link>
    </div>
  );
}
