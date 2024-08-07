export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-4 mb-8 shadow-lg rounded-b-lg">
      <p className="text-sm mb-2">&copy; 2024 My Website</p>
      <p className="text-xs">All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="#"
          className="text-gray-100 hover:text-slate-800 transition-colors"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="text-gray-100 hover:text-slate-800 transition-colors"
        >
          Terms of Service
        </a>
        <a
          href="#"
          className="text-gray-100 hover:text-slate-800 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </footer>
  );
}
