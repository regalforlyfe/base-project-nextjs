export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-6 mt-8 border-t-2 border-gray-700">
      <p className="text-sm mb-2">&copy; 2024 My Website</p>
      <p className="text-xs">All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors"
        >
          Terms of Service
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors"
        >
          Contact Us
        </a>
      </div>
    </footer>
  );
}
