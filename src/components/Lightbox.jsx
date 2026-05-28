import { motion } from 'framer-motion';

export default function Lightbox({ item, onClose, onPrev, onNext }) {
  if (!item) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(10, 10, 10, 0.95)',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={onClose}
    >
      {/* Top Bar with info and Close */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          padding: '24px 48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#FFF',
          zIndex: 110,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h3 style={{ fontFamily: 'var(--font-heading)', color: '#FFF', fontSize: '20px', fontWeight: 400 }}>
            {item.title}
          </h3>
          <p style={{ fontFamily: 'var(--font-body)', color: '#A0A0A0', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {item.category} &middot; {item.year}
          </p>
        </div>

        <button
          onClick={onClose}
          style={{
            color: '#FFF',
            fontSize: '32px',
            fontWeight: 300,
            lineHeight: 1,
            transition: 'opacity 0.3s ease',
          }}
          className="hover-opacity"
        >
          &times;
        </button>
      </div>

      {/* Main image container */}
      <div
        style={{
          position: 'relative',
          maxWidth: '90%',
          maxHeight: '75vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Arrow */}
        <button
          onClick={onPrev}
          style={{
            position: 'absolute',
            left: '-64px',
            color: '#FFF',
            fontSize: '48px',
            fontWeight: 200,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px',
            transition: 'opacity 0.3s ease',
          }}
          className="nav-arrow hover-opacity"
        >
          &#8249;
        </button>

        <motion.img
          key={item.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          src={item.src}
          alt={item.alt}
          style={{
            maxWidth: '100%',
            maxHeight: '75vh',
            objectFit: 'contain',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
          }}
        />

        {/* Right Arrow */}
        <button
          onClick={onNext}
          style={{
            position: 'absolute',
            right: '-64px',
            color: '#FFF',
            fontSize: '48px',
            fontWeight: 200,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px',
            transition: 'opacity 0.3s ease',
          }}
          className="nav-arrow hover-opacity"
        >
          &#8250;
        </button>
      </div>

      {/* Keyboard Shortcuts Prompt */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          color: '#6B6B6B',
          fontSize: '11px',
          fontFamily: 'var(--font-body)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        Use Left/Right keys or Swipe to navigate
      </div>

      <style>{`
        .hover-opacity:hover {
          opacity: 0.6;
        }
        @media (max-width: 768px) {
          .nav-arrow {
            position: fixed !important;
            bottom: 20px !important;
            height: auto !important;
            font-size: 36px !important;
          }
          .nav-arrow:first-of-type {
            left: 24px !important;
          }
          .nav-arrow:last-of-type {
            right: 24px !important;
          }
        }
      `}</style>
    </div>
  );
}
