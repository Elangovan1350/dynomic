import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <Link
        href={"/products"}
        className="text-2xl font-bold bg-blue-400 px-10 py-3 mb-10 rounded-lg"
      >
        Go To Products
      </Link>
      <Link
        href={"/form"}
        className="text-2xl font-bold bg-blue-400 px-10 py-3 mb-10 rounded-lg"
      >
        Go To Form
      </Link>
    </main>
  );
}
