import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        background: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
        padding: isScrolled ? '16px 0' : '28px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a 
          href="#home" 
          style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: '20px', 
            fontWeight: 600, 
            letterSpacing: '0.05em', 
            textTransform: 'uppercase',
            color: 'var(--text)'
          }}
        >
          Hisham Hany
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-only">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--text-muted)',
                position: 'relative',
                padding: '4px 0',
                transition: 'color 0.3s ease',
              }}
              className="nav-link-hover"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '24px',
            height: '16px',
            position: 'relative',
            zIndex: 60,
          }}
          className="mobile-toggle"
        >
          <span
            style={{
              width: '100%',
              height: '1px',
              background: 'var(--text)',
              transition: 'transform 0.4s ease, top 0.4s ease',
              transform: isMobileMenuOpen ? 'rotate(45deg) translateY(5px)' : 'none',
            }}
          />
          <span
            style={{
              width: '100%',
              height: '1px',
              background: 'var(--text)',
              transition: 'opacity 0.3s ease',
              opacity: isMobileMenuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              width: '100%',
              height: '1px',
              background: 'var(--text)',
              transition: 'transform 0.4s ease, top 0.4s ease',
              transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-5px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              background: 'var(--bg)',
              zIndex: 40,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '40px',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '32px',
                  fontWeight: 400,
                  color: 'var(--text)',
                  transition: 'opacity 0.3s ease',
                }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Inject custom CSS for hover underlines and responsive display */}
      <style>{`
        .desktop-only {
          display: flex;
        }
        .nav-link-hover::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: var(--text);
          transition: width 0.3s ease;
        }
        .nav-link-hover:hover {
          color: var(--text) !important;
        }
        .nav-link-hover:hover::after {
          width: 100%;
        }
        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
