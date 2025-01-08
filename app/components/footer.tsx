import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold text-blue-600">FinTrack</Link>
            <p className="mt-2">Modern financial tracking for everyone.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
              <li><Link href="/services" className="hover:text-blue-600">Services</Link></li>
              <li><Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 FinTrack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

