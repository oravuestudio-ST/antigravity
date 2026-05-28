import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioItems, categories } from '../data/portfolio';
import Lightbox from './Lightbox';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  // Filter items
  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const handleNext = useCallback(() => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  }, [selectedItem, filteredItems]);

  const handlePrev = useCallback(() => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  }, [selectedItem, filteredItems]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!selectedItem) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedItem(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, handleNext, handlePrev]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  return (
    <section id="work" ref={ref} style={{ background: '#FFF' }}>
      <div className="container">
        <span className="section-label">Selected Works</span>
        <h2 className="section-heading">Creative Portfolio.</h2>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            marginBottom: '48px',
            flexWrap: 'wrap',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '16px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: activeCategory === cat ? 'var(--text)' : 'var(--text-muted)',
                position: 'relative',
                padding: '4px 0',
                transition: 'color 0.3s ease',
              }}
              className="filter-tab"
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeFilterBorder"
                  style={{
                    position: 'absolute',
                    bottom: '-17px',
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'var(--text)',
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid of items */}
        <motion.div
          layout
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '32px',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedItem(item)}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  aspectRatio: '3/4',
                  background: 'var(--bg-soft)',
                }}
                className="portfolio-card"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                  className="portfolio-card-img"
                  loading="lazy"
                />

                {/* Overlaid details reveal on hover */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to top, rgba(10, 10, 10, 0.8) 0%, rgba(10, 10, 10, 0) 50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '32px',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                  }}
                  className="portfolio-card-overlay"
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '11px',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginBottom: '8px',
                    }}
                  >
                    {item.category}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '24px',
                      color: '#FFF',
                      fontWeight: 400,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <Lightbox
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </AnimatePresence>

      <style>{`
        .portfolio-card:hover .portfolio-card-img {
          transform: scale(1.05);
        }
        .portfolio-card:hover .portfolio-card-overlay {
          opacity: 1 !important;
        }
        @media (max-width: 480px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
