import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '../data/experience';

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" ref={ref} style={{ background: '#FFF' }}>
      <div className="container">
        <span className="section-label">Professional Path</span>
        <h2 className="section-heading">Experience.</h2>

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', paddingLeft: '32px' }}>
          {/* Vertical timeline line */}
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              left: '0',
              top: '8px',
              width: '1px',
              background: 'var(--text)',
              transformOrigin: 'top',
            }}
          />

          {/* Timeline Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: 'relative' }}
              >
                {/* Node indicator */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-37px',
                    top: '8px',
                    width: '11px',
                    height: '11px',
                    borderRadius: '50%',
                    background: '#FFF',
                    border: '2px solid var(--text)',
                  }}
                />

                {/* Content */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '8px',
                    }}
                  >
                    <h3 style={{ fontSize: '22px', fontWeight: 500, fontFamily: 'var(--font-heading)' }}>
                      {exp.role}
                    </h3>
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '13px',
                        color: 'var(--text-muted)',
                        fontWeight: 500,
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '16px',
                    }}
                  >
                    {exp.company} &middot; {exp.location}
                  </div>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: '14px',
                          color: 'var(--text-muted)',
                          position: 'relative',
                          paddingLeft: '16px',
                        }}
                      >
                        <span style={{ position: 'absolute', left: 0, color: 'var(--text)' }}>&middot;</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
