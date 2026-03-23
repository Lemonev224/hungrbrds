'use client';

import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = `text-sm tracking-wider transition-all duration-300 relative group ${
    isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-white/70'
  }`;

  const visitClass = `px-8 py-3 border text-sm tracking-widest transition-all duration-300 ${
    isScrolled
      ? 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
      : 'border-white text-white hover:bg-white hover:text-gray-900'
  }`;

  const navLinks = [
    { label: 'HOME', href: '/#home' },
    { label: 'MENU', href: '/menu' },
    { label: 'ABOUT', href: '/#about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="flex justify-between items-center h-24">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            <Image
              src="/logo.jpg"
              alt="Hungry Birds"
              width={56}
              height={56}
              style={{ width: 'auto' }}
            />
            <div className={`border-l pl-4 ${isScrolled ? 'border-gray-300' : 'border-white/40'}`}>
              <p
                className={`text-xl tracking-widest ${isScrolled ? 'text-gray-900' : 'text-white'}`}
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, letterSpacing: '0.15em' }}
              >
                HUNGRY BIRDS
              </p>
              <p
                className={`text-[10px] tracking-[0.2em] mt-0.5 ${isScrolled ? 'text-gray-500' : 'text-white/60'}`}
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
              >
                COFFEE SHOP
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={linkClass}
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="/#contact"
              className={visitClass}
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, letterSpacing: '0.15em' }}
            >
              VISIT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`lg:hidden py-8 border-t ${isScrolled ? 'border-gray-200' : 'border-white/20'}`}>
            <div className="flex flex-col gap-6">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className={linkClass}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className={visitClass}
                onClick={() => setIsMenuOpen(false)}
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, letterSpacing: '0.15em' }}
              >
                VISIT US
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}