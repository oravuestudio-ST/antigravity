import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" ref={ref} style={{ background: '#FFF' }}>
      <div className="container">
        <span className="section-label">Connect</span>
        <h2 className="section-heading">Let's Collaborate.</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '64px',
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="font-accent"
              style={{
                fontSize: '24px',
                color: 'var(--text-muted)',
                marginBottom: '48px',
                lineHeight: 1.4,
              }}
            >
              Interested in hiring me for an upcoming project, print inquiries, or creative collaboration?
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '48px' }}>
              <div>
                <span
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-body)',
                    color: 'var(--text-light)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Email
                </span>
                <a
                  href="mailto:contact@hishamhany.com"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '24px',
                    fontWeight: 400,
                    color: 'var(--text)',
                    borderBottom: '1px solid transparent',
                    transition: 'border-color 0.3s ease',
                  }}
                  className="contact-link"
                >
                  contact@hishamhany.com
                </a>
              </div>

              <div>
                <span
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-body)',
                    color: 'var(--text-light)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Phone & WhatsApp
                </span>
                <a
                  href="tel:+20100000000"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '24px',
                    fontWeight: 400,
                    color: 'var(--text)',
                  }}
                >
                  +20 100 000 0000
                </a>
              </div>

              <div>
                <span
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-body)',
                    color: 'var(--text-light)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Based in
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '24px',
                    fontWeight: 400,
                    color: 'var(--text)',
                  }}
                >
                  Cairo, Egypt
                </span>
              </div>
            </div>

            {/* Social media connections */}
            <div>
              <span
                style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-body)',
                  color: 'var(--text-light)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  display: 'block',
                  marginBottom: '16px',
                }}
              >
                Follow My Journey
              </span>
              <div style={{ display: 'flex', gap: '24px' }}>
                {['Instagram', 'Behance', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      transition: 'color 0.3s ease',
                    }}
                    className="social-hover"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label
                  htmlFor="name"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-muted)',
                  }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  style={{
                    border: 'none',
                    borderBottom: '1px solid var(--border)',
                    padding: '12px 0',
                    fontSize: '16px',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                    background: 'transparent',
                  }}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label
                  htmlFor="email"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-muted)',
                  }}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  style={{
                    border: 'none',
                    borderBottom: '1px solid var(--border)',
                    padding: '12px 0',
                    fontSize: '16px',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                    background: 'transparent',
                  }}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label
                  htmlFor="message"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-muted)',
                  }}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  style={{
                    border: 'none',
                    borderBottom: '1px solid var(--border)',
                    padding: '12px 0',
                    fontSize: '16px',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                    resize: 'none',
                    background: 'transparent',
                  }}
                  className="form-input"
                />
              </div>

              <button
                type="submit"
                style={{
                  alignSelf: 'flex-start',
                  background: 'var(--accent)',
                  color: 'var(--bg)',
                  padding: '16px 40px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  transition: 'all 0.3s ease',
                  marginTop: '16px',
                }}
                className="btn-primary"
              >
                Send Message
              </button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    padding: '16px',
                    background: 'var(--bg-soft)',
                    borderLeft: '2px solid var(--text)',
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-link:hover {
          border-color: var(--text) !important;
        }
        .social-hover:hover {
          color: var(--text) !important;
        }
        .form-input:focus {
          border-color: var(--text) !important;
        }
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 56px !important;
          }
        }
      `}</style>
    </section>
  );
}
