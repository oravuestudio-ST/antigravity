export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg-soft)',
        padding: '40px 0',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            color: 'var(--text-muted)',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          &copy; {new Date().getFullYear()} Hisham Hany &middot; All Rights Reserved.
        </span>

        <div style={{ display: 'flex', gap: '32px' }}>
          <a
            href="#home"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--text-light)',
              transition: 'color 0.3s ease',
            }}
            className="footer-nav"
          >
            Back To Top
          </a>
        </div>
      </div>
      <style>{`
        .footer-nav:hover {
          color: var(--text) !important;
        }
      `}</style>
    </footer>
  );
}
