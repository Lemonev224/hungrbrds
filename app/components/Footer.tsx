import { Facebook, Instagram, MapPin, Phone, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-20">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="grid md:grid-cols-12 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/logo.jpg"
                alt="Hungry Birds"
                width={48}
                height={48}
                style={{ width: 'auto' }}
              />
              <div className="border-l border-gray-700 pl-4">
                <h3
                  className="text-lg tracking-widest text-white"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, letterSpacing: '0.15em' }}
                >
                  HUNGRY BIRDS
                </h3>
                <p
                  className="text-[9px] tracking-[0.2em] text-gray-500 mt-1"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
                >
                  COFFEE SHOP OF OAKHAM
                </p>
              </div>
            </div>
            <p
              className="text-sm text-gray-500 leading-relaxed mb-8 max-w-sm"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
            >
              A refined coffee experience in the heart of Oakham, where every cup tells a story and every visit feels like home.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/bestcoffeeshopinoakham"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 border border-gray-700 flex items-center justify-center hover:border-white hover:text-white transition-all duration-300"
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.instagram.com/hungry_birds_oakham"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 border border-gray-700 flex items-center justify-center hover:border-white hover:text-white transition-all duration-300"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4
              className="text-xs tracking-[0.2em] text-white mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
            >
              NAVIGATION
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/#home' },
                { label: 'Menu', href: '/menu' },
                { label: 'About', href: '/#about' },
                { label: 'Contact', href: '/#contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm hover:text-white transition-colors"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours + Address */}
          <div className="md:col-span-4 space-y-8">
            <div>
              <h4
                className="text-xs tracking-[0.2em] text-white mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
              >
                OPENING HOURS
              </h4>
              <ul
                className="space-y-3 text-sm"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
              >
                <li className="flex justify-between max-w-xs">
                  <span>Monday – Tuesday</span>
                  <span className="text-gray-600">9:30 – 16:30</span>
                </li>
                <li className="flex justify-between max-w-xs">
                  <span>Wednesday – Saturday</span>
                  <span className="text-gray-600">9:00 – 17:00</span>
                </li>
                <li className="flex justify-between max-w-xs">
                  <span>Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </li>
              </ul>
            </div>

            <div>
              <h4
                className="text-xs tracking-[0.2em] text-white mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
              >
                FIND US
              </h4>
              <div className="space-y-2 text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                <p>2 Burley Road, Oakham</p>
                <p>Rutland, LE15 6DH</p>
                <a
                  href="tel:01572868419"
                  className="block mt-3 hover:text-white transition-colors"
                >
                  01572 868419
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-xs text-gray-600"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
            >
              © {new Date().getFullYear()} Hungry Birds. All rights reserved.
            </p>
            <p
              className="text-xs text-gray-700"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
            >
              Website by{' '}
              <span className="hover:text-gray-400 transition-colors cursor-pointer">
                Vero Digital
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
