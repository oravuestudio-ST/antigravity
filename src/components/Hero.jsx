import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        height: '100vh',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        padding: 0,
        position: 'relative',
        overflow: 'hidden',
        background: '#000', // Deep background color under the image
      }}
    >
      {/* Background Image Container with subtle Ken Burns effect */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '100%', height: '100%' }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: 'url("/hero.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="ken-burns-img"
          />
        </motion.div>
      </div>

      {/* Modern Light/Dark Soft Vignette Overlay for maximum contrast */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.4) 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        {/* Left Side: Premium Glassmorphism Text Card */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            maxWidth: '560px',
            background: 'rgba(255, 255, 255, 0.82)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            padding: '56px',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.12)',
            borderRadius: '4px',
          }}
          className="glass-card"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.25em',
                color: 'var(--text-muted)',
                marginBottom: '16px',
                display: 'block',
              }}
            >
              Visual Storyteller
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '24px',
              color: 'var(--text)',
            }}
          >
            Hisham <br /> Hany.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p
              className="font-accent"
              style={{
                fontSize: 'clamp(18px, 1.8vw, 22px)',
                lineHeight: 1.45,
                color: 'var(--text-muted)',
                marginBottom: '40px',
                fontWeight: 300,
              }}
            >
              Capturing the raw aesthetics of Automotive power, Commercial products, and high-fashion narratives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}
          >
            <a
              href="#work"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                background: 'var(--accent)',
                color: 'var(--bg)',
                padding: '18px 36px',
                borderRadius: 0,
                transition: 'all 0.3s ease',
              }}
              className="btn-primary"
            >
              Explore Portfolio
            </a>
            <a
              href="#contact"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                borderBottom: '1px solid var(--text)',
                padding: '8px 0',
                transition: 'opacity 0.3s ease',
              }}
              className="btn-secondary"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating tags / categories indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          right: '48px',
          display: 'flex',
          gap: '24px',
          zIndex: 10,
        }}
        className="hero-tags"
      >
        {['Automotive', 'Commercial', 'Fashion', 'Editorial'].map((cat) => (
          <span
            key={cat}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'rgba(255, 255, 255, 0.75)',
            }}
          >
            {cat}
          </span>
        ))}
      </div>

      <style>{`
        .btn-primary:hover {
          background: #333333;
          transform: translateY(-2px);
        }
        .btn-secondary:hover {
          opacity: 0.7;
        }
        @media (max-width: 768px) {
          .glass-card {
            padding: 40px 32px !important;
            margin: 0 12px;
          }
          .hero-tags {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
