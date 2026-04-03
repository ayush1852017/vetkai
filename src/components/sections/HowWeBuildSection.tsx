import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─── Data ──────────────────────────────────────────────────────── */

const ITEMS = [
  { id: 'outcome',   num: '01', title: 'Outcome-focused',         desc: 'Designed around what actually needs to happen.' },
  { id: 'friction',  num: '02', title: 'Built to reduce friction', desc: 'Complexity is removed before users ever see it.' },
  { id: 'structure', num: '03', title: 'Structured for real use',  desc: 'Not demos. Not MVPs. Systems people rely on.' },
] as const;

type ItemId = typeof ITEMS[number]['id'];

const QUOTES: Record<ItemId, string> = {
  outcome:   'Every feature traces back to one question: does this move the needle for the person using it?',
  friction:  "The best interface is the one that was never needed. We absorb complexity so users don't have to.",
  structure: 'We do not build everything that is possible. We build what is necessary — and build it well.',
};

/* ─── Vetkai palette constants ──────────────────────────────────── */
const T  = '#C84630';          // terracotta
const T2 = 'rgba(200,70,48,0.55)';
const T3 = 'rgba(200,70,48,0.35)';
const G  = '#FDB813';          // gold
const P  = '#006D70';          // peacock
const P2 = 'rgba(0,109,112,0.65)';
const MONO = "'Space Grotesk', monospace";
const SERIF = "'Space Grotesk', sans-serif";

/* ─── Right-panel visuals ────────────────────────────────────────── */

function OutcomeVisual({ active }: { active: boolean }) {
  const base: React.CSSProperties = {
    opacity: active ? 1 : 0,
    transform: active ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.6s cubic-bezier(.4,0,.2,1), transform 0.6s cubic-bezier(.4,0,.2,1)',
    position: 'absolute', inset: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    pointerEvents: active ? 'auto' : 'none',
  };
  const label: React.CSSProperties = {
    position: 'absolute', top: 10, left: 14,
    fontFamily: MONO, fontSize: 10, letterSpacing: '0.14em',
    textTransform: 'uppercase',
  };
  return (
    <div style={base}>
      <div style={{ position: 'relative', width: 280, height: 256 }}>
        {/* Outer — Outcome */}
        <div style={{
          position: 'absolute', inset: 0,
          border: `1.5px solid ${T2}`, borderRadius: 3,
          opacity: active ? 1 : 0, transition: 'opacity 0.5s 0.1s',
        }}>
          <span style={{ ...label, color: T2 }}>Outcome</span>
        </div>
        {/* Mid — Structure */}
        <div style={{
          position: 'absolute', top: 38, left: 38, right: 18, bottom: 18,
          border: `1.5px solid ${P2}`, borderRadius: 3,
          opacity: active ? 1 : 0, transition: 'opacity 0.5s 0.3s',
        }}>
          <span style={{ ...label, color: P2 }}>Structure</span>
        </div>
        {/* Inner — Necessary */}
        <div style={{
          position: 'absolute', top: 80, left: 76, right: 52, bottom: 52,
          border: `2px solid ${G}`, borderRadius: 3,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: active ? 1 : 0, transition: 'opacity 0.5s 0.55s',
        }}>
          <span style={{ ...label, color: G, fontSize: 9 }}>Necessary</span>
          {/* Center dot */}
          <div style={{
            width: 12, height: 12, borderRadius: '50%', background: G,
            marginTop: 14,
            opacity: active ? 1 : 0,
            transform: active ? 'scale(1)' : 'scale(0)',
            transition: 'opacity 0.4s 0.85s, transform 0.4s 0.85s cubic-bezier(.4,0,.2,1)',
          }} />
        </div>
      </div>
    </div>
  );
}

