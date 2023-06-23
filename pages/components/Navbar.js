import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <header className="bg-gray-300">
        <nav className="flex justify-center mt-3 space-x-9 ">
          <Link
            href="/home"
            className="mt-4 md:mt-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-8 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Home
          </Link>
          <Link
            href="/createnote"
            className="mt-4 md:mt-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            New Note
          </Link>
        </nav>
      </header>
    </>
  );
}
