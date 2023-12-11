import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col w-full h-[100%] items-center justify-center">
      <h2 className="text-3xl font-bold">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
