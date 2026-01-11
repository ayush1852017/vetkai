import { motion } from 'framer-motion';
import { useState } from 'react';

interface Card {
  id: string;
  type: 'vision' | 'mission';
  title: string;
  subtitle: string;
  description: string;
  themeColor: string;
  items: Array<{
    label: string;
    detail: string;
  }>;
}

const CARDS: Card[] = [
  {
    id: 'vision',
    type: 'vision',
    title: 'Change Makers',
    subtitle: 'VISION',
    description: 'To build communities and products for change in healthcare & education in India, by doing the right things and challenging the status quo.',
    themeColor: 'hsl(var(--vetkai-terracotta))',
    items: [
      { label: 'Healthcare', detail: 'Revolutionary care delivery' },
      { label: 'Education', detail: 'Transform learning outcomes' },
      { label: 'Practice', detail: 'Evidence-based excellence' },
      { label: 'Community', detail: 'Empowered ecosystems' },
    ],
  },
  {
    id: 'mission',
    type: 'mission',
    title: 'Better Outcomes',
    subtitle: 'MISSION',
    description: 'To improve outcomes for students, teachers, practitioners & patients through continuous innovation in our experiences, products and services.',
    themeColor: 'hsl(var(--vetkai-peacock))',
    items: [
      { label: 'Students', detail: 'Learning outcomes & career readiness' },
      { label: 'Teachers', detail: 'Empowerment & pedagogical tools' },
      { label: 'Practitioners', detail: 'Evidence-based clinical excellence' },
      { label: 'Patients', detail: 'Accessible, quality healthcare' },
    ],
  },
];

const MissionSection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-vetkai-terracotta/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-vetkai-peacock/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-vetkai-terracotta" />
            <span className="text-sm font-bold tracking-[0.3em] uppercase text-vetkai-terracotta">
              Our Purpose
            </span>
            <div className="h-px w-12 bg-vetkai-terracotta" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Vision & Mission
          </h2>
          <p className="text-lg text-muted-foreground">
            Driving systemic change in India's education and healthcare sectors
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {CARDS.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              onMouseEnter={() => setExpandedCard(card.id)}
              onMouseLeave={() => setExpandedCard(null)}
              className="group"
            >
              <div
                className={`
                  relative h-full p-8 md:p-10 rounded-3xl border-2 transition-all duration-500
                  ${expandedCard === card.id
                    ? 'bg-card shadow-2xl scale-[1.02]'
                    : 'border-border bg-card/50'
                  }
                `}
                style={{
                  borderColor: expandedCard === card.id ? card.themeColor : '',
                  boxShadow: expandedCard === card.id ? `0 25px 50px -12px ${card.themeColor.replace('hsl', 'hsla').replace(')', ', 0.1)')}` : ''
                }}
              >
                {/* Decorative corner accent */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full"
                  style={{
                    background: `radial-gradient(circle at top right, ${card.themeColor}, transparent)`,
                  }}
                />

                {/* Header */}
                <div className="relative mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-px w-8" style={{ backgroundColor: card.themeColor }} />
                    <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: card.themeColor }}>
                      {card.subtitle}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <div className="relative pl-5">
                    <div 
                      className="absolute left-0 top-1 bottom-0 w-1 rounded-full"
                      style={{ background: `linear-gradient(to bottom, ${card.themeColor}, transparent)` }}
                    />
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Items Grid */}
                <div className="space-y-3">
                  {card.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + itemIndex * 0.1 }}
                      className={`
                        relative flex items-center gap-4 p-4 rounded-xl transition-all duration-300
                        ${expandedCard === card.id
                          ? 'bg-muted/50 transform translate-x-2'
                          : 'bg-transparent'
                        }
                      `}
                    >
                      {/* Color indicator */}
                      <div
                        className="flex-shrink-0 w-3 h-3 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: card.themeColor,
                          boxShadow: expandedCard === card.id ? `0 0 12px ${card.themeColor}` : 'none',
                        }}
                      />

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-foreground mb-1">
                          {item.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {item.detail}
                        </div>
                      </div>

                      {/* Arrow */}
                      <motion.div
                        animate={{
                          x: expandedCard === card.id ? 0 : -8,
                          opacity: expandedCard === card.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                        style={{ color: card.themeColor }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M7.5 15L12.5 10L7.5 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl"
                  style={{ background: `linear-gradient(to right, transparent, ${card.themeColor}, transparent)` }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: expandedCard === card.id ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-vetkai-terracotta text-white rounded-full font-semibold tracking-wide hover:shadow-lg hover:shadow-vetkai-terracotta/25 transition-all"
          >
            <span>Learn More About Our Impact</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="transform group-hover:translate-x-1 transition-transform"
            >
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
