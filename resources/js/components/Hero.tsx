import { ArrowRight, Play, Star } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center space-y-8">
          {/* Trust indicators */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">Trusted by 50,000+ students</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
            <span className="block">From Zero to Hero</span>
            <span className="block bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              Transform Your Career
            </span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-medium text-muted-foreground mt-4">
              with Nepal's Most Loved Online Classes
            </span>
          </h1>

          {/* Supporting text */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Join thousands of successful students who transformed their careers with our live interactive classes,
            expert mentorship, and proven placement assistance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
            >
              <span>Join Free Demo Class</span>
              <ArrowRight className={`ml-2 w-5 h-5 transition-transform duration-300 ${
                isHovered ? 'translate-x-1' : ''
              }`} />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>

            <button className="group inline-flex items-center px-6 py-3 text-foreground font-medium hover:text-primary transition-colors duration-200">
              <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-full mr-3 group-hover:bg-primary/10 transition-colors duration-200">
                <Play className="w-5 h-5 ml-0.5" />
              </div>
              <span>Watch Success Stories</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-border">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">50K+</div>
              <div className="text-sm text-muted-foreground">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">200+</div>
              <div className="text-sm text-muted-foreground">Expert Courses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
