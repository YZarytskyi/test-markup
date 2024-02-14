import { Partners } from "@/app/components/Partners";
import Link from "next/link";
import { Research } from "@/app/components/Research";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Link
          href="/multiselect"
          className="block w-full py-10 text-center text-3xl underline transition-colors hover:text-accent"
        >
          Multiselect
        </Link>
        <Partners />
        <Research />
      </main>
      <Footer />
    </>
  );
}
