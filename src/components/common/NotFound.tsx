import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <h1 className="text-3xl font-bold text-center mb-8">404 - Not Found</h1>
      <Link href="/" className="block text-center underline underline-offset-4">
        <span>&#129144; </span>Go back to home
      </Link>
    </div>
  );
};

export default NotFound;
