import { Link } from "@/src/navigation";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-4 mb-8 shadow-lg rounded-b-lg">
      <h1 className="text-2xl font-bold mb-2">Welcome to My Website</h1>
      <p className="text-lg text-gray-100 hover:text-slate-800 transition-colors">
        <Link href="/">Home</Link>
      </p>
    </header>
  );
}