function FrictionVisual({ active }: { active: boolean }) {
  const layers = [
    { label: 'Noise',       color: T3,   delay: 0.1 },
    { label: 'Edge cases',  color: T2,   delay: 0.25 },
    { label: 'Config',      color: T,    delay: 0.4 },
  ];
  const base: React.CSSProperties = {
    opacity: active ? 1 : 0,
    transform: active ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.6s cubic-bezier(.4,0,.2,1), transform 0.6s cubic-bezier(.4,0,.2,1)',
    position: 'absolute', inset: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    pointerEvents: active ? 'auto' : 'none',
  };
  return (
    <div style={base}>
      <div style={{ position: 'relative', width: 280, height: 256 }}>
        {/* Struck layers */}
        {layers.map((l, i) => (
          <div key={i} style={{
            position: 'absolute', left: 0, right: 0, top: i * 54,
            height: 44,
            border: `1.5px dashed ${l.color}`, borderRadius: 4,
            display: 'flex', alignItems: 'center', padding: '0 16px',
            opacity: active ? 1 : 0,
            transform: active ? 'translateX(0)' : 'translateX(32px)',
            transition: `opacity 0.45s ${l.delay}s, transform 0.45s ${l.delay}s cubic-bezier(.4,0,.2,1)`,
          }}>
            <span style={{
              fontFamily: MONO, fontSize: 12, color: l.color,
              letterSpacing: '0.06em',
              textDecoration: 'line-through', textDecorationColor: l.color,
            }}>{l.label}</span>
            <span style={{ marginLeft: 'auto', fontFamily: MONO, fontSize: 14, color: l.color }}>×</span>
          </div>
        ))}
        {/* Clean result */}
        <div style={{
          position: 'absolute', left: 0, right: 0, top: 3 * 54 + 14,
          height: 52,
          border: `2px solid ${P}`, borderRadius: 4,
          display: 'flex', alignItems: 'center', padding: '0 16px',
          background: 'rgba(0,109,112,0.04)',
          opacity: active ? 1 : 0,
          transform: active ? 'translateX(0)' : 'translateX(32px)',
          transition: 'opacity 0.55s 0.7s, transform 0.55s 0.7s cubic-bezier(.4,0,.2,1)',
        }}>
          <span style={{ fontFamily: MONO, fontSize: 12, color: P, letterSpacing: '0.06em', fontWeight: 600 }}>
            What the user sees
          </span>
          <span style={{ marginLeft: 'auto', fontSize: 15, color: P }}>✓</span>
        </div>
      </div>
    </div>
  );
}

function StructureVisual({ active }: { active: boolean }) {
  const nodes = [
    { x: 50,  y: 30,  label: 'Input',    w: 76, h: 36 },
    { x: 168, y: 30,  label: 'Validate', w: 76, h: 36 },
    { x: 110, y: 106, label: 'Process',  w: 76, h: 36 },
    { x: 110, y: 182, label: 'Deliver',  w: 76, h: 36 },
  ];
  const edges = [[0,1],[0,2],[1,2],[2,3]] as [number,number][];
  const cx = (n: typeof nodes[0]) => n.x + n.w / 2;
  const cy = (n: typeof nodes[0]) => n.y + n.h / 2;

  const base: React.CSSProperties = {
    opacity: active ? 1 : 0,
    transform: active ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.6s cubic-bezier(.4,0,.2,1), transform 0.6s cubic-bezier(.4,0,.2,1)',
    position: 'absolute', inset: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    pointerEvents: active ? 'auto' : 'none',
  };

  return (
    <div style={base}>
      <svg width="300" height="256" viewBox="0 0 300 256" fill="none">
        {edges.map(([a, b], i) => (
          <line key={i}
            x1={cx(nodes[a])} y1={cy(nodes[a])}
            x2={cx(nodes[b])} y2={cy(nodes[b])}
            stroke={T2} strokeWidth="1.2" strokeDasharray="4 3"
            style={{ opacity: active ? 0.6 : 0, transition: `opacity 0.4s ${0.25 + i * 0.1}s` }}
          />
        ))}
        {nodes.map((n, i) => {
          const isDeliver = i === 3;
          return (
            <g key={i}>
              <rect
                x={n.x} y={n.y} width={n.w} height={n.h} rx="3"
                fill={isDeliver ? 'rgba(0,109,112,0.06)' : 'none'}
                stroke={isDeliver ? P : T}
                strokeWidth={isDeliver ? 2 : 1.5}
                style={{ opacity: active ? 1 : 0, transition: `opacity 0.4s ${0.15 + i * 0.14}s` }}
              />
              <text
                x={cx(n)} y={cy(n) + 4}
                textAnchor="middle"
                fill={isDeliver ? P : T}
                fontFamily={MONO} fontSize="11" letterSpacing="0.05em"
                style={{ opacity: active ? 1 : 0, transition: `opacity 0.4s ${0.2 + i * 0.14}s` }}
              >{n.label}</text>
            </g>
          );
        })}
        {/* Pulsing live dot on Deliver */}
        <circle cx={cx(nodes[3]) + nodes[3].w / 2 + 10} cy={cy(nodes[3])} r="4" fill={P}
          style={{ opacity: active ? 1 : 0, transition: 'opacity 0.4s 0.9s' }}
        >
          {active && <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />}
        </circle>
      </svg>
    </div>
  );
}

