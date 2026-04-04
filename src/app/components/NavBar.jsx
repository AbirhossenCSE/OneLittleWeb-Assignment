import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/google.png"
            alt="Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-8 text-gray-700 font-medium">
            <li>
              <Link href="/" className="text-pink-500 border-b-2 border-pink-500 pb-1">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-pink-500 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-pink-500 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-pink-500 transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-pink-500 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-pink-500 transition-colors">
                Resources
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div>
          <Link
            href="/schedule"
            className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition"
          >
            Schedule A Meeting
          </Link>
        </div>
      </div>
    </header>
  );
}