import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">
          <Link href="/">
            GD
            <svg height="30" width="200" className="absolute  top-[0px] rotate-5">
              <text x="0" y="15" fill="red">
                Home
              </text>
            </svg>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-300">
            Services
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
        {/* Mobile menu here (if applicable) */}
        <div className="flex md:hidden">
          Mobile
        </div>
      </div>
    </nav>
  );
}
