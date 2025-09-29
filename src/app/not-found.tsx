import Link from "next/link";
import Image from "../components/shared/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center">
        <Image
          src="/not-found.png"
          className="w-96 mb-8 mx-auto"
          alt="Not Found"
          width={384}
          height={256}
        />
        <h1 className="text-3xl mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-6">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="bg-dark-lighten hover:bg-dark-darken text-white transition duration-300 py-3 px-6 rounded-md"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
