import { features } from '@/data/homepage';
import { Video, Users, TrendingUp, Infinity, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const iconMap = {
  video: Video,
  users: Users,
  'trending-up': TrendingUp,
  infinity: Infinity,
};

export default function Features() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-16">
          {/* Section header */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Why Choose <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Knowledge Heist?
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Experience the perfect blend of expert teaching, cutting-edge technology, and personalized support
              that makes learning engaging and effective.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              const isHovered = hoveredFeature === feature.id;

              return (
                <div
                  key={feature.id}
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className="group relative p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
                >
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} text-white transition-transform duration-300 ${
                      isHovered ? 'scale-110 rotate-3' : ''
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Learn more link */}
                    <div className={`flex items-center text-primary font-medium transition-all duration-300 ${
                      isHovered ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-0'
                    }`}>
                      <span className="text-sm">Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>

                  {/* Hover effect border */}
                  <div className={`absolute inset-0 rounded-2xl border-2 border-primary transition-opacity duration-300 ${
                    isHovered ? 'opacity-20' : 'opacity-0'
                  }`}></div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-8">
            <button className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25">
              <span>Explore All Features</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
