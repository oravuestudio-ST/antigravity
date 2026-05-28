import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Photography & Lighting',
    skills: ['Commercial Studio Lighting', 'Automotive Light Painting', 'High-Speed Sync (HSS)', 'Outdoor Flash Ambient Mixing', 'Natural Light Sculpting'],
  },
  {
    title: 'Post-Production',
    skills: ['Adobe Lightroom Classic', 'Adobe Photoshop', 'Capture One Pro', 'High-End Beauty Retouching', 'Color Grading & Calibration'],
  },
  {
    title: 'Creative Direction',
    skills: ['Storyboarding', 'Location Scouting', 'Model Casting & Styling', 'Mood Board Curation', 'Set Design'],
  },
  {
    title: 'Professional',
    skills: ['Client Relations', 'Production Budgeting', 'Creative Agency Collaboration', 'Studio Operations', 'Social Media Branding'],
  },
];

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" ref={ref} style={{ background: 'var(--bg-soft)' }}>
      <div className="container">
        <span className="section-label">Expertise</span>
        <h2 className="section-heading">Skills & Capabilities.</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
          }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 500,
                  fontFamily: 'var(--font-body)',
                  color: 'var(--text)',
                  borderBottom: '1px solid var(--border)',
                  paddingBottom: '12px',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {category.title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--text-muted)',
                      padding: '8px 12px',
                      background: 'rgba(255, 255, 255, 0.6)',
                      border: '1px solid rgba(0, 0, 0, 0.03)',
                      borderRadius: 'var(--radius-sm)',
                      transition: 'all 0.3s ease',
                    }}
                    className="skill-pill"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skill-pill:hover {
          background: var(--text) !important;
          color: var(--bg) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
