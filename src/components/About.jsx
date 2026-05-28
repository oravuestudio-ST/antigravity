import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { stats } from '../data/experience';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" ref={ref} style={{ background: 'var(--bg-soft)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1.2fr',
            gap: '64px',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Portrait Image column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
              boxShadow: '0 12px 32px rgba(0,0,0,0.05)',
              aspectRatio: '4/5',
            }}
          >
            <img
              src="/about-portrait.jpg"
              alt="Hisham Hany Portrait"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </motion.div>

          {/* Text Info column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <span className="section-label">Biography</span>
            <h2 className="section-heading" style={{ marginBottom: '32px' }}>
              The Lens Behind the Narrative.
            </h2>

            <p
              style={{
                fontSize: '16px',
                color: 'var(--text-muted)',
                marginBottom: '24px',
                lineHeight: 1.7,
              }}
            >
              I am Hisham Hany, an editorial and commercial photographer based in Cairo, Egypt. 
              My photographic practice sits at the intersection of technical precision and visual raw storytelling.
              Over the past 4+ years, I have specialized in creating striking visuals that span across luxury automotive designs, high-end commercial campaigns, and dramatic fashion editorials.
            </p>

            <p
              className="font-accent"
              style={{
                fontSize: '20px',
                lineHeight: 1.5,
                color: 'var(--text)',
                marginBottom: '40px',
                borderLeft: '2px solid var(--text)',
                paddingLeft: '24px',
                fontWeight: 300,
              }}
            >
              "Photography is not about documenting what exists, but about uncovering the visual narrative hidden within form, light, and motion."
            </p>

            {/* Animated Stats Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '32px',
              }}
            >
              {stats.map((stat, i) => (
                <div key={stat.label}>
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: 'easeOut' }}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '36px',
                      fontWeight: 600,
                      color: 'var(--text)',
                      marginBottom: '4px',
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '12px',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
