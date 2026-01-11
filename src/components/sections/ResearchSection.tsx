import { motion } from 'framer-motion';
import { ScrambleText } from '@/components/ScrambleText';

const PROJECTS = [
  {
    id: 'proj-001',
    title: 'Adaptive Neural Architectures',
    category: 'AI/ML',
    status: 'Active',
    progress: 78,
    description: 'Self-modifying network topologies that evolve based on task complexity and data characteristics.',
  },
  {
    id: 'proj-002',
    title: 'Protein Binding Prediction',
    category: 'Bioinformatics',
    status: 'Active',
    progress: 45,
    description: 'ML-driven prediction of protein-ligand interactions for accelerated drug discovery.',
  },
  {
    id: 'proj-003',
    title: 'Cognitive Load Interface',
    category: 'Human Interface',
    status: 'Research',
    progress: 32,
    description: 'Real-time UI adaptation based on user cognitive state and attention metrics.',
  },
  {
    id: 'proj-004',
    title: 'Quantum-Classical Hybrid',
    category: 'Engineering',
    status: 'Experimental',
    progress: 12,
    description: 'Integration framework for quantum computing resources in classical ML pipelines.',
  },
];

export const ResearchSection = () => {
  return (
    <section className="relative min-h-screen py-32" data-domain="research">
      <div className="vetkai-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="geo-badge mb-8 inline-block">
              <span className="w-2 h-2 bg-vetkai-synapse rounded-full animate-pulse" />
              R&D Division
            </span>
          </motion.div>

          <ScrambleText
            text="EXPERIMENTATION"
            as="h2"
            className="text-5xl md:text-6xl font-bold tracking-tighter mb-6"
            delay={200}
            duration={50}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Active research initiatives pushing the boundaries of computational science. 
            Each project represents a hypothesis tested against reality.
          </motion.p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="research-card p-6 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="data-label">{project.id}</span>
                  <h3 className="text-xl font-semibold mt-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <span className={`geo-badge text-[10px] ${
                  project.status === 'Active' ? 'text-vetkai-synapse border-vetkai-synapse/30' :
                  project.status === 'Experimental' ? 'text-primary border-primary/30' :
                  'text-muted-foreground'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Category */}
              <p className="font-mono text-xs text-primary mb-3">{project.category}</p>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-mono">{project.progress}%</span>
                </div>
                <div className="h-1 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${project.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-primary to-vetkai-synapse"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Data Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 pt-8 border-t border-border/50"
        >
          <div className="flex flex-wrap gap-8 justify-between items-center">
            <p className="data-label">Last Updated: {new Date().toISOString().split('T')[0]}</p>
            <div className="flex gap-8">
              {[
                { label: 'Compute Hours', value: '847K' },
                { label: 'Data Processed', value: '2.4 PB' },
                { label: 'Models Trained', value: '1,247' },
              ].map(stat => (
                <div key={stat.label} className="text-right">
                  <p className="data-label">{stat.label}</p>
                  <p className="font-mono text-lg font-medium">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
