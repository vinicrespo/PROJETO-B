import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Program } from '../config/programs';

interface ProgramSectionProps {
  program: Program;
  index: number;
}

export default function ProgramSection({ program, index }: ProgramSectionProps) {
  const Icon = program.icon;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
      className="mb-12 relative"
    >
      {/* Section Header */}
      <div className="mb-6 border-t border-border pt-8 first:border-0 first:pt-0">
        <div className="flex items-center gap-3 mb-2">
          <div 
            className="p-2.5 rounded-xl shadow-sm bg-white border border-border/50 flex items-center justify-center"
          >
            <Icon className="w-6 h-6" style={{ color: program.accentColor }} />
          </div>
          <h2 className="font-serif text-2xl font-bold text-text-dark">
            {program.name}
          </h2>
        </div>
        <p className="text-text-muted italic pl-14">
          {program.subtitle}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {program.cards.filter(c => c.available).map((card, i) => {
          const CardIcon = card.icon;
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
              className={card.featured ? 'sm:col-span-2 lg:col-span-3' : ''}
            >
              <Link to={card.route} className="block h-full">
                <div 
                  className={`stylo-card h-full transition-all duration-200 hover:scale-[1.02] hover:shadow-lg group relative overflow-hidden ${card.featured ? 'bg-gradient-to-r from-gray-50/50 to-white' : ''}`}
                  style={{ borderTop: `3px solid ${program.accentColor}` }}
                >
                  
                  {/* Subtle background glow effect for featured cards based on accent color */}
                  {card.featured && (
                    <div 
                      className="absolute inset-0 opacity-5" 
                      style={{ background: `linear-gradient(to right, ${program.accentColor}, transparent)` }} 
                    />
                  )}

                  <div className="flex items-start gap-4 relative z-10">
                    <div className={`p-3 rounded-xl transition-colors ${card.featured ? 'bg-white shadow-sm border border-border/50' : 'bg-gray-50 group-hover:bg-gray-100'}`}>
                      <CardIcon 
                        className={`w-6 h-6 transition-colors`} 
                        style={card.featured ? { color: program.accentColor } : { color: '#6B7280' }} // gray-500 equivalent
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
                        <h3 className="font-serif text-lg font-bold text-text-dark pr-2">{card.title}</h3>
                        
                        {/* Dynamic Program Badge */}
                        <div 
                          className="px-2 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap mt-0.5"
                          style={{ 
                            backgroundColor: `${program.accentColor}15`, // 15% opacity
                            color: program.accentColor,
                            border: `1px solid ${program.accentColor}30` 
                          }}
                        >
                          {program.badge}
                        </div>
                      </div>

                      {card.badge && (
                        <div className="mb-2">
                           <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${card.badgeColor === 'gold' ? 'bg-amber-100 text-amber-700' : card.badgeColor === 'green' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                             {card.badge}
                           </span>
                        </div>
                      )}
                      
                      <p className="text-text-muted text-sm leading-relaxed">{card.description}</p>
                    </div>
                    
                    <div className="flex-shrink-0 flex items-center justify-center h-full mt-2">
                      <ArrowRight 
                        className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                        style={{ color: program.accentColor }} 
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
