import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const certs = [
  {
    title: 'Certified Commercial Photographer',
    issuer: 'Professional Photographers of America (PPA)',
    year: '2023',
  },
  {
    title: 'Advanced Color Grading Certificate',
    issuer: 'Capture One Academy',
    year: '2022',
  },
  {
    title: 'Studio Lighting Masterclass',
    issuer: 'Gulf Photo Plus (GPP)',
    year: '2021',
  },
  {
    title: 'Automotive & Rig Photography Course',
    issuer: 'Fstoppers Academy',
    year: '2021',
  },
];

export default function Certifications() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certifications" ref={ref} style={{ background: '#FFF', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <span className="section-label">Validation</span>
        <h2 className="section-heading">Certifications.</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}
        >
          {certs.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              style={{
                border: '1px solid var(--border)',
                padding: '32px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg)',
                transition: 'all 0.3s ease',
              }}
              className="cert-card"
            >
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  color: 'var(--text-light)',
                  display: 'block',
                  marginBottom: '16px',
                  fontWeight: 500,
                }}
              >
                {cert.year}
              </span>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 500,
                  fontFamily: 'var(--font-heading)',
                  marginBottom: '8px',
                  color: 'var(--text)',
                }}
              >
                {cert.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                }}
              >
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .cert-card:hover {
          border-color: var(--text);
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.02);
        }
      `}</style>
    </section>
  );
}