/* ─── Main section ───────────────────────────────────────────────── */

export const HowWeBuildSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [selected, setSelected] = useState<ItemId>('outcome');
  const [hovered,  setHovered]  = useState<ItemId | null>(null);

  return (
    <section id="how-we-build" className="relative py-28 md:py-36 bg-background overflow-hidden" ref={ref}>
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vetkai-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="vetkai-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left ── */}
          <div>
            <motion.span
              className="block text-xs font-bold tracking-[0.35em] uppercase text-vetkai-terracotta mb-3"
              initial={{ opacity: 0, y: -12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              How we build
            </motion.span>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-foreground mb-14 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Systems,<br />not features.
            </motion.h2>

            {/* Interactive list */}
            <div>
              {ITEMS.map((item, i) => {
                const isActive  = selected === item.id;
                const isHovered = hovered  === item.id;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -32 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.3 + i * 0.12 }}
                    onClick={() => setSelected(item.id)}
                    onMouseEnter={() => setHovered(item.id)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      padding: '22px 0',
                      borderBottom: `${isActive ? '2.5px' : '1.5px'} solid ${isActive ? T : 'rgba(200,70,48,0.18)'}`,
                      cursor: 'pointer',
                      position: 'relative',
                      background: isHovered && !isActive ? 'rgba(200,70,48,0.03)' : 'transparent',
                      transition: 'background 0.25s',
                    }}
                  >
                    {/* Number */}
                    <div style={{
                      fontFamily: MONO, fontSize: 11,
                      letterSpacing: '0.18em',
                      color: isActive ? T : P,
                      marginBottom: 5,
                      transition: 'color 0.3s',
                    }}>
                      {item.num}
                    </div>

                    {/* Title */}
                    <div style={{
                      fontFamily: SERIF, fontSize: 19, fontWeight: 600,
                      color: isActive ? T : 'hsl(var(--foreground))',
                      marginBottom: 4,
                      transition: 'color 0.3s',
                    }}>
                      {item.title}
                    </div>

                    {/* Description */}
                    <div style={{
                      fontFamily: SERIF, fontSize: 14, fontWeight: 300,
                      color: 'hsl(var(--foreground) / 0.65)',
                      lineHeight: 1.6,
                    }}>
                      {item.desc}
                    </div>

                    {/* Arrow */}
                    <span style={{
                      position: 'absolute', right: 0, top: '50%',
                      transform: `translateY(-50%) translateX(${isActive ? '0px' : '6px'})`,
                      opacity: isActive ? 1 : 0,
                      color: T,
                      fontSize: 18,
                      transition: 'all 0.3s cubic-bezier(.4,0,.2,1)',
                    }}>→</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── Right ── */}
          <motion.div
            className="lg:pt-16 flex flex-col gap-8"
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {/* Visual stage */}
            <div style={{ position: 'relative', width: '100%', height: 300 }}>
              <OutcomeVisual   active={selected === 'outcome'}   />
              <FrictionVisual  active={selected === 'friction'}  />
              <StructureVisual active={selected === 'structure'} />
            </div>

            {/* Diamond divider */}
            <div style={{
              width: 10, height: 10,
              border: `1.5px solid ${G}`,
              transform: 'rotate(45deg)',
              margin: '0 auto',
              opacity: 0.5,
            }} />

            {/* Quote — fades per item */}
            <div style={{ position: 'relative', minHeight: 80 }}>
              {ITEMS.map(item => (
                <div key={item.id} style={{
                  position: 'absolute', inset: 0,
                  borderLeft: `3.5px solid ${T}`,
                  paddingLeft: 20,
                  opacity: selected === item.id ? 1 : 0,
                  transform: selected === item.id ? 'translateY(0)' : 'translateY(8px)',
                  transition: 'opacity 0.5s cubic-bezier(.4,0,.2,1), transform 0.5s cubic-bezier(.4,0,.2,1)',
                  pointerEvents: selected === item.id ? 'auto' : 'none',
                }}>
                  <p style={{
                    fontFamily: SERIF, fontSize: 16,
                    fontStyle: 'italic',
                    color: 'hsl(var(--foreground) / 0.75)',
                    lineHeight: 1.7,
                  }}>
                    "{QUOTES[item.id]}"
                  </p>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
